function processOrder(orderId) {
  return fetch(`/api/orders/${orderId}`)
    .then((response) => response.json())
    .then((order) => {
      return fetch(`/api/inventory/${order.productId}`);
    })
    .then((response) => response.json())
    .then((inventory) => {
      if (inventory.stock > 0) {
        return { success: true, message: "Order processed" };
      } else {
        return { success: false, message: "Out of stock" };
      }
    });
}

//convert to async await

async function processOrder(orderId) {
  try {
    const response = await fetch(`/api/orders/${orderId}`);
    if (!response.ok) {
      throw new Error("Order not found");
    }
    const order = await response.json();
    if (order && order.products.length > 0) {
      const productInInventory = await fetch(
        `/api/inventory/${order.productId}`,
      );
      if (!productInInventory.ok) {
        throw new Error("Order not found");
      }
      const product = await productInInventory.json();
      if (product.stock > 0) {
        return { success: true, message: "Order processed" };
      } else {
        return { success: false, message: "Out of stock" };
      }
    }
  } catch (err) {
    return { success: false, message: err.message };
  }
}
