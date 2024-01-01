import { RECEIVE_POLLS, ANSWER_POLL, ADD_POLL } from "../actions/polls";

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      };
    case ANSWER_POLL:
      const { qid, answer, authedUser } = action;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    case ADD_POLL:
      const { poll } = action;
      return {
        ...state,
        [poll.id]: poll,
      };
    default:
      return state;
  }
}
