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
		default: undefined,
		drawablePeriods: [1, undefined],
		drawableRegions: [
			[[1, 54], [-500, -500, 499, 499]],
			[[55, 85], [-500, -500, 999, 499]],
			[[86, undefined], [-1000, -500, 999, 499]],
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
			{ "timestamp": 1689881418, "url": ["./_img/canvas/main/1689881418.png"] },
			{ "timestamp": 1689883243, "url": ["./_img/canvas/main/1689883243.png"] },
			{ "timestamp": 1689885001, "url": ["./_img/canvas/main/1689885001.png"] },
			{ "timestamp": 1689886823, "url": ["./_img/canvas/main/1689886823.png"] },
			{ "timestamp": 1689888650, "url": ["./_img/canvas/main/1689888650.png"] },
			{ "timestamp": 1689890409, "url": ["./_img/canvas/main/1689890409.png"] },
			{ "timestamp": 1689892229, "url": ["./_img/canvas/main/1689892229.png"] },
			{ "timestamp": 1689894047, "url": ["./_img/canvas/main/1689894047.png"] },
			{ "timestamp": 1689895805, "url": ["./_img/canvas/main/1689895805.png"] },
			{ "timestamp": 1689897624, "url": ["./_img/canvas/main/1689897624.png"] },
			{ "timestamp": 1689899442, "url": ["./_img/canvas/main/1689899442.png"] },
			{ "timestamp": 1689901259, "url": ["./_img/canvas/main/1689901259.png"] },
			{ "timestamp": 1689903017, "url": ["./_img/canvas/main/1689903017.png"] },
			{ "timestamp": 1689904835, "url": ["./_img/canvas/main/1689904835.png"] },
			{ "timestamp": 1689906592, "url": ["./_img/canvas/main/1689906592.png"] },
			{ "timestamp": 1689908411, "url": ["./_img/canvas/main/1689908411.png"] },
			{ "timestamp": 1689910228, "url": ["./_img/canvas/main/1689910228.png"] },
			{ "timestamp": 1689912046, "url": ["./_img/canvas/main/1689912046.png"] },
			{ "timestamp": 1689913803, "url": ["./_img/canvas/main/1689913803.png"] },
			{ "timestamp": 1689915620, "url": ["./_img/canvas/main/1689915620.png"] },
			{ "timestamp": 1689917437, "url": ["./_img/canvas/main/1689917437.png"] },
			{ "timestamp": 1689919255, "url": ["./_img/canvas/main/1689919255.png"] },
			{ "timestamp": 1689921013, "url": ["./_img/canvas/main/1689921013.png"] },
			{ "timestamp": 1689922800, "url": ["./_img/canvas/main/1689922800.png"] },
			{ "timestamp": 1689924600, "url": ["./_img/canvas/main/1689924600.png"] },
			{ "timestamp": 1689926400, "url": ["./_img/canvas/main/1689926400.png"] },
			{ "timestamp": 1689928200, "url": ["./_img/canvas/main/1689928200.png"] },
			{ "timestamp": 1689930000, "url": ["./_img/canvas/main/1689930000.png"] },
			{ "timestamp": 1689931800, "url": ["./_img/canvas/main/1689931800.png"] },
			{ "timestamp": 1689933600, "url": ["./_img/canvas/main/1689933600.png"] },
			{ "timestamp": 1689935400, "url": ["./_img/canvas/main/1689935400.png"] },
			{ "timestamp": 1689937200, "url": ["./_img/canvas/main/1689937200.png"] },
			{ "timestamp": 1689939000, "url": ["./_img/canvas/main/1689939000.png"] },
			{ "timestamp": 1689940800, "url": ["./_img/canvas/main/1689940800.png"] },
			{ "timestamp": 1689942600, "url": ["./_img/canvas/main/1689942600.png"] },
			{ "timestamp": 1689944400, "url": ["./_img/canvas/main/1689944400.png"] },
			{ "timestamp": 1689946200, "url": ["./_img/canvas/main/1689946200.png"] },
			{ "timestamp": 1689948000, "url": ["./_img/canvas/main/1689948000.png"] },
			{ "timestamp": 1689949800, "url": ["./_img/canvas/main/1689949800.png"] },
			{ "timestamp": 1689951600, "url": ["./_img/canvas/main/1689951600.png"] },
			{ "timestamp": 1689953400, "url": ["./_img/canvas/main/1689953400.png"] },
			{ "timestamp": 1689955200, "url": ["./_img/canvas/main/1689955200.png"] },
			{ "timestamp": 1689957000, "url": ["./_img/canvas/main/1689957000.png"] },
			{ "timestamp": 1689958837, "url": ["./_img/canvas/main/1689958837.png"] },
			{ "timestamp": 1689960605, "url": ["./_img/canvas/main/1689960605.png"] },
			{ "timestamp": 1689962431, "url": ["./_img/canvas/main/1689962431.png"] },
			{ "timestamp": 1689964199, "url": ["./_img/canvas/main/1689964199.png"] },
			{ "timestamp": 1689966028, "url": ["./_img/canvas/main/1689966028.png"] },
			{ "timestamp": 1689967853, "url": ["./_img/canvas/main/1689967853.png"] },
			{ "timestamp": 1689969600, "url": ["./_img/canvas/main/1689969600.png"] },
			{ "timestamp": 1689971424, "url": ["./_img/canvas/main/1689971424.png"] },
			{ "timestamp": 1689973326, "url": ["./_img/canvas/main/1689973326.png"] },
			{ "timestamp": 1689975028, "url": ["./_img/canvas/main/1689975028.png"] },
			{ "timestamp": 1689976850, "url": ["./_img/canvas/main/1689976850.png"] },
			{ "timestamp": 1689978611, "url": ["./_img/canvas/main/1689978611.png"] },
			{ "timestamp": 1689980433, "url": ["./_img/canvas/main/1689980433.png"] },
			{ "timestamp": 1689982255, "url": ["./_img/canvas/main/1689982255.png"] },
			{ "timestamp": 1689984016, "url": ["./_img/canvas/main/1689984016.png"] },
			{ "timestamp": 1689985839, "url": ["./_img/canvas/main/1689985839.png"] },
			{ "timestamp": 1689987599, "url": ["./_img/canvas/main/1689987599.png"] },
			{ "timestamp": 1689989422, "url": ["./_img/canvas/main/1689989422.png"] },
			{ "timestamp": 1689991244, "url": ["./_img/canvas/main/1689991244.png"] },
			{ "timestamp": 1689993006, "url": ["./_img/canvas/main/1689993006.png"] },
			{ "timestamp": 1689994829, "url": ["./_img/canvas/main/1689994829.png"] },
			{ "timestamp": 1689996653, "url": ["./_img/canvas/main/1689996653.png"] },
			{ "timestamp": 1689998416, "url": ["./_img/canvas/main/1689998416.png"] },
			{ "timestamp": 1690000240, "url": ["./_img/canvas/main/1690000240.png"] },
			{ "timestamp": 1690002002, "url": ["./_img/canvas/main/1690002002.png"] },
			{ "timestamp": 1690003828, "url": ["./_img/canvas/main/1690003828.png"] },
			{ "timestamp": 1690005652, "url": ["./_img/canvas/main/1690005652.png"] },
			{ "timestamp": 1690009239, "url": ["./_img/canvas/main/1690009239.png"] },
			{ "timestamp": 1690011000, "url": ["./_img/canvas/main/1690011000.png"] },
			{ "timestamp": 1690012800, "url": ["./_img/canvas/main/1690012800.png"] },
			{ "timestamp": 1690014600, "url": ["./_img/canvas/main/1690014600.png"] },
			{ "timestamp": 1690016400, "url": ["./_img/canvas/main/1690016400.png"] },
			{ "timestamp": 1690018201, "url": ["./_img/canvas/main/1690018201.png"] },
			{ "timestamp": 1690020000, "url": ["./_img/canvas/main/1690020000.png"] },
			{ "timestamp": 1690021800, "url": ["./_img/canvas/main/1690021800.png"] },
			{ "timestamp": 1690023600, "url": ["./_img/canvas/main/1690023600.png"] },
			{ "timestamp": 1690025400, "url": ["./_img/canvas/main/1690025400.png"] },
			{ "timestamp": 1690029000, "url": ["./_img/canvas/main/1690029000.png"] },
			{ "timestamp": 1690030801, "url": ["./_img/canvas/main/1690030801.png"] },
			{ "timestamp": 1690034401, "url": ["./_img/canvas/main/1690034401.png"] },
			{ "timestamp": 1690032601, "url": ["./_img/canvas/main/1690032601.png"] },
			{ "timestamp": 1690036201, "url": ["./_img/canvas/main/1690036201.png"] },
			{ "timestamp": 1690038000, "url": ["./_img/canvas/main/1690038000.png"] },
			{ "timestamp": 1690039816, "url": ["./_img/canvas/main/1690039816.png"] },
			{ "timestamp": 1690041655, "url": ["./_img/canvas/main/1690041655.png"] },
			{ "timestamp": 1690043424, "url": ["./_img/canvas/main/1690043424.png"] },
			{ "timestamp": 1690045259, "url": ["./_img/canvas/main/1690045259.png"] },
			{ "timestamp": 1690047032, "url": ["./_img/canvas/main/1690047032.png"] },
			{ "timestamp": 1690048803, "url": ["./_img/canvas/main/1690048803.png"] },
			{ "timestamp": 1690048803, "url": ["./_img/canvas/main/1690050632.png"] },
			{ "timestamp": 1690052399, "url": ["./_img/canvas/main/1690052399.png"] },
			{ "timestamp": 1690054225, "url": ["./_img/canvas/main/1690054225.png"] },
			{ "timestamp": 1690056054, "url": ["./_img/canvas/main/1690056054.png"] },
			{ "timestamp": 1690057822, "url": ["./_img/canvas/main/1690057822.png"] },
			{ "timestamp": 1690059651, "url": ["./_img/canvas/main/1690059651.png"] },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192" aria-hidden="true"><polygon points="154 0 154 38 39 38 39 192 0 192 0 0"/><polygon points="192 38 192 192 77 192 77 153 154 153 154 38"/><rect x="77" y="77" width="38" height="38"/></svg>'
	},
}
window.variationsConfig = variationsConfig

const lastPeriod = variationsConfig.default.versions.length - 1
variationsConfig.default.default = lastPeriod
variationsConfig.default.drawablePeriods[1] = lastPeriod
variationsConfig.default.drawableRegions[2][0][1] = lastPeriod

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