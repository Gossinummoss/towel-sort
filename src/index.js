
module.exports = function towelSort (matrix) {
  if (matrix !== undefined) {
    return  matrix.reduce((acc, cur, i) => {
      return acc.concat((!(i % 2) ? cur : cur.reverse()));
    }, [])
  } else {
    return []
  }
  
}
