
   function bug1() { // the keyword function is missing 
      const people = [{
        name: 'Alice',
        age: 25
      }, {
        name: 'Bob',
        age: 27
      }, {
        name: 'Charlie',
        age: 40
      }];

      for (let person of people) { //the error here is the of instead of the in
        console.log(`${person.name} is ${person.age}`);
      }
    }

    


bug1();

//timeout funcation was calling after the loop finish in that time the i value will be at 6 which then try to print all the five itratioin 
function bug8() {
    
      for (var i = 1; i < 5; i++) {

     (function(i){ 

         setTimeout(function() { console.log(i) }, 100*i);//the soluation is creating a self-excuted function

     })(i);

}
    }




bug8();


