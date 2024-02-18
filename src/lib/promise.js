async function u_take_your_time(time = 100) {
    return new Promise((resolve, reject) => {
    if (isNaN(time)) {
        reject(new Error('is not a number'));
    } else {
        setTimeout(resolve, time);
    }
    });
}
export {u_take_your_time}
