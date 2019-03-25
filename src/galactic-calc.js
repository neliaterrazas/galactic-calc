export class GalacticCalc {
  // constructor(age){
  //   this.age = age;
  // }
  getAge(dateString){
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }
  lifeExpectancy(lifeExpect, age) {
    const leftToLive = (lifeExpect-age) / age;
    return leftToLive;
  }
  mercuryYears(age){
    let mercuryAge = age * 0.24;
    return mercuryAge;
  }
  venusYears(age){
    let venusAge = age * 0.62;
    return venusAge;
  }
  marsYears(age){
    let marsAge = age * 1.88;
    return marsAge;

  }
  jupiterYears(age){
    let jupiterAge = age * 11.86;
    return jupiterAge;
  }
}
