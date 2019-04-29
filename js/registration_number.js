var addBtn = document.querySelector(".addBtn");
var regText = document.querySelector(".regFieldText");
var selectItems = document.getElementById("item1");
var errorMessage = document.getElementById("error");
var clearBtn = document.querySelector(".clearBtn");
var i = 1;
if(localStorage['regList']){
    var storedReg = JSON.parse(localStorage['regList'])
}else{
    var storedReg = {};
}
var townInstance = TownTrace(storedReg);
var updateRef = townInstance.filter("select town");
for (var k = 0; k < updateRef.length; k++) {
    var newHead = document.createElement("h3");
    newHead.classList.add("childE");

    var parentDiv = document.getElementById("childElement").parentNode;
    var newRegNum = document.createTextNode(updateRef[k]);
    newHead.appendChild(newRegNum);

    var currentDiv = document.getElementById("childElement");
    parentDiv.insertBefore(newHead, currentDiv)
}

addBtn.addEventListener('click', function () {
    townInstance.register(regText.value.trim());
    if (townInstance.validity(regText.value.trim()) === "valid") {
        errorMessage.innerHTML='';

        var newHead = document.createElement("h3");
        newHead.id = "child" + i;
        i++;

        var parentDiv = document.getElementById("childElement").parentNode;
        var newRegNum = document.createTextNode(townInstance.regNum());
        newHead.appendChild(newRegNum);

        var currentDiv = document.getElementById("childElement");
        parentDiv.insertBefore(newHead, currentDiv);
        regText.value = '';
    } else {
        console.log(townInstance.errorText());
        errorMessage.innerHTML = townInstance.errorText();
    }
    localStorage["regList"] = JSON.stringify(townInstance.regList());
})

clearBtn.addEventListener('click',function(){
    townInstance.clear();
    localStorage.clear();
    clearChildElems();
})

selectItems.onchange = function () {
    var selectedVal = document.getElementById("item1").value;
    console.log(selectedVal);
    var filterList = townInstance.filter(selectedVal);
    clearChildElems();

    for (var k = 0; k < filterList.length; k++) {
        var newHead = document.createElement("h3");
        newHead.classList.add("childE");

        var parentDiv = document.getElementById("childElement").parentNode;
        var newRegNum = document.createTextNode(filterList[k]);
        newHead.appendChild(newRegNum);

        var currentDiv = document.getElementById("childElement");
        parentDiv.insertBefore(newHead, currentDiv)
    }

}
function clearChildElems(){
    var element = document.getElementById("parentElement");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    var childNode = document.createElement("div");
    childNode.id = "childElement";
    var parent = document.getElementById("parentElement");
    parent.appendChild(childNode);
}