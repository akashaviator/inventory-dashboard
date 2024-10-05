export const calculateInventoryStats = (products) => {
  let totalValue = 0
  let totalProducts = 0
  const categories = new Set()
  let outOfStockCount = 0

  products.forEach((item) => {
    const priceValue = parseFloat(item.price.replace("$", "")) || 0
    totalValue += priceValue * item.quantity

    totalProducts += item.quantity

    categories.add(item.category)

    if (item.quantity === 0) {
      outOfStockCount++
    }
  })

  return {
    totalValue,
    totalProducts,
    noOfCategories: categories.size,
    outOfStock: outOfStockCount,
  }
}
