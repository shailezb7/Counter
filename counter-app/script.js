var countElement = document.getElementById('count');


var increment = document.getElementById('increment');


var decrement = document.getElementById('decrement');


 var count = 0;


 function delCounter(value) {
    count += value;
   countElement.textContent = count;
 }

  increment.addEventListener('click', function() {
    updateCounter(1);
  });


   decrement.addEventListener('click', function() {
     updateCounter(-1);
  });