var addBtnTemplate = document.querySelector(".addBtnTemplate");
var regTextTemplate = document.querySelector(".regFieldTextTemplate");
var selectItemsTemplate = document.getElementById("item2");
var errorMessageTemplate = document.getElementById("errorTemplate");
var clearBtnTemplate = document.querySelector(".clearBtnTemplate");
var templateSourceRegNum = document.querySelector(".regPlateTemplate").innerHTML;
var regDataElem = document.querySelector(".regData");
var i = 1;

let storedRegTemplate = {};
if (localStorage['reglistTemplate']) {
    storedRegTemplate = JSON.parse(localStorage['reglistTemplate'])
}
var townInstanceTemplate = RegistrationNumberManager(storedRegTemplate);

buildSelectElem(townInstanceTemplate.listKeys(), townInstanceTemplate.listVals());

var updateRefTemplate = townInstanceTemplate.filter("show all towns");
buildTemplateElem(updateRefTemplate)

addBtnTemplate.addEventListener('click', function () {
    townInstanceTemplate.register(regTextTemplate.value.trim());
    if (townInstanceTemplate.validity(regTextTemplate.value.trim()) === "valid") {
        errorMessageTemplate.innerHTML = '';

        buildTemplateElem(Object.keys(townInstanceTemplate.regList()));

        regTextTemplate.value = '';
    } else {
        errorMessageTemplate.innerHTML = townInstanceTemplate.errorText();
    }
    localStorage["reglistTemplate"] = JSON.stringify(townInstanceTemplate.regList());
})

clearBtnTemplate.addEventListener('click', function () {
    townInstanceTemplate.clear();
    localStorage["reglistTemplate"] = '';
    clearTemplateElems();

})

selectItemsTemplate.onchange = function () {
    var selectedVal = document.getElementById("item2").value;
    var filterList = townInstanceTemplate.filter(selectedVal);
    clearTemplateElems();
    buildTemplateElem(filterList);
}

function clearTemplateElems() {
    regDataElem.innerHTML = '';
}

function buildTemplateElem(regObject) {

    var registerNumber = { plates: regObject };
    var regPlateTemplate = Handlebars.compile(templateSourceRegNum);
    var regDataHTML = regPlateTemplate(registerNumber);

    regDataElem.innerHTML = regDataHTML;
}
function buildSelectElem(townKeys, townValues) {
    for (var z = 1; z < townKeys.length; z++) {
        var option = document.createElement('option');
        option.text = townKeys[z] + " (" + townValues[z] + ")";
        option.value = townKeys[z];
        selectItemsTemplate.appendChild(option);
    }
}
