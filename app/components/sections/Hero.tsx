"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Html, Environment, Float, Stars, MeshTransmissionMaterial, Stage,
} from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import XPButton from "../ui/XPButton";

/* ---------- particles (lightweight) ---------- */
function Particles({ count = 80, type = "sakura" as "sakura" | "speed" }) {
  const ref = useRef<THREE.Points>(null!);
  const pos = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      a[i*3+0] = (Math.random()-0.5) * 22;
      a[i*3+1] = Math.random() * 12 + 2;
      a[i*3+2] = (Math.random()-0.5) * 22;
    }
    return a;
  }, [count]);

  useFrame((_, d) => {
    const pts = ref.current; if (!pts) return;
    const arr = pts.geometry.attributes.position.array as Float32Array;
    for (let i=0;i<count;i++){
      const y = i*3+1;
      arr[y] -= type==="sakura" ? 2.2*d : 7*d;
      if (arr[y] < -2) arr[y] = Math.random()*12 + 8;
    }
    pts.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={pos} count={pos.length/3} itemSize={3}/>
      </bufferGeometry>
      <pointsMaterial size={type==="sakura"?0.06:0.05} color={type==="sakura"?"#ff9ae9":"#9ffff2"} transparent opacity={0.85} depthWrite={false}/>
    </points>
  );
}

/* ---------- voxel ---------- */
function Voxel({ p, c }: { p: [number,number,number]; c: string }) {
  const m = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    m.current.position.y = p[1] + Math.sin(t*1.2 + p[0]) * 0.22;
    m.current.rotation.y += 0.003;
  });
  const mat = useMemo(() => new THREE.MeshToonMaterial({ color: c, gradientMap: null }), [c]);
  return (
    <Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.5}>
      <mesh ref={m} position={p} castShadow>
        <boxGeometry args={[1.2,1.2,1.2]} />
        <primitive object={mat} />
      </mesh>
    </Float>
  );
}

function VoxelCluster(){
  const palette = ["#46e289","#72ffa8","#34d399","#a7f3d0","#22c55e"];
  const points: [number,number,number][] = [
    [-2.1,1.2,0.4], [-0.8,1.6,-0.7], [0.7,1.1,0.8], [1.9,1.4,-0.5], [0.1,0.45,0.2]
  ];
  return <>{points.map((p,i)=><Voxel key={i} p={p} c={palette[i%palette.length]} />)}</>;
}

/* ---------- hero ---------- */
export default function HeroAnime(){
  const [ready, setReady] = useState(false);
  useEffect(()=>{ const t=setTimeout(()=>setReady(true), 1200); return ()=>clearTimeout(t); },[]);
  if(!ready) return <div className="h-[92vh] bg-[#0b0f1b]" />;

  return (
    <motion.section
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.1 }}
      className="relative h-[92vh] min-h-[720px] overflow-hidden hero-vignette"
    >
      {/* subtle starfield/gradient bg for contrast */}
      <div className="absolute inset-0 bg-[#0b0f1b]" />
      <div className="absolute inset-0 pixel-grid opacity-25" />

      {/* continuous render for silky motion */}
      <Suspense fallback={<div className="h-full w-full bg-[#0b0f1b]" />}>
        <Canvas
          shadows
          frameloop="always"       // ← continuous animation
          dpr={[1, 1.8]}
          camera={{ position:[0,2.5,8], fov:50 }}
          className="absolute inset-0"
        >
          <ambientLight intensity={0.35}/>
          <directionalLight position={[5,8,5]} intensity={1.1} castShadow />
          <Environment preset="city"/>

          <Stage intensity={0.28} environment={null}>
            {/* glass base (lighter to avoid glare behind text) */}
            <mesh rotation={[-Math.PI/2,0,0]} receiveShadow>
              <circleGeometry args={[6, 48]} />
              <MeshTransmissionMaterial thickness={1.0} transmission={0.75} roughness={0.18} ior={1.08}/>
            </mesh>
            <VoxelCluster/>
          </Stage>

          <Particles count={70} type="sakura"/>
          <Particles count={60} type="speed"/>
          <Stars radius={38} depth={18} count={700} factor={2.2} fade />

          {/* overlay UI */}
<Html fullscreen className="hero-html">
              {/* faint ellipse under text to guarantee legibility */}
            <div className="glass-plate" />
            <div className="relative z-10 h-full w-full grid place-items-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="text-center max-w-3xl px-6"
              >
                <h1 className="pointer-events-auto text-outline text-white text-4xl md:text-6xl font-[family:var(--header-font)] leading-tight">
                  <span className="inline-block bg-clip-text text-transparent text-white"
                        style={{ backgroundImage: "linear-gradient(180deg,#a7f3d0,#22d3ee)" }}>
                    Anime Minecraft
                  </span>{" "}
                  Magnetic Blocks
                </h1>
                <p className="pointer-events-auto mt-3 text-white/90 text-lg">
                  Voxel worlds with anime soul — sakura winds, neon nights, and toon-shaded builds.
                </p>
                <div className="pointer-events-auto mt-8 flex items-center justify-center gap-3">
                  <XPButton href="/products">🟩 Start Building</XPButton>
                  <a className="btn btn-gold" href="#characters">Meet the Heroes</a>
                </div>
                <div className="mt-6 text-sm text-white/70">Scroll ↓ to enter the world</div>
              </motion.div>
            </div>
          </Html>
        </Canvas>
      </Suspense>
    </motion.section>
  );
}
