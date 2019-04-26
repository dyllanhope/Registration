function TownTrace() {
    var regNums = [];
    var test = "invalid";

    function registerPlate(plateNum) {
        //CA,CJ,CL,CT,CY
        var upCase = plateNum.toUpperCase();
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






    return {
        register: registerPlate,
        validity: validTest
    }
}