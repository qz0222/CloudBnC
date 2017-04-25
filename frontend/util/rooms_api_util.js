
export const fetchRooms = (filters) => {
  return $.ajax({
    method: "GET",
    url: "/api/rooms",
    data:{filters}
  });
};

export const fetchMyRooms = () => {
  return $.ajax({
    method: "GET",
    url: "/api/myrooms",
  });
};

export const fetchRoom = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/rooms/${id}`
  });
};

export const createRoom = (room) => {
  return $.ajax({
    method: "POST",
    url: "/api/rooms",
    data: { room }
  });
};

export const updateRoom = (room) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/rooms/${id}`,
    data: { room }
  });
};

export const deleteRoom = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/rooms/${id}`
  });
};
