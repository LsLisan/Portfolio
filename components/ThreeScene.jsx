'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

function OrbitingCore() {
  const group = useRef(null);
  const pointerTarget = useRef({ x: 0, y: 0 });
  const scrollTarget = useRef(0);

  useEffect(() => {
    const updatePointer = (event) => {
      pointerTarget.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * -2
      };
    };
    const updateScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollTarget.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };
    updateScroll();
    window.addEventListener('pointermove', updatePointer);
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => {
      window.removeEventListener('pointermove', updatePointer);
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const elapsed = clock.getElapsedTime();
    const pointer = pointerTarget.current;
    const scroll = scrollTarget.current;
    const targetRotationX = elapsed * 0.12 + pointer.y * 0.28 + scroll * Math.PI * 1.2;
    const targetRotationY = elapsed * 0.18 + pointer.x * 0.42 + scroll * Math.PI * 1.7;
    group.current.rotation.x += (targetRotationX - group.current.rotation.x) * 0.035;
    group.current.rotation.y += (targetRotationY - group.current.rotation.y) * 0.035;
    group.current.rotation.z += (scroll * 0.8 - group.current.rotation.z) * 0.035;
    group.current.position.x += (pointer.x * 0.34 - group.current.position.x) * 0.025;
    group.current.position.y += (pointer.y * 0.24 + scroll * 0.45 - group.current.position.y) * 0.025;
    const targetScale = 1 + scroll * 0.18;
    group.current.scale.x += (targetScale - group.current.scale.x) * 0.025;
    group.current.scale.y += (targetScale - group.current.scale.y) * 0.025;
    group.current.scale.z += (targetScale - group.current.scale.z) * 0.025;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.45, 2]} />
        <meshStandardMaterial color="#8fc9ff" emissive="#1478d4" emissiveIntensity={0.55} roughness={0.2} metalness={0.7} wireframe />
      </mesh>
      <mesh scale={0.72}>
        <icosahedronGeometry args={[1.45, 2]} />
        <meshPhysicalMaterial color="#f7fbff" emissive="#4ba6ff" emissiveIntensity={0.4} roughness={0.08} metalness={0.25} transmission={0.65} thickness={1.2} transparent opacity={0.82} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.05, 0.012, 12, 96]} />
        <meshBasicMaterial color="#65b7ff" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[0.7, 0.3, 0.4]}>
        <torusGeometry args={[1.8, 0.008, 12, 96]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="three-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6.4], fov: 42 }} dpr={[1, 1.7]}>
        <ambientLight intensity={0.8} />
        <pointLight position={[3, 3, 4]} intensity={12} color="#b9ddff" />
        <pointLight position={[-4, -2, 2]} intensity={8} color="#176bff" />
        <OrbitingCore />
      </Canvas>
    </div>
  );
}