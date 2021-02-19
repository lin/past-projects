// ======= Main Function ========== //

function add_night(data_array, night_shift, number_of_shift_left, holidays, night_rule) {
  var message;
  // add night shifts by steps
  data_array = add_first_night_shifts(data_array, night_shift, night_rule);
  data_array = add_second_night_shifts(data_array, night_shift, night_rule);
  data_array = add_third_night_shifts(data_array, night_shift, night_rule);
  data_array = add_final_night_shift(data_array, night_shift);

  // shift days if request.
  if ( number_of_shift_left != 0 ) { data_array = shift_left(data_array, number_of_shift_left, holidays) };

  return { data_array: data_array, message: message };
}

// ======= Utility Functions ==========//

function add_night_shift(data_array, person, date, night_shift){
  if (person <= data_array.length, date <= data_array[0].length) {
    for (var i = 0; i < night_shift.length; i++) {
      if ( it_is_none_holiday_or_null(data_array, person, date + i) ){
        // if it beyonds the boundary.
        if ( date + i >= data_array[0].length ) {
          var date_diff = date + i - data_array[0].length;
          if ( it_is_none_holiday_or_null(data_array, person, date_diff) ) {
            data_array[person][date_diff] = night_shift[i];
          }
        } else {
          data_array[person][date + i] = night_shift[i];
        }
      }
    }
  }
  return data_array;
}

function add_night_shifts_batch(data_array, person, date, night_shift, count) {
  for (var i = 0; i < count; i++) {
    data_array = add_night_shift(data_array, person, date + night_shift.length * i, night_shift);
  }
  return data_array;
}


function add_first_night_shifts(data_array, night_shift, night_rule){
  // night_rule = 1 means three night shifts in a row.
  if (night_rule == 1) {
    for (var i = 0; i < night_shift.length; i++) {
      data_array = add_night_shifts_batch(data_array, i, i, night_shift, 2);
    }
  } else {
    // night_rule = 0 means one night shift with two night shifts in a row.
    for (var i = 0; i < data_array.length; i++) {
      // this condition means after you put enough two shifts at bottom,
      // you put as many as one shift at top corner. You'd better run it yourself to see
      if ( i < (data_array.length - night_shift.length) ) {
        data_array = add_night_shift(data_array, i, i, night_shift);
      } else {
        data_array = add_night_shifts_batch(data_array, i, i, night_shift, 2);
      }
    }
  }
  return data_array;
}

function add_second_night_shifts(data_array, night_shift, night_rule) {
  if ( night_rule == 1 ){
    var next_person = night_shift.length;
    var remain_people_count = data_array.length - night_shift.length;
    var start_date  =  data_array[0].length - 2 * night_shift.length - remain_people_count;
    for (var i = 0; i < data_array.length - night_shift.length; i++) {
      data_array = add_night_shifts_batch(data_array, next_person + i, start_date + i, night_shift, 3);
    }
  } else {
    var start_index = data_array.length + night_shift.length;
    for (var i = 0; i < data_array.length - night_shift.length; i++) {
      data_array = add_night_shifts_batch(data_array, i, start_index + i, night_shift, 2);
    }
  }

  return data_array;
}

function add_third_night_shifts(data_array, night_shift, night_rule){
  for (var i = 0; i < data_array[0].length; i++) {
    if ( there_is_not_enough_minor_for_that_date(data_array, i) ){
      for (var j = 0; j < data_array.length; j++) {
        if (there_is_not_enough_night_shift_for_that_person(data_array, j) && it_is_none_or_holiday(data_array, j, i) ){
            data_array = add_night_shift(data_array, j, i, night_shift);
            break;
        }
      }
    }
  }
  return data_array;
}

function shift_left(data_array, number_of_shift_left, holidays) {
  var temp_data_array = copy_data_array(data_array);

  // shift data array
  for (var i = 0; i < data_array.length; i++) {
    for (var j = 0; j < data_array[0].length; j++) {
      if (j - number_of_shift_left >= 0) {
        temp_data_array[i][j - number_of_shift_left] = data_array[i][j];
      } else {
        temp_data_array[i][j - number_of_shift_left + data_array[0].length] = data_array[i][j];
      }
    }
  }

  // fix holiday bug, since holiday will never change.
  for (var i = 0; i < data_array.length; i++) {
    for (var j = 0; j < data_array[0].length; j++) {
      if ( ( temp_data_array[i][j] == shift_type.none.index || temp_data_array[i][j] == shift_type.holiday.index ) && holidays.includes(j) ){
        temp_data_array[i][j] = shift_type.holiday.index;
      } else if (temp_data_array[i][j] == shift_type.holiday.index && !holidays.includes(j)) {
        temp_data_array[i][j] = shift_type.none.index;
      }
    }
  }

  return temp_data_array;
}

function add_final_night_shift(data_array, night_shift) {
  for (var i = 0; i < data_array[0].length; i++) {
    if ( there_is_not_enough_minor_for_that_date(data_array, i) ){
      for (var j = 0; j < data_array.length; j++) {
        var the_last_day_of_night_shift          = i + night_shift.length - 1;
        var the_last_day_of_overflow_night_shift = i + night_shift.length - data_array[0].length - 1;
        if ( ( it_is_none_or_holiday(data_array, j, the_last_day_of_night_shift)
              || it_is_none_or_holiday(data_array, j, the_last_day_of_overflow_night_shift) )
              && it_is_none_or_holiday(data_array, j, i ) ){
            data_array = add_night_shift(data_array, j, i, night_shift);
            break;
        }
      }
    }
  };
  return data_array;
}
