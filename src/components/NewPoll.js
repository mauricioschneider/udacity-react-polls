import { useState } from "react";
import { Link } from "react-router-dom";

const NewPoll = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChange = (e) => {
    const text = e.target.value;

    if (e.target.name === "optionOne") {
      setOptionOne(text);
    } else {
      setOptionTwo(text);
    }

    if (optionOne.length > 0 && optionTwo.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <div className="min-h-full">
      <main>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
            <form>
              <div className="space-y-12">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                  <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      New Poll
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Create a new poll to share with your co-workers.
                    </p>
                  </div>

                  <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                    <div className="col-span-full">
                      <label
                        htmlFor="optionOne"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Option 1
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="optionOne"
                          name="optionOne"
                          value={optionOne}
                          onChange={handleChange}
                          rows={3}
                          className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="optionTwo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Option 2
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="optionTwo"
                          name="optionTwo"
                          value={optionTwo}
                          onChange={handleChange}
                          rows={3}
                          className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link
                  to="/"
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </Link>
                <button
                  disabled={isEmpty}
                  type="submit"
                  className="disabled:text-slate-500 disabled:border-slate-200 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewPoll;
