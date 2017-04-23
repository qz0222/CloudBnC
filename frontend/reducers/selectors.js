
export const allRooms = ({ rooms }) => Object.keys(rooms).map(id => rooms[id]);

export const selectRoom = ({ rooms}, id) => {
   const room = rooms[id] || {};
   return room
}
