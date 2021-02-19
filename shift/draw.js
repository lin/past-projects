function draw_main_table(main_table, data_array, holidays) {
  var table_html = "";

  // ====== Table Head ==========.//
  table_html += "<thead class='thead-dark'>\n\t<tr>\n\t\t<th></th>\n";
  for (var i = 0; i < data_array[0].length; i++) {
    var real_date = i + 1;
    if (holidays.includes(i)) {
      table_html += '\t\t<th class="holiday">'+ real_date + '</th>\n'
    } else {
      table_html += "\t\t<th>" + real_date + "</th>\n";
    }
  }
  table_html += "\t\t</tr>\n</thead>";

  // ====== Table Body ==========.//
  for (var i = 0; i < data_array.length; i++) {
    table_html += '<tr>\n\t<th>' + ( i + 1 ) + '</th>\n';
    for (var j = 0; j < data_array[i].length; j++) {
      table_html += '\t<td id = "cell-' + i + '-' + j + '" class="type type-' + data_array[i][j] +  '">'
                    + dict[data_array[i][j]] + '</td>\n'

    }
    table_html += '</tr>'
  }

  main_table.html(table_html);
}

function draw_analytics_table(analytics_table, data_array) {
  var analytics_results = analyze(data_array);
  var analytics_table_html = "";

  // ====== Table Head ==========.//
  analytics_table_html += "<thead class='thead-dark'>\n\t<tr>\n\t\t<th>护士代号</th>\n";

  // five colums
  // duty / day(noon) / night / on call / rest
  analytics_table_html += "\t\t<th>值班数量</th>\n";
  analytics_table_html += "\t\t<th>白（中）班数量</th>\n";
  analytics_table_html += "\t\t<th>夜班数量</th>\n";
  analytics_table_html += "\t\t<th>听班数量</th>\n";
  analytics_table_html += "\t\t<th>休息数量</th>\n";

  // final score
  analytics_table_html += "\t\t<th>总评分</th>\n";
  analytics_table_html += "\t\t<th>评价（相当于）</th>\n";
  analytics_table_html += "\t\t</tr>\n</thead>";

  // ====== Table Body ==========.//
  for (var i = 0; i < data_array.length; i++) {

    // draw people stats
    analytics_table_html += '<tr>\n\t<th>' + ( i + 1 ) + '</th>\n';
    analytics_table_html += '<td>' + analytics_results.people_stats[i].duty_count     + '</td>';
    analytics_table_html += '<td>' + analytics_results.people_stats[i].day_noon_count + '</td>';
    analytics_table_html += '<td>' + analytics_results.people_stats[i].night_count    + '</td>';
    analytics_table_html += '<td>' + analytics_results.people_stats[i].on_call_count  + '</td>';
    analytics_table_html += '<td>' + analytics_results.people_stats[i].rest_count     + '</td>';
    analytics_table_html += '<td>' + analytics_results.people_stats[i].score          + '</td>';
    analytics_table_html += '<td>' + analytics_results.people_review[i]               + '</td>';
    analytics_table_html += '</tr>'
  }

  // draw averages
  analytics_table_html += '<tr>\n\t<th>平均值</th>\n';
  analytics_table_html += '<td>' + analytics_results.averages.duty     + '</td>';
  analytics_table_html += '<td>' + analytics_results.averages.day_noon + '</td>';
  analytics_table_html += '<td>' + analytics_results.averages.night    + '</td>';
  analytics_table_html += '<td>' + analytics_results.averages.on_call  + '</td>';
  analytics_table_html += '<td>' + analytics_results.averages.rest     + '</td>';
  analytics_table_html += '<td>' + analytics_results.averages.score    + '</td>';
  analytics_table_html += '</tr>'

  // draw sds
  analytics_table_html += '<tr>\n\t<th>标准方差</th>\n';
  analytics_table_html += '<td>' + analytics_results.sds.duty     + '</td>';
  analytics_table_html += '<td>' + analytics_results.sds.day_noon + '</td>';
  analytics_table_html += '<td>' + analytics_results.sds.night    + '</td>';
  analytics_table_html += '<td>' + analytics_results.sds.on_call  + '</td>';
  analytics_table_html += '<td>' + analytics_results.sds.rest     + '</td>';
  analytics_table_html += '<td>' + analytics_results.sds.score    + '</td>';
  analytics_table_html += '</tr>'

  analytics_table.html(analytics_table_html);
}

function draw_score_panel( score_panel, data_array ) {
  var score_panel_html = '';

  var sd = analyze(data_array).sd
  var grade_result = get_sd_grade(sd);

  score_panel_html += '<div class="alert alert-success"><span>综合评分：</span><span class="overall-score">' + grade_result.grade + '</span>';
  score_panel_html += '；<span class="overall-score-comment">标准方差：</span><span class="overall-score">'+ sd + '</span> ';
  score_panel_html += '<span>；'+ grade_result.comment + '</span></div>';

  score_panel.html(score_panel_html);
}

function get_sd_grade(sd_score) {
  var grade = '';
  var comment = '';
  if (sd_score < 0.5) {
    grade = 'A++';
    comment = '极度公平的排班，万里挑一的好班！'
  } else if (sd_score < 0.7) {
    grade = 'A+';
    comment = '非常公平的排班，非常难得！'
  } else if (sd_score < 1) {
    grade = 'B';
    comment = '称得上公平的排班'
  } else if (sd_score < 1.5) {
    grade = 'C';
    comment = '存在某个人明显好或者不好的排班！'
  } else  {
    grade = 'F';
    comment = '当前排班非常不公平，建议调整方案！'
  }
  return {
    grade: grade,
    comment: comment
  }
}

function draw_message_panel(message_panel, messages) {
  if (messages.length) {
    var message_html = '';
    message_html += '<div class="alert alert-warning">';
    message_html += '<h5 class="alert-heading"> 特别注意：<hr/></h5>';
    message_html += '<ul>'
    for (var i = 0; i < messages.length; i++) {
      message_html += '<li>' + messages[i] + '</li>'
    }
    message_html += '</ul></div></div>'
    message_panel.html(message_html);
  } else {
    message_panel.html('');
  }
}
