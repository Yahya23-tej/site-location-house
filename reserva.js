function checkPrice1(){
    var s = document.getElementById("duration").value;
    var x = document.getElementById("choice").value;
    var timeprice = document.getElementById("price-times");
    var carprice = document.getElementById("price1");
    var total = document.getElementById("price3");
    var priceHour;
    var priceCar;
    if(s === "1 DAY"){
        priceHour = 100;
        priceHour.toString();
        timeprice.innerHTML = priceHour + " DH";
    }
    if (s === "4 DAYS"){
        priceHour = 200;
        priceHour.toString();
        timeprice.innerHTML = priceHour + " DH";
    }
    if(s === "6 DAYS"){
        priceHour = 300;
        priceHour.toString();
        timeprice.innerHTML = priceHour + " DH";
    }
   
    if(x === "VILLA"){
        priceCar = 300;
        priceCar.toString();
        carprice.innerHTML = priceCar + " DH";
    }
    if(x === "HOUSE"){
        priceCar = 400;
        priceCar.toString();
        carprice.innerHTML = priceCar + " DH";
    }
    if(x === "APPARTEMENT"){
        priceCar = 600;
        priceCar.toString();
        carprice.innerHTML = priceCar + " DH";
    }
   var t  = priceCar + priceHour ;
   total.innerHTML ="The Total price is " + t + " DH";
}



function checkPrice2(){
    var totalprice =document.getElementById("price3");
   var totalprice =  checkPrice.value +  checkPrice1.value;
   alert(totalprice);
}


  function validmailR(){
    var mail = document.getElementById("Email-resere").value;
    var error = document.getElementById("eroo");
    var text;
    
    if (!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      text = "invalid mail";
      error.style.color = "red";
      error.style.fontSize = '17px';
      error.style.display = 'initial';
      error.innerHTML = text;
      return false;
    }
    else{
      text = "valid mail"
      error.style.color = "#008000";
      error.style.fontSize = '17px';
      error.innerHTML = text;
    
     return true;
     }
    }

    function validmailRP(){
    var phone = document.getElementById("phone-number").value;
    var error = document.getElementById("eroo1");
    var text;
    
    if (!phone.match(/(?=.*(06|07|05))[0-9]{10}/)){
      text = "invalid number";
      error.style.color = "red";
      error.style.fontSize = '17px';
      error.style.display = 'initial';
      error.innerHTML = text;
      return false;
    }
    
      text = "valid number";
      error.style.color = "#008000";
      error.style.fontSize = '17px';
      error.innerHTML = text;
     
    
     return true;
     
    }


    function validationR(){
      
        
    }
    function validCar(){
      
      var car = document.getElementById("choice").value;
      var time = document.getElementById("duration").value;
    
  
     if(time === "DAYS" || car === "CHOOSE YOUR HOUSE" ||(validmailRP() == false) || (validmailR() == false)){
       alert("please cheack your information");
     }
     else{
       alert("you HOUSE have reserved successfully");
     }
    }