let board = document.querySelector('.board')
let score = 400
const colors = ['#e74c3c','#8e44ad','#3498db','#e67e22','#2ecc71','gold']
for(let i = 0; i<score; i++){
    let div = document.createElement('div')
    div.classList.add('squre')
    div.addEventListener('mouseover',()=>{
        setColor(div)
    })
    div.addEventListener('mouseout',()=>{
        removeColor(div)
    })
    board.append(div)
}
function getColor(){
    return Math.floor(Math.random()*colors.length)//округление
}
function setColor(el){
    el.style.background = colors[getColor()]
    el.style.boxShadow = `0 0 2px ${colors[getColor()]},0 0 10px ${colors[getColor()]}` 
}
function removeColor(el){
    el.style.background = 'rgb(51, 51, 51)'
    el.style.boxShadow = 'none'
}
