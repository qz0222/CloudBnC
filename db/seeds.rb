# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(email:"guest@sample.com",password:"password12345",f_name:"Tom",l_name:"Hanks",birthday:"2017-01-01")
User.create(email:"test@sample.com",password:"password12345",f_name:"哈哈",l_name:"嘿嘿",birthday:"2017-01-01")


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
picture_url:"http://res.cloudinary.com/qz0222/image/upload/v1493158026/Times-Square-Day-Time_kcr4jg.jpg"
)

User.find_by_email("guest@sample.com").rooms.create(
room_type:"Entire place",
guests:2,
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
lat:40.7829,
lng:-73.9654,
picture_url:"http://res.cloudinary.com/qz0222/image/upload/v1493160047/2558_200_z_beziy5.jpg"
)

User.find_by_email("guest@sample.com").rooms.create(
room_type:"Entire place",
guests:2,
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
lat:41,
lng:-72,
picture_url:"http://res.cloudinary.com/qz0222/image/upload/v1493160046/Corner_room_rirr8b.jpg"
)

User.find_by_email("guest@sample.com").rooms.create(
room_type:"Entire place",
guests:3,
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
lat:42,
lng:-72,
picture_url:"http://res.cloudinary.com/qz0222/image/upload/v1493160048/hotel-majestic-prague-double-room-01_m0epm4.jpg"
)


User.find_by_email("test@sample.com").bookings.create(
room_id:1,
booking_start:'2017-05-02',
booking_end:'2017-05-10'
)
