"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import type { Group } from "three";

function SpokedWheel({ position, tireWidth }: { position: [number, number, number]; tireWidth: number }) {
  const spokes = Array.from({ length: 16 });
  return (
    <group position={position}>
      {/* tire */}
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
        <torusGeometry args={[0.46, tireWidth, 20, 48]} />
        <meshStandardMaterial color="#131313" roughness={0.95} />
      </mesh>
      {/* sidewall detail */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.32, 0.145, 12, 40]} />
        <meshStandardMaterial color="#1c1c1c" roughness={0.9} />
      </mesh>
      {/* rim */}
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.31, 0.31, 0.09, 32]} />
        <meshStandardMaterial color="#c9c7c2" metalness={0.9} roughness={0.32} />
      </mesh>
      {/* hub */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.12, 16]} />
        <meshStandardMaterial color="#2a2a28" metalness={0.7} roughness={0.4} />
      </mesh>
      {/* spokes */}
      {spokes.map((_, i) => {
        const a = (i / spokes.length) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[0, Math.cos(a) * 0.17, Math.sin(a) * 0.17]}
            rotation={[a, 0, 0]}
          >
            <cylinderGeometry args={[0.008, 0.008, 0.3, 6]} />
            <meshStandardMaterial color="#d8d6d1" metalness={0.95} roughness={0.25} />
          </mesh>
        );
      })}
      {/* brake disc */}
      <mesh position={[0.06, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.02, 24]} />
        <meshStandardMaterial color="#8f8d89" metalness={0.9} roughness={0.35} />
      </mesh>
    </group>
  );
}

function BikeModel({ color, exhaustHigh, auto }: { color: string; exhaustHigh: boolean; auto: boolean }) {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (auto && ref.current) ref.current.rotation.y += delta * 0.35;
  });
  return (
    <group ref={ref}>
      <SpokedWheel position={[-1.55, 0.46, 0]} tireWidth={0.13} />
      <SpokedWheel position={[1.55, 0.46, 0]} tireWidth={0.155} />

      {/* swingarm + frame */}
      <mesh position={[0.75, 0.62, 0.12]} rotation={[0, 0, -0.06]} castShadow>
        <boxGeometry args={[1.5, 0.09, 0.07]} />
        <meshStandardMaterial color="#1a1a18" metalness={0.6} roughness={0.45} />
      </mesh>
      <mesh position={[0.75, 0.62, -0.12]} rotation={[0, 0, -0.06]} castShadow>
        <boxGeometry args={[1.5, 0.09, 0.07]} />
        <meshStandardMaterial color="#1a1a18" metalness={0.6} roughness={0.45} />
      </mesh>
      <mesh position={[-0.1, 0.95, 0]} rotation={[0, 0, 0.12]} castShadow>
        <boxGeometry args={[2.2, 0.1, 0.12]} />
        <meshStandardMaterial color="#242422" metalness={0.65} roughness={0.4} />
      </mesh>
      {/* subframe cut + U-loop (orange) */}
      <mesh position={[1.35, 1.02, 0.09]} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.028, 0.028, 0.7, 12]} />
        <meshStandardMaterial color="#ff4d00" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[1.35, 1.02, -0.09]} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.028, 0.028, 0.7, 12]} />
        <meshStandardMaterial color="#ff4d00" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* front fork */}
      <mesh position={[-1.35, 0.95, 0.09]} rotation={[0, 0, 0.35]} castShadow>
        <cylinderGeometry args={[0.035, 0.03, 1.15, 12]} />
        <meshStandardMaterial color="#d8d6d1" metalness={0.95} roughness={0.2} />
      </mesh>
      <mesh position={[-1.35, 0.95, -0.09]} rotation={[0, 0, 0.35]} castShadow>
        <cylinderGeometry args={[0.035, 0.03, 1.15, 12]} />
        <meshStandardMaterial color="#d8d6d1" metalness={0.95} roughness={0.2} />
      </mesh>

      {/* tank: clearcoat paint */}
      <mesh position={[-0.25, 1.28, 0]} rotation={[0, 0, -0.06]} castShadow>
        <capsuleGeometry args={[0.26, 0.75, 8, 24]} />
        <meshPhysicalMaterial color={color} metalness={0.15} roughness={0.28} clearcoat={1} clearcoatRoughness={0.08} />
      </mesh>
      {/* tank cap */}
      <mesh position={[-0.28, 1.52, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.03, 16]} />
        <meshStandardMaterial color="#c9c7c2" metalness={1} roughness={0.25} />
      </mesh>

      {/* seat + cowl */}
      <mesh position={[0.85, 1.18, 0]} castShadow>
        <boxGeometry args={[0.85, 0.13, 0.38]} />
        <meshStandardMaterial color="#121210" roughness={0.85} />
      </mesh>
      <mesh position={[1.35, 1.22, 0]} rotation={[0, 0, -0.15]} castShadow>
        <sphereGeometry args={[0.24, 24, 16]} />
        <meshPhysicalMaterial color={color} metalness={0.15} roughness={0.3} clearcoat={1} clearcoatRoughness={0.1} />
      </mesh>

      {/* engine block + fins */}
      <mesh position={[-0.1, 0.68, 0]} castShadow>
        <boxGeometry args={[0.62, 0.42, 0.44]} />
        <meshStandardMaterial color="#33332f" metalness={0.7} roughness={0.45} />
      </mesh>
      {[0.58, 0.68, 0.78].map((y) => (
        <mesh key={y} position={[-0.1, y, 0]}>
          <boxGeometry args={[0.66, 0.025, 0.48]} />
          <meshStandardMaterial color="#1a1a18" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}
      {/* radiator cover */}
      <mesh position={[-0.75, 0.95, 0]} castShadow>
        <boxGeometry args={[0.1, 0.34, 0.4]} />
        <meshStandardMaterial color="#121210" metalness={0.4} roughness={0.5} />
      </mesh>

      {/* handlebar + mirrors */}
      <mesh position={[-1.28, 1.52, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.022, 0.022, 0.68, 12]} />
        <meshStandardMaterial color="#1a1a18" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[-1.28, 1.62, 0.28]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.012, 0.012, 0.22, 8]} />
        <meshStandardMaterial color="#2a2a28" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[-1.24, 1.74, 0.32]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#0c0c0b" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* headlamp housing + lens + DRL ring */}
      <mesh position={[-1.62, 1.22, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.19, 0.16, 0.18, 24]} />
        <meshStandardMaterial color="#121210" metalness={0.6} roughness={0.35} />
      </mesh>
      <mesh position={[-1.72, 1.22, 0]} rotation={[0, 0, Math.PI / 2]}>
        <sphereGeometry args={[0.155, 24, 24, 0, Math.PI * 2, 0, 1.1]} />
        <meshStandardMaterial color="#fff6d6" emissive="#ffe9a8" emissiveIntensity={1.2} roughness={0.2} />
      </mesh>
      <mesh position={[-1.73, 1.22, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.155, 0.012, 10, 40]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.6} />
      </mesh>

      {/* exhaust */}
      <mesh position={[0.1, 0.52, 0.24]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.045, 0.045, 1.6, 12]} />
        <meshStandardMaterial color="#8f8d89" metalness={0.95} roughness={0.3} />
      </mesh>
      <mesh
        position={exhaustHigh ? [0.7, 0.95, 0.26] : [0.9, 0.5, 0.26]}
        rotation={[0, 0, exhaustHigh ? -0.5 : Math.PI / 2]}
        castShadow
      >
        <capsuleGeometry args={[0.1, 0.7, 8, 16]} />
        <meshStandardMaterial color="#c9c7c2" metalness={0.95} roughness={0.22} />
      </mesh>

      {/* rear fender + tail light */}
      <mesh position={[1.55, 1.0, 0]} rotation={[0, 0, 0.5]}>
        <torusGeometry args={[0.55, 0.045, 10, 24, 1.1]} />
        <meshPhysicalMaterial color={color} metalness={0.2} roughness={0.3} clearcoat={1} />
      </mesh>
      <mesh position={[1.62, 1.12, 0]}>
        <boxGeometry args={[0.16, 0.05, 0.12]} />
        <meshStandardMaterial color="#ff2211" emissive="#ff2211" emissiveIntensity={1.4} />
      </mesh>
    </group>
  );
}

