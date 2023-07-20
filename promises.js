function display(data) { 
    console.log(data)
}

function printHello() { 
    console.log("Hello!")
}  

function blockFor300ms() { 
    // blocks in the JavaScript thread for 300ms
}

setTimeout(printHello, 0)

const futureData = fetch('https://twitter.com/will/tweets/1')
futureData.then(display)

blockFor300ms()
console.log("Me first!")