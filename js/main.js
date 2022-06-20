"use strict"

var gMeme
var gCanvas
var gCtx
var gImgObj
var gSavedMemes = []



function createGmeme(imgId) {
  return {
    url: 0,
    selectedImgId: imgId,
    txts: [createTxt("Your Text", 150, 70)],
  }
}

function initMemeEditor(imgId) {
  gMeme = createGmeme(imgId)
  showEditor()
  initCanvas()
  renderTxtsEditor()
}
function createTxt(line, x, y) {
  return {
    line: line,
    size: 40,
    align: "center",
    color: "#000000",
    fontFamily: "Impact",
    isOutline: false,
    lineWidth: 2,
    strokeStyle: "#ffffff",
    shadowBlur: 0,
    x: x,
    y: y,
  }
}

function initCanvas() {
  gCanvas = document.querySelector(".meme-canvas")
  gCtx = gCanvas.getContext("2d")

  gImgObj = new Image()
  gImgObj.src = getImgSrc()

  gImgObj.onload = function () {
    gCanvas.width = gImgObj.width
    gCanvas.height = gImgObj.height
    gMeme.txts[0].y = gImgObj.height - 70

    drawCanvas()
  }
}
function drawCanvas() {
  gCtx.drawImage(gImgObj, 0, 0)

  gMeme.txts.forEach(function (txt) {
    drawTxt(txt)
  })
}

function getImgSrc() {
  // if(gRandom){
  //   console.log(gRandom)
  //   console.log(gImgs)
  // }
    var imgIdx = gImgs.findIndex(function (img) {
      return gMeme.selectedImgId === img.id
    })
  
    return gImgs[imgIdx].url
  
}

function showGallery() {
  document.querySelector(".meme").classList.add("hidden")
  document.querySelector(".gallery-continer").classList.remove("hidden")
  document.querySelector(".saved").classList.add("hidden")
}

function showEditor() {
  document.querySelector(".meme").classList.remove("hidden")
  document.querySelector(".gallery-continer").classList.add("hidden")
  document.querySelector(".saved").classList.add("hidden")
}

function showMemes() {
  document.querySelector(".meme").classList.add("hidden")
  document.querySelector(".gallery-continer").classList.add("hidden")
  document.querySelector(".saved").classList.remove("hidden")
  gSavedMemes = loadFromStorage("myMemes")
  renderSaved(gSavedMemes)
}



function onSave() {
  const data = gCanvas.toDataURL()
  gMeme.url = data
  console.log("gMeme", gMeme)
  console.log("gSavedMemes", gSavedMemes)
  gSavedMemes.push(gMeme)
  console.log("gSavedMemes", gSavedMemes)
  saveToStorage("myMemes", gSavedMemes)
  var btnName = document.querySelector('.save').innerHTML
  Modal(btnName)
  
}

function onShare() {
  shareMeme()
  var btnName = document.querySelector('.share').innerHTML
  Modal(btnName)
  
}

function onDownload(elLink) {
  var imgContent = gCanvas.toDataURL('image')
  console.log(imgContent)
  elLink.href = imgContent
  elLink.downlad ='my-meme'
  var btnName = document.querySelector('.download').innerHTML
  Modal(btnName)
}

