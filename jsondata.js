const response = [
  {
    cell: null,
    dob: {
      age: 26,
      date: "some date",
    },
    location: {
      cord: {
        zip: 1,
        x: 2,
      },
    },
    test: "foo",
    foo: "foo foo",
  },
  {
    cell: null,
    dob: {
      age: 2,
      date: "some date",
    },
    location: {
      cord: {
        zip: 1,
        x: 2,
      },
    },
    test: "foo",
    foo: "foo foo",
  },
  {
    cell: null,
    dob: {
      age: 76,
      date: "some date",
    },
    location: {
      cord: {
        zip: 1,
        x: 2,
      },
    },
    test: "foo",
    foo: "foo foo",
  },
];

const unpackObject = (item, key) => {
  if (typeof item !== "object" || item === null)
    return {
      [key]: item,
    };
  return Object.entries(item).reduce(
    (acc, [key, value]) => ({ ...acc, ...unpackObject(value, key) }),
    {}
  );
};
const arr = response.map((row) =>
  Object.entries(row).reduce(
    (acc, [key, value]) => ({ ...acc, ...unpackObject(value, key) }),
    {}
  )
);

const sortArrOfObjects = (arr, field) => {
  return arr.map((obj, rowIdx) =>
    Object.entries(obj)
      .filter(([key, _]) => key === field)
      .reduce(
        (acc, [key, value]) => ({
          ...acc,
          filterId: rowIdx,
          sortVal: value,
          val: obj,
        }),
        {}
      )
  );
};
const sorted = sortArrOfObjects(arr, "age")
  .map((obj) => obj?.filterId)
  .sort((a, b) => a - b);
console.log(sorted);
