import $ from 'jquery';
window.jQuery = $;
window.$ = $ // import module example (npm i -D jquery)

import Swiper, {
	Autoplay,
	Pagination,
	Navigation
} from 'swiper';
import magnificPopup from 'magnific-popup';
import IMask from 'imask';

require('~/app/js/vendor/pageScroll2Id/jquery.malihu.PageScroll2id.js');
require('~/app/js/vendor/select2-develop/dist/js/select2.min.js');


document.addEventListener('DOMContentLoaded', () => {

	/** JQUERY CODE */

	$(window).on("load", function () {
		$(".preloader").delay(500).fadeOut("slow");
	});
	
	$(".tab_item").not(":first").hide();
	$(".tab-wrapper .tab").click(function () {
		$(".tab-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.filter-sort').select2({
		dropdownAutoWidth: true,
		minimumResultsForSearch: Infinity
	});

	function changePath(sel) {
		$(sel).on("change", function () {
			if($(sel).val() !== '') {
				//$(this).prev().find(".path").html($(sel).val());
				$(this).prev().addClass('uploaded').find(".custom-file-upload").html(`
				<svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.8192 4.18555H7.90252C7.74152 4.18555 7.61084 4.0543 7.61084 3.89387V0.977223C7.61084 0.816223 7.48016 0.685547 7.31916 0.685547H1.48584C1.00341 0.685547 0.61084 1.07812 0.61084 1.56055V13.8105C0.61084 14.293 1.00341 14.6855 1.48584 14.6855H10.2358C10.7183 14.6855 11.1108 14.293 11.1108 13.8105V4.47722C11.1108 4.31622 10.9802 4.18555 10.8192 4.18555ZM10.5275 13.8105C10.5275 13.971 10.3968 14.1022 10.2358 14.1022H1.48584C1.32484 14.1022 1.19416 13.971 1.19416 13.8105V1.56055C1.19416 1.40012 1.32484 1.26887 1.48584 1.26887H7.02752V3.89387C7.02752 4.3763 7.42009 4.76887 7.90252 4.76887H10.5275V13.8105Z"/>
				</svg>
				<span class="path">${$(sel).val()}</span>
				`)
			}
			
		});
	}
	changePath("#file-upload2");
	changePath("#file-upload");

	$(".form .upload-block .delete").on("click", function() {
		$(this).parent().removeClass("uploaded").next().val("").prev("").find(".custom-file-upload").html(`
		<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4.78416 17.1708C3.62626 17.1708 2.54075 16.7244 1.72743 15.9139C0.914118 15.1034 0.465698 14.0224 0.465698 12.8689C0.465698 11.7158 0.913791 10.6344 1.72743 9.8242L10.6677 0.918213C11.9468 -0.35533 13.9343 -0.298227 15.2907 1.05297C16.6471 2.40418 16.7054 4.38383 15.4263 5.65835L7.02757 14.025C6.23915 14.8104 4.95514 14.8117 4.16541 14.025C3.37633 13.2386 3.37666 11.9595 4.16541 11.1738L9.85467 5.5063C10.0466 5.31508 10.3575 5.31508 10.5494 5.5063C10.7414 5.69751 10.7414 6.00716 10.5494 6.19837L4.86015 11.8659C4.45431 12.2701 4.45431 12.9283 4.86015 13.3329C5.26664 13.7372 5.92699 13.7365 6.33283 13.3329L14.7316 4.96627C15.6144 4.08657 15.5564 2.70176 14.596 1.74505C13.6356 0.788347 12.2455 0.730592 11.3624 1.61029L2.42217 10.5163C1.79425 11.1418 1.44836 11.9774 1.44836 12.8689C1.44836 13.7607 1.79425 14.5963 2.42217 15.2218C3.05009 15.8473 3.88895 16.1919 4.78416 16.1919C5.67903 16.1919 6.51789 15.8473 7.14581 15.2218L16.086 6.31584C16.278 6.12463 16.5888 6.12463 16.7808 6.31584C16.9727 6.50705 16.9727 6.81671 16.7808 7.00792L7.84055 15.9139C7.02724 16.7241 5.94173 17.1708 4.78416 17.1708Z" />
		</svg>								
		<span class="path">Прикрепить файл</span>
		`)
	});
	

	$(".scroll-link").mPageScroll2id();

	if($('.open-popup').length) {
		$('.open-popup').magnificPopup({
			type:'inline',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			showCloseBtn: false,
			midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		});
	}
	
	if($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	}
	if($(".form-close").length) {
		$(".form-close").on("click", function() {
			$.magnificPopup.close()
		})
	}
	
	

	/** END JQUERY CODE */

	Swiper.use([Autoplay, Pagination, Navigation]);

	/** Hamburger Menu Function */
	function hamburgerMenu() {
		const $burgerBtn = document.querySelector('.hamburger')
		const $mobileMenu = document.querySelector('.header-bottom')
		$burgerBtn.addEventListener('click', function () {
			if (this.classList.contains('hamburger__active')) {
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

	/** Close Navbar Menu When Click Nav Link */
	function closeHamburger () {
		const $links = document.querySelectorAll(".header .navbar .navbar-link");
		const $burgerBtn = document.querySelector('.hamburger')
		const $mobileMenu = document.querySelector('.header-bottom')
		$links.forEach(link => {
			link.addEventListener("click", function() {
				if($burgerBtn.classList.contains('hamburger__active')) {
					$burgerBtn.classList.remove('hamburger__active')
					$mobileMenu.classList.remove('active')
					document.body.style.overflow = ''
				} else {
					$burgerBtn.classList.add('hamburger__active')
					$mobileMenu.classList.add('active')
				}
			})
		})
	}

	function phoneMask() {
		const $phoneMask = document.querySelectorAll('.phone')
		if ($phoneMask) {
			$phoneMask.forEach(phone => {
				IMask(
					phone, {
						mask: '+{7}(000)000-00-00'
				});
			})
		}
	}

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

	window.addEventListener("resize", function() {
		if(window.innerWidth < 1200) {
			hamburgerMenu()
			closeHamburger()
		}
	})

	if(window.innerWidth < 1200) {
		hamburgerMenu()
		closeHamburger()
	}

	phoneMask()
	


})

var app = new Vue({
  el: '#catalog',
  data() {
		return {
			categories: [
				{ title: "Mega Stars"},
				{ title: "Disco 80"},
				{ title: "Disco 90"},
				{ title: "Club and Dance"}
			],
			artistsList: [
				{ title: "A-dessa (Стас Костюшкин)", category: "Mega Stars" },
				{ title: "Arsenium", category: "Disco 80" },
				{ title: "Burito", category: "Disco 90" },
				{ title: "Dan Balan", category: "Disco 90" },
				{ title: "Elvira t", category: "Club and Dance" },
				{ title: "Emin (Эмин Агаларов)", category: "Mega Stars" },
				{ title: "Агузарова Жанна", category: "Disco 80" },
				{ title: "Агурбаш Анжелика", category: "Disco 90" },
				{ title: "Агутин Леонид", category: "Club and Dance" },
				{ title: "Азиза", category: "Mega Stars" },
				{ title: "Алексеев", category: "Disco 80" },
				{ title: "Аллегрова Ирина", category: "Disco 90" },
				{ title: "Алсу", category: "Club and Dance" },
				{ title: "Ани Лорак", category: "Mega Stars" },
				{ title: "Апина Алена", category: "Disco 80" },
				{ title: "Бабкина Надежда", category: "Disco 90" },
				{ title: "Барских Макс", category: "Club and Dance" },
				{ title: "A-dessa (Стас Костюшкин)", category: "Mega Stars" },
				{ title: "Arsenium", category: "Disco 80" },
				{ title: "Burito", category: "Disco 90" },
				{ title: "Dan Balan", category: "Disco 90" },
				{ title: "Elvira t", category: "Club and Dance" },
				{ title: "Emin (Эмин Агаларов)", category: "Mega Stars" },
				{ title: "Агузарова Жанна", category: "Disco 80" },
				{ title: "Агурбаш Анжелика", category: "Disco 90" },
				{ title: "Агутин Леонид", category: "Club and Dance" },
				{ title: "Азиза", category: "Mega Stars" },
				{ title: "Алексеев", category: "Disco 80" },
				{ title: "Аллегрова Ирина", category: "Disco 90" },
				{ title: "Алсу", category: "Club and Dance" },
				{ title: "Ани Лорак", category: "Mega Stars" },
				{ title: "Апина Алена", category: "Disco 80" },
				{ title: "Бабкина Надежда", category: "Disco 90" },
				{ title: "Барских Макс", category: "Club and Dance" },
				{ title: "A-dessa (Стас Костюшкин)", category: "Mega Stars" },
				{ title: "Arsenium", category: "Disco 80" },
				{ title: "Burito", category: "Disco 90" },
				{ title: "Dan Balan", category: "Disco 90" },
				{ title: "Elvira t", category: "Club and Dance" },
				{ title: "Emin (Эмин Агаларов)", category: "Mega Stars" },
				{ title: "Агузарова Жанна", category: "Disco 80" },
				{ title: "Агурбаш Анжелика", category: "Disco 90" },
				{ title: "Агутин Леонид", category: "Club and Dance" },
				{ title: "Азиза", category: "Mega Stars" },
				{ title: "Алексеев", category: "Disco 80" },
				{ title: "Аллегрова Ирина", category: "Disco 90" },
				{ title: "Алсу", category: "Club and Dance" },
				{ title: "Ани Лорак", category: "Mega Stars" },
				{ title: "Апина Алена", category: "Disco 80" },
				{ title: "Бабкина Надежда", category: "Disco 90" },
				{ title: "Барских Макс", category: "Club and Dance" },
				{ title: "A-dessa (Стас Костюшкин)", category: "Mega Stars" },
				{ title: "Arsenium", category: "Disco 80" },
				{ title: "Burito", category: "Disco 90" },
				{ title: "Dan Balan", category: "Disco 90" },
				{ title: "Elvira t", category: "Club and Dance" },
				{ title: "Emin (Эмин Агаларов)", category: "Mega Stars" },
				{ title: "Агузарова Жанна", category: "Disco 80" },
				{ title: "Агурбаш Анжелика", category: "Disco 90" },
				{ title: "Агутин Леонид", category: "Club and Dance" },
				{ title: "Азиза", category: "Mega Stars" },
				{ title: "Алексеев", category: "Disco 80" },
				{ title: "Аллегрова Ирина", category: "Disco 90" },
				{ title: "Алсу", category: "Club and Dance" },
				{ title: "Ани Лорак", category: "Mega Stars" },
				{ title: "Апина Алена", category: "Disco 80" },
				{ title: "Бабкина Надежда", category: "Disco 90" },
				{ title: "Барских Макс", category: "Club and Dance" },
				{ title: "A-dessa (Стас Костюшкин)", category: "Mega Stars" },
				{ title: "Arsenium", category: "Disco 80" },
				{ title: "Burito", category: "Disco 90" },
				{ title: "Dan Balan", category: "Disco 90" },
				{ title: "Elvira t", category: "Club and Dance" },
				{ title: "Emin (Эмин Агаларов)", category: "Mega Stars" },
				{ title: "Агузарова Жанна", category: "Disco 80" },
				{ title: "Агурбаш Анжелика", category: "Disco 90" },
				{ title: "Агутин Леонид", category: "Club and Dance" },
				{ title: "Азиза", category: "Mega Stars" },
				{ title: "Алексеев", category: "Disco 80" },
				{ title: "Аллегрова Ирина", category: "Disco 90" },
				{ title: "Алсу", category: "Club and Dance" },
			],
			showPerPage: 51,
			page: 1,
			filter: "",
			filterByCategory: "",
			loader: false,
			hasNextPage: true,
			filterTyping: false,
		}
	},
	created() {
		this.setShowPerPageByWidth()
		this.setShowPerPageByResize()
	},
	watch: {
		filter() {
			this.filterTyping = this.filter.length
		}
	},
	methods: {
		filteringByCategory(name) {
			this.filterByCategory = name;
			this.page = 1;
		},
		filteredArtists() {
			return this.artistsList.filter(a => a.title.toUpperCase().includes(this.filter.toUpperCase())).slice(0,10)
		},
		computedArtists() {
			const start = (this.page - 1) * this.showPerPage;
			const end = this.page * this.showPerPage;

			const filterArtists = this.artistsList.filter(a => a.category.includes(this.filterByCategory))

			this.hasNextPage = filterArtists.length > end

			return filterArtists.slice(start,end)
		},
		setShowPerPageByWidth() {
			if (window.innerWidth < 1200 && window.innerWidth > 991) {
				this.showPerPage = 34
			}
			if (window.innerWidth < 991) {
				this.showPerPage = 17
			}
		},
		setShowPerPageByResize() {
			const _self = this
			window.addEventListener("resize", function() {
				if (window.innerWidth < 1200 && window.innerWidth >= 993) {
					_self.showPerPage = 34
				}
				if (window.innerWidth <= 993) {
					_self.showPerPage = 17
				}
				if (window.innerWidth > 1200) {
					_self.showPerPage = 51
				}
			})
		}
	},
})
 