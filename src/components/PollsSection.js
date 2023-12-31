import { connect } from "react-redux";
import Poll from "./Poll";

const PollsSection = (props) => {
  const { type } = props;
  return (
    <div className="bg-gray-100 py-8">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {props.pollIds.map((id) => (
            <Poll key={id} id={id} typeFilter={type} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ polls }) => ({
  pollIds: Object.keys(polls).sort(
    (a, b) => (polls[b].timestamp = polls[a].timestamp)
  ),
});

export default connect(mapStateToProps)(PollsSection);
