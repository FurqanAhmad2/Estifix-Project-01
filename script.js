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
    } 
    else {
      x.forEach(function(element) {
        element.style.display = "none";
      });
      x_01.forEach(function(element) {
        element.style.display = "block";
      });
    }
}
