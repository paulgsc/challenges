const rankTeams = (votes) => {
  let ballot = {};
  for (const vote of votes) {
    ballot = [...vote].reduce(
      (acc, curr, i) => ({
        ...acc,
        [curr]: acc[curr] ? acc[curr] : [].push(1),
      }),
      ballot
    );
  }

  return ballot;
};
const votes = ["BCA", "CAB", "CBA", "ABC", "ACB"];
console.log(rankTeams(votes));
