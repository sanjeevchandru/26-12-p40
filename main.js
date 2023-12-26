document.write("49.that takes an array of numbers and returns the third smallest number."+"<br>");
    function test49(arr){
        var x=arr.sort(function(a,b){
            return b-a;
        })[arr.length-3]
        return x;
    }
    document.write("The array : [2,3,5,7,1]"+"<br>")
    document.write(test49([2,3,5,7,1])+"<br>");
    // document.write(test49([2, 3, 0, 5, 7, 8, -2, -4])+"<br><br>");