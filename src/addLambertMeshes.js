import * as THREE from 'three'

export function addLambertMeshes(){
    //meshes are made up of geometry and material, must define both
    const geometry = new THREE.TorusKnotGeometry(0.5, 0.1, 256, 64)
    const material = new THREE.MeshLambertMaterial({
        color: 0x77aaff,
        emissive: 0x22355,
        emissiveIntensity: 0.3,
        flatShading: true,
    })
    const mesh = new THREE.Mesh(geometry,material)
    return mesh
}

