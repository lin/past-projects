function generate_initial_data_array(number_of_people, number_of_days, holidays) {
  var data_array = [];
  for (var i = 0; i < number_of_people; i++) {
    var person_array = [];
    for (var j = 0; j < number_of_days; j++) {
      holidays.includes(j) ? person_array.push(shift_type.holiday.index) : person_array.push(shift_type.none.index);
    }
    data_array.push(person_array);
  }
  return data_array;
}

function copy_data_array(data_array) {
  var copied_data_array = [];
  for (var i = 0; i < data_array.length; i++) {
    var people_array = [];
    for (var j = 0; j < data_array[0].length; j++) {
      people_array.push(0);
    }
    copied_data_array.push(people_array);
  }
  return copied_data_array;
}

function stringify_data_array(data_array) {
  var stringified_array = [];
  for (var i = 0; i < data_array.length; i++) {
    stringified_array.push(data_array[i].to_s());
  }
  return stringified_array;
}

function get_average_point(data_array, holidays, number_of_people_on_each_day_shift) {
  var average_night_count = get_average_night_count(data_array, holidays);
  var average_day_count   = get_average_day_count(data_array, holidays, number_of_people_on_each_day_shift);
  var average_noon_count  = average_day_count / (number_of_people_on_each_day_shift - 1);
  var average_duty_count  = get_average_duty_count(data_array, holidays);

  return (average_night_count * POINTS_PER_NIGHT + average_day_count * POINTS_PER_DAY + average_noon_count * POINTS_PER_NOON + average_duty_count * POINTS_PER_DUTY).toFixed(2);
}

function get_average_duty_count(data_array, holidays){
  return (holidays.length * NUMBER_OF_PEOPLE_ON_EACH_DUTY) / data_array.length;
}

function get_average_day_count(data_array, holidays, number_of_people_on_each_day_shift){
  return ((data_array[0].length - holidays.length) * (number_of_people_on_each_day_shift - 1)) / data_array.length;
}

function get_average_night_count(data_array, holidays){
  return (data_array[0].length * 2) / data_array.length;
}
