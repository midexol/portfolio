"use client";
import { useEffect, useRef } from 'react';

export default function BackgroundWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let time = 0;
    let animationFrameId: number;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      
      const lines = 20;
      
      // Draw fluid, topographical lines
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        // Dynamic opacity for depth
        const opacity = 0.02 + (i / lines) * 0.15;
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        
        // Spread lines vertically with some central bias
        const yOffset = (height / lines) * i + (Math.sin(i * 0.5) * 50);
        
        for (let x = 0; x <= width; x += 15) {
          // Complex organic wave math
          const y = yOffset 
            + Math.sin(x * 0.003 + time + i * 0.1) * 80 
            + Math.sin(x * 0.008 - time * 0.5 + i * 0.2) * 40
            + Math.cos(x * 0.001 + time * 0.2) * 60;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      time += 0.005;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1, // Set to -1 to be firmly behind all content
        opacity: 0.5,
      }}
    />
  );
}
