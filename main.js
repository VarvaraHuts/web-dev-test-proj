// alert ("Hello, world!")

// var hello = 1 + 2;
// console.log(hello);

// if (hello === 3) {
	// console.log('WOW');
// }

// var x = hello > 3 ? 'WOW' : 'ELSE';
// console.log(x);

// var x = [1, 2, NaN, 4]
// console.log(x.length);

// for (var i = 0; i < 4; i++) {
	// console.log(i + ': ' + x[i]);
// }

// x.forEach(function (el) {
	// console.log(el);
// });

// var hello = function hello (el) {
	// var newel = el + 2
	// return newel;
// }

// console.log(x.map(hello))
// x.forEach(hello);

// console.log(hello(1))

// DOM-дерево

// $(document).ready(function () {
	// alert('Hello');
// });

// or

// $(function () {
	// alert('Hello');
// });

// $('h1') - селектор

// $(function () {
	
	// var $headings = $('div.container > .hello');
	// console.log($headings);
// });

// !!! <h1 class="hello"> Hello, world! <img src="img/1.jpg"></h1>

// $(function () {
	
	// var $headings = $('#asdf .hello');
	// console.log($headings);
// });

// <div class="container" id="asdf">

// del ("learn more")





// селекторы
// $('h1').text("Hi") //parent, children, syblings

// счётчик (дз!!!)
// $(function () {
	// var clicks = 0,
		
	// $('.btn').click(function () { 
		// clicks += 1;
		
		// return false;
	// }),
// }),

// show-hide
// $(function () {
	// var $h1 = $('h1'),
		// showed = true;
	// $('.btn').click(function () {
		// if (showed) {
			// $h1.hide(); //fadeout
		// } else {
			// $h1.show(); //fadein
		// }
		
		// showed = !showed;
		
		// return false;
	// });
// });

$(function () {
	$('form').submit(function () {
		alert('Hello!')
		// return false;
	});
});

// $(function () {
	// $('form').submit(function () {
		// var $this = $(this);
		// alert($this.find('input[name="email"]').val())
		// return false;
	// });
// });