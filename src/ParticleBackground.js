// src/components/ParticleBackground.js
import { useEffect } from "react";
import { tsParticles } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticleBackground = () => {
  useEffect(() => {
    loadLinksPreset(tsParticles).then(() => {
      tsParticles.load("tsparticles", {
        preset: "links",
        background: {
          color: "#000000",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
        },
      });
    });
  }, []);

  return <div id="tsparticles" />;
};

export default ParticleBackground;
