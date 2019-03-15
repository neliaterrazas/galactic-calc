import $ from 'jquery';
import { thisYear } from "../src/galactic-back-end.js";
import { seconds } from "../src/galactic-back-end.js";
import { getAge } from "../src/galactic-back-end.js";
import { mercury } from "../src/galactic-back-end.js";
import { venus } from "../src/galactic-back-end.js";
import { mars } from "../src/galactic-back-end.js";
import { jupiter } from "../src/galactic-back-end.js";

$(document).ready(function(){
  $('#calendar').submit(function(event){
    event.preventDefault();
    let dob = $("#born").val();

    $('.result').append(dob);



  });
});
