# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170427150537) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "room_id",    null: false
    t.text     "body",       null: false
    t.float    "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rooms", force: :cascade do |t|
    t.integer  "user_id",             null: false
    t.string   "city"
    t.float    "lng"
    t.float    "lat"
    t.text     "description"
    t.integer  "price",               null: false
    t.integer  "bedrooms",            null: false
    t.integer  "beds",                null: false
    t.string   "room_type",           null: false
    t.string   "property_type",       null: false
    t.float    "star_rating"
    t.string   "picture_url"
    t.text     "amenities"
    t.string   "name"
    t.integer  "guests"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "bathrooms"
    t.string   "listing_type"
    t.string   "personal_belongings"
  end

  add_index "rooms", ["bedrooms"], name: "index_rooms_on_bedrooms", using: :btree
  add_index "rooms", ["beds"], name: "index_rooms_on_beds", using: :btree
  add_index "rooms", ["price"], name: "index_rooms_on_price", using: :btree
  add_index "rooms", ["property_type"], name: "index_rooms_on_property_type", using: :btree
  add_index "rooms", ["room_type"], name: "index_rooms_on_room_type", using: :btree
  add_index "rooms", ["user_id"], name: "index_rooms_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.date     "birthday"
    t.string   "f_name"
    t.string   "l_name"
    t.text     "description"
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
