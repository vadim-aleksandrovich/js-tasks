// You should implement your task here.

module.exports = towelSort = (matrix) => {
    return typeof matrix == "undefined"
        ? []
        : matrix.reduce(
              (sorted, part, index) =>
                  sorted.concat(index % 2 !== 0 ? part.reverse() : part),
              []
          );
};
