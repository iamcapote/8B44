/**
 * BITCORE Knowledge Base - Toroidal Ophanim Visualization
 * A grayscale 3D visualization representing recursive intelligence
 */

class BitcoreVisualization {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight || 300;
    this.particles = [];
    this.particleCount = 1000;
    this.torusRadius = 3;
    this.tubeRadius = 1;
    
    this.init();
    this.animate();
    
    // Handle window resize
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }
  
  init() {
    // Initialize scene
    this.scene = new THREE.Scene();
    
    // Initialize camera
    this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 0.1, 1000);
    this.camera.position.set(0, 0, 8);
    
    // Initialize renderer
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x000000, 0);
    this.container.appendChild(this.renderer.domElement);
    
    // Create toroidal geometry
    this.createTorus();
    
    // Create particle system
    this.createParticleSystem();
    
    // Create subtle ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);
    
    // Create directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(0, 5, 5);
    this.scene.add(directionalLight);
  }
  
  createTorus() {
    // Create main torus
    const geometry = new THREE.TorusGeometry(this.torusRadius, this.tubeRadius, 16, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff, 
      wireframe: false,
      roughness: 0.4,
      metalness: 0.8,
      emissive: 0x222222
    });
    
    this.torus = new THREE.Mesh(geometry, material);
    this.scene.add(this.torus);
    
    // Create secondary wireframe torus
    const wireGeometry = new THREE.TorusGeometry(this.torusRadius * 1.1, this.tubeRadius * 0.5, 16, 100);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff, 
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    
    this.wireTorus = new THREE.Mesh(wireGeometry, wireMaterial);
    this.scene.add(this.wireTorus);
  }
  
  createParticleSystem() {
    // Create particles moving along toroidal paths
    const particleGeometry = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true,
      opacity: 0.7
    });
    
    const positions = new Float32Array(this.particleCount * 3);
    const velocities = [];
    
    for (let i = 0; i < this.particleCount; i++) {
      // Distribute particles on torus surface
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      
      const x = (this.torusRadius + this.tubeRadius * Math.cos(phi)) * Math.cos(theta);
      const y = (this.torusRadius + this.tubeRadius * Math.cos(phi)) * Math.sin(theta);
      const z = this.tubeRadius * Math.sin(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Add velocity for animation
      velocities.push({
        theta: theta,
        phi: phi,
        speed: 0.001 + Math.random() * 0.003
      });
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.particles = new THREE.Points(particleGeometry, particleMaterial);
    this.velocities = velocities;
    this.scene.add(this.particles);
  }
  
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    
    // Rotate main torus
    this.torus.rotation.x += 0.003;
    this.torus.rotation.y += 0.002;
    
    // Rotate wireframe torus in opposite direction
    this.wireTorus.rotation.x -= 0.001;
    this.wireTorus.rotation.y -= 0.002;
    
    // Update particle positions
    const positions = this.particles.geometry.attributes.position.array;
    
    for (let i = 0; i < this.particleCount; i++) {
      const v = this.velocities[i];
      
      // Update angle
      v.theta += v.speed;
      v.phi += v.speed * 0.7;
      
      // Calculate new position
      const x = (this.torusRadius + this.tubeRadius * Math.cos(v.phi)) * Math.cos(v.theta);
      const y = (this.torusRadius + this.tubeRadius * Math.cos(v.phi)) * Math.sin(v.theta);
      const z = this.tubeRadius * Math.sin(v.phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    
    this.particles.geometry.attributes.position.needsUpdate = true;
    
    // Render scene
    this.renderer.render(this.scene, this.camera);
  }
  
  onWindowResize() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight || 300;
    
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }
}

// Initialize visualization when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Check if Three.js is loaded
  if (typeof THREE === 'undefined') {
    console.error('Three.js is not loaded. Make sure to include the library.');
    return;
  }
  
  // Create visualization
  const visualization = new BitcoreVisualization('bitcore-visualization');
});
