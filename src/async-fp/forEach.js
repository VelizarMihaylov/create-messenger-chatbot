export const forEach = async (arr = [], callback = () => {}) => {
  for (const item of arr) {
    await callback(item)
  }
}
