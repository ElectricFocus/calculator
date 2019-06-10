$('button').click(function() {
    var number1 = parseInt($('.equation1').val());
    var sign = $('.signa').val();
    var number2 = parseInt($('.equation2').val());
    var answer = 0;
    
    // if sign is +, add number1 and number2
    
    if (sign === '+') {
        answer = number1 + number2;
    }
    
   
    else if (sign === 'x') {
    answer = number1 * number2;
}
  else if (sign === '-') {
    answer = number1 - number2;
  
  }
  else if (sign === '/') {
    answer = number1 / number2;
  }
  else if (sign === 'ex') {
    answer =  Math.pow(number1,number2);
  }
  
  else if (sign === '(') {
    answer = Math.sqrt(number1);
  }
  else if (sign === ')') {
 answer = Math.sqrt(number2);
  }
 
 
  $('.answer').text(answer);

});