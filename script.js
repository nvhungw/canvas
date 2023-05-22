console.log('Hello!');
let canvas = document.getElementById('canvasBoard');
console.log(canvas);
let context = canvas.getContext('2d');

context.beginPath();
context.strokeStyle = 'blue';
context.arc(100, 100, 20, 0, Math.PI, true);
context.fillStyle = '#FF0000';
context.stroke();
context.fill();
context.closePath();
//arc(x, y, r, degStart, degEnd, anticlockwise);
// x, y là toạ độ của tâm theo px , trục ngang là x, dọc là y
// r là bán kính
// deg start : góc bắt đầu
// deg end góc kết thúc
// anticlockwise: theo chiều kim đồng hồ không mặc định false theo chiều kim
// true là ngược chiều
// vẽ đường
//
// context.moveTo(50,50)
context.beginPath();
context.arc(50, 50, 40, 0, Math.PI);
console.log(Math.PI);
context.stroke();
context.closePath();
context.beginPath();
context.strokeStyle = 'blue';

context.fillStyle = '#FF0000';
// fill style: đổ màu radian do
// context.fillRect(0, 110, 150, 20);
context.strokeStyle = 'blue';
context.strokeRect(0, 110, 150, 20);
//

context.closePath();
// fillRect(x, y, w, h)
// strokeRect(x, y, w, h)
// x, y là toạ độ
// w,h là chiều rộng và chiều cao

context.font = '30px Arial';
context.fillStyle = 'green';
context.fillText('Hello', 0, 30); // fillText('text', x, y)

// let image = new Image();
// image.src =
//   'https://previews.123rf.com/images/shushanto/shushanto2209/shushanto220900703/191842443-destruction-of-planets-concept-art-illustration-background-image.jpg';
// image.onload = function () {
//   context.drawImage(image, 5, 0, 150, 150); //(image, x, y, width, height)
// };

// Vẽ đường thẳng
context.moveTo(190, 0);
context.lineTo(190, 150);

context.moveTo(170, 0);
context.lineTo(170, 150);

context.moveTo(0, 50);
context.lineTo(200, 50);

context.moveTo(0, 100);
context.lineTo(200, 100);

context.stroke();

function hello() {
  console.log('hello');
}

let count = 0;
let phuts = 0;
// Sau bao nhiêu giây thực hiện hàm bên trong chỉ 1 lần
setTimeout(function () {
  hello();
}, 1000);

// Sau mỗi thời gian sẽ thực hiện hàm bên trong 1 lần
let timeWhile = setInterval(function () {
  count++;
  let time = document.getElementById('time');
  if (count == 5) {
    phuts++;
    count = 0;
    clearInterval(timeWhile); //Dùng để dừng lại
  }
  time.innerHTML = count;
  let phut = document.getElementById('phut');
  phut.innerHTML = phuts;
}, 1000);
