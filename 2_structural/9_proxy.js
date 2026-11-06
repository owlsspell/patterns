function networkFetch(url) {
    return `${url} - Response from server`
}

const cash = new Set();

const proxyFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0]
        if (cash.has(url)) {
            return `${url} - Response from cash`
        } else {
            cash.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(proxyFetch('google.com'));
console.log(proxyFetch('amazon.com'));
console.log(proxyFetch('google.com'));