json.extract! room,
:id,
:name,
:user_id,
:price,
:lat,
:lng,
:bedrooms,
:beds,
:guests,
:room_type,
:property_type,
:created_at,
:updated_at,
:bathrooms,
:listing_type,
:bathrooms,
:personal_belongings,
:picture_url


json.extract! room.user, :f_name



json.reviews room.reviews do |review|

    json.extract! review.author, :f_name
    json.extract! review, :id, :body, :created_at, :rating, :room_id

end
