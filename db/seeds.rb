# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(email:"guest@sample.com",password:"password12345",f_name:"Tom",l_name:"Hanks",birthday:"2017-01-01")



User.find_by_email("guest@sample.com").rooms.create(
room_type:"Entire place",
guests:1,
property_type:"Apartment",
listing_type:"Home",
personal_belongings:"false",
bedrooms:10,
beds:11,
bathrooms:0.5,
name:"small house1",
price:"8000",
lat:10,
lng:10,
)

User.find_by_email("guest@sample.com").rooms.create(
room_type:"Entire place",
guests:1,
property_type:"Apartment",
listing_type:"Home",
personal_belongings:"false",
bedrooms:10,
beds:11,
bathrooms:0.5,
name:"small house2",
price:"8000",
lat:10.1,
lng:10.1,
)

User.find_by_email("guest@sample.com").rooms.create(
room_type:"Entire place",
guests:1,
property_type:"Apartment",
listing_type:"Home",
personal_belongings:"false",
bedrooms:10,
beds:11,
bathrooms:0.5,
name:"small house3",
price:"8000",
lat:10.2,
lng:10.2,
)

User.find_by_email("guest@sample.com").rooms.create(
room_type:"Entire place",
guests:1,
property_type:"Apartment",
listing_type:"Home",
personal_belongings:"false",
bedrooms:10,
beds:11,
bathrooms:0.5,
name:"small house4",
price:"8000",
lat:10.3,
lng:10.3,
)
