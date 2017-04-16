component hierarchy

## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - Home
    - Contains background picture...
    - NavContainer

**NavContainer**
  - Nav
    - Contains Logo, Log In/ Sign Up/ Log Out buttons

**SearchingContainer**
  - SearchForm
    - Contains Input box for Where, When, # of Guests
    - Contains Search button

**DestinationsContainer**
  - Destination
    - List of cities (link to DestinationItemContainer)

**DestinationItemContainer**
  - DestinationItem
    - list of rooms (link to RoomDetailContainer) in this city

**RoomDetailContainer**
  - Room
    - Room Name
    - Room Price
    - Room Pictures
    - Room description
    - Children: BookingFormContainer

**BookingFormContainer**
  - BookingForm
    - input for start/end date
    - input for party size
    - submit button

**BookingsContainer**
  - Bookings
    - list of BookingItems
  - BookingDetail


**SearchResultsContainer**
  - SearchResult

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "HomeContainer"|
| "/signup" | "AuthFormContainer" |
| "/signin" | "AuthFormContainer" |
| "/users/:userId" | "UserProfileContainer" |
| "/cities" | "DestinationsContainer" |
| "/cities/:cityId" | "DestinationItemContainer" |
| "/rooms/:roomId" | "RoomsDetailContainer" |
| "/search-results" | "SearchResultsContainer" |
