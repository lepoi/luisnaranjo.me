module.exports = {
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'markdown-content',
				path: `${__dirname}/src/content`
			}
		},
		{
			resolve: 'gatsby-plugin-favicon',
			options: {
				logo: './static/favicon.png'
			}
		}
	]
};
