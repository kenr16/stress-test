$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    $("#pos-responses").show();
    var totalArray = [];
    $("input:checkbox[name=pos-event]:checked").each(function(){
      var posResponses = $(this).val();
      totalArray.push(posResponses);
      $('#pos-responses').append(posResponses + "<br>");
    });

    $("#neg-responses").show();
    $("input:checkbox[name=neg-event]:checked").each(function(){
      var negResponses = $(this).val();
      totalArray.push(negResponses);
      $('#neg-responses').append(negResponses + "<br>");
    });
    $('#stress_survey').hide();

    var symptomArray = [];
    $("#sym-responses").show();
    $("input:checkbox[name=symptom]:checked").each(function(){
      var symResponses = $(this).val();
      symptomArray.push(symResponses);
      $('#sym-responses').append(symResponses + "<br>");
    });
    $('#stress_survey').hide();

    if (totalArray.length >= 2 && symptomArray.length >=3) {
      $("#site1").show();
    }





  //   var userResponses = [];
  //   $("input:checkbox[name=work-transportation]:checked").each(function(){
  //     var workTransportationMode = $(this).val();
  //     userResponses.push(workTransportationMode);
  //   });
  //   alert(userResponses);
  //
  //
  //   $("input:checkbox[name=work-transportation]:checked").each(function(){
  //    var workTransportationMode = $(this).val();
  //    var capitalWorkTransportationMode = workTransportationMode.toUpperCase();
  //
  //    alert(capitalWorkTransportationMode);
  //  });



  });
});
