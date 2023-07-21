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

const futureData = fetch('https://dog.ceo/api/breeds/image/random')
console.log(futureData)
futureData.then(display)

blockFor300ms()
console.log("Me first!")


const message = 'https://dog.ceo/api/breeds/image/random'
async function fetchurl(url) {
    let one = await fetch(url)
    let two = await one.json();
    return two;
}


await fetchurl(message)
