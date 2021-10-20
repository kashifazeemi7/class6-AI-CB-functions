function values() {
var ele11 = document.getElementById('elem-11').value
var ele12 = document.getElementById('elem-12').value
var ele13 = document.getElementById('elem-13').value
var ele14 = document.getElementById('elem-14').value
var ele15 = document.getElementById('elem-15').value
var ele16 = document.getElementById('elem-16').value


var ele21 = document.getElementById('elem-21').value
var ele22 = document.getElementById('elem-22').value
var ele23 = document.getElementById('elem-23').value
var ele24 = document.getElementById('elem-24').value
var ele25 = document.getElementById('elem-25').value
var ele26 = document.getElementById('elem-26').value
}

    function sum() {
        
    }

    var resArr = [];
let arr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

var ele11,
  ele12,
  ele13,
  ele14,
  ele15,
  ele16,
  ele17,
  ele18,
  ele19,
  ele21,
  ele22,
  ele23,
  ele24,
  ele25,
  ele26,
  ele27,
  ele28,
  ele29;
 
function values() {
  ele11 = Number(document.getElementById("elem-11").value);  
  ele12 = Number(document.getElementById("elem-12").value);
  ele13 = Number(document.getElementById("elem-13").value);
  ele14 = Number(document.getElementById("elem-14").value);
  ele15 = Number(document.getElementById("elem-15").value);
  ele16 = Number(document.getElementById("elem-16").value);
  ele17 = Number(document.getElementById("elem-17").value);
  ele18 = Number(document.getElementById("elem-18").value);
  ele19 = Number(document.getElementById("elem-19").value);

  
  ele21 = Number(document.getElementById("elem-21").value);
  ele22 = Number(document.getElementById("elem-22").value);
  ele23 = Number(document.getElementById("elem-23").value);
  ele24 = Number(document.getElementById("elem-24").value);
  ele25 = Number(document.getElementById("elem-25").value);
  ele26 = Number(document.getElementById("elem-26").value);
  ele27 = Number(document.getElementById("elem-27").value);
  ele28 = Number(document.getElementById("elem-28").value);
  ele29 = Number(document.getElementById("elem-29").value);

}

var arr1 = [
    [ele11, ele12, ele13],
    [ele14, ele15, ele16],
    [ele17, ele18, ele19],
  ];
  
  var arr2 = [
    [ele21, ele22, ele23],
    [ele24, ele25, ele26],
    [ele27, ele28, ele29],
  ];

function sum() {
  let arrcount = 3;

  for (let i = 0; i < arrcount; i++) {
    
    for (let y = 0; y < arrcount; y++) {
      arr[i][y] =(arr1[i][y] + arr2[i][y]);
    }
  }

  resArr = arr;
  //console.log(resArr)
  document.getElementById("res-22").value = resArr[0][0];
  document.getElementById("res-21").value = resArr[0][1];
  document.getElementById("res-23").value = resArr[0][2];
  document.getElementById("res-24").value = resArr[1][0];
  document.getElementById("res-25").value = resArr[1][1];
  document.getElementById("res-26").value = resArr[1][2];
  document.getElementById("res-27").value = resArr[2][0];
  document.getElementById("res-28").value = resArr[2][1];
  document.getElementById("res-29").value = resArr[2][2];
}
