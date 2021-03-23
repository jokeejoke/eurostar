import $ from 'jquery';
window.jQuery = $;
window.$ = $ // import module example (npm i -D jquery)

import Swiper, {
	Autoplay,
	Pagination,
	Navigation
} from 'swiper';
import magnificPopup from 'magnific-popup'

require('~/app/js/vendor/pageScroll2Id/jquery.malihu.PageScroll2id.js');
require('~/app/js/vendor/select2-develop/dist/js/select2.min.js');


document.addEventListener('DOMContentLoaded', () => {

	/** JQUERY CODE */
	
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
			$(this).prev().find(".path").html($(sel).val());
		});
	}
	changePath("#file-upload2");
	changePath("#file-upload");
	

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
 