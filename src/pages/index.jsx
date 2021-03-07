// libraries
import React, { useEffect } from 'react';
import ParticleCloud from '@codegewerk/particle-cloud';
import Fullpage from '@fullpage/react-fullpage';
import '@fortawesome/fontawesome-free/css/all.css';

// config files
import { title } from '../../config/seo';
import particlesConfig from '../../config/particles';

// components
import { Layout, SEO } from '../components';
import { Link } from '../components/common';

// styles
import '../styles/home.scss';

// constants
const slides = {
	'': (
		<div className="home-info">
			<div className="home-greeting">
				<h1 className="home-title fs-xl mb-5">Luis Naranjo</h1>
				<h2 className="home-subtitle fs-lg c-4">Software Engineer</h2>
			</div>
		</div>
	),

	about: (
		<div className="home-info">
			<div className="home-bio">
				<p className="mb-4">
					Born and raised in Mexicali, I'm a mexican Software
					Engineer.
					<br />I graduated from
					<Link to="https://en.wikipedia.org/wiki/Centro_de_Ense%C3%B1anza_T%C3%A9cnica_y_Superior">
						{' '}
						CETYS University{' '}
					</Link>
					in 2019, but I've been around since 2017. <br />I have
					experience working with startups, corporations, and as an
					independent contractor.
				</p>
				<p>
					I enjoy analyzing complex problems, but also designing and
					implementing solutions.
					<br />I am very experienced in modern Web technologies, be
					it front or back end.
					<br />
					Have a look at my
					{/* <Link to="/portfolio"> projects </Link> */}projects,
					something might catch your eye!
				</p>
			</div>
		</div>
	),

	contact: (
		<div className="home-info">
			<div className="home-contact">
				<p className="mb-4">
					Don't hesitate to contact me through any of these:
				</p>
				<div className="contact-container">
					<a
						href="mailto:contact@luisnaranjo.me?subject=Hello!&body=Hi Luis!"
						className="contact-item"
					>
						<i class="fas fa-envelope"></i>
						contact@luisnaranjo.me
					</a>
					<a href="https://github.com/lepoi" className="contact-item">
						<i class="fab fa-github"></i>
						Github
					</a>
					<a
						href="https://linkedin.com/in/luis-naranjo"
						className="contact-item"
					>
						<i class="fab fa-linkedin"></i>
						LinkedIn
					</a>
					<a
						href="https://leetcode.com/terminallypoi"
						className="contact-item"
					>
						<i class="fas fa-globe"></i>
						Leetcode
					</a>
				</div>
			</div>
		</div>
	)
};
const anchors = Object.keys(slides);

export default ({ location }) => {
	const hash = location.hash.split('#')[1];

	// init particles
	useEffect(() => {
		const instance = new ParticleCloud({
			...particlesConfig,
			selector: '#home-particles'
		});
		instance.start();

		return () => instance.destroy();
	}, []);

	return (
		<>
			<script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>

			<Layout location={location}>
				<SEO
					path={location.pathname}
					title={`${
						anchors.indexOf(hash) !== -1
							? hash.charAt(0).toUpperCase() +
							  hash.slice(1).toLowerCase()
							: title
					}`}
					titleTemplate={
						anchors.indexOf(hash) !== -1 ? undefined : `%s`
					}
				/>

				<canvas id="home-particles"></canvas>

				<Fullpage
					licenseKey="mszc%eN^z5"
					navigation
					menu="#nav-menu"
					anchors={anchors}
					sectionSelector=".home-slide"
					render={() => (
						<Fullpage.Wrapper>
							{Object.values(slides).map((s, i) => (
								<div
									key={`home-slide-${i}`}
									className="home-slide"
								>
									{s}
								</div>
							))}
						</Fullpage.Wrapper>
					)}
				/>
			</Layout>
		</>
	);
};
