"use strict"
function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
  var val = localStorage.getItem(key)
  return JSON.parse(val)
}

function renderSaved(gSavedMemes) {
  console.log("gSavedMemes", gSavedMemes)
  if (!gSavedMemes) {
    document.querySelector(".noMemesMsg").innerHTML += "  No saved memes"
  }
  var strHtml = gSavedMemes
    .map(function (img) {
      return `
        <img  src='${img.url}' onclick="initMemeEditor(${img.selectedImgId})"  class="img img${img.selectedImgId}" alt='meme picture'/>
        `
    })
    .join(" ")

  document.querySelector(".savedMemes").innerHTML = strHtml
}


function onClearStorge() {
  gSavedMemes=[]
  localStorage.clear()
  
  document.querySelector(".noMemesMsg").innerHTML += "  No saved memes"
  renderSaved(gSavedMemes)

}

function shareMeme() {
  uploadImg()
}
