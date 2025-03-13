// This script only applies to this instance of the Atlas.
// Please also check code indicated with "@instanceonly" outside this file.
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
		default: 250,
		drawablePeriods: [1, 256],
		drawableRegions: [
			[[1, 54], [-500, -500, 499, 499]],
			[[55, 85], [-500, -500, 999, 499]],
			[[86, 114], [-1000, -500, 999, 499]],
			[[115, 152], [-1000, -1000, 999, 499]],
			[[153, 168], [-1000, -1000, 999, 999]],
			[[169, 201], [-1500, -1000, 999, 999]],
			[[202, 258], [-1500, -1000, 1499, 999]],
		],
		versions: [
			{ "timestamp": 1689858080, "url": ["./_img/canvas/main-ex/start.png"] },
			{ "timestamp": 1689859800, "url": ["./_img/canvas/main-2/000.png"] },
			{ "timestamp": 1689861600, "url": ["./_img/canvas/main-2/001.png"] },
			{ "timestamp": 1689863400, "url": ["./_img/canvas/main-2/005.png", "./_img/canvas/main-2/002_005.png"] },
			{ "timestamp": 1689865200, "url": ["./_img/canvas/main-2/005.png", "./_img/canvas/main-2/003_005.png"] },
			{ "timestamp": 1689867000, "url": ["./_img/canvas/main-2/005.png", "./_img/canvas/main-2/004_005.png"] },
			{ "timestamp": 1689868800, "url": ["./_img/canvas/main-2/005.png"] },
			{ "timestamp": 1689870600, "url": ["./_img/canvas/main-2/005.png", "./_img/canvas/main-2/006_005.png"] },
			{ "timestamp": 1689872400, "url": ["./_img/canvas/main-2/005.png", "./_img/canvas/main-2/007_005.png"] },
			{ "timestamp": 1689874200, "url": ["./_img/canvas/main-2/005.png", "./_img/canvas/main-2/008_005.png"] },
			{ "timestamp": 1689876000, "url": ["./_img/canvas/main-2/005.png", "./_img/canvas/main-2/009_005.png"] },
			{ "timestamp": 1689877800, "url": ["./_img/canvas/main-2/016.png", "./_img/canvas/main-2/010_016.png"] },
			{ "timestamp": 1689879600, "url": ["./_img/canvas/main-2/016.png", "./_img/canvas/main-2/011_016.png"] },
			{ "timestamp": 1689881400, "url": ["./_img/canvas/main-2/016.png", "./_img/canvas/main-2/012_016.png"] },
			{ "timestamp": 1689883200, "url": ["./_img/canvas/main-2/016.png", "./_img/canvas/main-2/013_016.png"] },
			{ "timestamp": 1689885000, "url": ["./_img/canvas/main-2/016.png", "./_img/canvas/main-2/014_016.png"] },
			{ "timestamp": 1689886800, "url": ["./_img/canvas/main-2/016.png", "./_img/canvas/main-2/015_016.png"] },
			{ "timestamp": 1689888600, "url": ["./_img/canvas/main-2/016.png"] },
			{ "timestamp": 1689890400, "url": ["./_img/canvas/main-2/016.png", "./_img/canvas/main-2/017_016.png"] },
			{ "timestamp": 1689892200, "url": ["./_img/canvas/main-2/016.png", "./_img/canvas/main-2/018_016.png"] },
			{ "timestamp": 1689894000, "url": ["./_img/canvas/main-2/016.png", "./_img/canvas/main-2/019_016.png"] },
			{ "timestamp": 1689895800, "url": ["./_img/canvas/main-2/016.png", "./_img/canvas/main-2/020_016.png"] },
			{ "timestamp": 1689897600, "url": ["./_img/canvas/main-2/016.png", "./_img/canvas/main-2/021_016.png"] },
			{ "timestamp": 1689899400, "url": ["./_img/canvas/main-2/027.png", "./_img/canvas/main-2/022_027.png"] },
			{ "timestamp": 1689901200, "url": ["./_img/canvas/main-2/027.png", "./_img/canvas/main-2/023_027.png"] },
			{ "timestamp": 1689903000, "url": ["./_img/canvas/main-2/027.png", "./_img/canvas/main-2/024_027.png"] },
			{ "timestamp": 1689904800, "url": ["./_img/canvas/main-2/027.png", "./_img/canvas/main-2/025_027.png"] },
			{ "timestamp": 1689906600, "url": ["./_img/canvas/main-2/027.png", "./_img/canvas/main-2/026_027.png"] },
			{ "timestamp": 1689908400, "url": ["./_img/canvas/main-2/027.png"] },
			{ "timestamp": 1689910200, "url": ["./_img/canvas/main-2/027.png", "./_img/canvas/main-2/028_027.png"] },
			{ "timestamp": 1689912000, "url": ["./_img/canvas/main-2/027.png", "./_img/canvas/main-2/029_027.png"] },
			{ "timestamp": 1689913800, "url": ["./_img/canvas/main-2/027.png", "./_img/canvas/main-2/030_027.png"] },
			{ "timestamp": 1689915600, "url": ["./_img/canvas/main-2/027.png", "./_img/canvas/main-2/031_027.png"] },
			{ "timestamp": 1689917400, "url": ["./_img/canvas/main-2/027.png", "./_img/canvas/main-2/032_027.png"] },
			{ "timestamp": 1689919200, "url": ["./_img/canvas/main-2/038.png", "./_img/canvas/main-2/033_038.png"] },
			{ "timestamp": 1689921000, "url": ["./_img/canvas/main-2/038.png", "./_img/canvas/main-2/034_038.png"] },
			{ "timestamp": 1689922800, "url": ["./_img/canvas/main-2/038.png", "./_img/canvas/main-2/035_038.png"] },
			{ "timestamp": 1689924600, "url": ["./_img/canvas/main-2/038.png", "./_img/canvas/main-2/036_038.png"] },
			{ "timestamp": 1689926400, "url": ["./_img/canvas/main-2/038.png", "./_img/canvas/main-2/037_038.png"] },
			{ "timestamp": 1689928200, "url": ["./_img/canvas/main-2/038.png"] },
			{ "timestamp": 1689930000, "url": ["./_img/canvas/main-2/038.png", "./_img/canvas/main-2/039_038.png"] },
			{ "timestamp": 1689931800, "url": ["./_img/canvas/main-2/038.png", "./_img/canvas/main-2/040_038.png"] },
			{ "timestamp": 1689933600, "url": ["./_img/canvas/main-2/038.png", "./_img/canvas/main-2/041_038.png"] },
			{ "timestamp": 1689935400, "url": ["./_img/canvas/main-2/038.png", "./_img/canvas/main-2/042_038.png"] },
			{ "timestamp": 1689937200, "url": ["./_img/canvas/main-2/038.png", "./_img/canvas/main-2/043_038.png"] },
			{ "timestamp": 1689939000, "url": ["./_img/canvas/main-2/049.png", "./_img/canvas/main-2/044_049.png"] },
			{ "timestamp": 1689940800, "url": ["./_img/canvas/main-2/049.png", "./_img/canvas/main-2/045_049.png"] },
			{ "timestamp": 1689942600, "url": ["./_img/canvas/main-2/049.png", "./_img/canvas/main-2/046_049.png"] },
			{ "timestamp": 1689944400, "url": ["./_img/canvas/main-2/049.png", "./_img/canvas/main-2/047_049.png"] },
			{ "timestamp": 1689946200, "url": ["./_img/canvas/main-2/049.png", "./_img/canvas/main-2/048_049.png"] },
			{ "timestamp": 1689948000, "url": ["./_img/canvas/main-2/049.png"] },
			{ "timestamp": 1689949800, "url": ["./_img/canvas/main-2/049.png", "./_img/canvas/main-2/050_049.png"] },
			{ "timestamp": 1689951600, "url": ["./_img/canvas/main-2/049.png", "./_img/canvas/main-2/051_049.png"] },
			{ "timestamp": 1689953400, "url": ["./_img/canvas/main-2/049.png", "./_img/canvas/main-2/052_049.png"] },
			{ "timestamp": 1689955200, "url": ["./_img/canvas/main-2/049.png", "./_img/canvas/main-2/053_049.png"] },
			{ "timestamp": ['First Expansion', 1689957000], "url": ["./_img/canvas/main-2/049.png", "./_img/canvas/main-2/054_049.png"] },
			{ "timestamp": 1689958800, "url": ["./_img/canvas/main-2/049.png", "./_img/canvas/main-2/055_049.png"] },
			{ "timestamp": 1689960600, "url": ["./_img/canvas/main-2/060.png", "./_img/canvas/main-2/056_060.png"] },
			{ "timestamp": 1689962400, "url": ["./_img/canvas/main-2/060.png", "./_img/canvas/main-2/057_060.png"] },
			{ "timestamp": 1689964200, "url": ["./_img/canvas/main-2/060.png", "./_img/canvas/main-2/058_060.png"] },
			{ "timestamp": 1689966000, "url": ["./_img/canvas/main-2/060.png", "./_img/canvas/main-2/059_060.png"] },
			{ "timestamp": 1689967800, "url": ["./_img/canvas/main-2/060.png"] },
			{ "timestamp": 1689969600, "url": ["./_img/canvas/main-2/060.png", "./_img/canvas/main-2/061_060.png"] },
			{ "timestamp": 1689971400, "url": ["./_img/canvas/main-2/060.png", "./_img/canvas/main-2/062_060.png"] },
			{ "timestamp": 1689973200, "url": ["./_img/canvas/main-2/060.png", "./_img/canvas/main-2/063_060.png"] },
			{ "timestamp": 1689975000, "url": ["./_img/canvas/main-2/060.png", "./_img/canvas/main-2/064_060.png"] },
			{ "timestamp": 1689976800, "url": ["./_img/canvas/main-2/060.png", "./_img/canvas/main-2/065_060.png"] },
			{ "timestamp": 1689978600, "url": ["./_img/canvas/main-2/071.png", "./_img/canvas/main-2/066_071.png"] },
			{ "timestamp": 1689980400, "url": ["./_img/canvas/main-2/071.png", "./_img/canvas/main-2/067_071.png"] },
			{ "timestamp": 1689982200, "url": ["./_img/canvas/main-2/071.png", "./_img/canvas/main-2/068_071.png"] },
			{ "timestamp": 1689984000, "url": ["./_img/canvas/main-2/071.png", "./_img/canvas/main-2/069_071.png"] },
			{ "timestamp": 1689985800, "url": ["./_img/canvas/main-2/071.png", "./_img/canvas/main-2/070_071.png"] },
			{ "timestamp": 1689987600, "url": ["./_img/canvas/main-2/071.png"] },
			{ "timestamp": 1689989400, "url": ["./_img/canvas/main-2/071.png", "./_img/canvas/main-2/072_071.png"] },
			{ "timestamp": 1689991200, "url": ["./_img/canvas/main-2/071.png", "./_img/canvas/main-2/073_071.png"] },
			{ "timestamp": 1689993000, "url": ["./_img/canvas/main-2/071.png", "./_img/canvas/main-2/074_071.png"] },
			{ "timestamp": 1689994800, "url": ["./_img/canvas/main-2/071.png", "./_img/canvas/main-2/075_071.png"] },
			{ "timestamp": 1689996600, "url": ["./_img/canvas/main-2/071.png", "./_img/canvas/main-2/076_071.png"] },
			{ "timestamp": 1689998400, "url": ["./_img/canvas/main-2/082.png", "./_img/canvas/main-2/077_082.png"] },
			{ "timestamp": 1690000200, "url": ["./_img/canvas/main-2/082.png", "./_img/canvas/main-2/078_082.png"] },
			{ "timestamp": 1690002000, "url": ["./_img/canvas/main-2/082.png", "./_img/canvas/main-2/079_082.png"] },
			{ "timestamp": 1690003800, "url": ["./_img/canvas/main-2/082.png", "./_img/canvas/main-2/080_082.png"] },
			{ "timestamp": 1690005600, "url": ["./_img/canvas/main-2/082.png", "./_img/canvas/main-2/081_082.png"] },
			{ "timestamp": 1690007400, "url": ["./_img/canvas/main-2/082.png"] },
			{ "timestamp": 1690009200, "url": ["./_img/canvas/main-2/082.png", "./_img/canvas/main-2/083_082.png"] },
			{ "timestamp": 1690011000, "url": ["./_img/canvas/main-2/082.png", "./_img/canvas/main-2/084_082.png"] },
			{ "timestamp": 1690012800, "url": ["./_img/canvas/main-2/082.png", "./_img/canvas/main-2/085_082.png"] },
			{ "timestamp": ['Second Expansion', 1690014600], "url": ["./_img/canvas/main-2/082.png", "./_img/canvas/main-2/086_082.png"] },
			{ "timestamp": 1690016400, "url": ["./_img/canvas/main-2/082.png", "./_img/canvas/main-2/087_082.png"] },
			{ "timestamp": 1690018200, "url": ["./_img/canvas/main-2/093.png", "./_img/canvas/main-2/088_093.png"] },
			{ "timestamp": 1690020000, "url": ["./_img/canvas/main-2/093.png", "./_img/canvas/main-2/089_093.png"] },
			{ "timestamp": 1690021800, "url": ["./_img/canvas/main-2/093.png", "./_img/canvas/main-2/090_093.png"] },
			{ "timestamp": 1690023600, "url": ["./_img/canvas/main-2/093.png", "./_img/canvas/main-2/091_093.png"] },
			{ "timestamp": 1690025400, "url": ["./_img/canvas/main-2/093.png", "./_img/canvas/main-2/092_093.png"] },
			{ "timestamp": 1690027200, "url": ["./_img/canvas/main-2/093.png"] },
			{ "timestamp": 1690029000, "url": ["./_img/canvas/main-2/093.png", "./_img/canvas/main-2/094_093.png"] },
			{ "timestamp": 1690030800, "url": ["./_img/canvas/main-2/093.png", "./_img/canvas/main-2/095_093.png"] },
			{ "timestamp": 1690032600, "url": ["./_img/canvas/main-2/093.png", "./_img/canvas/main-2/096_093.png"] },
			{ "timestamp": 1690034400, "url": ["./_img/canvas/main-2/093.png", "./_img/canvas/main-2/097_093.png"] },
			{ "timestamp": 1690036200, "url": ["./_img/canvas/main-2/093.png", "./_img/canvas/main-2/098_093.png"] },
			{ "timestamp": 1690038000, "url": ["./_img/canvas/main-2/104.png", "./_img/canvas/main-2/099_104.png"] },
			{ "timestamp": 1690039800, "url": ["./_img/canvas/main-2/104.png", "./_img/canvas/main-2/100_104.png"] },
			{ "timestamp": 1690041600, "url": ["./_img/canvas/main-2/104.png", "./_img/canvas/main-2/101_104.png"] },
			{ "timestamp": 1690043400, "url": ["./_img/canvas/main-2/104.png", "./_img/canvas/main-2/102_104.png"] },
			{ "timestamp": 1690045200, "url": ["./_img/canvas/main-2/104.png", "./_img/canvas/main-2/103_104.png"] },
			{ "timestamp": 1690047000, "url": ["./_img/canvas/main-2/104.png"] },
			{ "timestamp": 1690048800, "url": ["./_img/canvas/main-2/104.png", "./_img/canvas/main-2/105_104.png"] },
			{ "timestamp": 1690050600, "url": ["./_img/canvas/main-2/104.png", "./_img/canvas/main-2/106_104.png"] },
			{ "timestamp": 1690052400, "url": ["./_img/canvas/main-2/104.png", "./_img/canvas/main-2/107_104.png"] },
			{ "timestamp": 1690054200, "url": ["./_img/canvas/main-2/104.png", "./_img/canvas/main-2/108_104.png"] },
			{ "timestamp": 1690056000, "url": ["./_img/canvas/main-2/104.png", "./_img/canvas/main-2/109_104.png"] },
			{ "timestamp": 1690057800, "url": ["./_img/canvas/main-2/115.png", "./_img/canvas/main-2/110_115.png"] },
			{ "timestamp": 1690059600, "url": ["./_img/canvas/main-2/115.png", "./_img/canvas/main-2/111_115.png"] },
			{ "timestamp": 1690061400, "url": ["./_img/canvas/main-2/115.png", "./_img/canvas/main-2/112_115.png"] },
			{ "timestamp": 1690063200, "url": ["./_img/canvas/main-2/115.png", "./_img/canvas/main-2/113_115.png"] },
			{ "timestamp": 1690065000, "url": ["./_img/canvas/main-2/115.png", "./_img/canvas/main-2/114_115.png"] },
			{ "timestamp": 1690066800, "url": ["./_img/canvas/main-2/115.png"] },
			{ "timestamp": ['Third Expansion', 1690068600], "url": ["./_img/canvas/main-2/115.png", "./_img/canvas/main-2/116_115.png"] },
			{ "timestamp": 1690070400, "url": ["./_img/canvas/main-2/115.png", "./_img/canvas/main-2/117_115.png"] },
			{ "timestamp": 1690072200, "url": ["./_img/canvas/main-2/115.png", "./_img/canvas/main-2/118_115.png"] },
			{ "timestamp": 1690074000, "url": ["./_img/canvas/main-2/115.png", "./_img/canvas/main-2/119_115.png"] },
			{ "timestamp": 1690075800, "url": ["./_img/canvas/main-2/115.png", "./_img/canvas/main-2/120_115.png"] },
			{ "timestamp": 1690077600, "url": ["./_img/canvas/main-2/126.png", "./_img/canvas/main-2/121_126.png"] },
			{ "timestamp": 1690079400, "url": ["./_img/canvas/main-2/126.png", "./_img/canvas/main-2/122_126.png"] },
			{ "timestamp": 1690081200, "url": ["./_img/canvas/main-2/126.png", "./_img/canvas/main-2/123_126.png"] },
			{ "timestamp": 1690083000, "url": ["./_img/canvas/main-2/126.png", "./_img/canvas/main-2/124_126.png"] },
			{ "timestamp": 1690084800, "url": ["./_img/canvas/main-2/126.png", "./_img/canvas/main-2/125_126.png"] },
			{ "timestamp": 1690086600, "url": ["./_img/canvas/main-2/126.png"] },
			{ "timestamp": 1690088400, "url": ["./_img/canvas/main-2/126.png", "./_img/canvas/main-2/127_126.png"] },
			{ "timestamp": 1690090200, "url": ["./_img/canvas/main-2/126.png", "./_img/canvas/main-2/128_126.png"] },
			{ "timestamp": 1690092000, "url": ["./_img/canvas/main-2/126.png", "./_img/canvas/main-2/129_126.png"] },
			{ "timestamp": 1690093800, "url": ["./_img/canvas/main-2/126.png", "./_img/canvas/main-2/130_126.png"] },
			{ "timestamp": 1690095600, "url": ["./_img/canvas/main-2/126.png", "./_img/canvas/main-2/131_126.png"] },
			{ "timestamp": 1690097400, "url": ["./_img/canvas/main-2/137.png", "./_img/canvas/main-2/132_137.png"] },
			{ "timestamp": 1690099200, "url": ["./_img/canvas/main-2/137.png", "./_img/canvas/main-2/133_137.png"] },
			{ "timestamp": 1690101000, "url": ["./_img/canvas/main-2/137.png", "./_img/canvas/main-2/134_137.png"] },
			{ "timestamp": 1690102800, "url": ["./_img/canvas/main-2/137.png", "./_img/canvas/main-2/135_137.png"] },
			{ "timestamp": 1690104600, "url": ["./_img/canvas/main-2/137.png", "./_img/canvas/main-2/136_137.png"] },
			{ "timestamp": 1690106400, "url": ["./_img/canvas/main-2/137.png"] },
			{ "timestamp": 1690108200, "url": ["./_img/canvas/main-2/137.png", "./_img/canvas/main-2/138_137.png"] },
			{ "timestamp": 1690110000, "url": ["./_img/canvas/main-2/137.png", "./_img/canvas/main-2/139_137.png"] },
			{ "timestamp": 1690111800, "url": ["./_img/canvas/main-2/137.png", "./_img/canvas/main-2/140_137.png"] },
			{ "timestamp": 1690113600, "url": ["./_img/canvas/main-2/137.png", "./_img/canvas/main-2/141_137.png"] },
			{ "timestamp": 1690115400, "url": ["./_img/canvas/main-2/137.png", "./_img/canvas/main-2/142_137.png"] },
			{ "timestamp": 1690117200, "url": ["./_img/canvas/main-2/148.png", "./_img/canvas/main-2/143_148.png"] },
			{ "timestamp": 1690119000, "url": ["./_img/canvas/main-2/148.png", "./_img/canvas/main-2/144_148.png"] },
			{ "timestamp": 1690120800, "url": ["./_img/canvas/main-2/148.png", "./_img/canvas/main-2/145_148.png"] },
			{ "timestamp": 1690122600, "url": ["./_img/canvas/main-2/148.png", "./_img/canvas/main-2/146_148.png"] },
			{ "timestamp": 1690124400, "url": ["./_img/canvas/main-2/148.png", "./_img/canvas/main-2/147_148.png"] },
			{ "timestamp": 1690126200, "url": ["./_img/canvas/main-2/148.png"] },
			{ "timestamp": 1690128000, "url": ["./_img/canvas/main-2/148.png", "./_img/canvas/main-2/149_148.png"] },
			{ "timestamp": 1690129800, "url": ["./_img/canvas/main-2/148.png", "./_img/canvas/main-2/150_148.png"] },
			{ "timestamp": 1690131600, "url": ["./_img/canvas/main-2/148.png", "./_img/canvas/main-2/151_148.png"] },
			{ "timestamp": 1690133400, "url": ["./_img/canvas/main-2/148.png", "./_img/canvas/main-2/152_148.png"] },
			{ "timestamp": 1690135200, "url": ["./_img/canvas/main-2/148.png", "./_img/canvas/main-2/153_148.png"] },
			{ "timestamp": ['Fourth Expansion', 1690137000], "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/154_159.png"] },
			{ "timestamp": 1690138800, "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/155_159.png"] },
			{ "timestamp": 1690140600, "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/156_159.png"] },
			{ "timestamp": 1690142400, "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/157_159.png"] },
			{ "timestamp": 1690144200, "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/158_159.png"] },
			{ "timestamp": 1690146000, "url": ["./_img/canvas/main-2/159.png"] },
			{ "timestamp": 1690147800, "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/160_159.png"] },
			{ "timestamp": 1690149600, "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/161_159.png"] },
			{ "timestamp": 1690151400, "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/162_159.png"] },
			{ "timestamp": 1690153200, "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/163_159.png"] },
			{ "timestamp": 1690155000, "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/164_159.png"] },
			{ "timestamp": 1690156800, "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/165_159.png"] },
			{ "timestamp": 1690158600, "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/166_159.png"] },
			{ "timestamp": 1690160400, "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/167_159.png"] },
			{ "timestamp": 1690162200, "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/168_159.png"] },
			{ "timestamp": 1690164000, "url": ["./_img/canvas/main-2/159.png", "./_img/canvas/main-2/169_159.png"] },
			{ "timestamp": ['Fifth Expansion', 1690165800], "url": ["./_img/canvas/main-2/170.png"] },
			{ "timestamp": 1690167600, "url": ["./_img/canvas/main-2/170.png", "./_img/canvas/main-2/171_170.png"] },
			{ "timestamp": 1690169400, "url": ["./_img/canvas/main-2/170.png", "./_img/canvas/main-2/172_170.png"] },
			{ "timestamp": 1690171200, "url": ["./_img/canvas/main-2/170.png", "./_img/canvas/main-2/173_170.png"] },
			{ "timestamp": 1690173000, "url": ["./_img/canvas/main-2/170.png", "./_img/canvas/main-2/174_170.png"] },
			{ "timestamp": 1690174800, "url": ["./_img/canvas/main-2/181.png", "./_img/canvas/main-2/175_181.png"] },
			{ "timestamp": 1690176600, "url": ["./_img/canvas/main-2/181.png", "./_img/canvas/main-2/176_181.png"] },
			{ "timestamp": 1690178400, "url": ["./_img/canvas/main-2/181.png", "./_img/canvas/main-2/177_181.png"] },
			{ "timestamp": 1690180200, "url": ["./_img/canvas/main-2/181.png", "./_img/canvas/main-2/178_181.png"] },
			{ "timestamp": 1690182000, "url": ["./_img/canvas/main-2/181.png", "./_img/canvas/main-2/179_181.png"] },
			{ "timestamp": 1690183800, "url": ["./_img/canvas/main-2/181.png", "./_img/canvas/main-2/180_181.png"] },
			{ "timestamp": 1690185600, "url": ["./_img/canvas/main-2/181.png"] },
			{ "timestamp": 1690187400, "url": ["./_img/canvas/main-2/181.png", "./_img/canvas/main-2/182_181.png"] },
			{ "timestamp": 1690189200, "url": ["./_img/canvas/main-2/181.png", "./_img/canvas/main-2/183_181.png"] },
			{ "timestamp": 1690191000, "url": ["./_img/canvas/main-2/181.png", "./_img/canvas/main-2/184_181.png"] },
			{ "timestamp": 1690192800, "url": ["./_img/canvas/main-2/181.png", "./_img/canvas/main-2/185_181.png"] },
			{ "timestamp": 1690194600, "url": ["./_img/canvas/main-2/181.png", "./_img/canvas/main-2/186_181.png"] },
			{ "timestamp": 1690196400, "url": ["./_img/canvas/main-2/192.png", "./_img/canvas/main-2/187_192.png"] },
			{ "timestamp": 1690198200, "url": ["./_img/canvas/main-2/192.png", "./_img/canvas/main-2/188_192.png"] },
			{ "timestamp": 1690200000, "url": ["./_img/canvas/main-2/192.png", "./_img/canvas/main-2/189_192.png"] },
			{ "timestamp": 1690201800, "url": ["./_img/canvas/main-2/192.png", "./_img/canvas/main-2/190_192.png"] },
			{ "timestamp": 1690203600, "url": ["./_img/canvas/main-2/192.png", "./_img/canvas/main-2/191_192.png"] },
			{ "timestamp": 1690205400, "url": ["./_img/canvas/main-2/192.png"] },
			{ "timestamp": 1690207200, "url": ["./_img/canvas/main-2/192.png", "./_img/canvas/main-2/193_192.png"] },
			{ "timestamp": 1690209000, "url": ["./_img/canvas/main-2/192.png", "./_img/canvas/main-2/194_192.png"] },
			{ "timestamp": 1690210800, "url": ["./_img/canvas/main-2/192.png", "./_img/canvas/main-2/195_192.png"] },
			{ "timestamp": 1690212600, "url": ["./_img/canvas/main-2/192.png", "./_img/canvas/main-2/196_192.png"] },
			{ "timestamp": 1690214400, "url": ["./_img/canvas/main-2/192.png", "./_img/canvas/main-2/197_192.png"] },
			{ "timestamp": 1690216200, "url": ["./_img/canvas/main-2/192.png", "./_img/canvas/main-2/198_192.png"] },
			{ "timestamp": 1690218000, "url": ["./_img/canvas/main-2/192.png", "./_img/canvas/main-2/199_192.png"] },
			{ "timestamp": 1690219800, "url": ["./_img/canvas/main-2/192.png", "./_img/canvas/main-2/200_192.png"] },
			{ "timestamp": ['Sixth Expansion', 1690221600], "url": ["./_img/canvas/main-2/203.png", "./_img/canvas/main-2/201_203.png"] },
			{ "timestamp": 1690223400, "url": ["./_img/canvas/main-2/203.png", "./_img/canvas/main-2/202_203.png"] },
			{ "timestamp": 1690225200, "url": ["./_img/canvas/main-2/203.png"] },
			{ "timestamp": 1690227000, "url": ["./_img/canvas/main-2/203.png", "./_img/canvas/main-2/204_203.png"] },
			{ "timestamp": 1690228800, "url": ["./_img/canvas/main-2/203.png", "./_img/canvas/main-2/205_203.png"] },
			{ "timestamp": 1690230600, "url": ["./_img/canvas/main-2/203.png", "./_img/canvas/main-2/206_203.png"] },
			{ "timestamp": 1690232400, "url": ["./_img/canvas/main-2/203.png", "./_img/canvas/main-2/207_203.png"] },
			{ "timestamp": 1690234200, "url": ["./_img/canvas/main-2/214.png", "./_img/canvas/main-2/208_214.png"] },
			{ "timestamp": 1690236000, "url": ["./_img/canvas/main-2/214.png", "./_img/canvas/main-2/209_214.png"] },
			{ "timestamp": 1690237800, "url": ["./_img/canvas/main-2/214.png", "./_img/canvas/main-2/210_214.png"] },
			{ "timestamp": 1690239600, "url": ["./_img/canvas/main-2/214.png", "./_img/canvas/main-2/211_214.png"] },
			{ "timestamp": 1690241400, "url": ["./_img/canvas/main-2/214.png", "./_img/canvas/main-2/212_214.png"] },
			{ "timestamp": 1690243200, "url": ["./_img/canvas/main-2/214.png", "./_img/canvas/main-2/213_214.png"] },
			{ "timestamp": 1690245000, "url": ["./_img/canvas/main-2/214.png"] },
			{ "timestamp": 1690246800, "url": ["./_img/canvas/main-2/214.png", "./_img/canvas/main-2/215_214.png"] },
			{ "timestamp": 1690248600, "url": ["./_img/canvas/main-2/214.png", "./_img/canvas/main-2/216_214.png"] },
			{ "timestamp": 1690250400, "url": ["./_img/canvas/main-2/214.png", "./_img/canvas/main-2/217_214.png"] },
			{ "timestamp": 1690252200, "url": ["./_img/canvas/main-2/214.png", "./_img/canvas/main-2/218_214.png"] },
			{ "timestamp": 1690254000, "url": ["./_img/canvas/main-2/225.png", "./_img/canvas/main-2/219_225.png"] },
			{ "timestamp": 1690255800, "url": ["./_img/canvas/main-2/225.png", "./_img/canvas/main-2/220_225.png"] },
			{ "timestamp": 1690257600, "url": ["./_img/canvas/main-2/225.png", "./_img/canvas/main-2/221_225.png"] },
			{ "timestamp": 1690259400, "url": ["./_img/canvas/main-2/225.png", "./_img/canvas/main-2/222_225.png"] },
			{ "timestamp": 1690261200, "url": ["./_img/canvas/main-2/225.png", "./_img/canvas/main-2/223_225.png"] },
			{ "timestamp": 1690263000, "url": ["./_img/canvas/main-2/225.png", "./_img/canvas/main-2/224_225.png"] },
			{ "timestamp": 1690264800, "url": ["./_img/canvas/main-2/225.png"] },
			{ "timestamp": 1690266600, "url": ["./_img/canvas/main-2/225.png", "./_img/canvas/main-2/226_225.png"] },
			{ "timestamp": 1690268400, "url": ["./_img/canvas/main-2/225.png", "./_img/canvas/main-2/227_225.png"] },
			{ "timestamp": 1690270200, "url": ["./_img/canvas/main-2/225.png", "./_img/canvas/main-2/228_225.png"] },
			{ "timestamp": 1690272000, "url": ["./_img/canvas/main-2/225.png", "./_img/canvas/main-2/229_225.png"] },
			{ "timestamp": 1690273800, "url": ["./_img/canvas/main-2/225.png", "./_img/canvas/main-2/230_225.png"] },
			{ "timestamp": 1690275600, "url": ["./_img/canvas/main-2/236.png", "./_img/canvas/main-2/231_236.png"] },
			{ "timestamp": 1690277400, "url": ["./_img/canvas/main-2/236.png", "./_img/canvas/main-2/232_236.png"] },
			{ "timestamp": 1690279200, "url": ["./_img/canvas/main-2/236.png", "./_img/canvas/main-2/233_236.png"] },
			{ "timestamp": 1690281000, "url": ["./_img/canvas/main-2/236.png", "./_img/canvas/main-2/234_236.png"] },
			{ "timestamp": 1690282800, "url": ["./_img/canvas/main-2/236.png", "./_img/canvas/main-2/235_236.png"] },
			{ "timestamp": 1690284600, "url": ["./_img/canvas/main-2/236.png"] },
			{ "timestamp": 1690286400, "url": ["./_img/canvas/main-2/236.png", "./_img/canvas/main-2/237_236.png"] },
			{ "timestamp": 1690288200, "url": ["./_img/canvas/main-2/236.png", "./_img/canvas/main-2/238_236.png"] },
			{ "timestamp": 1690290000, "url": ["./_img/canvas/main-2/236.png", "./_img/canvas/main-2/239_236.png"] },
			{ "timestamp": 1690291800, "url": ["./_img/canvas/main-2/236.png", "./_img/canvas/main-2/240_236.png"] },
			{ "timestamp": 1690293600, "url": ["./_img/canvas/main-2/236.png", "./_img/canvas/main-2/241_236.png"] },
			{ "timestamp": 1690295400, "url": ["./_img/canvas/main-2/247.png", "./_img/canvas/main-2/242_247.png"] },
			{ "timestamp": 1690297200, "url": ["./_img/canvas/main-2/247.png", "./_img/canvas/main-2/243_247.png"] },
			{ "timestamp": 1690299000, "url": ["./_img/canvas/main-2/247.png", "./_img/canvas/main-2/244_247.png"] },
			{ "timestamp": 1690300800, "url": ["./_img/canvas/main-2/247.png", "./_img/canvas/main-2/245_247.png"] },
			{ "timestamp": 1690302600, "url": ["./_img/canvas/main-2/247.png", "./_img/canvas/main-2/246_247.png"] },
			{ "timestamp": 1690304400, "url": ["./_img/canvas/main-2/247.png"] },
			{ "timestamp": 1690306200, "url": ["./_img/canvas/main-2/247.png", "./_img/canvas/main-2/248_247.png"] },
			{ "timestamp": ["Reddit's Official Final Canvas", 1690308000], "url": ["./_img/canvas/main-ex/1690308000-reddit.png"] },
			{ "timestamp": 1690309800, "url": ["./_img/canvas/main-2/247.png", "./_img/canvas/main-2/250_247.png"] },
			{ "timestamp": 1690311600, "url": ["./_img/canvas/main-2/247.png", "./_img/canvas/main-2/251_247.png"] },
			{ "timestamp": 1690313400, "url": ["./_img/canvas/main-2/247.png", "./_img/canvas/main-2/252_247.png"] },
			{ "timestamp": ['True Final Canvas', 1690314219], "url": ["./_img/canvas/main-ex/1690314219.png"] },
			{ "timestamp": ['Gray-out', 1690315200], "url": ["./_img/canvas/main-2/247.png", "./_img/canvas/main-2/253_247.png"] },
			{ "timestamp": ['Gray-out', 1690317000], "url": ["./_img/canvas/main-2/247.png", "./_img/canvas/main-2/254_247.png"] },
			{ "timestamp": ['Whiteout', 1690318800], "url": ["./_img/canvas/main-2/247.png", "./_img/canvas/main-2/255_247.png"] },
			{ "timestamp": ['Whiteout', 1690320600], "url": ["./_img/canvas/main-2/256.png"] },
			{ "timestamp": ['Whiteout', 1690320856], "url": ["./_img/canvas/main-ex/end.png"] },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192" aria-hidden="true"><polygon points="154 0 154 38 39 38 39 192 0 192 0 0"/><polygon points="192 38 192 192 77 192 77 153 154 153 154 38"/><rect x="77" y="77" width="38" height="38"/></svg>'
	},
	tfc: {
		name: "The Final Clean",
		code: "T",
		default: 0,
		drawablePeriods: [0, 0],
		drawableRegions: [
			[[0, 0], [-1500, -1000, 1499, 999]],
		],
		versions: [
			{
				timestamp: "Final",
				url: "./_img/canvas/tfc/base.png",
			}
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192" aria-hidden="true"><defs><style>.a{fill-rule:evenodd;}</style></defs><path class="a" d="M69.79,83.55c-.47,.65-.59,1.35-.59,1.35-.26,1.47,.76,2.72,.92,3.12,2.84,7.1,4.49,13.93,3.97,16.39-.47,2.18-5.6,5.65-12.36,8.33-3.63,1.44-6.11,2.99-8.04,5.01-7.17,7.51-10.24,17.86-7.14,24.05,3.93,7.84,18.38,5.86,28.05-3.85,2.09-2.1,3.15-3.83,6.63-10.77,2.97-5.93,4.26-8.05,5.47-8.95,2.04-1.52,9.82,.1,17.41,3.64,1.71,.8,2.31,1.04,2.78,.98,0,0,.22-.05,.43-.14,1.31-.59,17.43-17,25.58-25.34-1.79,.09-3.57,.18-5.36,.28-2.84,2.63-5.68,5.27-8.52,7.9-10.85-10.85-21.7-21.71-32.55-32.56,1.73-1.8,3.46-3.6,5.18-5.4-.29-1.56-.57-3.12-.86-4.69-1.34,1.27-19.42,18.45-21.01,20.66Zm-10.45,44.57c2.5,0,4.53,2.03,4.53,4.53s-2.03,4.53-4.53,4.53-4.53-2.03-4.53-4.53,2.03-4.53,4.53-4.53Z"/><path class="f" d="M132.9,97.36c-.88,.22-7.88,1.92-9.91-1.04-1.11-1.62-1.05-4.71-.52-6.57,.74-2.59,.9-4.06,.25-4.73-.73-.76-2.03-.31-3.73-.18-3.4,.27-8.08-.86-9.6-3.16-2.77-4.21,4.48-13.03,2.31-14.69-.17-.13-.34-.16-.67-.22-4.24-.73-6.79,4.71-11.66,5.1-2.93,.24-6.21-1.39-7.72-4.02-1.11-1.94-1-3.96-.86-4.95h0s7.38-7.39,17.6-17.52c12.75,12.73,25.51,25.47,38.26,38.2l-13.75,13.79Z"/><polygon points="154 0 154 38 39 38 39 192 0 192 0 0"/><polygon points="192 38 192 192 77 192 77 153 154 153 154 38"/></svg>'
	}
}
window.variationsConfig = variationsConfig

