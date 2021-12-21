function mergeArrays(arr1, arr2) {
    let arr = [...arr1, ...arr2]
    let set = new Set(arr)
      return Array.from(set).sort((a, b) => a - b)
  }