//import three.js library here
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
//import * as THREEx from 'threex';
const canvas = document.getElementById('illu');
const container = document.querySelector(".illuWindow");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('illu') });
renderer.setSize(container.clientWidth, container.clientHeight);


const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 0, 30);
orbit.update(); 

const BackgroundGeometry = new THREE.PlaneGeometry(50, 50);
const BackgroundMaterial = new THREE.MeshPhongMaterial({
    color: 0x0000FF, // Dark background for contrast
    side: THREE.DoubleSide,
    opacity: 0.7,
    transparent: true
});
const Background = new THREE.Mesh(BackgroundGeometry, BackgroundMaterial);
scene.add(Background);
Background.position.z = -1;


const ambientLight = new THREE.AmbientLight(0xffffff, 0.15); // Soft ambient light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xFFA500, 0.85); // Adjusted light intensity
directionalLight.position.set(5, -5, 50);
directionalLight.rotation.z = -5;

scene.add(directionalLight);

const pointLight2 = new THREE.PointLight(0x800080, 7, 13); // Bright point light for highlights
pointLight2.position.set(-6, 2, 10);
scene.add(pointLight2);

//Creating Graphs of central tendencies and variability

let points = [];
points = getDynamicArray();

// Create a color gradient function
function getColor() {
    const r = 170;
    const g = 169;
    const b = 173;
    return new THREE.Color(r, g, b).getHex();
}

//Visual constructors and initializers for hexes 
const hexRadius = 1;
const hexHeight = Math.sqrt(3) * hexRadius;
const hexGeometry = new THREE.CircleGeometry(hexRadius, 6);
const hexMaterial = new THREE.MeshPhysicalMaterial({
    color: getColor(),
    metalness: 0.7, // Moderate metalness for a polished look
    roughness: 0.5, // Low roughness for smoothness
    clearcoat: 10, // Clear coat for extra shine
    clearcoatRoughness: 0.5 // Smooth clear coat for better reflections
});
const hexGroup = new THREE.Group();

// Create hexagons with modern styling

/*
for (let row = -10; row < 10; row++) {
        const x = row * 1.5 * hexRadius;
        const y = -10;
        const color = getColor(); // Modern, random colors
        const hexMaterial = new THREE.MeshPhysicalMaterial({
            color: color,
            metalness: 0.7, // Moderate metalness for a polished look
            roughness: 0.5, // Low roughness for smoothness
            clearcoat: 10, // Clear coat for extra shine
            clearcoatRoughness: 0.5 // Smooth clear coat for better reflections
        });
        const hex = new THREE.Mesh(hexGeometry, hexMaterial);
        hex.position.set(x, y, 0);
        hex.userData = { originalPosition: hex.position.clone(), speed: Math.random() * 0.2 + 0.01 };
        hexGroup.add(hex);
}
scene.add(hexGroup);    //Add the hexgroup into the scene
*/

//Create the individual hexes as the points are coming in for static display on graph

//for(let i = 1; i < points.length; i++){

//const hex = new THREE.Mesh(hexGeometry, hexMaterial);

//}

/*
let maxValue;

setTimeout(() => {
    //Finding maximum values for height of graph
    let maxValueHolder = Math.max(...points);
    maxValue=maxValueHolder;

}, 3000 );
*/

function animate() {
    requestAnimationFrame(animate);
    let hexCount = 1;                   // start the count at 1 in order to be able to plot the very first point onto the board

for(let i = 0; i <=points.length; i++){     //initialize the for loop in order to iterate through all the points available by the getDynamicArray() function called on load
    const hex = new THREE.Mesh(hexGeometry, hexMaterial);   //Creating the "hex" mesh from the previous geometry and material established above (can be changed later)
    hex.position.y=points[hexCount-1];          //Setting the Y coordinate accoring to the value of the point imported inside the array
    hex.position.x=hexCount;                    //Setting the x value based on the order index value of the point recieved beforehand
    hexGroup.add(hex);                          //Adding the indiviual hex mesh inside out hexGroup established earlier 
    hexCount+=1;                                //Iterating our hexCount by one for the next point available in our current loop
}   
scene.add(hexGroup);                            //Adding the entire hexGroup together into our scene



/*
    hexGroup.children.forEach(hex => {

        const time = Date.now() * 0.001;
        let change = 0.1;
        //hex.rotation.x = hex.userData.originalPosition.z + Math.sin(time * hex.userData.speed * 10) * 0.15;
        //hex.rotation.y = hex.userData.originalPosition.z + Math.cos(time * hex.userData.speed * 10) * 5;
        //hex.rotation.z = hex.userData.originalPosition.z + Math.sin(time * hex.userData.speed * 10) * 5;

        //hex.position.x+= hex.userData.originalPosition.z + Math.sin(time * hex.userData.speed * 10) * 0.05;
        //if(hex.position.y>=(maxValue*0.0000001)){hex.position.y+=change-0.1;}
        //else {hex.position.y+=change;}
        //hex.position.z+= hex.userData.originalPosition.z + Math.sin(time * hex.userData.speed * 1) * 0.05;

    });
    */

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});

window.onload = function() {
    setTimeout(() => {
        points = getDynamicArray();
    }, 3000 );
}
