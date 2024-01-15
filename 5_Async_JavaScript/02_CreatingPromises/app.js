///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            } else {
                reject('REQUEST ERROR');
            }
        }, 1000);
    });
}


fakeRequest('/dogs/1')
    .then((data) => {
        console.log('DONE WITH REQUEST');
        console.log(data);
    })
    .catch((err) => {
        console.log('FAILED');
        console.log(err);
    });


console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function delayedColorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
        //reject(); // we do not have to reject this promise
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('purple', 1000))
    .catch(() => {
        console.log('DONE');
    });