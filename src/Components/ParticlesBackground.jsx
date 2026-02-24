import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: 1 },
        background: {
          color: "transparent",
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              area: 1000,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          links: {
            enable: true,
            color: "#d9e5ff",
            distance: 170,
            opacity: 0.35,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
          size: {
            value: { min: 1, max: 2 },
          },
          opacity: {
            value: 0.75,
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 220,
              links: {
                opacity: 0.9,
              },
            },
            push: {
              quantity: 2,
            },
          },
        },
        detectRetina: true,
      }}
      className="pointer-events-none"
    />
  );
}
