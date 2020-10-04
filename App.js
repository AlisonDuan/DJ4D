import * as WorldRenderer from "./WorldRenderer.js";

var players = {}

function addPlayer(uuid, playerObject) {
    players[uuid] = playerObject;
}

function removePlayer(uuid) {
    players.remove(uuid);
}


/** Classes */

// Things
class WorldObject {
    transform = {
        x: 0.0,
        y: 0.0,
        z: 0.0,
    };
};
class Player extends WorldObject {
};

function testWorldRendererConnection() {
    WorldRenderer.test()
}

testWorldRendererConnection()