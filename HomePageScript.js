let myIndex = 0;
    function slides()
    {
        let images = document.getElementsByClassName("mySlides");
        for(let i = 0; i < images.length;i++){
            images[i].style.display = "none";
        }
        if (myIndex > images.length-1){
            myIndex = 0;
        }
        images[myIndex].style.display = "block";
        myIndex++;
        setTimeout(slides,4000);
    }

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

      // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}