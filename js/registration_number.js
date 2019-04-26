var addBtn = document.querySelector(".addBtn");
var regText = document.querySelector(".regFieldText");
var selectItems = document.getElementById("item1");
var townInstance = TownTrace();
var selectedVal = 'select town';

addBtn.addEventListener('click', function () {

    townInstance.register(regText.value.trim());
    if (townInstance.validity() === "valid") {

        var newHead = document.createElement("h3");

        var newRegNum = document.createTextNode(townInstance.regNum());
        newHead.appendChild(newRegNum);

        var currentDiv = document.getElementById("parentElement");
        document.body.insertBefore(newHead,currentDiv);
        regText.value = '';
    }
})
selectItems.onchange = function(){
    selectedVal = document.getElementById("item1").value;
    console.log(selectedVal);
    console.log(townInstance.filter(selectedVal));
}