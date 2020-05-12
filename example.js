'use strict'

const radar = require('.')
const stringify = require('virtual-dom-stringify')

const chart = radar({
	// columns
	ui: 'UI Design',
	interaction: 'Interaction',
	strategy: 'Strategy',
	research: 'Research',
	leadership: 'Leadership'
}, [
	// data
	{class: 'iphone', ui: .4, research: .7, strategy: 1, interaction: .9, leadership: .9},
], {
	shapeProps: (data) => ({className: 'shape ' + data.class})
})

process.stdout.write(`
<svg version="1" xmlns="http://www.w3.org/2000/svg" width="1000" height="200" viewBox="-200 0 500 100">
	<style>
		.axis {
			stroke: #555;
			stroke-width: .2;
		}
		.scale {
			fill: #f0f0f0;
			stroke: #999;
			stroke-width: .2;
		}
		.shape {
			fill-opacity: .3;
			stroke-width: .5;
		}
		.shape:hover { fill-opacity: .6; }

		.shape.iphone { fill: #0066FF; stroke: #0066FF; }
	</style>
	${stringify(chart)}
</svg>
`)
