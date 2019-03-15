import $ from 'jquery';
import { thisYear } from "../src/galactic-back-end.js";
import { seconds } from "../src/galactic-back-end.js";
import { getAge } from "../src/galactic-back-end.js";
import { mercury } from "../src/galactic-back-end.js";
import { venus } from "../src/galactic-back-end.js";
import { mars } from "../src/galactic-back-end.js";
import { jupiter } from "../src/galactic-back-end.js";

$(document).ready(function(){
  $('form#date').submit(function(event){
    event.preventDefault();

    let yourMonth = ($('input#month').val() - 1);
    let yourDay = $('input#day').val();
    let yourYear = $('input#year').val();

    if (isNaN(yourMonth) || isNaN(yourDay) || isNaN(yourYear)) {
      $(".result").text("Please enter number values only");
    } else {
      $('.result').text(getAge(yourMonth, yourDay, yourYear));
    }



  });
});
