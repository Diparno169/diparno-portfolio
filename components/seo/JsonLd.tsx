export default function JsonLd() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Diparno Chatterjee",
      url: "https://diparno-portfolio.vercel.app",
      image: "https://diparno-portfolio.vercel.app/images/og-image.png",
      jobTitle: "Full Stack Developer",
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "PHP",
        "MySQL",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS"
      ]
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    );
  }