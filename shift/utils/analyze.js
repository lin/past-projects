function analyze(data_array) {

  // type counts
  var night_counts = [];
  var rest_counts = [];
  var day_counts = [];
  var duty_counts = [];
  var noon_counts = [];
  var on_call_counts = [];
  var scores = [];

  var people_stats = [];

  for (var i = 0; i < data_array.length; i++) {

    var person_stats;

    var night_count = 0;
    var rest_count = 0;
    var day_count = 0;
    var duty_count = 0;
    var noon_count = 0;
    var on_call_count = 0;

    for (var j = 0; j < data_array[0].length; j++) {
      if ( it_is_night(data_array, i, j) ) night_count++;
      if ( it_is_no_work(data_array, i, j) ) rest_count++;
      if ( data_array[i][j] == shift_type.day.index     ) day_count++;
      if ( data_array[i][j] == shift_type.duty.index    ) duty_count++;
      if ( data_array[i][j] == shift_type.noon.index    ) noon_count++;
      if ( data_array[i][j] == shift_type.on_call.index ) on_call_count++;
    }

    var score = parseFloat((day_count * POINTS_PER_DAY + noon_count * POINTS_PER_NOON  + duty_count * POINTS_PER_DUTY + night_count * POINTS_PER_NIGHT ).toFixed(2));

    night_counts.push(night_count);
    rest_counts.push(rest_count);
    day_counts.push(day_count);
    duty_counts.push(duty_count);
    noon_counts.push(noon_count);
    on_call_counts.push(on_call_count);

    scores.push(score);

    // construct result
    person_stats = {
      night_count: night_count,
      rest_count: rest_count,
      day_noon_count: (day_count + noon_count) + ' (' + noon_count + ')',
      duty_count: duty_count,
      on_call_count: on_call_count,
      score: score
    }

    people_stats.push(person_stats);
  }

  // calculate average and sd
  var days_noons_average = parseFloat(day_counts.average()) + parseFloat(noon_counts.average());
  var averages = {
    night: night_counts.average(),
    rest: rest_counts.average(),
    day_noon: days_noons_average + ' (' + noon_counts.average() + ')',
    duty: duty_counts.average(),
    on_call: on_call_counts.average(),
    score: scores.average()
  }

  var days_noons_sd = (parseFloat(day_counts.sd()) + parseFloat(noon_counts.sd())).toFixed(2);
  var sds = {
    night: night_counts.sd(),
    rest: rest_counts.sd(),
    day_noon: days_noons_sd + ' (' + noon_counts.sd() + ')',
    duty: duty_counts.sd(),
    on_call: on_call_counts.sd(),
    score: scores.sd()
  };

  var average_score = scores.average();
  var people_review = [];

  for (var i = 0; i < data_array.length; i++) {
    var review = '';
    var person_score = people_stats[i].score;
    var score_diff = person_score - average_score;
    var day_diff = score_diff.toFixed(1);
    if (score_diff > 0) {
      review = '多上了' + day_diff + '个白班'
    } else if ( score_diff < 0) {
      review = '少上了' + Math.abs(day_diff) + '个白班'
    } else {
      review = '平均'
    }
    people_review.push(review);
  }

  return {
    people_stats: people_stats,
    averages: averages,
    sds: sds,
    sd: scores.sd(),
    people_review: people_review
  };
}
