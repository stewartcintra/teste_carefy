import produce from 'immer';

const INITIAL_STATE = {
  tasks: [],
};

export default function tasks(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@tasks/TASK_ADD': {
        draft.tasks.push(action.payload.data);
        break;
      }
      case '@tasks/TASK_REMOVE': {
        const taskIndex = draft.tasks.findIndex(
          (i) => i.id === action.payload.id,
        );

        if (taskIndex >= 0) {
          draft.tasks.splice(taskIndex, 1);
        }
        break;
      }
      default:
    }
  });
}
