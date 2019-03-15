import { todaysDate } from "../src/galactic-back-end.js";
import { seconds } from "../src/galactic-back-end.js";
import { mercury } from "../src/galactic-back-end.js";
import { venus } from "../src/galactic-back-end.js";
import { mars } from "../src/galactic-back-end.js";
import { jupiter } from "../src/galactic-back-end.js";

describe ("how many seconds have you lived?", function() {
  it('should return my age(years) in seconds', function(){
    const nelia = 25;
    expect(seconds(nelia)).toEqual(788940000);
  });
});

describe ("what is my age on other planets?", function() {
  it('should return my age(years) on Mercury', function(){
    const nelia = 25;
    expect(mercury(nelia)).toEqual(6);
  });
  it('should return my age(years) on Venus', function(){
    const nelia = 25;
    expect(venus(nelia)).toEqual(15.5);
  });
  it('should return my age(years) on Mars', function(){
    const nelia = 25;
    expect(mars(nelia)).toEqual(47);
  });
  it('should return my age(years) on Jupiter', function(){
    const nelia = 25;
    expect(jupiter(nelia)).toEqual(296.5);
  });
});
