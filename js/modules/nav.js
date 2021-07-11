// Webiste navigation module.

export function initModule() {

	const links = document.querySelectorAll('.menu > a');
	const menu = document.querySelector('.menu');

	function toggleMobileMenu() {
		const menuBtn = document.querySelector('.menu__mobile-menu-btn');

		menuBtn.addEventListener('click', function() {
			menu.classList.toggle('show');
		});
	}

	function setClickedLinkAsActive() {
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

				if (this.parentElement.classList.contains('show')) {
					setTimeout(function() {
						menu.classList.remove('show');
					}, 900);

					setTimeout(function() {
						document.querySelector(sectionHref).scrollIntoView({
						behavior: "smooth"
						});
					}, 1400);
				}
				else {
					document.querySelector(sectionHref).scrollIntoView({
					behavior: "smooth"
					});
				}

			});
		}	
	}

	toggleMobileMenu();
	setClickedLinkAsActive();
	doSmoothScroll();

}
