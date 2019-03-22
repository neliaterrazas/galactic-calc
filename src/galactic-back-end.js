// export function thisYear() {
//   const date = new Date();
//   const year = date.getFullYear();
//   return year;
// }



export class galacticCalc() {
  constructor(){
    this.yourAge = userAge;
    this.mercuryAge = mercuryAge;
  }

  getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
    {
      age--;
    }
    return age;
  }
  seconds(age) {
    const ageInSeconds = age * 31557600;
    return ageInSeconds;
  }

  mercury(age){
    const mercuryAge = age * 0.24;
    return mercuryAge;
  }
  venus(age){
    const venusAge = age * 0.62;
    return venusAge;
  }
  mars(age){
    const marsAge = age * 1.88;
    return marsAge;
  }
  jupiter(age){
    const jupiterAge = age * 11.86;
    return jupiterAge;
  }
}
