export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatPoll(poll, author, authedUser) {
  const { id, timestamp } = poll;
  const { name, avatarURL } = author;

  const allVotes = poll.optionOne.votes.concat(poll.optionTwo.votes);
  const hasVoted = allVotes.includes(authedUser);

  return {
    name,
    id,
    timestamp,
    avatar: avatarURL,
    votes: allVotes.length,
    hasVoted,
    type: hasVoted ? "done" : "new",
    options: [poll.optionOne, poll.optionTwo],
  };
}
