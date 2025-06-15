// src/components/ParticleBackground.js
import { useEffect } from "react";
import { tsParticles } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticleBackground = () => {
  useEffect(() => {
    const screenWidth = window.innerWidth;

    const particleOptions = {
      preset: "links",
      background: {
        color: "#000000",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        number: {
          value: screenWidth < 768 ? 30 : 60, // fewer particles on small screens
        },
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: screenWidth < 768 ? 100 : 150, // shorter link distance on small screens
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
        },
      },
    };

    loadLinksPreset(tsParticles).then(() => {
      tsParticles.load("tsparticles", particleOptions);
    });
  }, []);

  return <div id="tsparticles" />;
};

export default ParticleBackground;
