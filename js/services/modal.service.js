"use strict"

function Modal(btnName) {
  console.log()
  var modal = document.querySelector(".modal")
  modal.style.display = "block"
  var modelText = document.querySelector(".modal-content")
  modelText.style.display = "flex"
  console.log("modal", modal)

  setUserMsg(btnName)

  var span = document.getElementsByClassName("close")[0]
  span.onclick = function () {
    modal.style.display = "none"
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
  }
}

function setUserMsg(btnName) {
  switch (btnName) {
    case 'save':
        var txt=`you meme has been saved
        you can see it on your memes section`
        document.querySelector('.user-msg').innerHTML=txt
      break;
    case 'share':
        var txt =`you meme has been upload
        to share it on facebook clike again on share button`
        document.querySelector('.user-msg').innerHTML=txt
        break;
    case 'Download':
        var txt =`you meme has been download`
        document.querySelector('.user-msg').innerHTML=txt
        break;
  }
}
