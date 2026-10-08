import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Group for 3D elements
    const group = new THREE.Group();
    scene.add(group);

    // 1. Core Geometric Wireframe Mesh (Icosahedron)
    const geometry = new THREE.IcosahedronGeometry(1.8, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x7c3aed, // Violet accent
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const sphereMesh = new THREE.Mesh(geometry, wireframeMaterial);
    group.add(sphereMesh);

    // 2. Inner Glowing Core Sphere
    const innerGeo = new THREE.IcosahedronGeometry(1.1, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan glow
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // 3. Orbiting Data Node Particles
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.2 + (Math.random() - 0.5) * 0.8;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      scales[i] = Math.random() * 0.08 + 0.02;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMat = new THREE.PointsMaterial({
      color: 0xc084fc, // Bright violet
      size: 0.06,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // Dynamic Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0008;
      mouseY = (e.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotation animations
      group.rotation.y = elapsedTime * 0.15 + targetX * 2;
      group.rotation.x = elapsedTime * 0.1 + targetY * 2;
      innerMesh.rotation.y = -elapsedTime * 0.25;
      innerMesh.rotation.z = elapsedTime * 0.15;
      particles.rotation.y = elapsedTime * 0.05;

      // Gentle floating motion
      group.position.y = Math.sin(elapsedTime * 0.8) * 0.1;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireframeMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[380px] md:min-h-[500px] cursor-grab active:cursor-grabbing flex items-center justify-center relative pointer-events-auto"
      style={{ touchAction: 'none' }}
    />
  );
}

export default ThreeCanvas;
