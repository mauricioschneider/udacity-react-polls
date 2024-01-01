import { connect } from "react-redux";

const Leaderboard = (props) => {
  const { leaderboard } = props;

  return (
    <div className="min-h-full">
      <main>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Leaderboard
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <ul className="divide-y divide-gray-100">
            {leaderboard.map((person) => (
              <li key={person.id} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={person.avatarURL}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {person.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      Answered Polls: {Object.keys(person.answers).length} -
                      Created Polls: {person.questions.length}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    Total Score: {person.totalScore}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  // Create deep copy of users object and convert to array
  const leaderboard = Object.values(JSON.parse(JSON.stringify(users)));

  leaderboard.map(
    (user) =>
      (user.totalScore =
        user.questions.length + Object.keys(user.answers).length)
  );
  return {
    leaderboard: leaderboard.sort((a, b) => b.totalScore - a.totalScore),
  };
};

export default connect(mapStateToProps)(Leaderboard);
