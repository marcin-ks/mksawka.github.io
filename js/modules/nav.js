// Webiste navigation module.

export function initModule() {

	const links = document.querySelectorAll('.menu > a');

	function toggleMobileMenu() {
		const menu = document.querySelector('.menu');
		const menuBtn = document.querySelector('.menu__mobile-menu-btn');

		menuBtn.addEventListener('click', function() {
			menu.classList.toggle('show');
		});
	}

	function handleMenuLink() {
		for (const link of links) {
			link.addEventListener('click', function(event) {

				links.forEach(link => link.classList.remove('active-link'));
				event.target.classList.add('active-link');

			});
		}
	}

	function doSmoothScroll() {
		for (const link of links) {
			link.addEventListener('click', function(event) {
				
				event.preventDefault();
				const sectionHref = this.getAttribute("href");

				document.querySelector(sectionHref).scrollIntoView({
   			behavior: "smooth"
  			});

			});
		}	
	}

	toggleMobileMenu();
	handleMenuLink();
	doSmoothScroll();

}
