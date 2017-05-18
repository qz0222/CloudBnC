# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Cloudinary::Api.delete_resources_by_prefix('seedimages')



User.create(email:"guest@sample.com",password:"password12345",f_name:"Tom",l_name:"Hanks",birthday:"2017-01-01")
User.create(email:"test@sample.com",password:"password12345",f_name:"Mimi",l_name:"Mi",birthday:"2017-01-01")
User.create(email:"third@sample.com",password:"password12345",f_name:"Rodrigo",l_name:"Go",birthday:"2017-01-01")


User.find_by_email("guest@sample.com").rooms.create(
room_type:"Private room",

guests:1,
property_type:"Apartment",
listing_type:"Home",
personal_belongings:"false",
bedrooms:1,
beds:1,
bathrooms:1,
name:"A Roomy Room in Times Square",
price:"85",
lat:40.7589,
lng:-73.9851,
start_date:'2017-05-01',
end_date:'2017-06-01',
picture_url: Cloudinary::Uploader.upload('public/seed_images/001.jpg', :public_id => 'seedimages_001')['secure_url']
)

User.find_by_email("guest@sample.com").rooms.create(
room_type:"Entire place",
guests:1,
property_type:"Apartment",

listing_type:"Home",
personal_belongings:"false",
bedrooms:1,
beds:2,
bathrooms:1,
start_date:'2017-04-21',
end_date:'2018-06-01',
name:"Modern Columbus Circle BunkBed Room (Washer Dryer)",
price:"89",
lat:40.74531559999999,
lng:-73.99400070000002,
picture_url: Cloudinary::Uploader.upload('public/seed_images/002.jpg', :public_id => 'seedimages_002')['secure_url']
)

User.find_by_email("guest@sample.com").rooms.create(
room_type:"Entire place",
guests:1,
property_type:"Apartment",

listing_type:"Home",
personal_belongings:"false",
bedrooms:1,
beds:2,
bathrooms:1,
start_date:'2017-10-01',
end_date:'2017-12-01',
name:"Stylish 1 Bedroom w/terrace perfect location",
price:"199",
lat:40.7386494,
lng:-74.00929400000001,
picture_url: Cloudinary::Uploader.upload('public/seed_images/003.jpg', :public_id => 'seedimages_003')['secure_url']
)

User.find_by_email("guest@sample.com").rooms.create(
room_type:"Entire place",
guests:1,
property_type:"Apartment",

listing_type:"Home",
personal_belongings:"false",
bedrooms:10,
beds:3,
bathrooms:0.5,
start_date:'2016-05-01',
end_date:'2018-06-01',
name:"Comfortable 2 Bedroom APT",
price:"190",
lat:40.7262059,
lng:-73.98362120000002,
picture_url: Cloudinary::Uploader.upload('public/seed_images/004.jpg', :public_id => 'seedimages_004')['secure_url']
)


User.find_by_email("test@sample.com").rooms.create(
room_type:"Private room",

guests:2,
property_type:"Apartment",
listing_type:"Home",
personal_belongings:"false",
bedrooms:2,
beds:2,
bathrooms:2,
name:"Clean cozy room :-)",
price:"33",
lat:40.7041001,
lng:-74.00837280000002,
start_date:'2017-05-01',
end_date:'2019-06-01',
picture_url: Cloudinary::Uploader.upload('public/seed_images/005.jpg', :public_id => 'seedimages_005')['secure_url']
)


User.find_by_email("test@sample.com").rooms.create(
room_type:"Private room",

guests:2,
property_type:"Apartment",
listing_type:"Home",
personal_belongings:"false",
bedrooms:2,
beds:2,
bathrooms:2,
name:"Beautiful Bed-Stuy Room",
price:"33",
lat:40.74142380000001,
lng:-73.99965399999996,
start_date:'2017-05-01',
end_date:'2018-06-01',
picture_url: Cloudinary::Uploader.upload('public/seed_images/006.jpg', :public_id => 'seedimages_006')['secure_url']
)


User.find_by_email("test@sample.com").rooms.create(
room_type:"Private room",

guests:2,
property_type:"Apartment",
listing_type:"Home",
personal_belongings:"false",
bedrooms:2,
beds:2,
bathrooms:2,
name:"Clean cozy room :-)",
price:"33",
lat:40.715475,
lng:-74.00890900000002,
start_date:'2017-05-01',
end_date:'2017-06-01',
picture_url: Cloudinary::Uploader.upload('public/seed_images/007.jpg', :public_id => 'seedimages_007')['secure_url']
)


User.find_by_email("test@sample.com").rooms.create(
room_type:"Private room",

guests:3,
property_type:"Apartment",
listing_type:"Home",
personal_belongings:"false",
bedrooms:2,
beds:2,
bathrooms:2,
name:"Delightful, Cozy and Convenient Room",
price:"33",
lat:40.7123425,
lng:-73.9821844,
start_date:'2017-05-01',
end_date:'2018-06-01',
picture_url: Cloudinary::Uploader.upload('public/seed_images/008.jpg', :public_id => 'seedimages_008')['secure_url']
)



User.find_by_email("test@sample.com").rooms.create(
room_type:"Private room",

guests:4,
property_type:"Apartment",
listing_type:"Home",
personal_belongings:"false",
bedrooms:2,
beds:2,
bathrooms:2,
name:"Clean cozy room :-)",
price:"33",
lat:40.71015,
lng:-73.99040300000001,
start_date:'2017-05-01',
end_date:'2018-06-01',
picture_url: Cloudinary::Uploader.upload('public/seed_images/009.jpg', :public_id => 'seedimages_009')['secure_url']
)



User.find_by_email("test@sample.com").rooms.create(
room_type:"Private room",

guests:5,
property_type:"Apartment",
listing_type:"Home",
personal_belongings:"false",
bedrooms:2,
beds:2,
bathrooms:2,
name:"Clean cozy room :-)",
price:"33",
lat:40.72376330000001,
lng:-73.99982940000001,
start_date:'2017-05-01',
end_date:'2018-06-01',
picture_url: Cloudinary::Uploader.upload('public/seed_images/010.jpg', :public_id => 'seedimages_010')['secure_url']
)



User.find_by_email("guest@sample.com").rooms.create(
room_type:"Entire place",
guests:6,
property_type:"Apartment",

listing_type:"Home",
personal_belongings:"false",
bedrooms:1,
beds:2,
bathrooms:1,
start_date:'2017-10-01',
end_date:'2017-12-01',
name:"Stylish 1 Bedroom w/terrace perfect location",
price:"199",
lat:40.7635569,
lng:-73.972309,
picture_url: Cloudinary::Uploader.upload('public/seed_images/011.jpg', :public_id => 'seedimages_011')['secure_url']
)
