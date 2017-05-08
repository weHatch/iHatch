var modalUp = false
var modal = document.getElementById('myModal')

$(document).ready(function(){
    console.log("js connected");

    //click on section to open modal edit window
    $('#modalFrame').click(function(){
      modal.style.display = "flex"
      modalUp = true
    })

    $("#modalCancel").click(function(){
        modalUp = false
        modal.style.display = "none"
      })


})
