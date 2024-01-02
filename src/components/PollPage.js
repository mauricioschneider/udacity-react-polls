import { connect } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
  redirect,
} from "react-router-dom";
import { CheckIcon } from "@heroicons/react/20/solid";

import { formatDate, formatPoll } from "../utils/helpers";
import { handleAnswerPoll } from "../actions/polls";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollPage = (props) => {
  const { dispatch, poll, authedUser } = props;

  if (!poll) {
    return redirect("/404");
  }

  const handleVote = (e) => {
    e.preventDefault();

    const answer = e.target.value;

    dispatch(
      handleAnswerPoll({
        qid: poll.id,
        answer,
        authedUser,
      })
    );
  };

  return (
    <div className="min-h-full">
      <main>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
            <div className="flex items-center gap-x-6">
              <img
                src={poll.avatar}
                alt=""
                className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
              />
              <h1>
                <div className="text-sm leading-6 text-gray-500">
                  Created at
                  <span className="text-gray-700">
                    {` ${formatDate(poll.timestamp)}`}
                  </span>
                </div>
                <div className="mt-1 text-base font-semibold leading-6 text-gray-900">
                  Poll by {poll.name}
                </div>
              </h1>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Would You Rather
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Choose an answer carefully. You won't be able to modify your answer
            once you vote.
          </p>
        </div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="isolate container mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-2xl xl:mx-0 xl:max-w-none xl:grid-cols-2">
            {poll.options.map((option, index) => (
              <div
                key={`poll-option-${index}`}
                className={classNames(
                  option.votes.includes(authedUser)
                    ? "ring-2 ring-indigo-600"
                    : "ring-1 ring-gray-200",
                  "rounded-3xl p-8 flex flex-col items-start"
                )}
              >
                <h2
                  className={classNames(
                    option.votes.includes(authedUser)
                      ? "text-indigo-600"
                      : "text-gray-900",
                    "text-lg font-semibold leading-8"
                  )}
                >
                  {`Option ${index + 1}`}
                </h2>
                <p className="mb-auto text-sm leading-6 text-gray-600 poll-text">
                  {option.text}
                </p>
                {!poll.hasVoted && (
                  <button
                    onClick={handleVote}
                    value={index === 0 ? "optionOne" : "optionTwo"}
                    disabled={poll.hasVoted}
                    className={classNames(
                      option.votes.includes(authedUser)
                        ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                        : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                      "mb-auto mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    )}
                  >
                    {poll.hasVoted ? "Vote casted" : "Cast vote"}
                  </button>
                )}
                {poll.hasVoted && (
                  <div className="mb-auto">
                    {option.votes.length > 0 && (
                      <>
                        <h5 className="mt-4 p-2 font-semibold text-gray-900">
                          Votes
                        </h5>
                        <ul className=" space-y-3 text-sm leading-6 text-gray-600">
                          {option.votes.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                              <CheckIcon
                                className="h-6 w-5 flex-none text-indigo-600"
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    <p className="mt-4 text-xs">
                      {((option.votes.length / poll.votes) * 100).toFixed(2)} %
                      of votes
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = ({ polls, users, authedUser }, props) => {
  const { id } = props.router.params;
  const poll = polls[id];

  const author = poll ? users[poll.author] : null;
  return {
    poll: poll ? formatPoll(poll, author, authedUser) : null,
    authedUser,
  };
};

export default withRouter(connect(mapStateToProps)(PollPage));
