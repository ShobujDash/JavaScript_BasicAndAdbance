// function returning function

function myFucn() {
  function hello() {
    return "hello world"
  }
  return hello;
}

const ans = myFucn();
console.log(ans())