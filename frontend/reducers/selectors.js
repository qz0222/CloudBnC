
export const allRooms = ({ rooms }) => Object.keys(rooms).map(id => rooms[id]);

export const stepsByTodoId = ({ steps }, room_id) => {
  const stepsByTodoId = [];
  Object.keys(steps).forEach(stepId => {
    const step = steps[stepId];
    if (steps[stepId].room_id === room_id) stepsByTodoId.push(step)
  })
  return stepsByTodoId;
};
