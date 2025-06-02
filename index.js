 let count = 0;

    function plus() {
      count++;
      document.getElementById("counter").textContent = count;
    }
     function minus(){
      count--;
      document.getElementById("counter").textContent = count;

     }
      function resetCounter() {
      count = 0;
      document.getElementById("counter").textContent = count;
    }