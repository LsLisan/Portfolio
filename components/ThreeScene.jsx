'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

const liquidVertexShader = `
  uniform float uTime;
  uniform float uScroll;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vec3 displaced = position;
    float wave = sin(position.y * 3.4 + uTime * 1.4) * 0.075;
    wave += sin(position.x * 4.2 - uTime * 1.1) * 0.045;
    wave += cos(position.z * 5.1 + uTime * 0.9) * 0.035;
    displaced += normal * (wave + uScroll * 0.035);
    vNormal = normalize(normalMatrix * normal);
    vPosition = displaced;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

const liquidFragmentShader = `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vec3 cool = vec3(0.16, 0.53, 1.0);
    vec3 light = vec3(0.86, 0.96, 1.0);
    float rim = pow(1.0 - max(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 0.0), 2.2);
    float shimmer = 0.5 + 0.5 * sin(vPosition.y * 5.0 + uTime * 1.7);
    vec3 color = mix(cool, light, rim * 0.8 + shimmer * 0.12);
    gl_FragColor = vec4(color, 0.9);
  }
`;

function LiquidGlassOrb() {
  const group = useRef(null);
  const liquidMaterial = useRef(null);
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
    if (liquidMaterial.current) {
      liquidMaterial.current.uniforms.uTime.value = elapsed;
      liquidMaterial.current.uniforms.uScroll.value = scroll;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.45, 96, 64]} />
        <shaderMaterial ref={liquidMaterial} vertexShader={liquidVertexShader} fragmentShader={liquidFragmentShader} uniforms={{ uTime: { value: 0 }, uScroll: { value: 0 } }} transparent opacity={0.92} />
      </mesh>
      <mesh scale={0.82}>
        <sphereGeometry args={[1.45, 64, 48]} />
        <meshPhysicalMaterial color="#bfe3ff" emissive="#2388e8" emissiveIntensity={0.45} roughness={0.08} metalness={0.08} transmission={0.82} thickness={1.6} transparent opacity={0.35} />
      </mesh>
      <mesh scale={1.04}>
        <sphereGeometry args={[1.45, 64, 48]} />
        <meshPhysicalMaterial color="#75bdff" roughness={0.04} metalness={0.15} transmission={0.92} thickness={0.4} transparent opacity={0.18} />
      </mesh>
      <mesh position={[-0.42, 0.58, 1.15]} scale={0.2}>
        <sphereGeometry args={[1, 32, 24]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.75} />
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
        <LiquidGlassOrb />
      </Canvas>
    </div>
  );
}