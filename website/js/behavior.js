document.addEventListener("DOMContentLoaded", function(event) {
  // alert("Hello!");
  var thumbnailElement = document.getElementById("smart_thumbnail");
  thumbnailElement.addEventListener("click", function() {
    // write here
    // alert("I saw you click!");
    if (thumbnailElement.className == "") {
      // write here the code that will execute if the image is big
      thumbnailElement.className = "small";
    } else {
      thumbnailElement.className = "";
    }
  });
});
