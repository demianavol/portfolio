import { useEffect, useRef } from "react";
import * as THREE from "three";

type InteractivePortraitProps = {
  imageSrc: string;
};

export function InteractivePortrait({ imageSrc }: InteractivePortraitProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const pointer = new THREE.Vector2(0, 0);
    const target = new THREE.Vector2(0, 0);
    const clock = new THREE.Clock();

    const texture = new THREE.TextureLoader().load(imageSrc);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;

    const geometry = new THREE.PlaneGeometry(2.55, 3.25, 48, 48);
    const position = geometry.attributes.position as THREE.BufferAttribute;
    for (let index = 0; index < position.count; index += 1) {
      const x = position.getX(index);
      const y = position.getY(index);
      const normalizedX = x / 1.28;
      const normalizedY = y / 1.62;
      const depth =
        0.16 * Math.exp(-(normalizedX * normalizedX * 1.25 + normalizedY * normalizedY * 0.85));
      const edgeCurve = -0.1 * Math.abs(normalizedX);
      position.setZ(index, depth + edgeCurve);
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();

    const portrait = new THREE.Mesh(
      geometry,
      new THREE.MeshStandardMaterial({
        map: texture,
        metalness: 0.05,
        roughness: 0.48,
        emissive: new THREE.Color("#0a1209"),
        emissiveIntensity: 0.2,
      }),
    );
    portrait.position.y = -0.08;
    scene.add(portrait);

    const frame = new THREE.Mesh(
      new THREE.RingGeometry(1.76, 1.84, 96),
      new THREE.MeshBasicMaterial({
        color: "#c6ff57",
        transparent: true,
        opacity: 0.32,
      }),
    );
    frame.scale.y = 1.25;
    frame.position.z = -0.08;
    scene.add(frame);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.85 + Math.random() * 0.95;
      particlePositions[index * 3] = Math.cos(angle) * radius;
      particlePositions[index * 3 + 1] = Math.sin(angle) * radius * 0.78;
      particlePositions[index * 3 + 2] = -0.35 + Math.random() * 0.7;
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: "#c6ff57",
        size: 0.018,
        transparent: true,
        opacity: 0.58,
      }),
    );
    scene.add(particles);

    const keyLight = new THREE.PointLight("#c6ff57", 1.6, 8);
    keyLight.position.set(1.8, 1.8, 3.5);
    scene.add(keyLight);
    const fillLight = new THREE.PointLight("#7de7ff", 1.2, 8);
    fillLight.position.set(-2.4, -0.8, 3.2);
    scene.add(fillLight);
    scene.add(new THREE.AmbientLight("#ffffff", 1.55));

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const handlePointerLeave = () => {
      target.set(0, 0);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    host.addEventListener("pointermove", handlePointerMove);
    host.addEventListener("pointerleave", handlePointerLeave);
    resize();

    let frameId = 0;
    const render = () => {
      const time = clock.getElapsedTime();
      pointer.lerp(target, 0.08);

      portrait.rotation.y = pointer.x * 0.22;
      portrait.rotation.x = pointer.y * 0.12;
      portrait.position.z = Math.sin(time * 1.2) * 0.035;

      frame.rotation.z = time * 0.12;
      particles.rotation.z = -time * 0.045;
      particles.rotation.y = pointer.x * 0.12;

      keyLight.position.x = 1.8 + pointer.x * 0.9;
      keyLight.position.y = 1.8 + pointer.y * 0.5;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerleave", handlePointerLeave);
      renderer.dispose();
      texture.dispose();
      geometry.dispose();
      frame.geometry.dispose();
      particlesGeometry.dispose();
      host.removeChild(renderer.domElement);
    };
  }, [imageSrc]);

  return <div className="portrait-canvas" ref={hostRef} aria-hidden="true" />;
}
