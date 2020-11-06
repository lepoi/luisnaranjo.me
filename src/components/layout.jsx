// libraries
import React from 'react';

// components
import { Navbar } from './';

// styles
import '../styles/reset.css';
import '../styles/main.scss';

export default ({ location, children, page = 'home' }) => {
	const { pathname } = location;

	return (
		<div className={`page-wrapper ${page}-wrapper`}>
			<div
				className={`page-root ${
					pathname === '/' ? 'bgc-dk' : 'bgc-lt'
				}`}
			>
				<Navbar location={location} />
				<main className={`page-content ${page}-content`}>
					{children}
				</main>
			</div>
		</div>
	);
};
