// libraries
import React from 'react';
import { graphql } from 'gatsby';

// config files
import { lang, image, url } from '../../config/seo.js';

// components
import { Layout, SEO } from '../components';

// styles
import '../styles/portfolio.scss';

const title = 'Portfolio';
const description = "Here's some of the projects I've developed";

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

export default ({ location, pageContext, data }) => {
	const { page, pages } = pageContext;

	return (
		<Layout location={location} page="portfolio">
			<SEO
				path={location.pathname}
				title={title}
				lang={lang}
				meta={meta}
			/>
			portfolio
			<div>page: {page}</div>
			<div>pages: {pages}</div>
		</Layout>
	);
};

export const query = graphql`
	query($limit: Int!, $skip: Int!) {
		allMarkdownRemark(
			skip: $skip
			sort: { fields: frontmatter___date, order: DESC }
			filter: { frontmatter: { type: { eq: "portfolio" } } }
			limit: $limit
		) {
			edges {
				node {
					frontmatter {
						date(formatString: "MMMM DD YYYY")
						thumbnail
						title
					}
				}
			}
		}
	}
`;