export default function Viewer3D({ warna, exhaustHigh }: { warna: string; exhaustHigh: boolean }) {
  const [auto, setAuto] = useState(true);
  const [night, setNight] = useState(false);
  return (
    <div className="border border-line bg-coal">
      <div className="flex items-center justify-between px-3 py-2 font-mono text-[11px] text-mutedsteel">
        <span>MODE 3D — FOTOREAL PROCEDURAL (DAGGER READY → GLB)</span>
        <div className="flex gap-2">
          <button onClick={() => setNight((v) => !v)} className="border border-line px-2 py-1 hover:text-steel">
            {night ? "MODE SIANG" : "MODE MALAM"}
          </button>
          <button onClick={() => setAuto((v) => !v)} className="border border-line px-2 py-1 hover:text-steel">
            {auto ? "STOP ROTASI" : "AUTO ROTASI"}
          </button>
        </div>
      </div>
      <div className="h-[440px]">
        <Canvas shadows camera={{ position: [4.2, 2.1, 4.2], fov: 40 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <color attach="background" args={[night ? "#060607" : "#0c0c0b"]} />
            <fog attach="fog" args={[night ? "#060607" : "#0c0c0b", 9, 18]} />
            <ambientLight intensity={night ? 0.15 : 0.55} />
            <directionalLight position={[5, 6, 4]} intensity={night ? 0.4 : 1.6} castShadow shadow-mapSize={[2048, 2048]} />
            <directionalLight position={[-5, 3, -4]} intensity={0.5} color="#cfe0ff" />
            <spotLight position={[-1.9, 1.4, 0]} angle={0.5} penumbra={0.6} intensity={night ? 8 : 0} color="#ffe9a8" />
            <BikeModel color={warna} exhaustHigh={exhaustHigh} auto={auto} />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
              <circleGeometry args={[4.5, 48]} />
              <meshStandardMaterial color={night ? "#080808" : "#101010"} roughness={0.9} metalness={0.1} />
            </mesh>
            <ContactShadows position={[0, 0.01, 0]} opacity={0.7} scale={10} blur={2.4} />
            <Environment preset="city" />
            <OrbitControls autoRotate={false} enablePan={false} minDistance={2.6} maxDistance={9} maxPolarAngle={Math.PI / 2.05} />
          </Suspense>
        </Canvas>
      </div>
      <p className="px-3 py-2 font-mono text-[11px] text-mutedsteel">
        Drag untuk putar 360° • Scroll untuk zoom • Mode malam untuk uji DRL. Untuk model scan asli, taruh .glb di /public/3d/ per threeDAssetId.
      </p>
    </div>
  );
}

export type { };
