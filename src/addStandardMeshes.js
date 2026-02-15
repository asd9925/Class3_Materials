import * as THREE from 'three'

export function addStandardMeshes(){
    const geometry = new THREE.TorusKnotGeometry(0.5, 0.1, 256, 64);
    //Mesh BLANK Material (one of the 5 types)
    const material = new THREE.MeshStandardMaterial({
        color: 0xb873333,
        metalness: 1.0,
        roughness: 0.35,
        //how strong colour is emitted
        emissive: 0x0a0a0a,
        emissiveIntensity: 0.2,
    })

    const mesh = new THREE.Mesh(geometry, material)
    return mesh;
}