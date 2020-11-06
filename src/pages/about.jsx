// libraries
import React from 'react';

// config files
import { lang, image, url } from '../../config/seo.js';

// components
import { Layout, SEO } from '../components';

// styles
import '../styles/about.scss';

const title = 'About';
const description = '';

// TODO: define
const meta = {
	description: description,
	'og:title': title,
	'og:description': description,
	'og:type': 'website',
	'og:image': image,
	'og:url': url,
	'twitter:title': title,
	'twitter:description': description,
	'twitter:card': 'summary'
};

export default ({ location }) => {
	return (
		<Layout location={location} page="about">
			<SEO
				path={location.pathname}
				title={title}
				lang={lang}
				meta={meta}
			/>
			about
		</Layout>
	);
};
