function showPayInfo() {
    var x = document.getElementById("payInfo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function hidePayInfo() {
    var x = document.getElementById("payInfo");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
  }

  function showDeliveryAddress() {
    var x = document.getElementById("deliveryAddress");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function hideDeliveryAddress() {
    var x = document.getElementById("deliveryAddress");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
  }

  function copy() {
    var x = document.getElementById("10");
    var y = document.getElementById("11");
    var z = document.getElementById("12");
    var a = document.getElementById("7");
    var b = document.getElementById("8");
    var c = document.getElementById("9");  
    a.value=x.value;
    b.value=y.value;
    c.value=z.value;
  }

  function del() {
    var a = document.getElementById("7");
    var b = document.getElementById("8");
    var c = document.getElementById("9");  
    a.value="";
    b.value="";
    c.value="";
  }

  function check(){
      var i=0;
      var op1 = new Array(1,2,3,4,5,6,7,8,9);
      var op2 = new Array(1,2,3,4,5,6,7,8,9,10,11,12);
      var op3 = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
      var op4 = new Array(1,2,3,4,5,6,7,8,9,13,14,15);
      var z = document.getElementById("payInfo");
      var y = document.getElementById("deliveryAddress");
      var x;

      //deliver and pick up payment
      if(y.style.display === "block" && z.style.display === "none"){
        for(i=0; i<12; i++){
            x=document.getElementById(op2[i]);
             if(x.value ==""){
                 confirm("Some fields are empty. Fill all the fields to proceed");
                 break;
             }
          }
      //delivery and online payment
      }else if(z.style.display === "block" && z.style.display === "block"){
        for(i=0; i<15; i++){
            x=document.getElementById(op3[i]);
             if(x.value ==""){
                 confirm("Some fields are empty. Fill all the fields to proceed");
                 break;
             }
          }
      //pick up and online payment
      }else if(z.style.display === "block" && y.style.display === "none"){
        for(i=0; i<15; i++){
            x=document.getElementById(op4[i]);
             if(x.value ==""){
                 confirm("Some fields are empty. Fill all the fields to proceed");
                 break;
             }
          }
      //pick up and pick up payment
      }else{
        for(i=0; i<9; i++){
            x=document.getElementById(op1[i]);
             if(x.value ==""){
                 confirm("Some fields are empty. Fill all the fields to proceed");
                 break;
             }
          }
      }


  }