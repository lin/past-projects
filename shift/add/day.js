// ======= Main Function ========== //
function add_day(data_array, holidays, night_shift, number_of_people_on_each_day_shift) {
  // var number_of_people_on_each_day_shift = ;
  var message;
  data_array = add_days_with_exact_four(data_array, number_of_people_on_each_day_shift);
  data_array = add_days_to_low_scores(data_array, number_of_people_on_each_day_shift);
  data_array = add_rest_to_none(data_array, number_of_people_on_each_day_shift);

  return { data_array: data_array, message: message };
}

// ======= Sub Functions ==========//

function add_days_with_exact_four(data_array, number_of_people_on_each_day_shift) {
  var dates = find_days_with_exact_four_nones(data_array, number_of_people_on_each_day_shift);
  for (var i = 0; i < dates.length; i++) {
    for (var j = 0; j < data_array.length; j++) {
      if( data_array[j][dates[i]] == shift_type.none.index ) data_array[j][dates[i]] = shift_type.day.index;
    }
  }
  return data_array;
}

function add_days_to_low_scores(data_array, number_of_people_on_each_day_shift) {

  // find target days, which has less than four days.
  var target_dates = find_days_with_greater_than_four_nones(data_array, number_of_people_on_each_day_shift);

  // go through each target day, e.g. day 2
  for (var i = 0; i < target_dates.length; i++) {

    // for each day we need this progress four times.
    for (var s = 0; s < number_of_people_on_each_day_shift; s++) {
      var people = [];
      var scores = [];
      for (var j = 0; j < data_array.length; j++) {
        // for those nones, calculate its sd score
        if ( it_is_none(data_array, j, target_dates[i]) ) {
          people.push(j);
          scores.push(analyze(data_array).people_stats[j].score);
        }
      }
      // position of the lowest score
      var index_of_person_with_min_score = scores.indexOf(scores.min()); // find the minimum score.
      data_array[people[index_of_person_with_min_score]][target_dates[i]] = shift_type.day.index;
    }
  }
  return data_array;
}

function add_rest_to_none(data_array, number_of_people_on_each_day_shift) {
  for (var i = 0; i < data_array.length; i++) {
    for (var j = 0; j < data_array[0].length; j++) {
      if ( it_is_none_or_holiday(data_array, i, j) ) data_array[i][j] = shift_type.rest.index;
    }
  }
  return data_array;
}
