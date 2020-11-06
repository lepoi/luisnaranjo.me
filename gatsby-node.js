const path = require('path');
const { resolve } = path;

const generatePortfolioPages = async (graphql, actions, reporter) => {
	const { createPage } = actions;
	const portResult = await queryPortfolio(graphql);
	const { errors: portErrors, data: portData } = portResult;
	const { edges: portEdges } = portData.allMarkdownRemark;

	if (portErrors) {
		reporter.panicOnBuild('Error running GraphQL query on portfolio');
		return;
	}

	createPortfolioPages(createPage, portEdges);
	createPortfolioItemPages(createPage, portEdges);
};

const queryPortfolio = async (graphql) => {
	return await graphql(`
		{
			allMarkdownRemark(
				filter: { frontmatter: { type: { eq: "portfolio" } } }
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`);
};

const createPortfolioPages = (createPage, edges, perPage = 3) => {
	const component = resolve('./src/templates/portfolio.jsx');
	const pages = Math.ceil(edges.length / perPage);

	Array(pages)
		.fill(null)
		.forEach((_, page) => {
			if (!page)
				createPage({
					path: '/portfolio',
					component,
					context: {
						limit: perPage,
						skip: 0,
						page: 1,
						pages
					}
				});

			createPage({
				path: `/portfolio/${page + 1}`,
				component,
				context: {
					limit: perPage,
					skip: page * perPage,
					page: page + 1,
					pages
				}
			});
		});
};

const createPortfolioItemPages = (createPage, edges) => {
	const component = resolve('./src/templates/portfolio_item.jsx');
	edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.slug,
			component,
			context: {
				slug: node.frontmatter.slug
			}
		});
	});
};

// create pages
exports.createPages = async ({ graphql, actions, reporter }) => {
	await generatePortfolioPages(graphql, actions, reporter);
};

// add react-particles-js to externals
// exports.onCreateWebpackConfig = ({ actions }) => {
// 	actions.setWebpackConfig({
// 		externals: [{ 'react-particles-js': 'Particles' }]
// 	});
// };
