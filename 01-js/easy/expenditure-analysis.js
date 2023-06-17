/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    const hashmap = {};
    for (var tran in transactions) {
        if (transactions[tran].category in hashmap)
            hashmap[transactions[tran].category] += transactions[tran].price;
        else
            hashmap[transactions[tran].category] = transactions[tran].price;
    }
    const ans = [];
    for (var key in hashmap) {
        ans.push({"category": key, "totalSpent": hashmap[key]});
    }
    return ans;
}

module.exports = calculateTotalSpentByCategory;
