import $ from 'jquery';

$(document).ready(function(){
  $('form#date').submit(function(event){
    event.preventDefault();

    const month = ($('#month').val() - 1);
    const day = $('#day').val();
    const year = $('#year').val();




  });
});
