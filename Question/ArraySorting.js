//from array  string is sorting
/**
 *  note:The compare function should return a value for each pair of     * elements (a and b) it compares:
        If it returns a negative value, a will be sorted before b.
        If it returns a positive value, a will be sorted after b.
        If it returns 0, a and b are considered equal and no change is made to their order.
 * 
 * @param {Array} unsorted 
 * @returns 
 */

function bigSorting(unsorted) {
     return unsorted.sort((a, b) => {
          if (a.length !== b.length) {
               return a.length - b.length;
          }

          return a > b ? 1 : -1;
     });
}

const unsortedArray = ["1", "3", "150", "200"];
const sortedArray = bigSorting(unsortedArray);
console.log(sortedArray);
