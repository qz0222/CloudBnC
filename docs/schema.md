# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
f_name          | string    | not null, indexed
l_name          | string    | not null, indexed
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
description     | text      |


## rooms
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed
city        | string   | not null
location (longitude/latitude)   | array   | not null
name       | string    | not null
description       | text    | not null
price       | string    | not null
bedrooms       | string    | not null
beds       | Integer    | not null
bathrooms       | Integer    | not null
roomType      | string    | not null
propertyType      | string    | not null
star_rating      | decimal    | not null
picture_url      | string   | not null
amenities | text    |


## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
parent_id          | integer   | foreign key
user_id       | integer    | not null,  foreign key, indexed
room_id       | integer    | not null,  foreign key, indexed


## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id       | integer    | not null,  foreign key, indexed
room_id       | integer    | not null,  foreign key, indexed
start_time       | date    | not null
end_time         | date    | not null
party_size      | integer    | not null
