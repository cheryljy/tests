var Link = {
  SetColor : function (color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while ( i < alist.length) {
      alist[i].style.color = color;
      i = i + 1 ;
      }
  }
}

var Body = {
  SetColor : function (color) {
    document.querySelector('body').style.color = color;
  },
  BackgroundColor : function (color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}
function lightmodHanlder(self){
var target = document.querySelector('body');
if (self.value === '야간모드 전환') {
  Body.BackgroundColor('black');
  Body.SetColor('white');
  self.value = '주간모드 전환';
  Link.SetColor('pink');
}
else {
  Body.BackgroundColor('White');
  Body.SetColor('Black');
  self.value = '야간모드 전환';
  Link.SetColor('green');
}
}
