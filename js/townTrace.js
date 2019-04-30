function TownTrace(registrationList) {
    var regNumsMap = registrationList || {};
    var test = "invalid";
    var upCase = '';
    var errorM = '';
    var townRegNumberMapping = {
        "select town" : "",
        "Cape Town": "CA",
        "Paarl": "CJ",
        "Ceres": "CT",
        "Stellenbosch": "CL",
        "Bellville": "CY"
    }

    var startsWithOptions = Object.values(townRegNumberMapping);

    function isValidRegNumber(regNumber){
        var matchFound = startsWithOptions.some(function(townStart){
            if (townStart === ""){
                return false;
            }
            return regNumber.startsWith(townStart);
        });
        return matchFound;
    }

    function registerPlate(plateNum) {
        //CA,CJ,CL,CT,CY
        
        if (plateNum === '' || plateNum === undefined) {
            test = "invalid";
            errorM = "*Please enter your registration";
            return 0;
        } else {
            upCase = plateNum.toUpperCase();
        }
        
        if (isValidRegNumber(upCase)) {
            if (upCase.length === 8) {
                if (upCase.substr(2, 1) === " ") {
                    if (regNumsMap[upCase] === undefined) {
                        regNumsMap[upCase] = 0;
                        test = "valid";
                    } else {
                        test = "invalid";
                        errorM = "*This registration has been entered already";
                    }
                } else {
                    test = "invalid";
                    errorM = "*Please make sure there is a space between the first 2 and last 5 characters";
                }
            } else {
                test = "invalid";
                errorM = "*Please enter the registration in a valid format";
            }
        } else {
            test = "invalid";
            errorM = "*We do not keep track of registrations from that town";
        }

    }
    function validTest(testPlate) {
        if (test === "valid") {
            return test;
        } else {
            return test;
        }
    }
    function displayRegNum() {
        return upCase;
    }
    function displayRegList() {
        return regNumsMap;
    }
    function filterregNumsMap(locationName) {
        var town = locationName || "select town";
        var regNumbers = Object.keys(regNumsMap);
        var locationRegNumberStart = townRegNumberMapping[town];

        function doesRegNumberStartWith(regNumber){
            return regNumber.startsWith(locationRegNumberStart);
        }
        var filteredNums = regNumbers.filter(doesRegNumberStartWith);
        return filteredNums;
    }

    function displayError() {
        return errorM;
    }
    function clearItems() {
        regNumsMap = {};
        test = "invalid";
        upCase = '';
        errorM = '';
    }

    return {
        register: registerPlate,
        validity: validTest,
        regNum: displayRegNum,
        regList: displayRegList,
        filter: filterregNumsMap,
        errorText: displayError,
        clear: clearItems
    }
}