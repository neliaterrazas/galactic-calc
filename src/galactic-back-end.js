export function todaysDate (year, month, day) {
  const date = new Date(year, month, day);
  return date;
}
 export function calculateAge(dateString) {
  const today = new Date();
  const birthday = new Date(dateString);
  let age = today.getFullYear() - birthday.getFullYear();
  const month = today.getMonth  - birthday.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
}
export function mercury(){

}
export function venus() {

}
export function mars() {

}
export function jupiter() {

}
