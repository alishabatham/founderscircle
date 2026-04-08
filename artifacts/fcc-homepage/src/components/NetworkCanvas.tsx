import { useRef, useEffect, useCallback } from "react";

interface Node3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  isCore: boolean;
  pulse: number;
  pulseSpeed: number;
  color: string;
}

const NODE_COLORS = [
  "rgba(100, 180, 255, 0.7)",
  "rgba(130, 120, 255, 0.7)",
  "rgba(80, 200, 220, 0.7)",
  "rgba(160, 120, 255, 0.7)",
  "rgba(80, 180, 200, 0.7)",
];

function createNodes(count: number): Node3D[] {
  const nodes: Node3D[] = [];

  nodes.push({
    x: 0, y: 0, z: 0,
    vx: 0, vy: 0, vz: 0,
    radius: 7,
    isCore: true,
    pulse: 0,
    pulseSpeed: 0.018,
    color: "rgba(0, 220, 200, 1)",
  });

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 120 + Math.random() * 180;

    nodes.push({
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.sin(phi) * Math.sin(theta),
      z: r * Math.cos(phi),
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      vz: (Math.random() - 0.5) * 0.12,
      radius: 2 + Math.random() * 2,
      isCore: false,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.008 + Math.random() * 0.012,
      color: NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)],
    });
  }

  return nodes;
}

function project(
  x: number, y: number, z: number,
  cx: number, cy: number,
  fov: number,
  rotX: number, rotY: number
): [number, number, number] {
  const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
  const cosY = Math.cos(rotY), sinY = Math.sin(rotY);

  const x1 = x * cosY - z * sinY;
  const z1 = x * sinY + z * cosY;
  const y1 = y * cosX - z1 * sinX;
  const z2 = y * sinX + z1 * cosX;

  const depth = fov + z2;
  if (depth <= 0) return [cx, cy, 0];
  const scale = fov / depth;
  return [cx + x1 * scale, cy + y1 * scale, scale];
}

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rotRef = useRef({ x: 0.15, y: 0 });
  const animRef = useRef<number>(0);
  const nodesRef = useRef<Node3D[]>(createNodes(22));
  const timeRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);

    const MAX_DIST = 220;
    const FOV = 400;
    const BOUNDS = 280;

    function draw() {
      if (!canvas || !ctx) return;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      const cx = W / 2;
      const cy = H / 2;

      timeRef.current += 0.008;
      const t = timeRef.current;

      const targetRotX = 0.15 + mouseRef.current.y * 0.3;
      const targetRotY = mouseRef.current.x * 0.4;
      rotRef.current.x += (targetRotX - rotRef.current.x) * 0.04;
      rotRef.current.y += (targetRotY - rotRef.current.y) * 0.04;

      ctx.clearRect(0, 0, W, H);

      const nodes = nodesRef.current;

      nodes.forEach((node, i) => {
        if (node.isCore) return;
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;
        node.pulse += node.pulseSpeed;

        if (Math.abs(node.x) > BOUNDS) node.vx *= -1;
        if (Math.abs(node.y) > BOUNDS) node.vy *= -1;
        if (Math.abs(node.z) > BOUNDS) node.vz *= -1;
      });

      const projected = nodes.map(n =>
        project(n.x, n.y, n.z, cx, cy, FOV, rotRef.current.x, rotRef.current.y)
      );

      for (let i = 1; i < nodes.length; i++) {
        const [px1, py1, s1] = projected[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const [px2, py2, s2] = projected[j];
          const dx = px1 - px2, dy = py1 - py2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18 * Math.min(s1, s2) * 2.5;
            ctx.beginPath();
            ctx.moveTo(px1, py1);
            ctx.lineTo(px2, py2);
            ctx.strokeStyle = `rgba(80, 180, 220, ${Math.min(alpha, 0.22)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        const [cpx, cpy] = projected[0];
        const dx = px1 - cpx, dy = py1 - cpy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST * 1.4) {
          const alpha = (1 - dist / (MAX_DIST * 1.4)) * 0.25 * s1 * 2;
          ctx.beginPath();
          ctx.moveTo(px1, py1);
          ctx.lineTo(cpx, cpy);
          ctx.strokeStyle = `rgba(0, 200, 200, ${Math.min(alpha, 0.28)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      for (let i = nodes.length - 1; i >= 0; i--) {
        const node = nodes[i];
        const [px, py, scale] = projected[i];

        if (node.isCore) {
          const corePulse = Math.sin(t * 1.5) * 0.5 + 0.5;
          const outerR = 36 + corePulse * 8;
          const innerR = 18 + corePulse * 3;

          const glowOuter = ctx.createRadialGradient(px, py, 0, px, py, outerR);
          glowOuter.addColorStop(0, "rgba(0, 220, 200, 0.0)");
          glowOuter.addColorStop(0.3, "rgba(0, 200, 190, 0.04)");
          glowOuter.addColorStop(1, "rgba(0, 180, 180, 0)");
          ctx.beginPath();
          ctx.arc(px, py, outerR, 0, Math.PI * 2);
          ctx.fillStyle = glowOuter;
          ctx.fill();

          const glowInner = ctx.createRadialGradient(px, py, 0, px, py, innerR);
          glowInner.addColorStop(0, "rgba(0, 240, 220, 0.55)");
          glowInner.addColorStop(0.4, "rgba(0, 200, 200, 0.18)");
          glowInner.addColorStop(1, "rgba(0, 180, 200, 0)");
          ctx.beginPath();
          ctx.arc(px, py, innerR, 0, Math.PI * 2);
          ctx.fillStyle = glowInner;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px, py, 5 + corePulse * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(180, 255, 250, 0.95)";
          ctx.fill();

          const ringR = 60 + corePulse * 6;
          ctx.beginPath();
          ctx.arc(px, py, ringR, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 200, 200, ${0.04 + corePulse * 0.02})`;
          ctx.lineWidth = 1;
          ctx.stroke();

        } else {
          const pulse = Math.sin(node.pulse) * 0.5 + 0.5;
          const r = node.radius * scale * 1.4;
          const glow = ctx.createRadialGradient(px, py, 0, px, py, r * 3);
          glow.addColorStop(0, node.color.replace("0.7)", `${0.25 + pulse * 0.1})`));
          glow.addColorStop(1, "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(px, py, r * 3, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px, py, Math.max(r, 1), 0, Math.PI * 2);
          ctx.fillStyle = node.color.replace("0.7)", `${0.7 + pulse * 0.2})`);
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.85 }}
      data-testid="canvas-network"
    />
  );
}
