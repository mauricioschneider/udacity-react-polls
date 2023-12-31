import Nav from "./Nav";
import PollsPage from "./PollsPage";

function App() {
  return (
    <>
      <Nav />
      <div className="min-h-full">
        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  New Questions
                </h3>
              </div>
              <div className="bg-gray-100 py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <PollsPage />
                </div>
              </div>

              <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Done
                </h3>
              </div>
              <div className="bg-gray-100 py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <PollsPage />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
