// ======= Main Function ========== //
function add_duty_with_easy_rule(data_array,night_shift, holidays) {
  add_duty_into_long_rest(data_array, holidays);
  add_duty_into_long_rest(data_array, holidays);
  return data_array;
}

// ======= Sub Function ========== //

function add_duty_into_long_rest(data_array, holidays) {

  var long_rest_matches = find_matches_with_long_rest(data_array);

  for (var i = 0; i < long_rest_matches.length; i++) {
    if ( long_rest_matches[i] != null ) {
      for (var j = 0; j < long_rest_matches[i].length; j++) {

        var match = long_rest_matches[i][j];

        for (var k = 0; k < match[0].length; k++) {
          if ( (k != 1) && (k != 0) ) {
            if ( holidays.includes(match.index + k) && there_is_not_enough_duty_for_that_date(data_array, (match.index + k), holidays)) {
              data_array[i][match.index + k] = shift_type.duty.index;
              break;
            }
          }
        }

        if ( there_is_not_enough_duty_for_that_date(data_array, match.index + k, holidays) == false) {
          break;
        }

      }
    }
  }
  return data_array;
}

// TODO:
// not sure if this is a good rule or a bad rule
function add_duty_after_night_shift(data_array, holidays) {
  for (var i = 0; i < data_array.length; i++) {
    for (var j = 0; j < data_array[0].length; j++) {
      if ( data_array[i][j] == 1 && data_array[i][j + 5] != null ) {
        var is_holiday = holidays.includes(j + 5);
        if ( is_holiday ) data_array[i][j + 5] = shift_type.duty.index;
      }
    }
  }
  return data_array;
}
