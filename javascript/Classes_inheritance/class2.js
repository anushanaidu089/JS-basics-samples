// IIFE CONSTRUCT
(function(){

    function substract(greater, lesser){
        // to convert a function into a class, we use 'this' keyword inside the function
        this.output = (greater - lesser);

        this.result = {
            firstName: 'anusha'
        };


        this.result2 = {
            lastName: 'naidu'
        }


    }
    /*
        substract = {
            output: (greater - lesser),
            result: {
                firstName: 'Anusha'
            },
            result2: {
                lastName: 'Naidu'
            }
        }
    */

    var alpha = new substract(5,2);

    /*
        var alpha = {
            output: 3
        };
    */
    alpha.output = 'Anusha';
    alpha.output2 = 55;

    console.log(alpha);



})();