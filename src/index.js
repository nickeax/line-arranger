import { LinkedList } from "./LinkedList/linkedList.js";

const textEntry = document.querySelector('#textEntry')
const centerPane = document.querySelector('#centerPane')
let buffer = "";

textEntry.addEventListener('input', (ev) => {
  buffer = textEntry.value
  processCenterPaneOutput(buffer)
})

function processCenterPaneOutput(str) {
  let arr = str.split('\n')
  let output = ""

  arr.forEach(x => {
    output += `<div class="outputRow"><button>+</button><button>-</button>${x}</div>`
  })

  centerPane.innerHTML = output
}

let ll = new LinkedList()
// ll.InsertEnd("End data 001")
// ll.InsertEnd("End data 002")
// ll.InsertEnd("End data 003")
// ll.InsertEnd("End data 004")
// ll.InsertEnd("End data 005")
ll.InsertHead("Head data 001")
ll.InsertHead("Head data 002")
ll.InsertHead("Head data 003")
ll.InsertHead("Head data 004")
ll.InsertHead("Head data 005")
console.log(ll)

// ll.PrintList()

/** 
The lines of text will be added to an object that has an order index
These indexes will be adjusted based on the click of one of four buttons
  - buttonPlus: 
*/