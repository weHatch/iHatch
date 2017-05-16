var modalUp = false
var modal = document.getElementById('myModal')

$(document).ready(function(){
    console.log("js connected");

    // $('.body').css('visibility', 'visible')

    $('.adding').click(function() {
      $('.initialForm').toggleClass('active')
      $('.adding').toggleClass('green')
    })
    $('.cancel').click(function() {
      $('.initialForm').toggleClass('active')
      $('.adding').toggleClass('green')
    })
})
