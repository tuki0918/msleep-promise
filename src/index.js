/**
 * Returns `Promise` - that wraps the `setTimeout` function.
 * @param {number} time delay (ms)
 * @returns {Promise}
 */
module.exports = time => new Promise(resolve => setTimeout(resolve, time));
