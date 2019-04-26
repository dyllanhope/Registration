var addBtn = document.querySelector(".addBtn");
var regText = document.querySelector(".regFieldText");
var selectItems = document.getElementById("item1");
var townInstance = TownTrace();
var selectedVal = 'select town';
var i = 1;

addBtn.addEventListener('click', function () {

    townInstance.register(regText.value.trim());
    if (townInstance.validity() === "valid") {

        var newHead = document.createElement("h3");
        newHead.id = "child" + i;
        i++;

        var parentDiv = document.getElementById("childElement").parentNode;
        var newRegNum = document.createTextNode(townInstance.regNum());
        newHead.appendChild(newRegNum);

        var currentDiv = document.getElementById("childElement");
        parentDiv.insertBefore(newHead, currentDiv);
        regText.value = '';
    }
})
selectItems.onchange = function () {
    selectedVal = document.getElementById("item1").value;
    console.log(selectedVal);
    //var numList = townInstance.regNum();
    var filterList = townInstance.filter(selectedVal);
    var element = document.getElementById("parentElement");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    var childNode = document.createElement("div");
    childNode.id ="childElement";
    var parent = document.getElementById("parentElement");
    parent.appendChild(childNode);

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