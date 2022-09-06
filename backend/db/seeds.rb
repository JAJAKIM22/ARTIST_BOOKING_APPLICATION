puts "🌱 Seeding messages..."

Artist.create([
  {
    name: "Sautisol",
    city: "Nairobi",
    image_link: "www.sautisol.com",
    genres: "Sol"
  },
  
  {
    name: "NYASHINSKI",
    city: "Nakuru",
    image_link: "www.nyashinski.com",
    genres: "Rap"
  },

  {
    name: "Sailors",
    city: "Kiambu",
    image_link: "www.sailors.com",
    genres: "Gengetone"
  }
])

puts "✅ Done seeding!"