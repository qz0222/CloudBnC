# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` - create new user
- `PATCH /api/users` - edit user profile

### Session

- `POST /api/session` - log in
- `DELETE /api/session` - log out

### Cities

- `GET /api/cities`
  - cities/search
  - accepts `destination_name` query param to fetch cities by name
- `POST /api/cities`
- `GET /api/cities/:id`
- `PATCH /api/cities/:id`
- `DELETE /api/cities/:id`

### Rooms

- `GET /api/rooms`
  - rooms index/search
  - accepts `price` and `start_time`, `end_time` query params to fetch available rooms
- `GET /api/rooms/:id`

### Bookings

- `GET api/bookings` - all bookings
- `POST api/bookings` - new booking
- `DELETE api/bookings/:id` - cancel booking


### Reviews

- `GET /api/reviews`
- `POST /api/reviews`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`
