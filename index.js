// console.log(document.querySelector('.field'))
// console.log(document.getElementsByClassName('.btn'))
// console.log(document.getElementsByTagName('div')[0])
// console.log(document.querySelectorAll('.btn'))
// // to find something more specific
// let form = document.querySelector('form')
// // brings up the div from the form
// console.log(form.querySelector('div'))

// console.log(form.childNodes[1])


// Make it fucntional
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        handleToDo(e.target.new_todo.value)
    })
})
function handleToDo(todo) {
    // console.log(todo)
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = ' x'
    p.textContent = `${todo}  `
    p.appendChild(btn)
    document.querySelector('#todo_container').appendChild(p)
}


// add an image?


function addImage(img_url) {
    let img = document.querySelector('img')
    img.src = img_url
}
addImage('https://thursd.com/storage/media/59200/sprouting-fountain-with-water-plants.jpg')

// console.log(document.querySelector('div'))
// console.log(document.querySelector('.btn'))
// console.log(document.querySelector('alert'))
// console.log(document.getElementsByClassName('btn')[0])
// console.log(document.getElementsByTagName('div')[2])
let form = document.querySelector('form')
// console.log(form.querySelector('div'))
// console.log(form.childNodes)

console.log(form.parentNode)

// Change Thrusday to Monday
function updateWeekDay(day) {
    let h4 = document.querySelector('h4')
    console.log(h4)
    h4.innerText = day
    h4.id = day.toLowerCase()
    h4.className = 'title'

}
updateWeekDay("Monday")

// add event ent Listener
// grab form

// const form 
document.querySelector('form').addEventListener('mouseover', (e) => console.log("hi"))

document.querySelector('#alert').addEventListener('click', alertMe)

function alertMe() {
    return alert('Hi, I was clicked!')
}

// log something 
document.querySelector('#log').addEventListener('click', () => console.log('I\'ve been logged'))

function handleDelete(e) {
    e.target.parentNode.remove()
}

function addEventListenerToButtons() {
    let buttons = document.getElementsByClassName('delete-btn')
    for (let btn of buttons) {
        // console.log(btn)
        btn.addEventListener('click', handleDelete)
    }
}
addEventListenerToButtons()







