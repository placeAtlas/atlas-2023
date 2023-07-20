// This script only applies to this instance of the Atlas.
// Please also check code indicated with "@instance-only" outside this file.
// TODO: Avoid having instance-only code inside the main scripts to make updating easier.

const prodDomain = "2023.place-atlas.stefanocoding.me"
window.prodDomain = prodDomain

const instanceId = "2023"
window.instanceId = instanceId

const instanceSubreddit = "placeAtlas2023"
window.instanceSubreddit = instanceSubreddit

const instanceRepo = "https://github.com/placeAtlas/atlas-2023"
window.instanceRepo = instanceRepo

const pageTitle = "The 2023 r/place Atlas"
window.pageTitle = pageTitle

const canvasSize = {
	x: 3000,
	y: 2000
}
window.canvasSize = canvasSize

const canvasOffset = {
	x: -1500,
	y: -1000
}
window.canvasOffset = canvasOffset

const canvasCenter = {
	x: canvasSize.x/2 + canvasOffset.x,
	y: canvasSize.y/2 + canvasOffset.y
}
window.canvasCenter = canvasCenter

const variationsConfig = {
	default: {
		name: "r/place",
		code: "",
		default: 12,
		drawablePeriods: [1, 12],
		drawableRegions: [
			[[0, 10], [-500, -500, 499, 499]],
		],
		// expansions: [],
		versions: [
			{ "timestamp": 1689858000, "url": ["./_img/canvas/main-ex/start.png"] },
			{ "timestamp": 1689859449, "url": ["./_img/canvas/main/1689859449.png"] },
			{ "timestamp": 1689861680, "url": ["./_img/canvas/main/1689861680.png"] },
			{ "timestamp": 1689863453, "url": ["./_img/canvas/main/1689863453.png"] },
			{ "timestamp": 1689865307, "url": ["./_img/canvas/main/1689865307.png"] },
			{ "timestamp": 1689867430, "url": ["./_img/canvas/main/1689867430.png"] },
			{ "timestamp": 1689868839, "url": ["./_img/canvas/main/1689868839.png"] },
			{ "timestamp": 1689870611, "url": ["./_img/canvas/main/1689870611.png"] },
			{ "timestamp": 1689872431, "url": ["./_img/canvas/main/1689872431.png"] },
			{ "timestamp": 1689874200, "url": ["./_img/canvas/main/1689874200.png"] },
			{ "timestamp": 1689876002, "url": ["./_img/canvas/main/1689876002.png"] },
			{ "timestamp": 1689877825, "url": ["./_img/canvas/main/1689877825.png"] },
			{ "timestamp": 1689879898, "url": ["./_img/canvas/main/1689879898.png"] },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192" aria-hidden="true"><polygon points="154 0 154 38 39 38 39 192 0 192 0 0"/><polygon points="192 38 192 192 77 192 77 153 154 153 154 38"/><rect x="77" y="77" width="38" height="38"/></svg>'
	},
}
window.variationsConfig = variationsConfig

let defaultVariation = 'default'
window.defaultVariation = defaultVariation

let defaultPeriod = variationsConfig[defaultVariation].default
window.defaultPeriod = defaultPeriod

const useNumericalId = true
window.useNumericalId = useNumericalId

console.info(`%cThe 2023 r/place Atlas
%cCopyright (c) 2017 Roland Rytz <roland@draemm.li>
Copyright (c) 2023 Place Atlas contributors
Licensed under AGPL-3.0 (https://2023.place-atlas.stefanocoding.me/license.txt)

https://2023.place-atlas.stefanocoding.me/
https://discord.gg/pJkm23b2nA
https://reddit.com/r/placeAtlas2023
https://github.com/placeAtlas/atlas-2023

To get the image of the canvas, use downloadCanvas().
`, 'font-size: 150%; line-height: 150%', '')