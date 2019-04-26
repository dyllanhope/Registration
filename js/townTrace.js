function TownTrace() {
    var regNums = {};
    var test = "invalid";
    var upCase = '';

    function registerPlate(plateNum) {
        //CA,CJ,CL,CT,CY
        upCase = plateNum.toUpperCase();
        if ((upCase.startsWith("CA")) || (upCase.startsWith("CJ")) || (upCase.startsWith("CL")) || (upCase.startsWith("CT")) || (upCase.startsWith("CY"))) {
            if (regNums[upCase] === undefined) {
                regNums[upCase] = 0;
            }
            console.log(regNums);
            test = "valid";
        } else {
            test = "invalid";
        }
    }
    function validTest() {
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
    function filterRegNums(town) {
        var store;
        var filteredNums = [];
        store = Object.keys(regNums);
        switch (town) {
            case "Cape Town":
                for (var x = 0; x < store.length; x++) {
                    if (store[x].startsWith("CA")) {
                        filteredNums.push(store[x]);
                    }
                }
                return filteredNums;
            case "Paarl":
                for (var x = 0; x < store.length; x++) {
                    if (store[x].startsWith("CJ")) {
                        filteredNums.push(store[x]);
                    }
                }
                return filteredNums;
            case "Ceres":
                for (var x = 0; x < store.length; x++) {
                    if (store[x].startsWith("CT")) {
                        filteredNums.push(store[x]);
                    }
                }
                return filteredNums;
            case "Stellenbosch":
                for (var x = 0; x < store.length; x++) {
                    if (store[x].startsWith("CL")) {
                        filteredNums.push(store[x]);
                    }
                }
                return filteredNums;
            case "Bellville":
                for (var x = 0; x < store.length; x++) {
                    if (store[x].startsWith("CY")) {
                        filteredNums.push(store[x]);
                    }
                }
                return filteredNums;
            case "select town":
                for (var x = 0; x < store.length; x++) {
                    filteredNums.push(store[x]);
                }
                return filteredNums;
        }
    }



    return {
        register: registerPlate,
        validity: validTest,
        regNum: displayRegNum,
        regList: displayRegList,
        filter: filterRegNums
    }
}