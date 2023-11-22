function getNames(objectsArray) {
  return objectsArray.filter((item) => item?.name).map((item) => item?.name);
}

const objects = [
  {
    a: 1,
  },
  {
    name: "Jane",
  },
  {
    name: "Mark",
  },
  {
    name: "Sophia",
  },
  {
    name: "Jane",
  },
];
console.log(getNames(objects));
