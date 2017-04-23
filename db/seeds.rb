# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(email:"guest@sample.com",password:"password12345",f_name:"Tom",l_name:"Hanks",birthday:"2017-01-01")



User.find_by_email("guest@sample.com").rooms.create(name:"small house",price:"8000", lat:10, lng:10, bedrooms:"10", beds:"11", room_type:"i dont know", property_type:"test test")
User.find_by_email("guest@sample.com").rooms.create(name:"big house",price:"90030", lat:10, lng:10.5, bedrooms:"102", beds:"900", room_type:"i dont know agian", property_type:"test test2")
