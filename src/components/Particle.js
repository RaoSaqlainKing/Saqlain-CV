import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent", // Keeps your CSS gradient background
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false, // Turn off lines for a "Star" look
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 0.5, // Slow movement like stars
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 160, // More stars
          },
          opacity: {
            value: { min: 0.1, max: 0.8 }, // Twinkling effect
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 3 }, // Different sized stars
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
