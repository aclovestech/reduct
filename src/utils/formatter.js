export function formatTimePosted(timestamp) {
  const now = Date.now();
  const elapsedMilliseconds = now - timestamp * 1000; // Calculate the elapsed time

  const seconds = Math.floor(elapsedMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // Approximate
  const years = Math.floor(months / 12); // Approximate

  if (seconds < 60) {
    return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else if (hours < 24) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (days < 30) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (months < 12) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  }
}

export function formatCommentCount(count) {
  if (count < 1000) {
    return count.toString(); // Return as is for counts less than 1000
  } else if (count < 1000000) {
    return (count / 1000).toFixed(0) + "k"; // Convert to thousands
  } else {
    return (count / 1000000).toFixed(0) + "m"; // Convert to millions
  }
}

export function formatVoteCount(count) {
  if (count < 1000) {
    return count.toString(); // Return as-is for counts less than 1000
  } else if (count < 1000000) {
    return (count / 1000).toFixed(1) + "k"; // Convert to thousands with one decimal place
  } else {
    return (count / 1000000).toFixed(1) + "m"; // Convert to millions with one decimal place
  }
}
