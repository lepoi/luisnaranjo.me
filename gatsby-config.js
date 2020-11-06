module.exports = {
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'markdown-content',
				path: `${__dirname}/src/content`
			}
		},
		'gatsby-transformer-remark'
	]
};
