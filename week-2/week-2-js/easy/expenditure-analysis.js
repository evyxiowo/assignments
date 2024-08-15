/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;

    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  }

  const result = [];
  for (const category in categoryTotals) {
    result.push({
      category: category,
      totalSpent: categoryTotals[category],
    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;

//usage

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656086800000,
    price: 15,
    category: "Food",
    itemName: "Chicken",
  },
  {
    id: 3,
    timestamp: 1656096800000,
    price: 16,
    category: "Transport",
    itemName: "Bus Ticket",
  },
];

console.log(calculateTotalSpentByCategory(transactions));
