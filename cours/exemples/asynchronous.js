function delayedResolve(prefix = "Hello") {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(prefix + " " + prefix);
        }, 1000);
    });
}

async function callFirstExample() {
    console.log("call()");
    delayedResolve()
        .then(output => console.log(output));
    console.log("after delayedResolve()");
}

async function callChainedThen(text) {
    delayedResolve(text)
        .then(output => {
            console.log(output);
            return delayedResolve(output);
        }).then(output => console.log(output));
}

async function callAsyncAwait(text) {
    const output = await delayedResolve(text);
    console.log(output);
    const secondOutput = delayedResolve(output);
    console.log(secondOutput);
}

// callFirstExample();
// callChainedThen("Hello").then(_ => {});
// await callChainedThen("Hello");
