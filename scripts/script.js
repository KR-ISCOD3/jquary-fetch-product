$(document).ready(function(){
    $("#list").click(function(){
      $("#listContainer").removeClass('d-none');
      $("#listCard").addClass('d-none');

      $("#list").addClass('d-none');
      $("#card").removeClass('d-none');
    })

    $("#card").click(function(){
      $("#listContainer").addClass('d-none');
      $("#listCard").removeClass('d-none');

      $("#list").removeClass('d-none');
      $("#card").addClass('d-none');
    })

}) 