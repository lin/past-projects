function shift_left(data_array, shift_left, holidays) {

  var temp_array = [];
  for (var i = 0; i < data_array.length; i++) {
    var person_array = [];
    for (var j = 0; j < data_array[0].length; j++) {
      person_array.push(0);
    }
    temp_array.push(person_array);
  }

  for (var i = 0; i < data_array.length; i++) {
    for (var j = 0; j < data_array[0].length; j++) {
      if (j - shift_left >= 0) {
        temp_array[i][j - shift_left] = data_array[i][j];
      } else {
        temp_array[i][j - shift_left + data_array[0].length] = data_array[i][j];
      }
    }
  }

  for (var i = 0; i < data_array.length; i++) {
    for (var j = 0; j < data_array[0].length; j++) {
      if ( ( temp_array[i][j] == 0 || temp_array[i][j] == 8 ) && holidays.includes( j + 1 ) ){
        temp_array[i][j] = 8;
      } else if (temp_array[i][j] == 8 && !holidays.includes( j + 1 )) {
        temp_array[i][j] = 0;
      }
    }
  }

  return temp_array;
}
