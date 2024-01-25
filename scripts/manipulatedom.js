window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  });
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createEditButton() {
  let btn = document.createElement("button");
  btn.textContent = "Edit text";
  btn.onclick = function() {
    let parentTD = this.parentNode;
    let txt = parentTD.previousSibling.textContent;
    let input = createInputField(txt);
    parentTD.previousSibling.textContent = '';
    parentTD.previousSibling.appendChild(input);
    this.textContent = "Save";
    this.onclick = function() {
      let input = parentTD.previousSibling.querySelector('input');
      parentTD.previousSibling.textContent = input.value;
      parentTD.removeChild(input);
      this.textContent = "Edit text";
      this.onclick = createEditButton().onclick;
    };
  };
  return btn;
}

function createInputField(value) {
  let input = document.createElement("input");
  input.type = "text";
  input.value = value;
  return input;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createEditButton());
    let trNode = createTRNode([col1, col2]);
    tableNode.appendChild(trNode);
  }
  document.getElementById("root").appendChild(tableNode);
}
