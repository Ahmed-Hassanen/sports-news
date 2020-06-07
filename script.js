function showTab(n) {
  
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
 
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
        document.getElementById("nextBtn").style.display = "none";
              document.getElementById("submit").style.display = "inline";
       



  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
                    document.getElementById("submit").style.display = "none";
              document.getElementById("nextBtn").style.display = "inline";


  }
  

  fixStepIndicator(n)
}
function nextPrev(n) {
      var x = document.getElementsByClassName("tab");

if ([currentTab]==3 && n==1) {
valiForm();

}

    else{
   if (n == 1 && !validateForm()) {alert("Please, Enter your information correctly");return false;}

  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
        showTab(currentTab);
    }
  
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
    
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }

    if([currentTab]==0){
  
        var letters = /^[A-Za-z]+$/;
    if(document.getElementById("fname").value.match(letters)){
    valid= true;
}else{valid=false;document.getElementById("fname").focus();document.getElementById("fname").value="";return false;}
    
    
   
    if(document.getElementById("lname").value.match(letters)){
    valid= true;
}else{valid=false;document.getElementById("lname").focus();document.getElementById("lname").value="";}
    
    
    
    }
        
        
    
    
    
    if([currentTab]==1){
        var em=document.getElementById("email").value;
                var ph=document.getElementById("phone").value;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var phoneformat=/^\d{11}$/;
if(em.match(mailformat)){
    valid =true;
}else{valid=false;    document.getElementById("email").focus();document.getElementById("email").value="";return false;
}
if(ph.match(phoneformat)){
    valid =true;
}else{valid=false;    document.getElementById("phone").focus();document.getElementById("phone").value="";
}

    }
    
    
    
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}
    
    
    function valiForm() {
  str=document.getElementById("pass").value;
        
                 var low= /[a-z]/g;
                 var numbers= /[0-9]/g;
                 var sympoles=/[-\_\#\&\*\@\!\$\%\^\(\)\+\=\;\:\"\'\?\,\<\>\|\،\.\~]/;
                 m=str.charAt(0); 
            
                 if(str.search(/[0-9]/)==-1 || str.search(/[-\_\#\&\*\@\!\$\%\^\(\)\+\=\;\:\"\'\?\,\<\>\|\،\.\~]/)==-1 || str.indexOf(' ')>0 || m.match(low) || m.match(numbers) || m.match(sympoles) || str.length != 8){
                    alert("password must be 8 characters and begins with uppercase include digit, special character no spaces");
                                          document.getElementById("pass").focus();
                     return false;

                 }
                 else{
               
                 alert("Thank you for sign , Welcome to my page");
  location.replace("news.html");
                     return true;

                }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("main").style.display = "none";


 
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
          document.getElementById("main").style.display = "block";

}


var slideIndex = 0;


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}


function ShowHide(divId, aId) {

  if (document.getElementById(divId).style.display == 'inline') {
document.getElementById(divId).style.display='none';
      document.getElementById(aId).innerHTML='Read more';

  } 
    else {
document.getElementById(divId).style.display='inline'; 
              document.getElementById(aId).innerHTML='Read less';
        
  }
}
function Buy(z){
    if(document.getElementById(z).value ==0){
        alert("you should enter a number");
    }
    else{
    
    alert("Done");
    var x=document.getElementById("chart").value;
    
    var y=document.getElementById(z).value;
    var i;
    for(i=0;i<y;i++){x++;}
    
    document.getElementById("chart").value=x;
    }
}
function cancle(){
        document.getElementById("chart").value="0";

}

  

