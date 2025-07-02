export class DateUtil {
  static formatTimeAgo(timestamp: number): string {
    const now = Date.now();
    const diffInSeconds = Math.floor((now - timestamp * 1000) / 1000);

    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;

    if (diffInSeconds < minute) {
      return `${diffInSeconds} second${diffInSeconds !== 1 ? "s" : ""} ago`;
    }

    if (diffInSeconds < hour) {
      const minutes = Math.floor(diffInSeconds / minute);
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    }

    if (diffInSeconds < day) {
      const hours = Math.floor(diffInSeconds / hour);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    }

    const days = Math.floor(diffInSeconds / day);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }
}
