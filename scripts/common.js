define([], function () {
	return {
		scrollTop: function () {
			/* Go To Top Scroll */
			var goToTopbtn = document.getElementById('goToTop');

			window.onscroll = function () {
				scrollFunction();
			};

			goToTopbtn.addEventListener('click', function () {
				$('html, body').animate({ scrollTop: '0' }, 300);
			});

			function scrollFunction() {
				if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
					goToTopbtn.style.display = 'block';
				} else {
					goToTopbtn.style.display = 'none';
				}
			}
		},
		snake: function () {
			$('.snake').snakeify({
				// speed: 200
			});
		},
		slick: function () {
			$('.autoplay').slick({
				dots: true,
				autoplay: true,
				autoplaySpeed: 1800,
				infinite: true,
				speed: 300,
				slidesToShow: 3,
				slidesToScroll: 3,
				prevArrow: false,
				nextArrow: false,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
							dots: true,
						},
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						},
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						},
					},
				],
			});
		},
		expandBtn: function () {
			var items = document.querySelectorAll('.box_item');
			var closeButtons = document.querySelectorAll('.close-section');

			items.forEach(function (item) {
				item.addEventListener('click', function () {
					_openBox(this);
				});
			});

			closeButtons.forEach(function (btn) {
				btn.addEventListener('click', function (btn) {
					btn.stopPropagation();
					_closeBox(this.parentElement);
				});
			});

			function _closeBox(el) {
				if (el.classList.contains('expand')) {
					el.classList.remove('expand');
					el.children[1].classList.remove('open');
				}
			}

			function _openBox(el) {
				if (!el.classList.contains('expand')) {
					el.classList.add('expand');
					el.children[1].classList.add('open');
				}
			}
		},
	};
});
