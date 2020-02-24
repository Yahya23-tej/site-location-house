var slideIndex = 1;

showImage(slideIndex);

function plusIndex(n){
    showImage(slideIndex += n);
}

function showImage(n){
    var slide = document.getElementsByClassName("slides");
    
    if ( n > slide.length) { slideIndex = 1};
    if ( n < 1) {slideIndex = slide.length};

    for (var i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    };
    slide[slideIndex-1].style.display = "block";
}






function validfullname(){
    var name = document.getElementById("full-name").value;
    var error = document.getElementById("erooo1");
  
    if(!name.match(/^[A-Z ]{10}/ )){
        text = "unvalid name"
        error.innerHTML = text;
        error.style.color = "red";
        return false;
    }
    else{
        text = "valid Name"
        error.style.color = "#008000";
        error.innerHTML = text;
  
    return true;
    }
  }
  
  
  function validmailS(){
  var mailS = document.getElementById("emailS").value;
  var error = document.getElementById("erooo2");
  var text;
  
  if (!mailS.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    text = "invalid mail";
    error.style.color = "red";
    error.innerHTML = text;
    return false;
  }
  else{
  
    text = "valid mail"
    error.style.color = "#008000";
    error.innerHTML = text;
  
   return true;
   }
  }
  
  
    function validpasswordS(){
      var passwordS = document.getElementById("passwordS1").value;
      var error = document.getElementById("erooo3");
      var text;
      
      if (!passwordS.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
        text = "invalid password";
        error.style.color = "red";
        error.innerHTML = text;
        return false;
      }
      else{
       text = "valid password"
       error.style.color = "#008000";
       error.innerHTML = text;
      
       return true;
       }
    
      }
  
  
      function revalidpassword(){
        var password = document.getElementById("passwordS1").value;
        var password2 = document.getElementById("passwordS2").value;
        var error = document.getElementById("erooo4");
  
  
        if(password2 != password){
          text = "invalid password";
          error.style.color = "red";
          error.innerHTML = text;
          return false;
        }
        else{
          text = "valid password"
          error.style.color = "#008000";
          error.innerHTML = text;
  
          return true;
         
        }
    }
  
  
  function validationS(){
    var showme = document.getElementById("mirror");
    var name = document.getElementById("full-name").value;
    var passwordS = document.getElementById("passwordS1").value;
    var mailS = document.getElementById("emailS").value;
    var show = document.getElementById("show1");
    var mailSC = document.getElementById("show2");
    var passwordSC = document.getElementById("show3");
  
    if( validfullname() == false || validmailS() == false || validpasswordS() == false || revalidpassword() == false ){
      alert("please check your information");
  
    }
    else{
      alert("A pop window will soon apear please confirm your information");
      showme.style.bottom = "45px";
      showme.style.transition = "all.9s ease-in-out";
      show.innerHTML = name ;
      mailSC.innerHTML = mailS ;
      passwordSC.innerHTML = passwordS;
     
    }
  }







