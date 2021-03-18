//import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)


document.addEventListener('DOMContentLoaded', () => {

	function hamburgerMenu() {
		$burgerBtn = document.querySelector('.hamburger')
		$mobileMenu = document.querySelector('.header-bottom')
		$burgerBtn.addEventListener('click', function() {
			if(this.classList.contains('hamburger__active')){
				this.classList.remove('hamburger__active')
				$mobileMenu.classList.remove('active')
			} else {
				this.classList.add('hamburger__active')
				$mobileMenu.classList.add('active')
			}
		})
	}

	hamburgerMenu()

})
