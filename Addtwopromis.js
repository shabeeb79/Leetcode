var addTwoPromises = async function(promise1, promise2) {
    return new Promise((resolve, reject) => {
        resolve(promise1+promise2)
    })
    .then((sum)=>console.log(sum)
    )
};
 addTwoPromises (2,5)