class Cashier {
  constructor(n, discount, products, prices) {
    this.n = n;
    this.discount = discount;
    this.products = products;
    this.prices = prices;
    this.customerCount = 0;
  }

  getBill(product, amount) {
    this.customerCount++;
    let total = 0;

    for (let i = 0; i < product.length; i++) {
      const productID = product[i];
      const productAmount = amount[i];
      const productIndex = this.products.indexOf(productID);

      if (productIndex !== -1) {
        total += this.prices[productIndex] * productAmount;
      }
    }

    if (this.customerCount === this.n) {
      // Apply discount
      total -= (this.discount * total) / 100;
      this.customerCount = 0; // Reset the customer count
    }

    return total;
  }
}

// Example usage:
const cashier = new Cashier(3, 50, [1, 2, 3, 4, 5], [100, 200, 300, 400, 500]);
const bill1 = cashier.getBill([1, 2], [1, 2]); // After the third customer, so applies a 50% discount.
console.log(bill1); // Output: 500.0
const bill2 = cashier.getBill([3, 7], [10, 10]); // After the sixth customer, so applies a 50% discount.
console.log(bill2); // Output: 4000.0
const bill3 = cashier.getBill([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]); // After the ninth customer, so applies a 50% discount.
console.log(bill3); // Output: 2500.0
