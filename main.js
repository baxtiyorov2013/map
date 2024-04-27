// const cars = ["BMW", "Ecinox", "Tesla", "Supra", "Spark", "sariq jugili"]

// const body = document.querySelector("body")

// cars.map(items => {
//     const texts = document.createElement("p")
//     texts.innerHTML = items
//     body.appendChild(texts)
// })


// const numbers = [1, 2, 3, 4, 5, 78, 36, 45, 788, 0]

// numbers.map(items1 => {items1 > 5 && console.log(items1);})


// console.log("forEach");

// numbers.forEach(items2 => {
//     if(items2 > 5) {
//         console.log(items2);
//     }
// })

let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50]; 

const body = document.querySelector("body")

data.map(items => {
    const texts = document.createElement("p")
    texts.innerHTML = items
    body.appendChild(texts)

    texts.style.textAlign = "center"
    texts.style.margin = '35px'
    texts.style.fontFamily ='nosifer'
    texts.style.color ="white"

    if(items < 50){
        texts.style.background = 'red'
    }
    else{texts.style.background ='green'}
})



