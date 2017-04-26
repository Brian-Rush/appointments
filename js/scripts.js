$(function(){
  $("form#appointmentOne").submit(function(event){
    event.preventDefault();
    var name = $("#name1").val();
    var description = $("#description1").val();
    var startDateTime = $("#startDateTime1").val();
    var endDateTime = $("#endDateTime1").val();


    $("#nameShow").show();
    $("#nameOutput").text(name);
    $("#descriptionOutput").text(description);
    $("#startDateOutput").text(startDateTime);
    $("#endDateOutput").text(endDateTime);
  });
});
