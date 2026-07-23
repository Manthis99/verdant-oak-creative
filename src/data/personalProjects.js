export const personalProjects = [
  {
    id: "tpu-rc-car",
    title: "A 3D-Printed RC Car, Designed from Scratch",
    descriptor: "Mechanical design / physical prototyping",
    whatItDoes: "A functional RC car designed and modeled from scratch, with its custom chassis, suspension, steering, and electronics mounts 3D-printed in TPU around a fully printed drivetrain.",
    learned: "This project changed how I think about engineering. I stopped looking for one “right” design and started making thoughtful tradeoffs between strength, weight, flexibility, precision, print orientation, and durability. Every broken part exposed something I could not learn on paper; the car, and my understanding of mechanical design, improved through building, testing, and revising it again and again.",
    why: "I'd spent years 3D-printing other people's designs, but larger projects kept demanding custom parts. I wanted to learn 3D modeling without the pressure of getting everything right, so I returned to a childhood hobby and decided to build an RC car. Starting with a fully printed drivetrain let me focus on the chassis, mounts, wishbones, suspension, servos, and electronics—that meant dozens of hours in CAD, a lot of caliper work, and plenty of reprints after forgetting a measurement. It taught me a hard skill through a genuinely fun project, and the finished car became a nostalgic gift for my little brothers.",
    facts: ["Designed from scratch", "3D-modeled + printed", "Functional prototype"],
    visual: {
      kicker: "Prototype / 01",
      detail: "From digital model to moving machine",
      steps: "DESIGN  /  PRINT  /  TEST  /  BREAK"
    },
    images: [
      "/images/projects/rc-car/rc-car-finished.webp",
      "/images/projects/rc-car/rc-car-top-down.webp",
      "/images/projects/rc-car/rc-car-printed-parts.webp"
    ]
  },
  {
    id: "diy-pendant-light",
    title: "Lamina Minor",
    descriptor: "Lighting design / metal fabrication",
    whatItDoes: "A hand-built pendant light combining a curved aluminum reflector, warm linear LED source, and smart-home controls to cast soft light over a dining table.",
    learned: "I learned how aluminum deflects, how to polish it, and how reflector radius and distance affect diffusion and soften the light. Choosing the source taught me to evaluate LED strips by CRI, CCT, density, usable output after diffusion, and smart-home compatibility—not marketing claims—so the finished light feels natural and architectural.",
    why: "To make the dining table feel warmer and more inviting while learning how geometry and material shape the quality of light.",
    facts: ["Hand-formed aluminum", "Custom LED fixture", "Smart-home integrated"],
    images: [
      "/images/projects/lamina-minor/lamina-minor-installed.webp",
      "/images/projects/lamina-minor/lamina-minor-room.webp",
      "/images/projects/lamina-minor/lamina-minor-detail.webp"
    ]
  },
  {
    id: "clive",
    title: "Clive",
    descriptor: "AI product / voice interface / hardware",
    whatItDoes: "A voice-first AI assistant that remembers projects, plans work, retrieves knowledge, drafts messages, and coordinates tools.",
    learned: "The product lives in the surrounding system: memory, latency, voice, tool boundaries, and knowing when not to interrupt.",
    why: "To explore an AI that carries context forward and feels like a calm teammate instead of another chat window.",
    facts: ["Voice interface", "Persistent project memory", "Custom hardware"],
    images: [
      "/images/projects/IMG_6417.jpg",
      "/images/projects/IMG_7193.PNG"
    ]
  },
  {
    id: "phoem-clock",
    title: "Phoem Clock",
    link: "https://github.com/Manthis99/phoem_clock",
    descriptor: "Generative poetry / embedded hardware",
    whatItDoes: "A clock that tells time through a new AI-generated poem every minute, using either cloud or local models.",
    learned: "Embedded hardware, local LLM integration, and the prompt discipline needed for consistently good creative output.",
    why: "To make poetry part of everyday life by turning checking the time into a tiny reading ritual.",
    facts: ["New poem every minute", "Cloud or local AI", "Raspberry Pi build"],
    imageFit: "contain",
    imageBackground: "#f4f1e9",
    images: [
      "/images/projects/phoem manual.jpg",
      "/images/projects/phoem design.jpg",
      "/images/projects/phoem_dev_2408.jpg",
      "/images/projects/phoem_dev_2409.jpg"
    ]
  },
  {
    id: "tars-ai",
    title: "TARS AI",
    link: "https://github.com/TARS-AI-Community/TARS-AI",
    descriptor: "Open-source robotics",
    whatItDoes: "An open-source recreation of Interstellar's TARS with mobility, conversation, smart-home control, and agent tools.",
    learned: "Microelectronics, speech systems, 3D modeling, printing, and how to collaborate inside a large shared codebase.",
    why: "A fun excuse to join an ambitious open-source community and build a fictional machine in the real world.",
    facts: ["Community-built", "Mobile + conversational", "Smart-home control"],
    images: [
      "/images/projects/IMG_7193.PNG",
      "/images/projects/01JF3J7AVDGDET9ZJH0FD5DXG6-hi-res-branded-.jpg",
      "/images/projects/IMG_6417.jpg"
    ]
  },
  {
    id: "one-collective",
    title: "One Collective Website",
    link: "https://content.onecollective.org/",
    descriptor: "Web strategy / design / development",
    whatItDoes: "A trust-first nonprofit site organizing stories, giving, resources, and clear paths to serve, partner, or donate.",
    why: "To close the gap between the credibility of One Collective's field work and what its old website communicated.",
    learned: "How messaging, decision paths, video performance, CMS design, and reusable components work together to build trust.",
    facts: ["Strategy + copy", "Custom CMS", "Video-led storytelling"],
    imageFit: "contain",
    imageBackground: "#171717",
    images: ["/images/projects/one_collective.webp", "https://images.unsplash.com/photo-1555529902-5261145633bf?w=800&q=80"]
  },
  {
    id: "outerworlds-website",
    title: "Outerworlds Website",
    link: "https://outerworlds.michaelproctor.co/",
    descriptor: "Web design / development",
    whatItDoes: "A promotional site for a Minecraft creative server, designed around its world, tools, and builder culture.",
    learned: "How to pair cinematic art direction with responsive React and a fast, practical frontend.",
    why: "To turn a niche technical project into a distinctive place people could understand and want to join.",
    facts: ["Creative direction", "React development", "Custom world showcase"],
    imageFit: "contain",
    imageBackground: "#11110f",
    images: [
      "/images/projects/outerworlds-1.jpg",
      "/images/projects/outerworlds-2.jpg"
    ]
  },
  {
    id: "verdant-oak-weddings",
    title: "Verdant Oak Weddings",
    link: "https://wedding.michaelproctor.co/",
    descriptor: "Web design / guest experience",
    whatItDoes: "A bespoke guest hub combining our story, schedule, registry, travel details, and event information.",
    learned: "How careful hierarchy, typography, and interaction design can make a lot of information feel simple.",
    why: "To make a deeply personal wedding experience instead of settling for a generic event template.",
    facts: ["Story + logistics", "Mobile-first", "Built without a template"],
    imageFit: "contain",
    imageBackground: "#f5f1e8",
    images: [
      "/images/projects/Verdant oak website.jpg",
      "/images/projects/Verdant oak website 2.jpg",
      "/images/projects/Verdant oak website 3.jpg"
    ]
  }
];
