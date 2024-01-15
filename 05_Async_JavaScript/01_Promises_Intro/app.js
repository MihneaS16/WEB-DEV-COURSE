///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(');
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(');
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
}

// the following methods are inefficient 

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log('IT WORKED!');
//         console.log(response);
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log('IT WORKED AGAIN!');
//                 console.log(response);
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log('IT WORKED AGAIN AND AGAIN!');
//                         console.log(response);
//                     }, function (error) {
//                         console.log('ERROR (third request)');
//                         console.log(error);
//                     });
//             }, function (error) {
//                 console.log('ERROR (second request)');
//                 console.log(error);
//             });
//     }, function (error) {
//         console.log('ERROR');
//         console.log(error);
//     });

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('PROMISE RESOLVED');
//         console.log('IT WORKED!');
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('PROMISE RESOLVED (2)');
//                 console.log('IT WORKED! (2)');
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('PROMISE RESOLVED (3)');
//                         console.log('IT WORKED! (3)');
//                     })
//                     .catch(() => {
//                         console.log('PROMISE REJECTED (3)');
//                         console.log('ERROR (3)');
//                     });
//             })
//             .catch(() => {
//                 console.log('PROMISE REJECTED (2)');
//                 console.log('ERROR (2)');
//             });
//     })
//     .catch(() => {
//         console.log('PROMISE REJECTED');
//         console.log('ERROR');
//     });


// this is the same idea of the one before, but much more neat looking and organised
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('IT WORKED! (page 1)');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page2');
    })
    .then((data) => {
        console.log('IT WORKED! (page 2)');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page3');
    })
    .then((data) => {
        console.log('IT WORKED! (page 3)');
        console.log(data);
    })
    .catch((error) => {
        console.log('OH NO, ONE OF THE REQUESTS FAILED!!');
        console.log(error);
    });



