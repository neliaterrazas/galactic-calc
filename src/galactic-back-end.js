export function thisYear() {
  const date = new Date();
  const year = date.getFullYear();
  return year;
}

export function getAge() {
    let today = new Date();
    let birthDate = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    age --;
      return age.toDateString();
    }



export function seconds(age) {
  const ageInSeconds = age * 31557600;
  return ageInSeconds;
}


export function mercury(age){
  const mercuryAge = age * 0.24;
  return mercuryAge;
}
export function venus(age){
  const venusAge = age * 0.62;
  return venusAge;
}
export function mars(age){
  const marsAge = age * 1.88;
  return marsAge;
}
export function jupiter(age){
  const jupiterAge = age * 11.86;
  return jupiterAge;
}
