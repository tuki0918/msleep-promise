/**
 * Returns `Promise` - that wraps the `setTimeout` function.
 * @param {number} time delay (ms)
 * @returns {Promise}
 */
const msleep = (time: number): Promise<any> => {
    return new Promise(resolve => setTimeout(resolve, time))
};

export = msleep;
