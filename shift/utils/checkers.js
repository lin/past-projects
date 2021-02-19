// for specific cell
function it_is_none(data_array, person, date) {
  return data_array[person][date] == shift_type.none.index;
}

function it_is_night(data_array, person, date) {
  return data_array[person][date] == shift_type.minor_night.index ||
         data_array[person][date] == shift_type.major_night.index;
}

function it_is_no_work(data_array, person, date) {
  return data_array[person][date] == shift_type.rest.index ||
         data_array[person][date] == shift_type.holiday.index ||
         data_array[person][date] == shift_type.after_night.index ;
}

function it_is_none_holiday_or_null(data_array, person, date) {
  return ( data_array[person][date] == shift_type.none.index    ||
           data_array[person][date] == shift_type.holiday.index ||
           data_array[person][date] == null );
}

function it_is_none_or_holiday(data_array, person, date) {
  return ( data_array[person][date] == shift_type.none.index    ||
           data_array[person][date] == shift_type.holiday.index );
}

function it_is_suitable_to_add_duty(data_array, person, date) {
  var previous_two_day = date - 2;
  if ( previous_two_day >= 0 ) {
    if ( (data_array[person][previous_two_day] == shift_type.major_night.index)
          || (data_array[person][date - 1] == shift_type.duty.index)
          || (data_array[person][date + 1] == shift_type.duty.index) ) {
      return false;
    }
  }
  return true;
}


// for specific date
function there_is_not_enough_minor_for_that_date(data_array, date) {
  var minor_shift_count = 0;
  for (var j = 0; j < data_array.length; j++) {
    if ( data_array[j][date] == shift_type.minor_night.index ) minor_shift_count++;
  }
  return ( minor_shift_count < 1 );
}

function there_is_not_enough_noon_for_that_date(data_array, date) {
  var noon_count = 0;
  for (var i = 0; i < data_array.length; i++) {
    if (data_array[i][date] == shift_type.noon.index) noon_count++ ;
  }
  return noon_count < NUMBER_OF_PEOPLE_ON_EACH_NOON_SHIFT;
}

function there_is_not_enough_duty_for_that_date(data_array, date, holidays) {
  var duty_count = 0;
  for (var i = 0; i < data_array.length; i++) {
    if (data_array[i][date] == shift_type.duty.index) duty_count++ ;
  }
  return duty_count < NUMBER_OF_PEOPLE_ON_EACH_DUTY;
}


// for specific person
function there_is_not_enough_night_shift_for_that_person(data_array, person, holidays) {
  var minor_shift_count = 0;
  for (var i = 0; i < data_array[0].length; i++) {
    if ( data_array[person][i] == shift_type.minor_night.index ) minor_shift_count++;
  }
  return ( minor_shift_count < 3 );
}

// function there_is_not_enough_duty_for_that_person(data_array, person, holidays) {
//   var duty_count = 0;
//   for (var i = 0; i < data_array[0].length; i++) {
//     if ( data_array[person][i] == shift_type.duty.index ) duty_count++;
//   }
//   return duty_count;
// }

// for the whole table
function there_is_not_enough_people_for_that_date(data_array, holidays) {
  for (var i = 0; i < data_array[0].length; i++) {
    var day_count = 0;
    if (!holidays.includes(i)) {
      for (var j = 0; j < data_array.length; j++) {
        if ( data_array[j][i] == shift_type.none.index) {
          day_count ++;
        }
      }
      if (day_count < 4) {
        return true;
      }
    }
  }
  return false;
}

// rules
function there_is_no_noons_in_prev_two_days(data_array, person, date) {
  return ( data_array[person][date - 1] != shift_type.noon.index
        && data_array[person][date - 2] != shift_type.noon.index);
}

// TODO:

function no_major_on_first_day(data_array) {
  var major_shift_count = 0;
  for (var j = 0; j < data_array.length; j++) {
    if ( data_array[j][0] == 2 ) major_shift_count++;
  }
  return (major_shift_count == 0);
}

function not_enough_shift(data_array) {

  for (var i = 0; i < data_array[0].length; i++) {
    var minor_shift_count = 0;
    for (var j = 0; j < data_array.length; j++) {
      if ( data_array[j][i] == 1 ) minor_shift_count++;
    }
    if  ( minor_shift_count == 0 ) { return true }
  }
  return false;
}

function check_not_enough_shift_extreme(data_array, person) {
  var minor_shift_count = 0;
  for (var i = 0; i < data_array[0].length; i++) {
    if ( data_array[person][i] == 1 ) minor_shift_count++;
  }
  return ( minor_shift_count < 4 );
}
