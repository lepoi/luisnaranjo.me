export default {
	connectParticles: true,
	color: '#1b263b',
	maxParticles: 200,
	speed: 0.1,
	sizeVariations: 3,
	minDistance: 120,
	responsive: [
		{
			breakpoint: 1200,
			options: {
				maxParticles: 130
			}
		},
		{
			breakpoint: 600,
			options: {
				maxParticles: 90
			}
		}
	]
};
