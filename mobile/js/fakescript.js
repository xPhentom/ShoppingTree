$(document).ready(function (){
  document.addEventListener("keydown", function(event) {
    console.log(event.which);
    if(event.which == 109){ // - knop
      var waarde = $("#progressveranderenbar").text();
      waarde = parseInt(waarde);
      waarde = waarde - 5;

      if (waarde < 0)
        return;

      console.log(waarde);

      var kleur;

      if (waarde > 80)
        kleur = "progress-bar-danger";
      else if (waarde > 50)
        kleur = "progress-bar-warning";
      else
        kleur = "progress-bar-success"

      $("#progressveranderen").empty();
      $("#progressveranderen").append('<div class="progress-bar ' + kleur + ' progress-bar-striped active" id="progressveranderenbar" role="progressbar" aria-valuenow="'+waarde+' " aria-valuemin="0" aria-valuemax="100" style="width:'+waarde+'%"> '+waarde+' </div>');
    }
    else if (event.which == 107) {// + knop
      var waarde = $("#progressveranderenbar").text();
      waarde = parseInt(waarde);
      waarde = waarde + 5;
      console.log(waarde);

      if (waarde > 100)
        return;


      var kleur;

      if (waarde > 80)
        kleur = "progress-bar-danger";
      else if (waarde > 60)
        kleur = "progress-bar-warning";
      else
        kleur = "progress-bar-success"

      $("#progressveranderen").empty();
      $("#progressveranderen").append('<div class="progress-bar ' + kleur + ' progress-bar-striped active" id="progressveranderenbar" role="progressbar" aria-valuenow="'+waarde+' " aria-valuemin="0" aria-valuemax="100" style="width:'+waarde+'%"> '+waarde+' </div>');

    }
  })
})
