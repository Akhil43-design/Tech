import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Stars, Torus, Sphere } from "@react-three/drei";
import * as THREE from "three";

function CoreOrb({ isMobile }: { isMobile: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current || isMobile) return;
    ref.current.rotation.x = clock.elapsedTime * 0.15;
    ref.current.rotation.y = clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={isMobile ? 0 : 1.4} rotationIntensity={isMobile ? 0 : 0.6} floatIntensity={isMobile ? 0 : 1.2}>
      <Icosahedron ref={ref} args={[1.4, isMobile ? 1 : 3]}>
        <MeshDistortMaterial
          color="#7c5cff"
          emissive="#3a1f8a"
          emissiveIntensity={isMobile ? 0.3 : 0.45}
          roughness={isMobile ? 0.5 : 0.15}
          metalness={0.85}
          distort={isMobile ? 0 : 0.35}
          speed={isMobile ? 0 : 1.5}
        />
      </Icosahedron>
    </Float>
  );
}

function Rings({ isMobile }: { isMobile: boolean }) {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!g.current || isMobile) return;
    g.current.rotation.z = clock.elapsedTime * 0.1;
    g.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.3;
  });
  const radialSegments = isMobile ? 32 : 64;
  return (
    <group ref={g}>
      <Torus args={[2.4, 0.012, 8, radialSegments]}>
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={isMobile ? 0.5 : 0.9} toneMapped={false} />
      </Torus>
      <Torus args={[2.9, 0.008, 8, radialSegments]} rotation={[Math.PI / 3, 0, 0]}>
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={isMobile ? 0.5 : 0.85} toneMapped={false} />
      </Torus>
      <Torus args={[3.4, 0.006, 8, radialSegments]} rotation={[Math.PI / 1.6, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={isMobile ? 0.4 : 0.8} toneMapped={false} />
      </Torus>
    </group>
  );
}

function Satellites({ isMobile }: { isMobile: boolean }) {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (g.current && !isMobile) g.current.rotation.y = clock.elapsedTime * 0.25;
  });
  const itemsCount = isMobile ? 3 : 6;
  const items = Array.from({ length: itemsCount });
  const segments = isMobile ? 6 : 12;
  return (
    <group ref={g}>
      {items.map((_, i) => {
        const a = (i / items.length) * Math.PI * 2;
        const r = 2.6;
        return (
          <Float key={i} speed={isMobile ? 0 : 2} rotationIntensity={isMobile ? 0 : 1} floatIntensity={isMobile ? 0 : 1.5}>
            <Sphere args={[0.06, segments, segments]} position={[Math.cos(a) * r, Math.sin(a) * 0.6, Math.sin(a) * r]}>
              <meshStandardMaterial color="#67e8f9" emissive="#67e8f9" emissiveIntensity={isMobile ? 1 : 2} toneMapped={false} />
            </Sphere>
          </Float>
        );
      })}
    </group>
  );
}

export function Scene3D() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  if (!mounted) {
    return <div className="absolute inset-0" aria-hidden />;
  }
  return (
    <Canvas
      dpr={[1, isMobile ? 1.2 : 1.5]}
      camera={{ position: [-1.5, 0, 6], fov: 50 }}
      gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
      frameloop={isMobile ? "demand" : "always"}
    >
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={isMobile ? 1.2 : 2} color="#7c5cff" />
      {!isMobile && <pointLight position={[-5, -3, 4]} intensity={1.4} color="#22d3ee" />}
      <CoreOrb isMobile={isMobile} />
      <Rings isMobile={isMobile} />
      <Satellites isMobile={isMobile} />
      <Stars radius={40} depth={50} count={isMobile ? 80 : 300} factor={3} saturation={0.6} fade speed={isMobile ? 0 : 0.6} />
    </Canvas>
  );
}
