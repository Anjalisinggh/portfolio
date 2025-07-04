// src/components/ProjectsSection.js
import React from 'react';
import HoverCard from './HoverCard';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Projects xyz</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 max-w-7xl mx-auto">
        <HoverCard
          image="/vibra.jpg"
          title="Vibra"
          subtitle="Full-stack / Music"
          shortText="Hover to explore"
          longText="A mood-based music app that allows users to share anonymous feelings."
          buttonLabel="View Project"
          onButtonClick={() => window.open("https://vibra-mu.vercel.app/", "_blank")}
        />

        <HoverCard
          image="/kaizen.jpg"
          title="Kaizen Arts"
          subtitle="Android / AR"
          shortText="Hover to explore"
          longText="AR-based app recommending earrings based on user's face shape."
          buttonLabel="Download APK"
          onButtonClick={() => window.open("/kaizenArts.apk", "_blank")}
        />

        <HoverCard
          image="/ecosnap.jpg"
          title="Eco Snap"
          subtitle="React / AI"
          shortText="Hover to explore"
          longText="Plant leaf disease detection using Hugging Face's AI model."
          buttonLabel="View Project"
          onButtonClick={() => window.open("https://ecoosnap.vercel.app/", "_blank")}
        />

        <HoverCard
          image="/skyteller.png"
          title="Sky Teller"
          subtitle="React / Weather"
          shortText="Hover to explore"
          longText="Real-time weather updates with animated, aesthetic visuals."
          buttonLabel="View Project"
          onButtonClick={() => window.open("https://sky-teller.vercel.app/", "_blank")}
        />

        <HoverCard
          image="/museek.jpg"
          title="Museek"
          subtitle="React / Music"
          shortText="Hover to explore"
          longText="Spotify-inspired emotion-based music player with themes."
          buttonLabel="View Project"
          onButtonClick={() => window.open("https://museek-ten.vercel.app/", "_blank")}
        />

        <HoverCard
          image="/safetrip.png"
          title="Safe Trip"
          subtitle="React / Maps"
          shortText="Hover to explore"
          longText="Safely navigate with route suggestions using real-time crime data."
          buttonLabel="View Project"
          onButtonClick={() => window.open("https://safetrip-neon.vercel.app/", "_blank")}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
