const anchor = document.querySelector('a')! // if sure this exists, add ! to end

//if (anchor) {
console.log(anchor.href)
//}

//const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form') as HTMLFormElement
//console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement
//console.log(type)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber)
})

let firstName = 'Brandon'
let lastName = 'Sanderson'

let fullName = firstName + ' ' + lastName

console.log(fullName.length)
console.log(fullName.toUpperCase())

let result = fullName.toLowerCase()

console.log(result)
