export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatPoll(poll, author) {
  const { id, timestamp } = poll;
  const { name, avatarURL } = author;

  const votes = poll.optionOne.votes.length + poll.optionTwo.votes.length;

  return {
    name,
    id,
    timestamp,
    avatar: avatarURL,
    votes,
  };
}
