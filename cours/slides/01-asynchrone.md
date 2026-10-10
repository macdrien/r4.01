---
marp: true
paginate: true
footer: Adrien Bouyssou (macdrien.github.io)
---

# 01 - Asynchrone et Promise 

---

## Asynchrone

- N'attend pas la fin de la ligne 125 pour exécuter la ligne 126.
- Permet de garder la réactivité du site, même si un programme lourd tourne.
- Fonctionne avec le type Promise.

---

## Exemple

```javascript
function delayedResolve() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello");
        }, 500);
    });
}

async function call() {
    console.log("call()");
    delayedResolve()
        .then(output => console.log(output));
    console.log("after delayedResolve()");
}

call();
```

---

## Travailler avec les promesses

1. Les callbacks
2. Async/Await

---

## Callbacks

```javascript
function delayedResolve(prefix) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(prefix + " " + prefix);
        }, 500);
    });
}

async function call(text) {
    delayedResolve(text)
        .then(output => { 
            console.log(output);
            return delayedResolve(output);
        }).then(output => console.log(output));
}

call("Hello");
```

---

## Async / Await

```javascript
function delayedResolve(prefix) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(prefix + " " + prefix);
        }, 500);
    });
}

async function call(text) {
    const output = await delayedResolve(text);
    console.log(output);
    const secondOutput = delayedResolve(output);
    console.log(secondOutput);
}

await call("Hello");
```
