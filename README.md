# CloudBnC

CloudBnC is an Airbnb inspired web application created by Zheng Qian, built using Ruby on Rails on the backend, a PostgresSQL database, and React/Redux framework on the frontend.

[Live Here][live]

[live]: http://cloudbnc.herokuapp.com



## Features

### Authentication
  * Session is authenticated in the backend. All queries return data that corresponds to the proper user.
  * User can sign up and log in from any page in the app.

User Log In and Sign Up are handled by a modal that will pop up should the user interact with the Header component.

In order to make sure that all user information is kept safe. Passwords are never actually stored in the database. When a user signs up, their password is salted and put through a hashing function from the BCrypt library 10 times. Only the result of that hashing function as well as the added salt is saved in the database as a password digest. When the user tries to log in again, that whole process must be repeated and they will only be authenticated if the result of the hashing function matches the password digest that is associated with their email.

```
def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end
```

### Rooms
* Create Room
  * User can create listings to rent out their rooms.


On the backend, rooms are stored in the database with columns for id, user_id(owner), latitude, longitude, price, picture_url, bedrooms, beds, bathrooms, guests, room_type, property_type, listing_type, start_date and end_date.

Rooms are rendered at / in the RoomIndexItem component. Here they show their image, price, No. of beds, and location and are link to the RoomShow component.

* Book Room
  * User can book rooms in different cities.

Users can book room by making bookings which are stored in the database. Bookings have columns for user_id, room_id, start_date, and end_date. Bookings are restricted by their availability based on office and dates booked.

Bookings are rendered at /bookings, logged in user can view and cancel their bookings.

* Reviews on Rooms
  * User can post reviews for different listings.

In the RoomShow component, rooms are rendered listing all information about the rooms, including reviews.

* Search Rooms
  * User can search for rooms according to their needs.

* Google map Integration
  * Search process includes google map interaction which can create and remove markers based on search parameters.

Search bars allow for location, check-in and check-out date entry as well as number of guests. When the search form is submitted on the home page, users are redirected to the search page where their filtered results are available.

At /homes, a google map is rendered with markers for each spot whose coordinates lie within the bounds of the map. The map actively filters the rendered spots as the map is moved or zoomed.


## Code Guide

If you'd like to take a closer look at the code behind the CloudBnC App, the best folders to look in are:
* [cloud_bnb.jsx](./frontend/cloud_bnb.jsx)
* [React components](./frontend/components)
  * [App](./frontend/components/app.jsx)
* [Rails controllers](./app/controllers/api)
* [Store](./frontend/store/store.js)
* [Api Util](./frontend/util/)
* [DB Schema](./db/schema.rb)
* [Rails Routes](./config/routes.rb)


## Languages, Frameworks, Libraries, Etc.

* Ruby on Rails
* Javascript
* PostgreSQL
* React
* Redux
* Google Map API
* Gems
  * Jbuilder
  * BCrypt

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project. The next steps for CloudBnC are outlined below.

### Direct Messaging

Allow users to send direct messages to the owner of each room.

### Responsive Grid System
