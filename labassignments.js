let g = 80
if(g >= 90){
    console.log("YOUR GRADE IS A");
}
else if(g >= 80){
    console.log("YOUR GRADE IS B");
}
else if(g >= 70){
    console.log("YOUR GRADE IS c");
}
else if(g < 70){
    console.log("YOUR GRADE IS F");
}


let numbers = [10, 15, 20, 25, 30];


for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) {
    console.log(numbers[i]);
  }
}

for (let num of numbers) {
    if (num % 5 === 0) {
      console.log(num);
    }
  }

  
  numbers.forEach(function(num) {
    if (num % 5 === 0) {
      console.log(num);
    }
  });
  

  let count = 10;

while (count > 0) {
  console.log(count);
  if (count === 5) {
    console.log("Stopped early!");
    break;
  }
  count--;
}

for (let i = 10; i > 0; i--) {
  if (i === 5) {
    console.log(i);
    console.log("Stopped early!");
    break;
  }
  console.log(i);
}
