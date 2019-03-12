import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { translate, translate2 } from './translator.js';

$(document).ready(function(){
  $("form#translate").submit(function(event){
    event.preventDefault();
    $(".result").text(translate($("input").val()));
  });
});
