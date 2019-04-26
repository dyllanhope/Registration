var addBtn = document.querySelector(".addBtn");
var regText = document.querySelector(".regFieldText");
var townInstance = TownTrace();
addBtn.addEventListener('click', function () {

    townInstance.register(regText.value.trim());
    if (townInstance.validity() === "valid") { 

    var newHead = document.createElement("h3");

    var newRegNum = document.createTextNode(townInstance.regNum());
    newHead.appendChild(newRegNum);

    var currentDiv = document.getElementById("parentElement");
    document.body.insertBefore(newHead, currentDiv);
    regText.value = '';

    }
})