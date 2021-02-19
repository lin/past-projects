// days
function find_days_with_exact_four_nones(data_array, number_of_people_on_each_day_shift) {
  var dates = [];
  for (var i = 0; i < data_array[0].length; i++) {
    var none_count = 0;
    for (var j = 0; j < data_array.length; j++) {
      if (data_array[j][i] == shift_type.none.index ) { none_count++ };
    }
    if ( none_count == number_of_people_on_each_day_shift ) {
      dates.push(i);
    }
  }
  return dates;
}

function find_days_with_greater_than_four_nones(data_array, number_of_people_on_each_day_shift) {
  var dates = [];
  for (var i = 0; i < data_array[0].length; i++) {
    var none_count = 0;
    for (var j = 0; j < data_array.length; j++) {
      if (data_array[j][i] == shift_type.none.index ) { none_count++ };
    }
    if ( none_count > number_of_people_on_each_day_shift ) {
      dates.push(i);
    }
  }
  return dates;
}

function find_days_with_exact_four_days(data_array, number_of_people_on_each_day_shift) {
  var dates = [];
  for (var i = 0; i < data_array[0].length; i++) {
    var day_count = 0;
    for (var j = 0; j < data_array.length; j++) {
      if (data_array[j][i] == shift_type.day.index ) { day_count++ };
    }
    if ( day_count == number_of_people_on_each_day_shift ) {
      dates.push(i);
    }
  }
  return dates;
}

function find_days_for_that_person(data_array, person) {
  var dates = [];
  for (var i = 0; i < data_array[0].length; i++) {
    if ( data_array[person][i] == shift_type.day.index ) {
      dates.push(i);
    }
  }
  return dates;
}

function find_dates_with_not_enough_dutys(data_array, holidays) {
  var target_dates = [];
  for (var i = 0; i < data_array[0].length; i++) {
    if ( holidays.includes(i) && there_is_not_enough_duty_for_that_date(data_array, i, holidays) ) {
      target_dates.push(i);
    }
  }
  return target_dates;
}

// people
function find_people_with_day_shift(data_array, target_date) {
  var target = [];
  for (var i = 0; i < data_array.length; i++) {
    if (data_array[i][target_date] == shift_type.day.index) target.push(i);
  }
  return target;
}

function find_people_suitable_for_duty_on_date(data_array, target_date) {
  var target_people = [];
  for (var j = 0; j < data_array.length; j++) {
    if(data_array[j][target_date] == shift_type.rest.index && it_is_suitable_to_add_duty(data_array, j, target_date)) {
      target_people.push(j);
    }
  }
  return target_people;
}

function find_person_with_noon_shift(data_array, date) {
  for (var i = 0; i < data_array.length; i++) {
    if ( data_array[i][date] == shift_type.noon.index ) {
      return i;
    }
  }
  return false;
}

function find_people_with_rest(data_array, target_date) {
  var target = [];
  for (var i = 0; i < data_array.length; i++) {
    if (data_array[i][target_date] == shift_type.rest.index) target.push(i);
  }
  return target;
}

function find_people_with_low_points(data_array, average_point) {
  var analytics_array = analyze(data_array);
  var points = [];
  for (var i = 0; i < analytics_array.people_stats.length ; i++) {
    if ( analytics_array.people_stats[i].score < average_point ) {
      points.push([i, analytics_array.people_stats[i].score]);
    }
  }
  // persons with points lower 1.
  points.sort(function(a, b) {
    return a[1] - b[1];
  });

  return points;
}

function find_person_with_lowest_point(data_array, target_people) {
  var analytics_array = analyze(data_array);
  var lowest_point = 999;
  var target_person = 0;

  for (var i = 0; i < target_people.length; i++) {
    var current_person = target_people[i];
    var current_score = analytics_array.people_stats[current_person].score ;
    if ( current_score < lowest_point ) {
      lowest_point = current_score;
      target_person = current_person;
    }
  }
  return target_person;
}

// matches
function find_matches_with_long_rest(data_array) {
  var stringified_array = stringify_data_array(data_array);
  // rest with more than four days in a row.
  var regex = /4{4,9}/g;
  var results = [];
  var matches;
  for (var i = 0; i < stringified_array.length; i++) {
    var result = [];
    while(matches = regex.exec(stringified_array[i])){
      result.push(matches);
    };
    results.push(result);
  }
  return results;
}
