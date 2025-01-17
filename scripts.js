const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascaraModal")

function clickendereco(){
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'
}

function clickMascara(){
    modal.style.left = '-30%'
    mascara.style.visibility = 'hidden'
}