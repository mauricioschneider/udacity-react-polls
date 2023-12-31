import { connect } from "react-redux";
import PollsSection from "./PollsSection";

const Dashboard = () => {
  return (
    <div className="min-h-full">
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              New Questions
            </h3>
          </div>

          <PollsSection />

          <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Done
            </h3>
          </div>

          <PollsSection />
        </div>
      </main>
    </div>
  );
};

export default connect()(Dashboard);
