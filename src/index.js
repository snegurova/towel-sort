
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }
    return matrix.reduce(
        (result, element, index) => {
            if (index % 2 === 0) {
                return result.concat(element);
            } else {
                return result.concat(element.reverse());
            }
        }
    );

}
