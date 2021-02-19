function count_number_of_noons_for_person(data_array, person) {
  var noon_count = 0;
  for (var i = 0; i < data_array[0].length; i++) {
    if ( data_array[person][i] == shift_type.noon.index ) noon_count++;
  }
  return noon_count;
}

function count_number_of_dutys_for_person(data_array, person) {
  var noon_count = 0;
  for (var i = 0; i < data_array[0].length; i++) {
    if ( data_array[person][i] == shift_type.duty.index ) noon_count++;
  }
  return noon_count;
}

function count_number_of_noons(data_array) {
  var noon_counts = [];
  for (var i = 0; i < data_array.length; i++) {
    noon_counts.push(count_number_of_noons_for_person(data_array, i));
  }
  return noon_counts;
}
