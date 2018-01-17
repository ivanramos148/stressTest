$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    $("work").show();
    var blankArray = [];
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var work = $(this).val();
      console.log(work);
      blankArray.push(work);
      //$('#work').append(work + "<br>");
    });
    blankArray.sort();
    for (var i = 0; i < blankArray.length; i++) {
      console.log(work);
      $('#work').append(blankArray[i] + "<br>");
    }
    $('survey').hide();
  });
});
