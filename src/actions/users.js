export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const SAVE_POLL = "SAVE_POLL";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function savePoll(poll) {
  return {
    type: SAVE_POLL,
    poll,
  };
}

export function saveAnswer({ qid, answer, authedUser }) {
  return {
    type: SAVE_ANSWER,
    qid,
    answer,
    authedUser,
  };
}
