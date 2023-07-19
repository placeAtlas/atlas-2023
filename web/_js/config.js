// This script only applies to this instance of the Atlas.
// Please also check code indicated with "@instance-only" outside this file.
// TODO: Avoid having instance-only code inside the main scripts to make updating easier.

const prodDomain = "place-atlas.stefanocoding.me"
window.prodDomain = prodDomain

const instanceId = "2023"
window.instanceId = instanceId

const instanceSubreddit = "placeAtlas2"
window.instanceSubreddit = instanceSubreddit

const instanceRepo = "https://github.com/placeAtlas/atlas-2023"
window.instanceRepo = instanceRepo

const pageTitle = "The 2023 r/place Atlas"
window.pageTitle = pageTitle

const canvasSize = {
	x: 2000,
	y: 2000
}
window.canvasSize = canvasSize

const canvasCenter = {
	x: canvasSize.x/2,
	y: canvasSize.y/2
}
window.canvasCenter = canvasCenter

const variationsConfig = {
	default: {
		name: "r/place",
		code: "",
		default: 0,
		drawablePeriods: [0, 0],
		drawableRegions: [
			[[0, 0], [0, 0, 2000, 2000]],
		],
		expansions: [55, 109],
		versions: [
			{ "timestamp": 1687478400, "url": ["./_img/canvas/place30ex/start.png"] },
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
Licensed under AGPL-3.0 (https://place-atlas.stefanocoding.me/license.txt)

https://place-atlas.stefanocoding.me/
https://discord.gg/pJkm23b2nA
https://reddit.com/r/placeatlas2
https://github.com/placeAtlas/atlas-2023

To get the image of the canvas, use downloadCanvas().
`, 'font-size: 150%; line-height: 150%', '')