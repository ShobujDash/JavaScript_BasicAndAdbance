//Lexical scope
const myVar = "value1";
function myApp(){
  // const myVar = "value1";
  function myFunc() {
    // const myVar = "value59";
    const myFunc2 = () => {
        
      console.log("inside myFucn", myVar);
      };
      myFunc2()
  }

  const myFunc3 = () => {
  
  }
  console.log(myVar)
  myFunc()
}

myApp()