import { GalacticCalc } from "../src/galactic-calc.js";




//
// describe ("how many seconds have you lived?", function() {
//   it('should return my age(years) in seconds', function(){
//     const nelia = 25;
//     expect(seconds(nelia)).toEqual(788940000);
//   });
// });

let x = new GalacticCalc(3);
describe ("lifeExpectancy ratio", function() {
  it('should return ratio of years left to live', function(){
    let test = x.lifeExpectancy(80, 20);
    expect(test).toEqual(3);
  });
});
describe ("mercuryYears", function() {
  it('should return age of user on Mercury', function(){
    let test = x.mercuryYears(100);
    expect(test).toEqual(24);
  });
});
describe ("venusYears", function() {
  it('should return age of user on Venus', function(){
    let test = x.venusYears(100);
    expect(test).toEqual(62);
  });
});
describe ("marsYears", function() {
  it('should return age of user on Mars', function(){
    let test = x.marsYears(100);
    expect(test).toEqual(188);
  });
});
describe ("jupiterYears", function() {
  it('should return age of user on Jupiter', function(){
    let test = x.jupiterYears(100);
    expect(test).toEqual(1186);
  });
});

// describe ("what is your current age on Mercury?", function() {
//   it('should return 6', function(){
//     const birthday = "Jan 17 1994";
//
//     expect(mercury(getAge(birthday))).toEqual(6);
//   });
// });

// describe ("what is my age on other planets?", function() {
//   it('should return my age(years) on Mercury', function(){
//     const nelia = 25;
//     expect(mercury(nelia)).toEqual(6);
//   });
//   it('should return my age(years) on Venus', function(){
//     const nelia = 25;
//     expect(venus(nelia)).toEqual(15.5);
//   });
//   it('should return my age(years) on Mars', function(){
//     const nelia = 25;
//     expect(mars(nelia)).toEqual(47);
//   });
//   it('should return my age(years) on Jupiter', function(){
//     const nelia = 25;
//     expect(jupiter(nelia)).toEqual(296.5);
//   });
// });
