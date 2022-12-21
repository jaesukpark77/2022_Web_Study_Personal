// for (let i = 0; i < $('.tab-button').length; i++){

//     $('.tab-button').eq(i).on('click', function(){
//       openTab(i)
//     })
  
// };

$('.list').click(function(e){
  // if(e.target == document.querySelectorAll('.tab-button')[0]){
  //   openTab(0)
  // }
  openTab(e.target.dataset.id)
})

function openTab(num){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(num).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(num).addClass('show');
}

var car2 = { name : '소나타', price : [50000, 3000, 4000] } 
$('.car-title').text(car2.name);

var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

// document.querySelectorAll('.card-body h5')[0].innerHTML = products[0]['title']
document.querySelectorAll('.card-body p')[0].innerHTML = '가격 : ' + products[0]['price']

$('.card-body h5').eq(0).html(products[0].title);

var pants = [28, 30, 32];

$('.form-select').eq(0).on('input', function(){
  var val = this.value;
  if(val == '셔츠'){
    $('.form-select').eq(1).removeClass('form-hide');
    $('.form-select').eq(1).html('');
    var template = `<option>95</option>
    <option>100</option>`;
    $('.form-select').eq(1).append(template);
  }else if(val == '바지'){
    $('.form-select').eq(1).removeClass('form-hide');
    $('.form-select').eq(1).html('');
    pants.forEach(function(a, i){
      $('.form-select').eq(1).append(`<option>${a}</option>`)
    });
  }else{
    $('.form-select').eq(1).addClass('form-hide');
  }
});

var obj = { name : 'kim', age : 20 }

for (var key in obj){
  console.log(obj[key])
}

// var a = document.createElement('p');
// a.innerHTML = '안녕'
// document.querySelector('#test').appendChild(a);


