$(".button-collapse").sideNav();

$(document).ready(function (){
  $("#registreren").on('click', function(){
     Materialize.toast("You're registred", 3000, 'rounded');

   });


        $(".winkelzoeken").on('focus',function() {
          $("#googlefoto").hide();
        })

        $( ".winkelzoeken" ).focusout(function() {
          $("#googlefoto").show();
        })


})
