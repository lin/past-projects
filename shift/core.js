$(document).ready(function(){
  // doms
  var main_table      = $("#main-table");
  var analytics_table = $('#analytics-table');
  var score_panel     = $("#score-panel");
  var message_panel   = $("#message-panel");

  // when to draw or redraw;
  draw(); $('select').on('change', function() { draw() })

  // collect dynamic data;
  function draw(){
    var number_of_people           = parseInt($('#number-of-people').val());
    var night_shift                = night_shifts[parseInt($('#type-of-shift').val())];
    var next_month                 = parseInt($('#next-month').val());
    var number_of_shift_left       = parseInt($('#shift-left').val());
    var step                       = parseInt($('#step').val());
    var night_rule                 = parseInt($('#night-rule').val());
    redraw(number_of_people, night_shift, next_month, number_of_shift_left, step, night_rule);
  }

  function redraw(number_of_people, night_shift, next_month, number_of_shift_left, step, night_rule) {

    if (number_of_shift_left == -1) {

      var number_of_days = get_number_of_days(next_month);
      var best_sd = 999;
      var best_result;

      for (var i = 0; i < number_of_days; i++) {
        var result =  calculate(number_of_people, night_shift, next_month, i, step, night_rule);
        var sd = parseFloat(result.sd)
        if ( sd < best_sd ) {
          best_sd     = sd;
          best_result = result;
        }
      }

      var data_array = best_result.data_array;
      var holidays   = best_result.holidays;
      var messages   = best_result.messages;

    } else {

      var result = calculate(number_of_people, night_shift, next_month, number_of_shift_left, step, night_rule);

      var data_array = result.data_array;
      var holidays   = result.holidays;
      var messages   = result.messages;
    }

    draw_main_table(main_table, data_array, holidays);
    draw_analytics_table(analytics_table, data_array);
    draw_score_panel(score_panel, data_array);
    draw_message_panel(message_panel, messages);

    // var body_width = main_table.width() + 40;
    // $('body').attr({style: "width:" + body_width + "px" });

  }

  function calculate (number_of_people, night_shift, next_month, number_of_shift_left, step, night_rule) {

    var number_of_days = get_number_of_days(next_month);
    var holidays       = get_holidays(next_month, holidays_list);
    var number_of_people_on_each_day_shift = 4;
    var messages       = [];

    if ( number_of_people - night_shift.length ==  3) {
      number_of_people_on_each_day_shift = 3;
    }

    if ( number_of_people - night_shift.length < 3) {
      messages.push('没办法排白班。请改变夜班周期，或者增加人数。')
    }

    // create the initial data_array to manipulate.
    var data_array    = generate_initial_data_array(number_of_people, number_of_days, holidays);
    var average_point = get_average_point(data_array, holidays, number_of_people_on_each_day_shift);

    // multuple steps to draw table
    data_array = add_night(data_array, night_shift, number_of_shift_left, holidays, night_rule).data_array;
    if ( step > 1) {
      // add day
      var add_day_result = add_day(data_array, holidays, night_shift, number_of_people_on_each_day_shift);
      data_array  = add_day_result.data_array;
      if (add_day_result.message) messages.push(add_day_result.message);
      // add noon
      var add_noon_result = add_noon(data_array, holidays, number_of_people_on_each_day_shift);
      data_array  = add_noon_result.data_array;
      if (add_noon_result.message) messages.push(add_noon_result.message);
    };
    if ( step > 2 ) {
      data_array = add_duty_with_easy_rule(data_array, night_shift, holidays);
    };
    if ( step > 3 ) {
      data_array = add_duty_with_hard_rule(data_array, night_shift, holidays, average_point);
    }

    if (step > 2) {
      data_array = add_on_call(data_array, holidays);
      data_array = final_touch(data_array, holidays);
    } else if (step > 1) {
      data_array = final_touch(data_array, holidays);
    }

    return {
      data_array: data_array,
      holidays: holidays,
      messages: messages,
      sd: analyze(data_array).sd
    };
  }

});
