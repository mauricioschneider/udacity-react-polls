import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const ANSWER_POLL = "ANSWER_POLL";
export const ADD_POLL = "ADD_POLL";

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
}

function answerPoll({ qid, answer, authedUser }) {
  return {
    type: ANSWER_POLL,
    qid,
    answer,
    authedUser,
  };
}

export function handleAnswerPoll(info) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const { qid, answer } = info;

    dispatch(showLoading());
    dispatch(answerPoll({ qid, answer, authedUser }));

    return saveQuestionAnswer({
      qid,
      answer,
      authedUser,
    }).then(() => {
      dispatch(hideLoading());
    });
  };
}

function addPoll(poll) {
  console.log(`addPoll: `, poll);
  return {
    type: ADD_POLL,
    poll,
  };
}

export function handleAddPoll(newPoll) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText: newPoll.optionOneText,
      optionTwoText: newPoll.optionTwoText,
      author: authedUser,
    })
      .then((poll) => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()));
  };
}
