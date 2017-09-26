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

$(function () {
	var $btn = $('.btn'),
		oldtext = '',
		defaultpic = false;
		
	$btn.hover(function () { //btn.click
		var $this = $(this);
		
		oldtext = $this.text();
		
		$this.addClass("btn-danger") //toggleClass
			 .text("Wow");
			 
		return false;
	}, function () {
		
		var $this = $(this);
		
		$this.removeClass("btn-danger")
			 .addClass("btn-default")
			 .text(oldtext);
			 
		return false;
	})
	.click(function () {
		defaultpic = !defaultpic;
		$('img').attr(
			'src',
			defaultpic ? 'img/1.jpg'
					   : 'img/2.jpg');
		});
		return false;
	});
)};

// del ("learn more")