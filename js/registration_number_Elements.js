var addBtn = document.querySelector(".addBtn");
var regText = document.querySelector(".regFieldText");
var selectItems = document.getElementById("item1");
var errorMessage = document.getElementById("error");
var clearBtn = document.querySelector(".clearBtn");
var i = 1;

let storedReg = {};
if (localStorage['regList']) {
    storedReg = JSON.parse(localStorage['regList'])
}
var townInstance = RegistrationNumberManager(storedReg);

buildSelectElem(townInstance.listKeys(),townInstance.listVals());

var updateRef = townInstance.filter("show all towns");
for (var k = 0; k < updateRef.length; k++) {
    buildElems(updateRef[k])
}

addBtn.addEventListener('click', function () {
    townInstance.register(regText.value.trim());
    if (townInstance.validity(regText.value.trim()) === "valid") {
        errorMessage.innerHTML = '';

        buildElems(townInstance.regNum());

        regText.value = '';
    } else {
        errorMessage.innerHTML = townInstance.errorText();
    }
    localStorage["regList"] = JSON.stringify(townInstance.regList());
})

clearBtn.addEventListener('click', function () {
    townInstance.clear();
    localStorage["regList"]='';
    clearChildElems();
})

selectItems.onchange = function () {
    var selectedVal = document.getElementById("item1").value;
    var filterList = townInstance.filter(selectedVal);
    clearChildElems();
    for (var k = 0; k < filterList.length; k++) {
        buildElems(filterList[k]);
    }

}
function clearChildElems() {
    var element = document.getElementById("parentElementRegHeadings");
    element.innerHTML = "";
    var childNode = document.createElement("div");
    childNode.id = "childElement";
    var parent = document.getElementById("parentElementRegHeadings");
    parent.appendChild(childNode);
}
function buildElems(regInput) {
    var newHead = document.createElement("h3");

    var parentDiv = document.getElementById("childElement").parentNode;
    var newRegNum = document.createTextNode(regInput);
    newHead.appendChild(newRegNum);

    var currentDiv = document.getElementById("childElement");
    parentDiv.insertBefore(newHead, currentDiv)
}
function buildSelectElem(townKeys,townValues) {
    for (var z = 1; z < townKeys.length; z++) {
        var option = document.createElement('option');
        option.text = townKeys[z] + " (" + townValues[z] +")";
        option.value = townKeys[z];
        selectItems.appendChild(option);
    }
}