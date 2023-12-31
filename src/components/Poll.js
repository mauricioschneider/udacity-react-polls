import { connect } from "react-redux";

import { EyeIcon } from "@heroicons/react/20/solid";
import { formatPoll } from "../utils/helpers";

const Poll = (props) => {
  const { poll } = props;
  return (
    <li
      key={poll.id}
      className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
    >
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">
              {poll.name}
            </h3>
            <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {poll.timestamp}
            </span>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">{poll.title}</p>
        </div>
        <img
          className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          src={poll.avatarURL}
          alt=""
        />
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a
              href={`mailto:${poll.email}`}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              Show
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = ({ users, polls }, { id }) => {
  const poll = polls[id];
  const author = users[poll.author];

  return {
    poll: poll ? formatPoll(poll, author) : null,
  };
};

export default connect(mapStateToProps)(Poll);
