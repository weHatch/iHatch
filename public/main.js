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

    $('.continue').click(function()  {
      $('fadeIn1').toggleClass('active')
      $('.continue').toggleClass('hidden')
    })

    $('.continue1').click(function() {
      $('fadeIn2').toggleClass('active')
      $('.continue1').toggleClass('hidden')
    })

    $('.continue2').click(function() {
      $('fadeIn3').toggleClass('active')
      $('.continue2').toggleClass('hidden')
    })
})
