let startVar=1;

//window.alert(startVar);


function onLoadmyFunc()
{
  var x = document.querySelectorAll("[id^='myDIV']");
  var x_01 = document.querySelectorAll("[id^='myDIV01']");


  if(startVar===10)
  {
   // window.alert("Englishhhhh");
    x.forEach(function(element) {
      element.style.display = "block";
    });
    x_01.forEach(function(element) {
      element.style.display = "none";
    });
  }

  else{

  //  window.alert("arabic");
    x.forEach(function(element) {
      element.style.display = "block";
    });
    x_01.forEach(function(element) {
      element.style.display = "none";
    });
  }
}

function myFunction() {
    var x = document.querySelectorAll("[id^='myDIV']");
    var x_01 = document.querySelectorAll("[id^='myDIV01']");

    if (x[0].style.display === "none") {
      x.forEach(function(element) {
        element.style.display = "block";
      });

      x_01.forEach(function(element) {
        element.style.display = "none";
      });

      startVar=10;
    } 
    else {
      x.forEach(function(element) {
        element.style.display = "none";
      });
      x_01.forEach(function(element) {
        element.style.display = "block";
      });
      startVar=20;
    }
}
