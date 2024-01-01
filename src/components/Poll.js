import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { EyeIcon } from "@heroicons/react/20/solid";
import { formatPoll, formatDate } from "../utils/helpers";

const Poll = (props) => {
  const { poll } = props;

  if (!poll) return;

  return (
    <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">
              {poll.name}
            </h3>
            <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Votes: {poll.votes}
            </span>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">
            {formatDate(poll.timestamp)}
          </p>
        </div>
        <img
          className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          src={poll.avatar}
          alt=""
        />
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <Link
              to={`/questions/${poll.id}`}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              Show
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = ({ users, polls, authedUser }, { id, typeFilter }) => {
  const poll = polls[id];
  const author = users[poll.author];

  let formattedPoll = poll ? formatPoll(poll, author, authedUser) : null;

  if (formattedPoll && formattedPoll.type !== typeFilter) {
    formattedPoll = null;
  }

  return {
    poll: formattedPoll,
  };
};

export default connect(mapStateToProps)(Poll);
