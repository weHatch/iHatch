var modalUp = false
var modal = document.getElementById('myModal')

$(document).ready(function(){
    console.log("js connected");

    // $('.body').css('visibility', 'visible')

    $('.adding').click(function() {
      $('#myModal').toggleClass('active');
      $('#modalFrame').toggleClass('green')
    })
    $('#modalCancel').click(function() {
      $('#myformModal').toggleClass('active')
      $('#modalFrame').toggleClass('green')
    })
})
