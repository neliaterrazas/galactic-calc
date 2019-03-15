import { todaysDate } from "../src/galactic-back-end.js";
import { seconds } from "../src/galactic-back-end.js";


describe ("how many seconds have you lived?", function() {
  it('should return my age(years) in seconds', function(){
    const nelia = 25;
    expect(seconds(nelia)).toEqual(788940000);
  });
});
