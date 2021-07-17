function welcome() {
    alert('ようこそ');
}

clockswitch = 0;
figureswitch = 0;
baloonswitch = 0;

function openClock() {
    if (clockswitch == 0) {
        clockswitch = 1;
        alert('画像を表示します');
        open( "./clock.html", "_blank" ) ;
    } else {
        clockswitch = 0;
        open( "./clock.html", "_blank" ) ;
    }
  }

  function openFigure() {
    if (figureswitch == 0) {
        figureswitch = 1;
        alert('画像を表示します');
        open( "./figure.html", "_blank" ) ;
    } else {
        figureswitch = 0;
        open( "./figure.html", "_blank" ) ;
    }
  }
  
  function openBaloon() {
    if (baloonswitch == 0) {
        baloonswitch = 1;
        alert('画像を表示します');
        open( "./baloon.html", "_blank" ) ;
    } else {
        baloonswitch = 0;
        open( "./baloon.html", "_blank" ) ;
    }
  }

var img;

// 時計の画面切り替え
function changeclock1() {
    img = document.getElementById('clock');
    img.src = './picture/productphoto/box1/clock/clock1.png';
}

function changeclock2() {
    img = document.getElementById('clock');
    img.src = './picture/productphoto/box1/clock/clock2.png';
}

function changeclock3() {
    img = document.getElementById('clock');
    img.src = './picture/productphoto/box1/clock/clock3.png';
}

// 動物の画面切り替え
function changeanimal1() {
    img = document.getElementById('animal');
    img.src = './picture/productphoto/box2/animal/animal1.png';
}
function changeanimal2() {
    img = document.getElementById('animal');
    img.src = './picture/productphoto/box2/animal/animal2.png';
}
function changeanimal3() {
    img = document.getElementById('animal');
    img.src = './picture/productphoto/box2/animal/animal3.png';
}

// バルーンの画面切り替え
function changebaloon1() {
    img = document.getElementById('baloon');
    img.src = './picture/productphoto/box3/baloon/baloon1.png';
}
function changebaloon2() {
    img = document.getElementById('baloon');
    img.src = './picture/productphoto/box3/baloon/baloon2.png';
}
function changebaloon3() {
    img = document.getElementById('baloon');
    img.src = './picture/productphoto/box3/baloon/baloon3.png';
}