// ======= Main Function ========== //
function add_noon(data_array, holidays, number_of_people_on_each_day_shift) {
  var message;
  var average_noons_per_person = get_average_noons_per_person(data_array, holidays);

  // first add with easy ones
  data_array = add_noon_with_easy_rule(data_array, average_noons_per_person, number_of_people_on_each_day_shift);

  // then those outliers
  for (var i = 0; i < data_array[0].length; i++) {
    if ( there_is_not_enough_noon_for_that_date(data_array, i, holidays) && !holidays.includes(i) ) {
      data_array = add_noon_for_outliers(data_array, i);
    }
  }

  // swap noons with inequalities
  data_array = swap_noons(data_array, holidays);
  return { data_array: data_array, message: message };;
}

// ======= Sub Functions ==========//

// add noon if less than average.
// but not to people who has noons in prev two days.
function add_noon_with_easy_rule(data_array, average_noons_per_person, number_of_people_on_each_day_shift) {
  var days_with_exact_four_days = find_days_with_exact_four_days(data_array, number_of_people_on_each_day_shift);

  for (var i = 0; i < days_with_exact_four_days.length; i++) {
    var target_people = find_people_with_day_shift(data_array, days_with_exact_four_days[i]);
    for (var j = 0; j < target_people.length; j++) {
      if ( (count_number_of_noons_for_person(data_array, target_people[j]) < average_noons_per_person)
            && there_is_no_noons_in_prev_two_days(data_array, target_people[j], days_with_exact_four_days[i])){
        data_array[target_people[j]][days_with_exact_four_days[i]] = shift_type.noon.index;
        break;
      }
    }
  }

  return data_array;
}

// add noon if less than average.
// add noon if no noon within two days.
// add noon whoever is.
function add_noon_for_outliers(data_array, date, average_noons_per_person) {
  var target_people = find_people_with_day_shift(data_array, date);
  for (var i = 0; i < target_people.length; i++) {
    var target_person = target_people[i];
    if ( count_number_of_noons_for_person(data_array, target_person) < average_noons_per_person ) {
      data_array[target_person][date] = shift_type.noon.index;
      break;
    } else if (there_is_no_noons_in_prev_two_days(data_array, target_person, date) ) {
      data_array[target_person][date] = shift_type.noon.index;
      break;
    } else {
      data_array[target_person][date] == shift_type.noon.index;
      break;
    }
  }
  return data_array;
}

function swap_noons(data_array, holidays, average_noons_per_person) {

  while (the_lowest_noon_count_is_less_than_average(data_array, average_noons_per_person)) {
    var noon_counts = count_number_of_noons(data_array);
    var person_with_lowest = noon_counts.indexOf(noon_counts.min());
    var days_of_person_with_lowest = find_days_for_that_person(data_array, person_with_lowest);
    for (var i = 0; i < days_of_person_with_lowest.length; i++) {
      var current_date = days_of_person_with_lowest[i];
      var person_on_noon = find_person_with_noon_shift(data_array, current_date);
      // find that person:
      if ( noon_counts[person_on_noon] > average_noons_per_person ) {
        data_array[person_on_noon][current_date]     = shift_type.day.index;
        data_array[person_with_lowest][current_date] = shift_type.noon.index;
      }
      // after swap
      if ( count_number_of_noons(data_array)[person_with_lowest] >= average_noons_per_person ) break;
    }
    if ( count_number_of_noons(data_array)[person_with_lowest] == noon_counts[person_with_lowest]) {
      break;
    }
  }
  return data_array;
}

// ======= Utility Functions ==========//

function get_total_noons(data_array, holidays) {
  return data_array[0].length - holidays.length;
}

function get_average_noons_per_person(data_array, holidays) {
  var total_noons = get_total_noons(data_array, holidays);
  return Math.floor( total_noons / data_array.length );
}

function the_lowest_noon_count_is_less_than_average(data_array, average_noons_per_person) {
  var noon_counts = count_number_of_noons(data_array);
  var person_with_lowest = noon_counts.indexOf(noon_counts.min());
  return noon_counts[person_with_lowest] < average_noons_per_person;
}
