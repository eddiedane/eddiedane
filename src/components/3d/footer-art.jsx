'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import Model from '@/components/3d/model';
import { cn } from '@/lib/utils';

export default function FooterArt({ className = '' }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 5000);
  }, []);

  return (
    visible && (
      <Canvas
        id='footer-art-canvas'
        gl={{ antialias: true }}
        camera={{ position: [20, 0, 0], fov: 5, near: 10, far: 200 }}
        className={cn(className)}
      >
        <ambientLight intensity={1.5} />
        <Float speed={2} rotationIntensity={1} floatIntensity={0.5} rotation={[0, -0.3, 0]}>
          <Model src='/3d/gopher/scene.gltf' position={[-5, 0.15, 0]} />
        </Float>
      </Canvas>
    )
  );
}
