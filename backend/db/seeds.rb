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

Venue.create([
    {
      name: "Sarova",
      city: "Nairobi",
      image_link: "www.sarova.com"
      
    },

    {
        name: "Bomas",
        city: "Nairobi",
        image_link: "www.bomas.com"
        
      },

      {
        name: "Westside",
        city: "Nakuru",
        image_link: "www.westside.com"
        
      }

])

puts "✅ Done seeding!"