const giscusConfig = {
    repo: "placeAtlas/atlas-2023",
    repoId: "R_kgDOJyrvYg",
    category: "Entry Discussion",
    categoryId: "DIC_kwDOJyrvYs4Cn1UC",
    mapping: "specific",
    strict: "1",
	term: "{ENTRY_ID}",
    reactionsEnabled: "1",
    emitMetadata: "0",
    inputPosition: "top",
    theme: "preferred_color_scheme",
    lang: "en",
    loading: "lazy",
    crossorigin: "anonymous"
}
window.giscusConfig = giscusConfig

let defaultVariation = 'default'
window.defaultVariation = defaultVariation

let defaultPeriod = variationsConfig[defaultVariation].default
window.defaultPeriod = defaultPeriod

const useNumericalId = true
window.useNumericalId = useNumericalId

const externalLinksConfig = [
	{
		name: "Website",
		id: "website",
		generateLink: (link) => link,
		listingClass: "bi-globe",
		generateListingName: (link) => {
			try {
				const urlObject = new URL(link)
				return urlObject.hostname.replace(/^www./, "")
			} catch (e) {
				return "Website"
			}
		},
		displayHTML: "{urlid}",
		placeholder: "https://example.org",
		configureInputField: (inputField) => {
			inputField.type = "url"
			inputField.placeholder = "https://example.com"
			inputField.pattern = "https?://.*"
			inputField.title = "Website URL using the http:// or https:// protocol"
		}
	},
	{
		name: "Discord",
		id: "discord",
		generateLink: (link) => "https://discord.gg/" + link,
		generateListingName: (link) => link,
		listingClass: "bi-discord",
		editorPrefix: "discord.gg/",
		placeholder: "r/example",
		configureInputField: (inputField) => {
			inputField.placeholder = "pJkm23b2nA"
		},
		extractId: (content) => {
			const discordPattern = /^(?:(?:https?:\/\/)?(?:www\.)?(?:(?:discord)?\.?gg|discord(?:app)?\.com\/invite)\/)?([^\s/]+?)(?=\b)$/
			id = content.trim().match(discordPattern)?.[1]
			if (id) {
				return id;
			}
			return content;
		}
	},
	{
		name: "Subreddit",
		id: "subreddit",
		generateLink: (link) => "https://reddit.com/r/" + link,
		listingClass: "bi-reddit",
		generateListingName: (link) => "r/" + link,
		editorPrefix: "reddit.com/",
		placeholder: "pJkm23b2nA",
		configureInputField: (inputField) => {
			inputField.placeholder = "r/example"
			inputField.pattern = "^r\/[A-Za-z0-9][A-Za-z0-9_]{1,50}$"
			inputField.title = "Subreddit in format of r/example"
			inputField.minLength = "4"
			inputField.maxLength = "50"
		},
		extractId: (content) => {
			const subredditPattern = /^(?:(?:(?:(?:(?:https?:\/\/)?(?:(?:www|old|new|np)\.)?)?reddit\.com)?\/)?[rR]\/)?([A-Za-z0-9][A-Za-z0-9_]{1,20})(?:\/[^" ]*)*$/
			id = content.trim().match(subredditPattern)?.[1]
			if (id) {
				return id;
			}
			return content;
		},
		formatIdInEditor: (content) => {
			if (content != "") {
				return "r/" + content;
			}
			return "";
		}
	},
	{
		name: "Wiki",
		id: "wiki",
		generateLink: (link) => "https://place-wiki.stefanocoding.me/wiki/" + link,
		listingClass: "bi-wiki",
		generateListingName: () => "r/place Wiki Article",
		displayHTML: "{urlid}",
		placeholder: "r/place Wiki Article",
		configureInputField: () => {},
		hideInput: true
	},
];

console.info(`%cThe 2023 r/place Atlas
%cCopyright (c) 2017 Roland Rytz <roland@draemm.li>
Copyright (c) 2023 Place Atlas Initiative and contributors
Licensed under AGPL-3.0 (https://2023.place-atlas.stefanocoding.me/license.txt)

https://2023.place-atlas.stefanocoding.me/
https://discord.gg/pJkm23b2nA
https://reddit.com/r/placeAtlas2023
https://github.com/placeAtlas/atlas-2023

To get the image of the canvas, use downloadCanvas().
`, 'font-size: 150%; line-height: 150%', '')
