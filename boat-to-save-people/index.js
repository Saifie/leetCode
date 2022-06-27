function boattoSave(people, limit) {
  let left = 0;
  let right = people.length - 1;
  people = people.sort((a, b) => a - b);

  boat = 0;
  while (left <= right) {
    if (left === right) {
      boat++;
      break;
    }
    if (people[left] + people[right] <= limit) {
      left = left + 1;
    }
    boat++;
    right = right - 1;
  }
  return boat;
}
console.log(boattoSave([44, 10, 29, 12, 49, 41, 23, 5, 17, 26], 50));
