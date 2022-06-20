"use strict"


var gRandom = []
var gRandIdx

const memesSentences = [
  "I never eat falafel",
  "DOMS DOMS EVERYWHERE",
  "Stop Using i in for loops",
  "Armed in knowledge",
  'Js error "Unexpected String"',
  "One does not simply write js",
  "I`m a simple man i see vanilla JS, i click like!",
  "JS, HTML,CSS?? Even my momma can do that",
  "May the force be with you",
  "I know JS",
  "JS Where everything is made up and the rules dont matter",
  "Not sure if im good at programming or good at googling",
  "But if we could",
  "JS what is this?",
  "Write hello world , add to cv 7 years experienced",
]

function getRandomText(memesSentences) {
  var randomIndx = Math.floor(
    Math.random() * (memesSentences.length - 0 + 1) + 0
  )
  return memesSentences[randomIndx]
}

function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16)
}


function creatRandMeme() {
  gRandom = {
    url: getRandomImg(gImgs),
    selectedImgId: gRandIdx,
    txts: [createRandTxt(150, 70)],
  }
  gMeme=gRandom
  console.log(gRandom)
  console.log(gMeme)
  showEditor()
  initCanvas()
  renderTxtsEditor()
   
}

function createRandTxt(x, y) {
  return {
    line: getRandomText(memesSentences),
    size: 40,
    align: "center",
    color: "#" + getRandomColor(),
    fontFamily: "Impact",
    isOutline: false,
    lineWidth: 2,
    strokeStyle: "#" + getRandomColor(),
    shadowBlur: 0,
    x: x,
    y: y,
  }
}

function getRandomImg() {
  var randomIndx = Math.floor(Math.random() * gImgs.length)
  gRandIdx=randomIndx

  return (gImgs[randomIndx-1].url) 
}


