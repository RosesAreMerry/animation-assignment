const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./pigrun.png");

let PARAMS = {
		DEBUG: false
};

let ctx;

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	ctx = canvas.getContext("2d");

	ctx.webkitImageSmoothingEnabled = false;
	ctx.mozImageSmoothingEnabled = false;
	ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);

	gameEngine.addEntity(new Pig(0, 0, ASSET_MANAGER.getAsset("./pigrun.png")));

	gameEngine.start();
});
