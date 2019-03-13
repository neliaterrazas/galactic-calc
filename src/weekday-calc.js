

export function dayName(year, month, day) {

  const date = new Date(year, month, day);

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let newDayTwo = weekDays[date.getDay()];
  // let newDay = weekDays[day];
  return newDayTwo;
}
function monthName(month) {
  const findMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let desiredMonth = findMonths(month);
}
