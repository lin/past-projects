function add_duty_with_hard_rule (data_array, night_shift, holidays, average_point) {

  for (var j = 0; j < NUMBER_OF_PEOPLE_ON_EACH_DUTY; j++) {
    var target_dates = find_dates_with_not_enough_dutys(data_array, holidays)
    for (var i = 0; i < target_dates.length; i++) {
      var target_people = find_people_suitable_for_duty_on_date(data_array, target_dates[i]);
      var target_person = find_person_with_lowest_point(data_array, target_people);
      data_array[target_person][target_dates[i]] = shift_type.duty.index;
    }
  }

  return data_array;
}
