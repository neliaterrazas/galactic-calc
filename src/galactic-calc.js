export class GalacticCalc {
  constructor(){
    this.age = age;
  }
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
  lifeExpectancy(dateString) {
    const average = 80;
    let current = getAge(dateString);
    const leftToLive = average - current;
    return ("You are expected to live for " + leftToLive + " more years!");
  }
  mercuryYears(){
    let mercuryAge = age * 0.24;
    return mercuryAge;
  }
  venusYears(){
    let venusAge = age * 0.24;
    return mercuryAge;
  }
  marsYears(){
    let marsAge = age * 0.24;
    return mercuryAge;

  }
  jupiterYears(){
    let jupiterAge = age * 0.24;
    return mercuryAge;
  }
}
