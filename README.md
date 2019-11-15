# Online C++ Compiler API
Online C++ Compiler API! Cross-Origin Resource Sharing supported.

## API Endpoint
```
https://compiler.pascaltheelf.workers.dev
```

## Usage
Post Code and Input (not required) to [API Endpoint](#API-Endpoint).

## Example
There's some examples: 

### Javascript
```javascript
// post data include c++ code (required) and input (not required)
var data = {
    code: YOUR_CPP_CODE,
    input: YOUR_INPUT
};

// fetch the API => get response => show response in console
fetch("https://compiler.pascaltheelf.workers.dev", {
    method: 'POST',
    body: JSON.stringify(data)
}).then(res=>res.json()).then(console.log);

// the response would like this
{
    output: OUTPUT_OF_YOUR_PROGRAM,
    memory: MEMORY_USED_BY_YOUR_PROGRAM, // in KB
    cpuTime: CPU_TIME_USED_BY_YOUR_PROGRAM // in second
}
```
