function add_duty_with_hard_rule (data_array, night_shift, holidays, number_of_people_on_each_day_shift) {
  var average_point = get_average_point(data_array, holidays, number_of_people_on_each_day_shift);
  var people_with_low_points = get_people_with_low_points(data_array, average_point);
  var waiting_list = get_waiting_list(data_array, people_with_low_points, average_point, holidays);

  while (check_duty_one_possibility(data_array, waiting_list) ) {
    data_array = add_duty_for_one_possibility(data_array, waiting_list);
    people_with_low_points = get_people_with_low_points(data_array, average_point);
    waiting_list = get_waiting_list(data_array, people_with_low_points, average_point, holidays);
  }

  people_with_low_points = get_people_with_low_points(data_array, average_point);
  waiting_list = get_waiting_list(data_array, people_with_low_points, average_point, holidays);

  while (check_duty_short_exact(waiting_list)) {
    data_array = add_duty_for_short_exact(data_array, waiting_list, holidays);
    people_with_low_points = get_people_with_low_points(data_array, average_point);
    waiting_list = get_waiting_list(data_array, people_with_low_points, average_point, holidays);
  }
  data_array = add_duty_for_outliers(data_array, holidays);
  // var results = enum_all_possiblility(data_array, waiting_list, get_available_duty_dates(data_array, holidays))

  // return  {
  //   data_array: results.data,
  //   all: results.all,
  //   matches: results.matches
  // };;

  return data_array;
}

function add_duty_for_outliers(data_array, holidays) {
  var target_dates = find_dates_with_not_enough_dutys(data_array, holidays)
  for (var i = 0; i < target_dates.length; i++) {
    var target_people = [];
    for (var j = 0; j < data_array.length; j++) {
      if(data_array[j][i] == shift_type.rest.index
      && data_array[j][i - 1] != shift_type.duty.index
      && data_array[j][i + 1] != shift_type.duty.index) {
        target_people.push(j);
      }
    }
  }

  return data_array;
}


function check_duty_one_possibility(data_array, waiting_list) {
  for (var i = 0; i < waiting_list.length; i++) {
    // {person: 0, duty_short: 2, possible_dates: [1, 2, 10]}
    if ( waiting_list[i].possible_dates.length == 1 ) {
      return true;
    }
  }
  return false;
}

function add_duty_for_one_possibility(data_array, waiting_list) {
  for (var i = 0; i < waiting_list.length; i++) {
    // {person: 0, duty_short: 2, possible_dates: [1, 2, 10]}
    if ( waiting_list[i].possible_dates.length == 1 ) {
      data_array[waiting_list[i].person][waiting_list[i].possible_dates[0]] = shift_type.duty.index;
    }
  }
  return data_array;
}

function check_duty_short_exact(waiting_list) {
  for (var i = 0; i < waiting_list.length; i++) {
    if ( waiting_list[i].duty_short == waiting_list[i].possible_dates.length ) {
      return true;
    }
  }
  return false;
}

function add_duty_for_short_exact(data_array, waiting_list, holidays) {
  for (var i = 0; i < waiting_list.length; i++) {
    if ( waiting_list[i].duty_short == waiting_list[i].possible_dates.length ) {
      var current_person = waiting_list[i].person;
      for (var j = 0; j < waiting_list[i].possible_dates.length; j++) {
        if ( there_is_not_enough_duty_for_that_date(data_array, waiting_list[i].possible_dates[j], holidays)) {
              var number_of_dutys = count_number_of_dutys_for_person(data_array, current_person);
              var not_enough_duty = number_of_dutys < Math.floor( holidays.length * 2 / data_array.length);
              data_array[current_person][waiting_list[i].possible_dates[j]] = shift_type.duty.index;
        }
      }
    }
  }
  return data_array;
}

function get_people_with_low_points(data_array, average_point) {
  var analytics_array = analyze(data_array);
  var points = [];
  for (var i = 0; i < analytics_array.people_stats.length ; i++) {
    if ( analytics_array.people_stats[i].score + 0.8 < average_point ) {
      points.push([i, analytics_array.people_stats[i].score]);
    }
  }
  // persons with points lower 1.
  points.sort(function(a, b) {
    return a[1] - b[1];
  });

  return points;
}

function get_waiting_list(data_array, people_with_low_points, average_point, holidays) {
  // an array with [ [one day] [two days] [one or two days]];
  var available_duty_dates = get_available_duty_dates(data_array, holidays);
  var waiting_list = [];

  // loop [[2, 17.6], [9, 18.5], [1, 20.2]];
  for (var i = 0; i < people_with_low_points.length; i++) {
    // loop [[2, 17.6, need TWO duties], [9, 18.5], [1, 20.2]];
    var duty_short = get_duty_short(people_with_low_points[i], average_point);
    var current_person = people_with_low_points[i][0];
    var possible_dates = [];
    for (var j = 0; j < holidays.length; j++) {
      var current_date = holidays[j];
      if ( data_array[current_person][current_date] == 4 ) {
        if ( it_is_suitable_to_add_duty(data_array, current_person, current_date)
          && available_duty_dates.dates.includes(current_date) ) {
          possible_dates.push(current_date);
        }
      }
    }
    waiting_list.push({ person: current_person, duty_short: duty_short, possible_dates: possible_dates });
  }// loop end [[2, 17.6, need TWO duties], [9, 18.5], [1, 20.2]];
  return waiting_list;
}

function check_not_after_night_shift(data_array, person, date) {
  var previous_two_day = date - 2;
  if ( previous_two_day >= 0 ) {
    if ( (data_array[person][previous_two_day] == 2)
          || (data_array[person][date - 1] == 7)
          || (data_array[person][date + 1] == 7) ) {
      return false;
    }
  }
  return true;
}


function get_duty_short(people_data, average_point) {
  return Math.round(( average_point - people_data[1] ) / 2);
}

function get_available_duty_dates(data_array, holidays) {
  var one_date = [];
  var two_dates = [];
  var dates = [];

  for (var i = 0; i < holidays.length; i++) {
    var current_date = holidays[i];
    var dates_count = 0;
    for (var j = 0; j < data_array.length; j++) {
      if ( data_array[j][current_date] == 7 ) dates_count++ ;
    }
    if (dates_count == 0) {
      two_dates.push(current_date);
      dates.push(current_date);
    } else if (dates_count == 1) {
      one_date.push(current_date);
      dates.push(current_date);
    }
  }
  return {
    one_date: one_date,
    two_dates: two_dates,
    dates: dates
  }
}
