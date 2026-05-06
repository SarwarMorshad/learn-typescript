class Counter {
  static count: number = 0;

  increment() {
    return (Counter.count = Counter.count + 1);
  }

  decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

const counter1 = new Counter();
console.log(counter1.increment()); // Output: 1
console.log(counter1.increment()); // Output: 2
console.log(counter1.increment()); // Output: 3

const counter2 = new Counter();
console.log(counter2.increment()); // Output: 1
console.log(counter2.increment()); // Output: 2
console.log(counter2.increment()); // Output: 3
