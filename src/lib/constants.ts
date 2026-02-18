// Images - all Unsplash, swap with your own later
const unsplash = (id: string, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const SITE = {
  name: "PTP Media",
  tagline: "Drone videography & photography",
  email: "hello@ptpmedia.com",
  instagram: "@ptpmedia",
  location: "Based in Sri Lanka. Available across South and Southeast Asia.",
};

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Perspective", href: "#perspective" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  tagline: "Add Perspective",
  subtitle: "Aerial cinematography & photography",
  cta: "Discover More",
  image: unsplash("1507525428034-b723cf961d3e"), // Tropical aerial coastline
};

export const ABOUT = {
  heading: "About",
  bio: "I'm a drone pilot and cinematographer currently based in Sri Lanka. I've spent years capturing properties, landscapes, and experiences from angles most people never see. I work on events and film sets to add a unique perspective but also with hotels and resorts who want visuals that make people book.",
  image: unsplash("1544551763-46a013bb70d5"), // Atmospheric aerial landscape
};

export const PHILOSOPHY = {
  heading: "Philosophy",
  text: "Images tell stories. Whether photos of an event, a real estate listing, that beach side cafe, or a special activity. And a single aerial shot can reveal what ground-level photography never will — the scale of a property, the curve of a coastline, the relationship between a building and its surroundings. I believe in minimal, intentional work. One great shot is worth more than a hundred average ones.",
  image: unsplash("1470071459604-3b5ec3a7fe05"), // Cinematic misty aerial
};

export const PERSPECTIVES = [
  {
    title: "Hospitality",
    description:
      "Show guests what awaits before they arrive. One aerial shot captures the full experience — pool, grounds, coastline — in a way no lobby photo ever could.",
    // Aerial view of tropical resort with pools and beach
    image: unsplash("1770185998570-db739db7af47"),
  },
  {
    title: "Real Estate",
    description:
      "Give buyers the full picture. Aerial photography reveals a property's true scale, its surroundings, and its potential — the perspective that closes deals.",
    // Aerial view of house with pool surrounded by trees
    image: unsplash("1635111057505-3b7dcc2b72fb"),
  },
  {
    title: "Nature",
    description:
      "Coastlines, mountains, jungles — landscapes that deserve to be seen the way they were meant to be. From above.",
    image: "/videos/Sri Lanka Train.mp4",
    mobileImage: "/images/nature.jpeg",
    poster: "/images/hero poster.png",
  },
  {
    title: "Events",
    description:
      "Weddings, festivals, gatherings. Aerial coverage turns a moment into a memory that captures the full scale of the occasion.",
    // Aerial drone shot of outdoor concert with crowd
    image: unsplash("1748958342433-62a2e656ba9d"),
  },
  {
    title: "Activities",
    description:
      "Surfing, diving, hiking — action looks different from 100 meters up. The kind of perspective that makes people want to be there.",
    // Aerial drone view of surfers in ocean waves
    image: "/videos/activities_surf drone shot.mp4",
    mobileImage: unsplash("1595586246500-2d8aa380b911"),
  },
];

export const CONTACT = {
  heading: "Let's add perspective.",
  subtitle:
    "Have a property, project, or idea? I'd love to hear about it.",
  ctaText: "Get In Touch",
  mailtoSubject: "Drone Footage Inquiry",
  name: "Konstantin Kaschub",
  email: "kons_k@hotmail.de",
  whatsapp: "+34611616916",
};
