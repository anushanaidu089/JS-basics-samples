(function(){

    // sample function
    function addition(fName,lName){
        var x = {
            firstName: fName,
            lastName: lName
        };
        return x;
    }

    var output = addition('anusha','naidu');
    var output2 = addition();

    // result
    /*
        output = {
            firstName: 'anusha',
            lastName: 'naidu'
        };
    */
})();