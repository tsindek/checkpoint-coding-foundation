class SumApp {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  getSum() {
    return this.numbers.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  }

  reset() {
    this.numbers = [];
  }
}
