function checkBadVersions(isBadVersion) {
  return function firstBadVersion(n) {
    let start = 1;
    let end = n;
    while (start < end) {
      let mid = Math.floor(start + end / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
}
