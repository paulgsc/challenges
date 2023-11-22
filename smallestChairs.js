const smallestChair = function (times, targetFriend) {
  const arrivals = times.map((time, i) => [time[0], i]).sort((a, b) => a - b);
  const depatures = times.map((time, i) => [time[1], i]).sort((a, b) => a - b);
  const availableChairs = times.reduce((acc, _, index) => [...acc, index], []);
  const occupiedChairs = {};
  for (const [arrTime, friendIdx] of arrivals) {
    if (friendIdx === targetFriend) return availableChairs[0];

    console.log("t: ", arrTime, "fr: ", friendIdx);
    while (depatures.length > 0 && depatures[0][0] <= arrTime) {
      console.log("this ran");
      const [_, leavingFriendIdx] = depatures.splice(0, 1)[0];
      const returnedChair = occupiedChairs.pop(leavingFriendIdx, 1)[0];
      availableChairs.push(returnedChair);
    }
    const chosenChair = availableChairs.splice(0, 1)[0];
    occupiedChairs[friendIdx] = chosenChair;
  }
  return arrivals;
};

const times = [
  [1, 2],
  [3, 4],
  [4, 6],
];
const targetFriend = 1;
console.log(smallestChair(times, targetFriend));
