// libraries
import React from 'react';
import Helmet from 'react-helmet';

// config files
import {
	lang as defaultLang,
	title as defaultTitle,
	description as defaultDescription,
	image as defaultImage,
	url as defaultUrl
} from '../../config/seo.js';

const complement = 'Luis Naranjo';

export default ({ lang, path, title, titleTemplate, meta }) => {
	const canonicalUrl = `${defaultUrl}${path}`;
	meta = {
		description: defaultDescription,
		'og:title': defaultTitle,
		'og:description': defaultDescription,
		'og:type': 'website',
		'og:image': defaultImage,
		'og:url': canonicalUrl,
		'twitter:title': defaultTitle,
		'twitter:description': defaultDescription,
		'twitter:card': 'summary',
		'theme-color': '#4285f4',
		...meta
	};

	const seoProps = {
		htmpAttributes: {
			lang: lang ? lang : defaultLang
		},
		title: title ? title : defaultTitle,
		titleTemplate: titleTemplate ? titleTemplate : `%s | ${complement}`,
		meta: Object.keys(meta).map((m) => ({
			name: m,
			content: meta[m]
		})),
		link: [
			{
				rel: 'canonical',
				key: canonicalUrl,
				href: canonicalUrl
			}
		]
	};

	return <Helmet {...seoProps} />;
};
