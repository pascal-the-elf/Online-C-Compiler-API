function compile(code, input="") {
    return fetch("https://compiler.pascaltheelf.workers.dev", {
        method: "POST",
        body: JSON.stringify({code: code, input: input})
    }).then(res=>res.json());
}
