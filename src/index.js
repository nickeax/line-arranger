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

