import { _getUsers, _getPolls } from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getPolls()]).then(([users, polls]) => ({
    users,
    polls,
  }));
}
