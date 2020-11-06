// libraries
import React from 'react';
import { Link } from 'gatsby';

export default ({ to, children, target = '_blank' }) => {
	return to[0] === '/' ? (
		<Link to={to} className="underlined-box link animated">
			{children}
		</Link>
	) : (
		<a href={to} target={target} className="underlined-box link animated">
			{' '}
			{children}{' '}
		</a>
	);
};
