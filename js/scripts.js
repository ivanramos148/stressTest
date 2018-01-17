$(document).ready(function() {
  $("form#stress").submit(function(event) {
    event.preventDefault();
    $("#results").show();


    var warningSigns = 0;
    var highStress = 0;
    var copingMethods = 0;

    $("input:checkbox[name=warning-signs]:checked").each(function() {
      var amount = parseInt($(this).val());
      warningSigns = warningSigns + amount;
    });
    $("input:checkbox[name=high-stress]:checked").each(function() {
      var amount = parseInt($(this).val());
      highStress = highStress + amount;
    });
    $("input:checkbox[name=coping-methods]:checked").each(function() {
      var amount = parseInt($(this).val());
      copingMethods = copingMethods + amount;
    });

    $("#results").show();
    $("#stress").hide();

      if (copingMethods > warningSigns && copingMethods > highStress) {
        $("#results").append("Your coping methods are better than warning signs and high stress. <br>");
      } else {
        if (copingMethods>highStress){
          $("#results").append("Your coping methods are better than high stress. <br>");
        }
        if (copingMethods>warningSigns){
          $("#results").append("Your coping methods are better than warning signs. <br>");
        }
      }
      if (copingMethods < warningSigns && copingMethods < highStress) {
        $("#results").append("Your mental health sucks. <br>");
      } else {
        if (warningSigns>copingMethods){
          $("#results").append("Your warning signs are greater than coping methods. <br>");
        }
        if (highStress>copingMethods){
          $("#results").append("Your high stress is greater than coping methods. <br>");
        }
      }
      if (copingMethods == warningSigns && warningSigns == highStress) {
          $("#results").append("You are balanced. <br>");
      }




    console.log("warning"+warningSigns);
    console.log("highStress"+highStress);
    console.log("copingMethods"+copingMethods);
    //$('#stress').hide();
  });
});
