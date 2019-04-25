var addBtn = document.querySelector(".addBtn");
var regText = document.querySelector(".regFieldText");

addBtn.addEventListener('click', function () {
    var newHead = document.createElement("h3");

    var newRegNum = document.createTextNode(regText.value.trim());
    newHead.appendChild(newRegNum);

    var currentDiv = document.getElementById("parentElement");
    document.body.insertBefore(newHead, currentDiv);
    regText.value = '';

})