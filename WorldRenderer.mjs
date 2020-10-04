/**
 * sup gamers
 * 
 * Camera controls will likely require https://threejs.org/docs/#examples/en/controls/OrbitControls
 */


// Various properties of the scene:
const WIDTH = 1280; // Self explanatory, 
const HEIGHT = 720;

// Instantiate the scene:
var scene = new THREE.Scene();

// Set up the renderer & connect it to the DOM:
var renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT); // This also starts up the renderer apparently?
document.body.appendChild(renderer.domElement);

// Set up the camera:
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.add(camera)
camera.position.z -= 5; // Pulling it back from the origin a bit
// Various materials:
var loader = new THREE.TextureLoader()
var woodTexture = loader.load('http://localhost:8000/textures/wall/00_brickywoodwall.png');
var floorTexture = loader.load('http://localhost:8000/textures/floor/00_brickywood.png');
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(16, 16);
floorTexture.magFilter = THREE.NearestFilter
var materialGreen = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
var materialOrange = new THREE.MeshStandardMaterial({ color: 0xFFA500 });
var materialFloor = new THREE.MeshStandardMaterial({ map: floorTexture, roughness: 0.5 });
var materialWood = new THREE.MeshStandardMaterial({ map: woodTexture, roughness: 0.5 });

// Various geometries:
var geometryCube = new THREE.BoxGeometry();

// Thing to animate:
var to_animate = new Array()

var cube = new THREE.Mesh(geometryCube, materialGreen);
scene.add(cube);
to_animate.push(cube)

var cube2 = new THREE.Mesh(geometryCube, materialOrange);
scene.add(cube2);
cube2.position.x -= 3
to_animate.push(cube2)

var cube3 = new THREE.Mesh(geometryCube, materialWood);
scene.add(cube3);
cube3.position.x += 3
to_animate.push(cube3)

var floor = new THREE.Mesh(new THREE.PlaneGeometry(16, 16, 32),
    materialFloor
);
floor.rotation.x = -3.1415 / 2;
floor.position.y -= 2.5
scene.add(floor)



camera.position.z = 5;
camera.rotation.x -= 0.5;
camera.position.y += 2;

var add_warm_lights = function () {
    var light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);
    var light1 = new THREE.SpotLight(0xffd278);
    light1.position.y += 10
    light1.intensity = 0.5
    scene.add(light1)
    var spotlight = new THREE.SpotLight(0xFFA500);
    spotlight.position.y += 5
    spotlight.intensity = 0.5
    spotlight.penumbra = 0.9
    spotlight.decay = 2;
    scene.add(spotlight)
}

add_warm_lights()


var spin_blocks = function () {
    cube.rotation.x += 0.02
    cube2.rotation.y += 0.02
    cube3.rotation.z += 0.02
}

var animate = function () {
    requestAnimationFrame(animate);

    spin_blocks()

    renderer.render(scene, camera);
};

function test() {
    var cube = new THREE.Mesh(geometryCube, materialWood);
    scene.add(cube);
    cube.position.x += 3
    cube.position.y += 1
}

animate();