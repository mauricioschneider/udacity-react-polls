import { useState } from "react";
import { connect } from "react-redux";
import PollsSection from "./PollsSection";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  const [type, setType] = useState("new");

  const handleTypeSwitch = (e) => {
    e.preventDefault();

    setType(e.target.value);
  };
  return (
    <div className="min-h-full">
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 p-4 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                All Polls
              </h2>
            </div>
            <small className="">Filter:</small>
            <div className="mt-4 flex md:ml-4 md:mt-0">
              <button
                type="button"
                onClick={handleTypeSwitch}
                value="new"
                className={classNames(
                  type === "new"
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    : "bg-white hover:bg-gray-50",
                  "inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                )}
              >
                New Questions
              </button>
              <button
                type="button"
                onClick={handleTypeSwitch}
                value="done"
                className={classNames(
                  type === "done"
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    : "bg-white hover:bg-gray-50",
                  "ml-3 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                )}
              >
                Done
              </button>
            </div>
          </div>

          <PollsSection type={type} />
        </div>
      </main>
    </div>
  );
};

export default connect()(Dashboard);
