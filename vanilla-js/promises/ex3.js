// Build a promise-based shopping cart system with inventory checking and payment processing.

// Simulated inventory database
const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 }, // Out of stock
  monitor: { price: 299, stock: 3 },
};

// TODO: Return a promise that:
// 1. Waits 500ms (simulating database check)
// 2. Checks if all items are in stock
// 3. Resolves with items if all available
// 4. Rejects with specific item that's out of stock
function checkInventory(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const unavailableItems = items.filter(
        (item) => !inventory[item] || inventory[item].stock === 0,
      );
      if (unavailableItems.length > 0) {
        reject(
          new Error(`Item(s) out of stock: ${unavailableItems.join(", ")}`),
        );
      } else {
        resolve(items);
      }
    }, 500);
  });
}

function calculateTotal(items) {
  // TODO: Return a promise that:
  // 1. Waits 200ms
  // 2. Calculates total price including 8% tax
  // 3. Resolves with { subtotal, tax, total }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const subtotal = items.reduce(
          (sum, item) => sum + inventory[item].price,
          0,
        );
        const tax = parseFloat((subtotal * 0.08).toFixed(2));
        const total = parseFloat((subtotal + tax).toFixed(2));
        resolve({ subtotal, tax, total });
      } catch (error) {
        reject(new Error("Error calculating total: " + error.message));
      }
    }, 200);
  });
}

function processPayment(amount) {
  // TODO: Return a promise that:
  // 1. Waits 1500ms (simulating payment processing)
  // 2. 90% success rate
  // 3. Resolves with { transactionId, amount, status: 'success' }
  // 4. Rejects with payment failure error
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error("Payment failed: Insufficient funds"));
      } else {
        resolve({
          transactionId: Math.floor(Math.random() * 1000000),
          amount,
          status: "success",
        });
      }
    }, 1500);
  });
}

function updateInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 300ms
  // 2. Reduces stock for each item
  // 3. Resolves with updated inventory status
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        items.forEach((item) => {
          if (inventory[item] && inventory[item].stock > 0) {
            inventory[item].stock -= 1;
          }
        });

        resolve({
          message: "Inventory updated successfully!",
          currentInventory: inventory,
        });
      } catch (err) {
        reject(err.message);
      }
    }, 300);
  });
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
  return checkInventory(itemNames)
    .then((availableItems) => {
      console.log("Step 1 Passed: All items are in stock.");
      return updateInventory(availableItems);
    })
    .then((inventoryResult) => {
      console.log("Step 2 Passed: Inventory successfully updated.");

      return {
        status: "success",
        orderItems: itemNames,
        details: inventoryResult.message,
      };
    })
    .catch((error) => {
      console.error(" Checkout Failed:", error.message || error);
      throw error;
    });
}

// Test cases:
checkout(["laptop", "mouse"]) // Should succeed
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["laptop", "keyboard"]) // Should fail - keyboard out of stock
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["monitor", "mouse", "laptop"]) // Might fail at payment (10% chance)
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));
