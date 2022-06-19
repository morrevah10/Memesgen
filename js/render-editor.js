'use strict'


function renderTxtsEditor() {
  var strHtml = gMeme.txts
    .map(function (txt, idx) {
      return `
        <div class="txt-editor">
                   
                    
                    <button class="btn btn-delet" onclick="deleteTxt(${idx})">deletTxt</button>
                    <button class="btn btn-add">add line</button>
                    <button class="btn btn-swich">swich</button>
                    <input class="txt" type="text" data-property="line" placeholder="${txt.line}" oninput="editTxt(this,${idx})">
                    <input class="txt-size" type="range" value="${txt.size}"  min="10" step="2" data-property="size" oninput="editTxt(this ,${idx})">
                    
                    
                    <input id="color" type="color" value="${txt.color}" data-property="color" oninput="editTxt(this,${idx})">
                    <label class="txt-color" for="color">color</label>
                    <select class="fonts" data-property="fontFamily" oninput="editTxt(this,${idx})">
                    <option value="" >Fonts</option>
                    <option value="${txt.fontFamily}">${txt.fontFamily}</option>
                    <option value="opsion2">more fonts</option>
                    </select>
                    

                    
                    <input class="line-x" type="number" value="${txt.x}"  min="0" step="5" data-property="x" oninput="editTxt(this ,${idx})">
                    <input class="line-y" type="number" value="${txt.y}"  min="0" step="5" data-property="y" oninput="editTxt(this ,${idx})">
                    

                    
                    <input id="outline" type="checkbox" data-property="isOutline" unchecked onclick="editTxt(this,${idx})">
                    <label class="outline" for="outline">Outline </label>
                    Width:<input class="width" type="number" value="${txt.lineWidth}"  min="0" step="1" data-property="lineWidth" oninput="editTxt(this ,${idx})">
                    <input class="strokeStyle" type="color" value="${txt.strokeStyle}" data-property="strokeStyle" oninput="editTxt(this,${idx})">
                    

                    
                    
                </div>
        `
    })
    .join(" ")

  document.querySelector(".meme-editor").innerHTML = strHtml
}

function drawTxt(txt) {
  gCtx.font = txt.size + "px" + " " + txt.fontFamily
  gCtx.textAlign = txt.align
  gCtx.fillStyle = txt.color
  if (txt.isOutline) addTxtOutline(txt)
  gCtx.fillText(txt.line, txt.x, txt.y)
}

function addTxtOutline(txt) {
  gCtx.strokeStyle = txt.strokeStyle
  gCtx.lineWidth = txt.lineWidth
  gCtx.strokeText(txt.line, txt.x, txt.y)
}

function editTxt(elinput, txtIdx) {
//   console.log("elinput", elinput)
  var property = elinput.dataset.property
  var value

  switch (elinput.type) {
    case "checkbox":
      value = elinput.checked
      break
    default:
      value = elinput.value
      break
  }
  gMeme.txts[txtIdx][property] = value

  drawCanvas()
}

function deleteTxt(txtIdx) {
  gMeme.txts.splice(txtIdx, 1)
  drawCanvas()
  renderTxtsEditor()
}
