class Heap {
  // const minHeap = new Heap((a, b) => a - b); // MaxHeap / ascending - default
  // const maxHeap = new Heap((a, b) => b - a); // MinHeap
  // const minHeap = new Heap((a, b) => a[0] - b[0]); // MaxHeap / ascending - default
  // const maxHeap = new Heap((a, b) => b[0] - a[0]); // MinHeap
  // if (typeof data === "function") {

  // constructor(ascending = (a, b) => a[0] - b[0], data) {
  constructor(ascending = (a, b) => a - b, data) {
    if (data?.length) {
      this.data = data;
      for (let i = this.data.length - 1; i >= 0; i--) {
        this.bubbleDown(i);
      }
    } else {
      this.data = [];
    }

    this.compare = ascending;

    this.greaterThanAt = (i, j) => {
      if (i >= this.data.length) return false;
      if (j >= this.data.length) return false;
      return this.compare(this.data[i], this.data[j]) > 0;
    };

    this.swapAt = (i, j) =>
      ([this.data[i], this.data[j]] = [this.data[j], this.data[i]]);
  }

  get size() {
    return this.data.length;
  }
  isEmpty() {
    return !this.size;
  }
  empty() {
    return this.isEmpty();
  }

  add(value) {
    this.push(value);
  }
  insert(value) {
    this.push(value);
  }
  push(value) {
    this.data.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let childIndex = this.data.length - 1;
    while (
      childIndex &&
      this.greaterThanAt((childIndex - 1) >> 1, childIndex)
    ) {
      this.swapAt(childIndex, (childIndex - 1) >> 1);
      childIndex = (childIndex - 1) >> 1;
    }
  }

  poll(value) {
    this.pop(value);
  }
  extractMin() {
    return this.pop();
  }
  extractMax() {
    return this.pop();
  }
  pop() {
    if (!this.data.length) return;
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return top;
  }

  replaceTop(value) {
    if (!this.data.length) return;
    const top = this.data[0];
    this.data[0] = value;
    this.bubbleDown(0);
    return top;
  }

  top() {
    return this.data[0];
  }
  peek() {
    return this.top();
  }

  bubbleDown(parentIndex) {
    if (!this.data.length) return;

    while (true) {
      const [leftChildIndex, rightChildIndex] = [
        2 * parentIndex + 1,
        2 * parentIndex + 2,
      ];

      let minChildOrParentIndex = parentIndex; // ChildIndex  bigger than Parent
      if (this.greaterThanAt(minChildOrParentIndex, leftChildIndex)) {
        minChildOrParentIndex = leftChildIndex;
      }
      if (this.greaterThanAt(minChildOrParentIndex, rightChildIndex)) {
        minChildOrParentIndex = rightChildIndex;
      }

      if (minChildOrParentIndex !== parentIndex) {
        this.swapAt(minChildOrParentIndex, parentIndex);
        parentIndex = minChildOrParentIndex;
      } else {
        break; // no  ChildIndex  bigger than Parent
      }
    }
  }
}
const MinHeap = Heap;
const MaxHeap = Heap;

var maxEvents = function (events) {
  events.sort((a, b) => a[0] - b[0]);
  const n = events.length;
  let count = 0;
  let i = 0;
  const pq = new Heap();
  return pq;
  // for (let day = 0; !pq.isEmpty() || i < n; day++) {
  //   if (pq.isEmpty()) day = events[i][0];
  //   while (i < n && events[i][0] === day) {
  //     pq.push(events[i][1]);
  //     i++;
  //   }
  //   while (!pq.isEmpty() && pq.peek() < day) {
  //     pq.pop();
  //   }
  //   if (!pq.isEmpty()) {
  //     pq.pop();
  //     count++;
  //   }
  // }
  return count;
};

const events = [
  [1, 2],
  [2, 3],
  [3, 4],
];
console.log(maxEvents(events));
