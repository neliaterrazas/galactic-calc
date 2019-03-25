import $ from 'jquery';
import { GalacticCalc } from "../src/galactic-calc.js";


$(document).ready(function(){
  $('#calendar').submit(function(event){
    event.preventDefault();
    let dob = $("#born").val();

    $('.result').append(dob);



  });
});
