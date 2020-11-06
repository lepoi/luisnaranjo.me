// libraries
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive';

// config files
import { routes } from '../../config/routes.js';

// styles
import '../styles/navbar.scss';

export default ({ location }) => {
	const [pathname, setPathame] = useState('');
	const [hash, setHash] = useState('');

	const isPortrait = useMediaQuery({ query: '(min-resolution: 2dppx)' });

	let current = '/';

	if (pathname === '/') current = `/${hash}`;
	else {
		const initial = `${pathname.split('/')[1]}`;
		current = `/${initial ? initial : ''}`;
	}

	useEffect(() => {
		setPathame(location.pathname);
		setHash(location.hash);
	}, [location]);

	return (
		<div
			className={`navbar-wrapper ${
				pathname === '/' ? 'transparent' : 'sticky bgc-dk'
			} ${isPortrait ? 'docked' : ''}`}
		>
			<nav className="container navbar pt-3 pb-3">
				<div className="row nav-links">
					{routes.map((r, i) => (
						<Link
							key={`nav-r-${i}`}
							to={r.path}
							className={`nav-link p-1 pl-3 pr-3 ml-6 sm-ml-3 xs-ml-2 ${
								r.path === current ? 'active' : ''
							}`}
							onClick={(e) => {
								console.log(
									pathname !== '/',
									r.path.split('#')[0] !== '/'
								);

								if (
									pathname !== '/' ||
									r.path.split('#')[0] !== '/'
								)
									return;

								console.log('preventing redirect');
								e.preventDefault();

								const clickEvent = new MouseEvent('click', {
									view: window,
									bubbles: true,
									cancelable: false
								});
								const element = document.querySelector(
									`#fp-nav > ul > li:nth-child(${i + 1}) > a`
								);

								if (element) element.dispatchEvent(clickEvent);
							}}
						>
							<div className="nav-link-inner underlined-box animated">
								{r.label}
							</div>
						</Link>
					))}
				</div>
			</nav>
		</div>
	);
};
