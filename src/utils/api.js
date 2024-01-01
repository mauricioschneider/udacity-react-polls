import { _getUsers, _getQuestions, _saveQuestionAnswer } from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(([users, polls]) => ({
    users,
    polls,
  }));
}

export function saveQuestionAnswer(info) {
  // info = { authedUser, qid, answer }
  return _saveQuestionAnswer(info);
}
