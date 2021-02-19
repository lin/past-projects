var dict = {
  0: "",
  1: "小",
  2: "大",
  3: "下",
  4: "休",
  5: "白",
  6: "中",
  7: "值",
  8: "假",
  9: "听"
};

var shift_type = {
  none: {
    index: 0,
    desc: ""
  },
  minor_night: {
    index: 1,
    desc: "小"
  },
  major_night: {
    index: 2,
    desc: "大"
  },
  after_night: {
    index: 3,
    desc: "下"
  },
  rest: {
    index: 4,
    desc: "休"
  },
  day: {
    index: 5,
    desc: "白"
  },
  noon: {
    index: 6,
    desc: "中"
  },
  duty: {
    index: 7,
    desc: "值"
  },
  holiday: {
    index: 8,
    desc: "假"
  },
  on_call: {
    index: 9,
    desc: "听"
  }
};

var holidays_list = {
  4: [1, 5, 6, 7, 14, 15, 21, 22, 29, 30],
  5: [1, 5, 6, 12, 13, 19, 20, 26, 27],
  6: [2, 3, 9, 10, 16, 17, 18, 23, 24, 30],
  7: [1, 7, 8, 14, 15, 21, 22, 28, 29],
  8: [4,5,11,12,18,19,25,26],
  9: [1,2,8,9,15,16,22,23,24],
  10: [1,2,3,4,5,6,7,13,14,20,21,27,28],
  11: [3,4,10,11,17,18,24,25],
  12: [1,2,8,9,15,16,22,23,29,30]
};

var night_shifts = [
  [shift_type.minor_night.index, shift_type.major_night.index, shift_type.after_night.index, shift_type.rest.index, shift_type.rest.index, shift_type.rest.index],
  [shift_type.minor_night.index, shift_type.major_night.index, shift_type.after_night.index, shift_type.rest.index, shift_type.rest.index],
  [shift_type.minor_night.index, shift_type.major_night.index, shift_type.after_night.index, shift_type.rest.index]
];

// constants
// var NUMBER_OF_PEOPLE_ON_EACH_DAY_SHIFT = 4;
var NUMBER_OF_PEOPLE_ON_EACH_NOON_SHIFT = 1;
var NUMBER_OF_PEOPLE_ON_EACH_DUTY = 2;
var POINTS_PER_DAY = 1;
var POINTS_PER_DUTY = 2;
var POINTS_PER_NIGHT = 0.8;
var POINTS_PER_NOON = 1.3;
