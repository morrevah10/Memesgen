"use strict"

var gNextId = 1
var gImgs = []
var gdisplayImg = []
var gKeywordSearchCountMap = {}
var gTopSearch = []
var gRendImg

function init() {
  gImgs = createImgs()
  searchCountMap(gImgs)
  renderImgs(gImgs)
}

function createImgs() {
  var imgs = []

  imgs.push(
    createImage("img/1.jpg", ["funny"]),
    createImage("img/2.jpg", ["dog"]),
    createImage("img/3.jpg", ["dog"]),
    createImage("img/4.jpg", ["cat"]),
    createImage("img/5.jpg", ["baby"])
  )

  return imgs
}

function createImage(url, keywords) {
  return {
    id: gNextId++,
    url,
    keywords,
  }
}

function renderImgs(imgs) {
  // const displayImg = getImgForDisplay(input)

  const strHtml = imgs
    .map(function (img) {
      return `
        <img  src='${img.url}' onclick="initMemeEditor(${img.id},this)"  class="img img${img.id}" alt='meme picture'/>
        `
    })
    .join(" ")

  document.querySelector(".gallery").innerHTML = strHtml
}



function getImgForDisplay(input) {
  if (input === ""|| input === 'all') return gImgs
  var disImg = gImgs
  disImg = disImg.filter((img) => img.keywords.includes(input))
  // console.log('disImg',disImg)
  return disImg
}

function getInputFromTextBox() {
  var input = document.getElementById("input").value
  return input
}

function filter() {
  var input = getInputFromTextBox()
  // console.log(input)
  gdisplayImg = getImgForDisplay(input)
  // console.log(gdisplayImg)
  renderImgs(gdisplayImg)
}


function searchCountMap(gImgs) {
  gImgs.forEach((img) => {
    // gKeywordSearchCountMap[gImgs.keywords] = (gKeywordSearchCountMap[gImgs.keywords]) ? gKeywordSearchCountMap[gImgs.keywords] + 1 : 1

    if (gKeywordSearchCountMap[img.keywords]) {
      gKeywordSearchCountMap[img.keywords] =
        gKeywordSearchCountMap[img.keywords] + 1
    } else {
      gKeywordSearchCountMap[img.keywords] = 1
    }
  })
  // console.log('gKeywordSearchCountMap212',gKeywordSearchCountMap)

  for (var keyword in gKeywordSearchCountMap) {
    gTopSearch.push({
      keyword: [keyword],
      value: gKeywordSearchCountMap[keyword],
    })
  }

  gTopSearch.sort(function (a, b) {
    return b.value - a.value
  })

  TopSearch()
  changeFontSize()
}


function TopSearch() {
  var top = ["", "", "", ""]
  for (var i = 0; i < top.length; i++) {
    top[i] = document.querySelector(`.search${i}`).innerText +=
      gTopSearch[i].keyword
  }
}

function changeFontSize() {
  var top = [0, 0, 0, 0]
  for (var i = 0; i < top.length; i++) {
    var span = document.getElementById(`search${i}`)
    span.style.fontSize = gTopSearch[i].value*15 + "px"
  }
}

function filterByTop(el){
  // console.log(el.innerText)
  var tag = el.innerText
  var filterTag= getImgForDisplay(tag)
  renderImgs(filterTag)
}



function onRandomMemes() {
  creatRandMeme()
}