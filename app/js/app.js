import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
import Swiper, {Autoplay, Pagination, Navigation} from 'swiper';
require('~/app/js/vendor/select2-develop/dist/js/select2.min.js');


document.addEventListener('DOMContentLoaded', () => {

	/** JQUERY CODE */
	$(".tab_item").not(":first").hide();
	$(".tab-wrapper .tab").click(function() {
		$(".tab-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.filter-sort').select2({
    dropdownAutoWidth: true,
		minimumResultsForSearch: Infinity
	});
	/** END JQUERY CODE */

	Swiper.use([Autoplay, Pagination, Navigation]);

	/** Hamburger Menu Function */
	function hamburgerMenu() {
		const $burgerBtn = document.querySelector('.hamburger')
		const $mobileMenu = document.querySelector('.header-bottom')
		$burgerBtn.addEventListener('click', function() {
			if(this.classList.contains('hamburger__active')){
				this.classList.remove('hamburger__active')
				$mobileMenu.classList.remove('active')
				document.body.style.overflow = ''
			} else {
				this.classList.add('hamburger__active')
				$mobileMenu.classList.add('active')
				document.body.style.overflow = 'hidden'
			}
		})
	}
	/** END Hamburger Menu Function */

	/** Banner Slider */
	const banneSlider = new Swiper('.banner-slider', {
		speed: 1000,
		slidesPerView: 1,
		spaceBetween: 10,
		centeredSlides: true,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: true
		},
		navigation: {
			nextEl: '.banner-slider__next',
			prevEl: '.banner-slider__prev',
		},
		pagination: {
			el: '.banner-slider__pagination',
		},
		breakpoints: {
			1200: {
				slidesPerView: 2,
				spaceBetween: 30,
				
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
		}
	});
	/** END Banner Slider */


	hamburgerMenu()




})
