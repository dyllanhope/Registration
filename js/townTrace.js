function TownTrace() {
    var regNums = [];
    var test = "invalid";
    var upCase = '';

    function registerPlate(plateNum) {
        //CA,CJ,CL,CT,CY
        upCase = plateNum.toUpperCase();
        if ((upCase.startsWith("CA")) || (upCase.startsWith("CJ")) || (upCase.startsWith("CL")) || (upCase.startsWith("CT")) || (upCase.startsWith("CY"))) {
            regNums.push(upCase);
            console.log(regNums);
            test = "valid";
        } else {
            test = "invalid";
        }
    }
    function validTest(){
        if(test === "valid"){
            return test;
        } else {
            return test;
        }
    }
    function displayRegNum(){
        return upCase;
    }





    return {
        register: registerPlate,
        validity: validTest,
        regNum: displayRegNum
    }
}