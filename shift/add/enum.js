function enum_all_possiblility(data_array, waiting_list, available_duty_dates) {
  waiting_list.pop();
  var dates_left = get_dates_left(available_duty_dates);
  var regex = new RegExp('^' + dates_left.sort(function(a, b){return a - b}).to_s() + '$',"g");

  var all_dates_combination = [];
  for (var i = 0; i < waiting_list.length; i++) {
    var current_person = waiting_list[i].person;
    var dates_combination = [];

    if ( waiting_list[i].duty_short  == 1 ) {
      dates_combination = combination_dates_with_one(waiting_list[i].possible_dates);
    } else  {
      dates_combination = combination_dates(waiting_list[i].possible_dates);
    }
    all_dates_combination.push(dates_combination);
  }
  var all_possible = cartesianProduct(all_dates_combination);
  var matches = find_matches(all_possible, regex);

  // TODO: YOU might find no match at all.
  // if (matches.length != 0) {
  //   data_array = find_best_match(data_array, all_possible, matches, waiting_list);
  // }

  // console.log(data_array);
  return {
    data: data_array,
    all: all_possible.length,
    matches: matches.length
  };
}

function extend_deep(parent, child) {
  var i, proxy;
  proxy = JSON.stringify(parent);
  proxy = JSON.parse(proxy);
  child = child || {};
  for (i in proxy) {
    if(proxy.hasOwnProperty(i)) {
       child[i] = proxy[i]; }
     }
     proxy = null;
   return Object.keys(child).map(function (key) { return child[key]; });
 }


function find_best_match(data_array, all_possible, matches, waiting_list) {
  var best_sd = 999;
  var best_data_array = extend_deep(data_array);
  for (var i = 0; i < matches.length; i++) {
    var temp_data_array = extend_deep(data_array);
    var arr = all_possible[matches[i]];
    for (var k = 0; k < arr.length; k++) {
      for (var j = 0; j < arr[k].length; j++) {
        temp_data_array[waiting_list[k].person][arr[k][j]] = 7;
        var analytics_resut = analytics(data_array);
        var sd = analytics_resut[temp_data_array.length + 1][5];
        if ( best_sd > sd ) {
          best_sd = sd;
          best_data_array = temp_data_array;
        }
      }
    }
    return best_data_array;
  }
}

function deep_copy(arr) {
  var a = [];
  for (var i = 0; i < arr.length; i++) {
    var a1 = [];
    for (var j = 0; j < arr[i].length; j++) {
      a1.push(arr[i][j]);
    }
    a.push(a1);
  }
  return a;
}

function analyze_possibility(data_array, arr, waiting_list) {

  var temp_data_array = data_array;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      temp_data_array[waiting_list[i].person][arr[i][j]] = 7;
    }
  }
  var analytics_result = analytics(temp_data_array);
  var sd = analytics_result[temp_data_array.length + 1][5];
  return [temp_data_array, sd];
}

function cartesianProduct(a) { // a = array of array
    var i, j, l, m, a1, o = [];
    if (!a || a.length == 0) return a;

    a1 = a.splice(0, 1)[0]; // the first array of a
    a = cartesianProduct(a);
    for (i = 0, l = a1.length; i < l; i++) {
        if (a && a.length) for (j = 0, m = a.length; j < m; j++)
            o.push([a1[i]].concat(a[j]));
        else
            o.push([a1[i]]);
    }
    return o;
}

function find_matches(all_possible, regex) {
  var results = [];
  var matches;
  for (var i = 0; i < all_possible.length; i++) {
    var temp_arr = all_possible[i].reduce(function(a,b){ return a.concat(b) },[]);
    var str = temp_arr.sort(function(a, b){return a - b}).to_s();
    // console.log(str);
    if (regex.exec(str)) {
      results.push(i);
    }
  }
  return results;
}

function combination_dates_with_one(dates) {
  var comb = [];
  for (var i = 0; i < dates.length; i++) {
    comb.push([dates[i]]);
  }
  return comb;
}

function get_dates_left(available_duty_dates) {
  var dates_left = [];
  for (var i = 0; i < available_duty_dates.one_date.length; i++) {
    dates_left.push(available_duty_dates.one_date[i]);
  }
  for (var i = 0; i < available_duty_dates.two_dates.length; i++) {
    dates_left.push(available_duty_dates.two_dates[i]);
    dates_left.push(available_duty_dates.two_dates[i]);
  }
  return dates_left
}

function combination_dates(dates) {
  var results = [];
  var combinations = combination(dates.length);
  for (var i = 0; i < combinations.length; i++) {
    var first = dates[combinations[i][0]];
    var second = dates[combinations[i][1]];
    if ( first + 1 != second ) results.push([first, second]);
  }
  return results;
}

function combination(m) {
  // c_m^n [(0, 1), (0,2), (0,3), (1,2), (1,3), (2,3)]
  var arr = [];
  for (var i = 0; i < m - 1; i++) {
    for (var j = 0; j < m - i - 1; j++) {
      arr.push([i, j + i + 1]);
    }
  }
  return arr;
}
