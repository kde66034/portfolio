var renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector("#webgl1"),
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

var onRenderFcts = [];
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.z = 15;
camera.position.y = 2;
scene.fog = new THREE.Fog(0x000, 0, 45);;

// 조명 설정
var light = new THREE.AmbientLight(0x202020)
scene.add(light)
var light = new THREE.DirectionalLight('white', 5)
light.position.set(0.5, 0.0, 2)
scene.add(light)
var light = new THREE.DirectionalLight('white', 0.75 * 2)
light.position.set(-0.5, -0.5, -2)
scene.add(light)

var heightMap = THREEx.Terrain.allocateHeightMap(256, 256)
THREEx.Terrain.simplexHeightMap(heightMap)
var geometry = THREEx.Terrain.heightMapToPlaneGeometry(heightMap)
THREEx.Terrain.heightMapToVertexColor(heightMap, geometry)
var material = new THREE.MeshBasicMaterial({
    wireframe: false,
    color: "#D2E3C0"
});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.lookAt(new THREE.Vector3(0, 1, 0));

mesh.scale.y = 3.5;
mesh.scale.x = 3;
mesh.scale.z = 0.20;
mesh.scale.multiplyScalar(10);

onRenderFcts.push(function (delta, now) {
    mesh.rotation.z += 0.03 * delta;
})
onRenderFcts.push(function () {
    renderer.render(scene, camera);
})
var lastTimeMsec = null

requestAnimationFrame(function animate(nowMsec) {
    requestAnimationFrame(animate);
    lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60
    var deltaMsec = Math.min(200, nowMsec - lastTimeMsec)
    lastTimeMsec = nowMsec
    onRenderFcts.forEach(function (onRenderFct) {
        onRenderFct(deltaMsec / 1000, nowMsec / 1000)
    })
})