const pawn = document.querySelector('.chess-piece')
const squares = document.querySelectorAll('.square')
const infoDisplay = document.querySelector('#info')

let itemDragged

squares.forEach(square => {
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
    square.addEventListener('dragleave', dragLeave)
    square.addEventListener('dragend', dragEnd)
})
// pawn.forEach(pawn =>{
//     pawn.addEventListener('dragstart', dragStart)
//     pawn.addEventListener('drag', dragging)
// })

pawn.addEventListener('dragstart', dragStart)
pawn.addEventListener('drag', dragging)




function dragging(){
    infoDisplay.textContent = "You are dragging a " + itemDragged.id
}

// Dragging the item you want to move /chess piece
function dragStart(e){
    itemDragged = e.target
}

// When the item is been put into a location it gives an border with a timer that removes it
function dragEnd(e){
    e.target.classList.add('target')
    setTimeout(()=> e.target.classList.remove('target'), 100)
}

// This allows the item to be drag and drop into a box
function dragOver(e){
    e.preventDefault()
}

// When item is being drag into a box it gives the highlight
function dragEnter(e){
    e.target.classList.add('highlight')
}

// Highlight the box but when move to different box it removes it
function dragLeave(e){
    e.target.classList.remove('highlight')
}

// Item being move to different div and appending it
function dragDrop(e){
    e.target.appendChild(itemDragged)
    infoDisplay.textContent = ''
    e.target.classList.remove('highlight')
}


