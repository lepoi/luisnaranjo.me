// libraries
import React from 'react';
import { graphql } from 'gatsby';

// config files
import { lang, url } from '../../config/seo.js';

// components
import { Layout, SEO } from '../components';

// styles
import '../styles/portfolio.scss';

export default ({ location, data }) => {
	const { frontmatter, html } = data.markdownRemark;
	const { title, date } = frontmatter;

	// TODO: define from data
	const description = '[description]';
	const image = 'https://placekitten.com/600/400';

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

	return (
		<Layout location={location}>
			<SEO
				path={location.pathname}
				title={title}
				lang={lang}
				meta={meta}
			/>

			<div className="portfolio-item">
				<h1 className="portfolio-item-title">{title}</h1>
				<em className="portfolio-item-date">{date}</em>
				<div
					className="portfolio-item-content"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
			}
			html
		}
	}
`;
