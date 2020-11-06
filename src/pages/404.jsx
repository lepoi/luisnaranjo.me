// libraries
import React from 'react';

// config files
import { lang, url } from '../../config/seo.js';

// components
import { Layout, SEO } from '../components';

// styles
import '../styles/404.scss';

const description = 'Page not found :(';
const title = '404';
const image = 'https://place-hold.it/500';

const meta = {
	description,
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
		<Layout location={location} page="404">
			<SEO
				path={location.pathname}
				title={title}
				lang={lang}
				meta={meta}
			/>
			404
		</Layout>
	);
};
