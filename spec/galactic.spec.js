import { todaysDate } from "../src/galactic-back-end.js";
import { calculateAge } from "../src/galactic-back-end.js";


describe ("what day is it?", function() {
  it('should tell me todays date', function(){
    const date = new todaysDate();
    expect(todaysDate.toString()).toEqual("date");

  });
});
