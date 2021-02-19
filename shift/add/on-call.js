// TODO: need refactor
// It's better to refactor this when night shift is done.
function add_on_call(data_array, holidays) {
  var average_duty_per_person = Math.round( data_array[0].length / data_array.length );

  // day shifts
  for (var i = 0; i < data_array[0].length; i++) {
    if (!holidays.includes(i)) {
      var people_on_rest = find_people_with_rest(data_array, i);
      for (var j = 0; j < people_on_rest.length; j++) {
        if (data_array[people_on_rest[j]][i - 1] != shift_type.after_night.index
         && data_array[people_on_rest[j]][i - 1] != shift_type.on_call.index) {
          data_array[people_on_rest[j]][i] = shift_type.on_call.index;
          break;
        }
      }
    }
  }

  // holiday shift
  for (var i = 0; i < holidays.length; i++) {
    var current_date = holidays[i];
    var people_on_rest = find_people_with_rest(data_array, current_date);
    for (var j = 0; j < people_on_rest.length; j++) {
      var on_call_count = 0;
      var current_person = people_on_rest[j];
      for (var k = 0; k < data_array[0].length; k++) {
        if (data_array[current_person][k] == shift_type.on_call.index) on_call_count++;
      }
      if (data_array[current_person][current_date - 1] != shift_type.duty.index
       && data_array[current_person][current_date + 1] != shift_type.duty.index
       && data_array[current_person][current_date - 1] != shift_type.on_call.index
       && data_array[current_person][current_date + 1] != shift_type.on_call.index
       && data_array[current_person][current_date - 1] != shift_type.after_night.index
       && on_call_count < average_duty_per_person) {
        data_array[people_on_rest[j]][current_date] = shift_type.on_call.index;
        break;
      }
    }
  }

  // remainning
  var no_on_call_dates = [];
  for (var i = 0; i < data_array[0].length; i++) {
    var on_call_count = 0;
    for (var j = 0; j < data_array.length; j++) {
      if (data_array[j][i] == shift_type.on_call.index) on_call_count ++;
    }
    if (on_call_count == 0) no_on_call_dates.push(i);
  }

  if( no_on_call_dates.length != 0 ) {
    for (var i = 0; i < no_on_call_dates.length; i++) {
      var current_date = no_on_call_dates[i];
      var people_on_rest = find_people_with_rest(data_array, current_date);
      for (var j = 0; j < people_on_rest.length; j++) {
        var current_person = people_on_rest[j];
        if (data_array[current_person][current_date - 1] != shift_type.duty.index
         && data_array[current_person][current_date + 1] != shift_type.duty.index
         && data_array[current_person][current_date + 1] != shift_type.on_call.index
         && data_array[current_person][current_date - 1] != shift_type.on_call.index
         && data_array[current_person][current_date - 1] != shift_type.after_night.index ) {
          data_array[people_on_rest[j]][current_date] = shift_type.on_call.index;
          break;
        }
      }
    }
  }

  // remainning
  var no_on_call_dates = [];
  for (var i = 0; i < data_array[0].length; i++) {
    var on_call_count = 0;
    for (var j = 0; j < data_array.length; j++) {
      if (data_array[j][i] == shift_type.on_call.index) on_call_count ++;
    }
    if (on_call_count == 0) no_on_call_dates.push(i);
  }

  if( no_on_call_dates.length != 0 ) {
    for (var i = 0; i < no_on_call_dates.length; i++) {
      var current_date = no_on_call_dates[i];
      var people_on_rest = find_people_with_rest(data_array, current_date);
      for (var j = 0; j < people_on_rest.length; j++) {
        var current_person = people_on_rest[j];
        if (data_array[current_person][current_date - 1] != shift_type.duty.index
         && data_array[current_person][current_date + 1] != shift_type.duty.index
         && data_array[current_person][current_date + 1] != shift_type.on_call.index
         && data_array[current_person][current_date - 1] != shift_type.on_call.index ) {
          data_array[people_on_rest[j]][current_date] = shift_type.on_call.index;
          break;
        }
      }
    }
  }


  return data_array;
}
