function TownTrace(registrationList) {
    var regNums = registrationList || {};
    var test = "invalid";
    var upCase = '';
    var errorM = '';

    function registerPlate(plateNum) {
        //CA,CJ,CL,CT,CY
        if (plateNum === '' || plateNum === undefined) {
            test = "invalid";
            errorM = "*Please enter your registration";
            return 0;
        } else {
            upCase = plateNum.toUpperCase();
        }
        if ((upCase.startsWith("CA")) || (upCase.startsWith("CJ")) || (upCase.startsWith("CL")) || (upCase.startsWith("CT")) || (upCase.startsWith("CY"))) {
            if (upCase.length === 8) {
                if (upCase.substr(2, 1) === " ") {
                    if (regNums[upCase] === undefined) {
                        regNums[upCase] = 0;
                        console.log(regNums);
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
        return regNums;
    }
    function filterRegNums(loc) {
        var town = loc || "select town";
        var locTag = '';
        var store;
        var filteredNums = [];
        store = Object.keys(regNums);
        switch (town) {
            case "Cape Town":
                locTag = "CA";
                break;
            case "Paarl":
                locTag = "CJ";
                break;
            case "Ceres":
                locTag = "CT";
                break;
            case "Stellenbosch":
                locTag = "CL";
                break;
            case "Bellville":
                locTag = "CY";
                break;
            case "select town":
                for (var x = 0; x < store.length; x++) {
                    filteredNums.push(store[x]);
                }
                return filteredNums;
        }
        for (var x = 0; x < store.length; x++) {
            if (store[x].startsWith(locTag)) {
                filteredNums.push(store[x]);
            }
        }
        return filteredNums;
    }
    function displayError() {
        return errorM;
    }
    function clearItems() {
        regNums = {};
        test = "invalid";
        upCase = '';
        errorM = '';
    }

    return {
        register: registerPlate,
        validity: validTest,
        regNum: displayRegNum,
        regList: displayRegList,
        filter: filterRegNums,
        errorText: displayError,
        clear: clearItems
    }
}