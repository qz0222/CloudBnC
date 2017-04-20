```js
{
  session: {
    currentUser: {
      id: 1,
      email: "zheng@gmail.com"
    },
    errors: [],  
  },

  rooms: {
    1: {
      id: 1,
      price: 200,
      image_url: "house1.jpg",
      lat: 50,
      long: 32,
      description:"small house",
      bedrooms: 1,
      beds: 2,
      bathrooms: 1,
      homeType: "apartment"
      rating: 1,
      reviews: [
        {
          id: 1,
          parent_id: null,
          author: "Phillip",
          body: "nice room"
        },
        {
          id: 2,
          parent_id: 1,
          author: "Zheng",
          body: "thank you"
        }]
    }
    2 : {
      id: 2,
      price: 5000,
      image_url: "house2.jpg",
      location: [50,32],
      description:"small house",
      bedrooms: 1,
      beds: 2,
      bathrooms: 1,
      homeType: "apartment"
      rating: 1,
      reviews: [{
        id: 3
        parent_id: null,
        author: "Tommy",
        body: "Too expensive"
      }]
    }
  },

  bookings: {
    1: {
      id: 1,
      room_id: 2,
      start_date: '2017-05-01',
      end_date: '2018-05-01',
      party_size: 5
    },
    2: {
      id: 2,
      room_id: 5,
      start_date: '2017-05-19',
      end_date: '2017-05-20',
      party_size: 5
    }
  }
}
```
