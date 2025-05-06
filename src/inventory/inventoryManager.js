export const trackInventory = (item) => {
  const inventory = {
    addItem: (product) => {
      // Add new item to inventory
      return {
        id: product.id,
        name: product.name,
        quantity: product.quantity || 0,
        price: product.price || 0
      };
    },
    
    updateQuantity: (productId, newQuantity) => {
      // Update item quantity
      return {
        id: productId,
        quantity: newQuantity
      };
    },
    
    removeItem: (productId) => {
      // Remove item from inventory
      return { id: productId };
    },
    
    getItem: (productId) => {
      // Get item details
      return {
        id: productId,
        exists: true
      };
    }
  };

  return inventory;
};