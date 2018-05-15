var arguments = process.argv;
var inputArguments = arguments.slice(2);
var sum = 0;
for (var i = 0; i < inputArguments.length; i++) {
  var inputValue = parseInt(inputArguments[i]);
  if(typeof inputValue === 'number' ) {
    sum += inputValue;  
  }
}
console.log(sum);