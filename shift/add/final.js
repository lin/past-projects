function final_touch(data_array, holidays) {

  for (var i = 0; i < data_array[0].length; i++) {
    for (var j = 0; j < data_array.length; j++) {
      if ( holidays.includes(i) ) {
        if ( data_array[j][i] == shift_type.rest.index ) {
          data_array[j][i] = shift_type.holiday.index;
        }
      }
    }
  }

  return data_array;
}
