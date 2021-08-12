// Webiste navigation module.

export function initModule() {
	const links = document.querySelectorAll('.menu > a');
	const menu = document.querySelector('.menu');
	const sectionsWrapp = document.querySelectorAll('.content-section .content-section__wrapper');

	function toggleMobileMenu() {
		const menuBtn = document.querySelector('.menu__mobile-menu-btn');

		menuBtn.addEventListener('click', function() {
			menu.classList.toggle('show');
		});
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

	function setLinkAsActive() {

		function onPageLoad() {

			let activeLink = null;
			for (const link of links) {
				if (link.classList.contains('intro'))
					activeLink = link;
			}
			activeLink.classList.add('active-link');
		}

		function onClick() {
			for (const link of links) {
				link.addEventListener('click', function(event) {
					links.forEach(link => link.classList.remove('active-link'));
					event.target.classList.add('active-link');

				});
			}
		}

		function isInViewport(element) {
			const el = element.getBoundingClientRect();
			// Element don't have to be fully visible.
			return el.top >= -200 && el.bottom/1.3 <= window.innerHeight;
		}

		function onScroll() {
		
			document.addEventListener('wheel', () => {
				for (const sectionWrapp of sectionsWrapp) {
					const sectionId = sectionWrapp.parentNode.getAttribute('id');
					if (isInViewport(sectionWrapp)) {
						for (const link of links) {
							if (link.classList.contains(sectionId)) {
								links.forEach(link => link.classList.remove('active-link'));
								link.classList.add('active-link');
							}
						}
					} else {
						for (const link of links) {
							if (link.classList.contains(sectionId)) {
								link.classList.remove('active-link');
							}
						}
					}
				}
			});
		}

		onPageLoad();
		onClick();
		onScroll();
	}

	function addMenuShadow() {
		window.addEventListener('scroll', function() {

			if (window.scrollY != 0)
				menu.classList.add('shadow');
			else
				menu.classList.remove('shadow');

		});
	}

	function changeMenuBg() {

	}

	toggleMobileMenu();
	doSmoothScroll();
	setLinkAsActive();
	addMenuShadow();
	changeMenuBg();

}
