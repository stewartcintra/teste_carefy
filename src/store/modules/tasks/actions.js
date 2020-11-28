export function tasksAdd(data) {
  return {
    type: '@tasks/TASK_ADD',
    payload: {data},
  };
}

export function tasksRemove(id) {
  return {
    type: '@tasks/TASK_REMOVE',
    payload: {id},
  };
}
