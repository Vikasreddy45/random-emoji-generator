const button = document.getElementById('button')
const h1 = document.querySelector('h1')

const prom = fetch('https://emoji-api.com/emojis?access_key=5d224317335473b388c4436dfe6d5d640fccc863')
const respo = prom.then(response => response.json())
//console.log(prom)

button.addEventListener('click',()=>{

    respo
    .then(data => {
        
        h1.innerHTML = data[randomNumber()].character
        //emoji.append(div())
        //console.log(data[randomNumber()])
    })
    .catch(err => console.log(err))
})

function randomNumber() {
    let random = Math.floor(Math.random() * 200);
    return random
}

// function div(em){
//     const img = document.createElement('img')
//     img.src = em

//     return em 
// }