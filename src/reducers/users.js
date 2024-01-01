import { RECEIVE_USERS, SAVE_POLL, SAVE_ANSWER } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_POLL:
      const poll = action.poll;
      return {
        ...state,
        [poll.author]: {
          ...state[poll.author],
          questions: state[poll.author].questions.concat([poll.id]),
        },
      };
    case SAVE_ANSWER:
      const { qid, answer, authedUser } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: { ...state[authedUser].answers, [qid]: answer },
        },
      };
    default:
      return state;
  }
}
