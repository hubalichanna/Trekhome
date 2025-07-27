const sampleListings = [
  {
      title: "Luxury Beachfront Villa in Gwadar",
      description:
        "Escape to this stunning beachfront villa in Gwadar with panoramic views of the Arabian Sea. Perfect for a luxurious getaway.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFraXN0YW4lMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 2500,
      location: "Gwadar",
      country: "Pakistan",
    },
    {
      title: "Modern Apartment in Islamabad",
      description:
        "Stay in the heart of Pakistan's capital in this stylish modern apartment. Perfect for business travelers and tourists alike.",
      image:  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXNsYW1hYmFkJTIwYXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1200,
      location: "Islamabad",
      country: "Pakistan",
    },
    {
      title: "Secluded Beach House in Kund Malir",
      description:
        "Escape to a secluded beach house on Balochistan's stunning Kund Malir beach. Relax and unwind in privacy.",
      image:  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a3VuZCUyMG1hbGlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1300,
      location: "Kund Malir",
      country: "Pakistan",
    },

  {
    title: "Serene Cottage in Murree Hills",
    description: "Escape to the lush green hills of Murree in this cozy cottage surrounded by pine trees and cool mountain air.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Murree",
    country: "Pakistan",
  },
  {
    title: "Modern Loft in Islamabad",
    description: "Enjoy a sleek and stylish loft in the capital city of Pakistan, near key cultural and business centers.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Islamabad",
    country: "Pakistan",
  },
  {
    title: "Mountain Retreat in Hunza Valley",
    description: "Unwind in the tranquil beauty of Hunza, surrounded by snow-capped peaks and breathtaking valleys.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Hunza",
    country: "Pakistan",
  },
  {
    title: "Historic Haveli in Lahore",
    description: "Experience the grandeur of Mughal architecture in a beautifully restored haveli in Lahore's old city.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Lahore",
    country: "Pakistan",
  },
  {
    title: "Treehouse Escape in Swat Valley",
    description: "Reconnect with nature in this unique treetop retreat nestled in the forests of Swat.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Swat",
    country: "Pakistan",
  },
  {
    title: "Beachfront Paradise in Gwadar",
    description: "Enjoy the peaceful coastline and blue waters of Gwadar in this beachfront property.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Gwadar",
    country: "Pakistan",
  },
  {
    title: "Lakeside Cabin in Skardu",
    description: "Stay near Upper Kachura Lake in a rustic wooden cabin, ideal for stargazing and serenity.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Skardu",
    country: "Pakistan",
  },
  {
    title: "Luxury Penthouse in Karachi",
    description: "Overlook the Arabian Sea from this high-rise penthouse in the heart of Karachi’s skyline.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Karachi",
    country: "Pakistan",
  },
  {
    title: "Ski Chalet in Malam Jabba",
    description: "Ski right from your door in this cozy chalet located at the Malam Jabba ski resort.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Malam Jabba",
    country: "Pakistan",
  },
  {
    title: "Desert Retreat in Cholistan",
    description: "Experience traditional desert life with a luxurious twist in the heart of the Cholistan Desert.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Cholistan",
    country: "Pakistan",
  }
];

module.exports = { data: sampleListings };
