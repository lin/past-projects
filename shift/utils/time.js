function get_number_of_days(month){
  return new Date(new Date().getYear(), month, 0).getDate();
}

function get_holidays(month, holidays_list) {
  var real_holidays = holidays_list[month];
  var holidays = [];
  for (var i = 0; i < real_holidays.length; i++) {
      holidays.push(real_holidays[i] - 1);
  }
  return holidays;
}
