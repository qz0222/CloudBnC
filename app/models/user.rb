# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  birthday        :date
#  f_name          :string
#  l_name          :string
#  description     :text
#

class User < ActiveRecord::Base
  validates :email, :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :email, uniqueness: true
  after_initialize :ensure_session_token

  has_many :rooms,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Room'

  has_many :reviews,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Review"

  has_many :bookings,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Booking"

  has_many :bookedrooms,
    through: :bookings,
    source: :room

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.valid_password?(password) ? user : nil
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
