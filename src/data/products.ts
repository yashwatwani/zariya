const products = [
  {
    "id": "gold-bubble-letter-necklace",
    "name": "Gold Bubble Letter Necklace",
    "price": "$24",
    "description": "Trendy gold-plated stainless steel necklaces featuring chunky, balloon-style bubble letter pendants. A playful, modern statement piece perfect for adding a personalized touch to any outfit.",
    "image": "/products/NH10635801_1.jpg",
    "secondaryImage": "/products/ChatGPT Image Jun 30, 2025, 07_43_16 PM.png",
    "imageAlt": "Collection of gold bubble letter necklaces laid out on a satin background",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Pendant Size", "value": "Approx 1.5-2 cm" },
      { "label": "Chain Length", "value": "45-50 cm (Adjustable)" },
      { "label": "Style", "value": "Personalized, Modern, Playful" },
      { "label": "Occasion", "value": "Everyday Wear, Gifting, Casual" }
    ]
  },
  {
    "id": "pendant-1",
    "name": "Textured Heart Pendant Necklace",
    "price": "$79",
    "description": "A beautifully handcrafted heart-shaped pendant in warm-toned metal with an artisanal textured finish, suspended on a delicate chain. Perfect for adding a touch of understated romance to any look.",
    "image": "/products/1 Pair Casual Cute Classic Style Pentagram Heart Shape Plating Hollow Out 304 Stainless Steel Titanium Steel 18K Gold Plated Hoop Earrings.jpg",
    "secondaryImage": "",
    "imageAlt": "Textured Heart Pendant Necklace on satin background",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Pendant Size", "value": "Approx. 2 cm" },
      { "label": "Style", "value": "Romantic, Artisanal, Textured" },
      { "label": "Occasion", "value": "Anniversary, Gifting, Everyday Wear" }
    ]
  },
  {
    "id": "bee-earrings-1",
    "name": "Crystal Bee Dangle Earrings",
    "price": "$39",
    "description": "Charming bee-inspired dangle earrings featuring sparkling crystal studs and enamel honeybee motifs. Perfect for adding a playful yet elegant accent to any look.",
    "image": "/products/1 Pair Cute Pastoral Bee Inlay Zinc alloy Zircon Drop Earrings.jpg",
    "secondaryImage": "/products/NH11196760_4.jpg",
    "imageAlt": "Crystal Bee Dangle Earrings with rhinestones and enamel bee charms on satin fabric",
    "type": "Earrings",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Stone", "value": "Crystal, Zircon" },
      { "label": "Length", "value": "Approx. 4 cm drop" },
      { "label": "Style", "value": "Playful, Elegant, Pastoral" },
      { "label": "Occasion", "value": "Casual Outings, Parties, Summer Events" }
    ]
  },
  {
    "id": "goldfish-earrings-1",
    "name": "Gold Koi Fish Statement Earrings",
    "price": "$45",
    "description": "Striking gold-tone statement earrings in a graceful koi fish design with flowing fins. Lightweight yet bold, they are sure to make a splash at any event.",
    "image": "/products/1 Pair Cute Vintage Style Pastoral Round Asymmetrical Alloy Iron Zinc alloy Earrings.jpg",
    "secondaryImage": "",
    "imageAlt": "Gold koi fish statement earrings with flowing fin details",
    "type": "Earrings",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Length", "value": "Approx. 6 cm drop" },
      { "label": "Style", "value": "Statement, Vintage, Asymmetrical" },
      { "label": "Occasion", "value": "Festivals, Parties, Cultural Events" }
    ]
  },
  {
    "id": "skull-cross-chain-earring-1",
    "name": "Skull and Black Cross Double Chain Earrings",
    "price": "$29",
    "description": "A striking asymmetrical earring set featuring a silver skull stud, a black stone cross, and a coordinating ear cuff linked by delicate chains. Adds a rebellious and edgy vibe to any look.",
    "image": "/products/NH11180522_2.jpg",
    "secondaryImage": "/products/1 Pair Elegant Cute Geometric Cross Metal Drop Earrings.jpg",
    "imageAlt": "Skull and black cross chain earrings with silver ear cuff",
    "type": "Earrings",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Stone", "value": "Black Rhinestones" },
      { "label": "Length", "value": "Approx. 7 cm drop" },
      { "label": "Style", "value": "Edgy, Rebellious, Asymmetrical" },
      { "label": "Occasion", "value": "Concerts, Street Style, Night Outs" }
    ]
  },
  {
    "id": "heart-rhinestone-dangle-earrings-1",
    "name": "Heart-Shaped Rhinestone Dangle Earrings",
    "price": "$24",
    "description": "Elegant open-heart earrings with sparkling rhinestone tassels that sway gracefully, adding romance and glamour to any outfit.",
    "image": "/products/1 Pair Modern Style Shiny Tassel Heart Shape Hollow Out Inlay Alloy Copper Rhinestones Drop Earrings.jpg",
    "secondaryImage": "",
    "imageAlt": "Heart-shaped silver earrings with rhinestone tassel dangles",
    "type": "Earrings",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Stone", "value": "Rhinestones" },
      { "label": "Length", "value": "Approx. 6 cm drop" },
      { "label": "Style", "value": "Glamorous, Romantic, Tassel" },
      { "label": "Occasion", "value": "Parties, Date Nights, Special Events" }
    ]
  },
  {
    "id": "silver-sun-hoop-earrings-1",
    "name": "Silver Sun Face Hoop Earrings",
    "price": "$22",
    "description": "Eye-catching silver hoop earrings featuring detailed sun face charms that add a celestial and artistic touch to any outfit.",
    "image": "/products/1 Pair Simple Style Classic Style Solid Color Plating Titanium Steel Drop Earrings.jpg",
    "secondaryImage": "",
    "imageAlt": "Silver hoop earrings with sun face charms",
    "type": "Earrings",
    "specs": [
      { "label": "Material", "value": "Titanium Steel" },
      { "label": "Length", "value": "Approx. 3 cm drop" },
      { "label": "Style", "value": "Celestial, Artistic, Bohemian" },
      { "label": "Occasion", "value": "Festivals, Summer Parties, Casual Wear" }
    ]
  },
  {
    "id": "pastel-crystal-hoop-earrings-1",
    "name": "Pastel Crystal Double Hoop Earrings",
    "price": "$35",
    "description": "Elegant silver-tone hoops adorned with sparkling rhinestones and double pastel-colored crystal rings in shades of purple and blue. A perfect blend of modern glamour and playful color.",
    "image": "/products/NH10715537_6.jpg",
    "secondaryImage": "/products/1 Pair Sweet Classic Style Round Inlay Alloy Rhinestones Drop Earrings.jpg",
    "imageAlt": "Pastel crystal double hoop earrings with rhinestone accents",
    "type": "Earrings",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Stone", "value": "Rhinestones, Crystal" },
      { "label": "Diameter", "value": "Approx. 2.5 cm" },
      { "label": "Style", "value": "Glamorous, Playful, Romantic" },
      { "label": "Occasion", "value": "Weddings, Parties, Brunch" }
    ]
  },
  {
    "id": "gold-flower-hoop-earrings-1",
    "name": "Gold Flower Charm Hoop Earrings",
    "price": "$28",
    "description": "Chic gold-tone hoop earrings featuring playful puffy flower-shaped charms. These earrings blend a fun, youthful silhouette with a sleek polished finish, perfect for everyday wear or adding a whimsical touch to your outfit.",
    "image": "/products/1 Pair Sweet Simple Style Flower 304 Stainless Steel 18K Gold Plated Drop Earrings.jpg",
    "secondaryImage": "",
    "imageAlt": "Gold-tone hoop earrings with puffy flower-shaped charms",
    "type": "Earrings",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Length", "value": "Approx. 3 cm" },
      { "label": "Style", "value": "Whimsical, Youthful, Sweet" },
      { "label": "Occasion", "value": "Everyday Wear, Casual Outings" }
    ]
  },
  {
    "id": "gold-wave-hoop-earrings-1",
    "name": "Gold Wave Hoop Earrings",
    "price": "$32",
    "description": "Elegant gold-tone hoop earrings with a sculptural, wave-inspired design. These modern hoops feature a smooth, fluid silhouette that adds a sophisticated touch to any outfit, perfect for elevating both casual and formal looks.",
    "image": "/products/1 Pair Vintage Style Simple Style C Shape 304 Stainless Steel 18K Gold Plated Ear Studs.jpg",
    "secondaryImage": "",
    "imageAlt": "Gold sculptural wave hoop earrings with post-back closure",
    "type": "Earrings",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Diameter", "value": "Approx. 3 cm" },
      { "label": "Style", "value": "Modern, Sculptural, Sophisticated" },
      { "label": "Occasion", "value": "Office Wear, Evening Events, Everyday Elegance" }
    ]
  },
  {
    "id": "gold-square-pendant-blue-stone",
    "name": "Gold Square Pendant with Blue Stone",
    "price": "$45",
    "description": "A striking gold-plated pendant featuring a faceted square-cut teal-blue gemstone set within a modern angular frame. This elegant, minimalist charm is perfect for adding a pop of color and sophistication to everyday chains or layered necklaces.",
    "image": "/products/1 Piece 11*18mm 9*18mm 304 Stainless Steel Zircon 18K Gold Plated Round Oval Rhombus Pendant.jpg",
    "secondaryImage": "",
    "imageAlt": "Gold pendant with square-cut teal-blue gemstone set in an angular frame",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Stone", "value": "Zircon" },
      { "label": "Pendant Size", "value": "Approx. 1.5 cm" },
      { "label": "Style", "value": "Elegant, Minimalist, Modern" },
      { "label": "Occasion", "value": "Everyday Wear, Gifting" }
    ]
  },
  {
    "id": "gold-mini-star-pendant",
    "name": "Gold Mini Star Pendant Charm",
    "price": "$22",
    "description": "Charming gold-plated mini star pendant with a glossy finish. Perfect for adding a whimsical, celestial touch to dainty chains or charm bracelets, this lightweight piece is versatile and effortlessly elegant.",
    "image": "/products/NH10803360_5.jpg",
    "secondaryImage": "",
    "imageAlt": "Glossy gold mini star-shaped pendant charm with loop",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Pendant Size", "value": "9.4 mm" },
      { "label": "Style", "value": "Whimsical, Celestial, Dainty" },
      { "label": "Occasion", "value": "Casual Wear, Gifting, Layering" }
    ]
  },
  {
    "id": "gold-wave-heart-pendant",
    "name": "Gold Wave Heart Pendant",
    "price": "$28",
    "description": "Sleek and airy open-frame heart pendant crafted from gold-toned stainless steel. The wavy, organic shape adds a touch of romance and modernity, ideal for statement necklaces or charm layering.",
    "image": "/products/1 Piece 304 Stainless Steel Cross Hippocampus Heart Shape Hair Accessories Card Bracelet Card Earring Card.jpg",
    "secondaryImage": "",
    "imageAlt": "Gold open-frame heart-shaped pendant with wavy edges",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Pendant Size", "value": "4 cm x 3.1 cm" },
      { "label": "Style", "value": "Modern, Romantic, Statement" },
      { "label": "Occasion", "value": "Gifting, Everyday Wear" }
    ]
  },
  {
    "id": "gold-crystal-airplane-pendant",
    "name": "Gold Crystal Airplane Pendant",
    "price": "$22",
    "description": "Chic airplane-shaped pendant crafted in gold-plated alloy, accented with clear rhinestones on the wings. A playful and travel-inspired charm perfect for jet-setters or whimsical jewelry styling.",
    "image": "/products/1 Piece 304 Stainless Steel Zircon 18K Gold Plated Heart Shape Key Polished Pendant.jpg",
    "secondaryImage": "",
    "imageAlt": "Gold airplane-shaped pendant with crystal-studded wings",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Stone", "value": "Zircon" },
      { "label": "Pendant Size", "value": "14 mm x 10.8 mm" },
      { "label": "Style", "value": "Playful, Travel-Inspired, Whimsical" },
      { "label": "Occasion", "value": "Gifting, Travel Keepsake, Everyday" }
    ]
  },
  {
    "id": "gold-stainless-steel-chain-necklace",
    "name": "Gold Stainless Steel Chain Necklace",
    "price": "$18",
    "description": "A classic and versatile gold-tone necklace crafted from durable 316 stainless steel. Featuring a fine chain with a polished finish and adjustable length, perfect for layering or pairing with delicate pendants.",
    "image": "/products/1 Piece Titanium Steel Gold Plated Solid Color Chain.jpg",
    "secondaryImage": "",
    "imageAlt": "Gold 316 stainless steel chain necklace with lobster clasp",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Titanium Steel" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Chain Length", "value": "45 cm + 5 cm" },
      { "label": "Style", "value": "Classic, Minimalist, Versatile" },
      { "label": "Occasion", "value": "Everyday Wear, Layering" }
    ]
  },
  {
    "id": "gold-hoop-earring-set-12pcs",
    "name": "Gold Hoop Earring Set (12 Pairs)",
    "price": "$22",
    "description": "A versatile 12-pair gold-tone hoop earring set featuring an assortment of classic, twisted, chunky, and minimalist designs. Perfect for mixing, matching, and elevating both casual and dressy outfits.",
    "image": "/products/1 set ig style geometric plating inlay alloy artificial pearls rhinestones 14k gold plated earrings copy.jpg",
    "secondaryImage": "",
    "imageAlt": "Set of 12 pairs of assorted gold-tone hoop earrings on a white display card labeled 'Fashion Jewelry'",
    "type": "Earrings",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Plating Material", "value": "14K Gold Plated" },
      { "label": "Stone", "value": "Faux Pearls, Rhinestones" },
      { "label": "Style", "value": "Versatile, Geometric, Classic" },
      { "label": "Occasion", "value": "Everyday Wear, Office, Parties" }
    ]
  },
  {
    "id": "gold-starfish-necklace-jdnw2307016",
    "name": "Gold Starfish Pendant Necklace",
    "price": "$28",
    "description": "Charming starfish-shaped pendant necklace crafted in polished gold-tone stainless steel. A perfect accessory to bring beachy, tropical vibes to everyday and vacation looks.",
    "image": "/products/4eaabc05-7797-4663-95db-1f286048d518.jpg",
    "secondaryImage": "",
    "imageAlt": "Gold-tone starfish pendant necklace on a delicate chain with a textured finish",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Pendant Size", "value": "1.55 cm x 1.51 cm" },
      { "label": "Chain Length", "value": "41 cm + 5.5 cm" },
      { "label": "Style", "value": "Beachy, Coastal, Tropical" },
      { "label": "Occasion", "value": "Vacation, Summer Events, Casual Outings" }
    ]
  },
  {
    "id": "gold-heart-enamel-ring-8041bd23",
    "name": "Gold Heart Enamel Ring",
    "price": "$22",
    "description": "Playful and chic, this adjustable gold-tone ring features a series of heart-shaped motifs filled with soft white enamel. Its charming design adds a romantic and whimsical touch to both casual and dressy outfits.",
    "image": "/products/304 Stainless Steel 18K Gold Plated Elegant Retro Plating Geometric Leaf Heart Shape Open Rings.jpg",
    "secondaryImage": "",
    "imageAlt": "Adjustable gold-tone ring with white enamel-filled heart shapes",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Style", "value": "Romantic, Whimsical, Chic" },
      { "label": "Occasion", "value": "Everyday Wear, Date Nights, Gifting" }
    ]
  },
  {
    "id": "gold-key-pendant-1a92fcd0",
    "name": "Gold Key Pendant",
    "price": "$18",
    "description": "A minimalist gold-tone key pendant symbolizing opportunity and new beginnings. Its sleek, polished finish makes it a meaningful and versatile addition to everyday chains and layered looks.",
    "image": "/products/304 Stainless Steel 18K Gold Plated Geometric.jpg",
    "secondaryImage": "",
    "imageAlt": "Minimalist gold-tone key-shaped pendant with polished finish",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Length", "value": "Approx. 3.5 cm" },
      { "label": "Style", "value": "Minimalist, Symbolic" },
      { "label": "Occasion", "value": "Everyday Wear, Gifting" }
    ]
  },
  {
    "id": "gold-flower-charm-bracelet-7f29ac",
    "name": "Gold Flower Charm Bracelet",
    "price": "$26",
    "description": "A chic gold beaded bracelet adorned with a textured flower charm and a delicate faux pearl accent. This playful yet elegant piece is perfect for stacking or wearing solo to add a touch of character to any look.",
    "image": "/products/304 Stainless Steel 24K Gold Plated Sweet Classic Style Beaded Inlay Flower Pearl Bracelets.jpg",
    "secondaryImage": "",
    "imageAlt": "Gold beaded bracelet featuring a hammered flower charm and a pearl detail",
    "type": "Bracelets",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "24K Gold Plated" },
      { "label": "Stone", "value": "Faux Pearl" },
      { "label": "Style", "value": "Elegant, Playful, Beaded" },
      { "label": "Occasion", "value": "Casual Outings, Brunch, Gifting" }
    ]
  },
  {
    "id": "gold-star-pendant-94mm",
    "name": "Gold Star Pendant Charm",
    "price": "$14",
    "description": "A dainty, polished gold-tone star charm pendant designed for necklaces or bracelets. Its playful, simple silhouette makes it a versatile and charming addition to casual and everyday looks.",
    "image": "/products/304 Stainless Steel Letter Fruit Pendant.jpg",
    "secondaryImage": "",
    "imageAlt": "Small polished gold star charm pendant with hoop attachment",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Pendant Size", "value": "9.4 mm" },
      { "label": "Style", "value": "Dainty, Minimalist, Playful" },
      { "label": "Occasion", "value": "Everyday Wear, Layering" }
    ]
  },
  {
    "id": "blue-silver-football-pendant",
    "name": "Blue and Silver Football Pendant Necklace",
    "price": "$25",
    "description": "A stylish unisex pendant necklace featuring a football-shaped charm with blue and silver enamel detailing, attached to a durable stainless steel chain. Perfect for sports enthusiasts or adding a casual, playful touch to any outfit.",
    "image": "/products/casual basketball football stainless steel enamel unisex pendant necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Close-up of a blue and silver football pendant on a silver chain, displayed on a white stand.",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Style", "value": "Sporty, Casual, Playful" },
      { "label": "Occasion", "value": "Everyday Wear, Gifting" }
    ]
  },
  {
    "id": "gold-y-bar-necklace",
    "name": "Gold Y-Bar Pendant Necklace",
    "price": "$22",
    "description": "A sleek, minimalist Y-shaped gold-tone necklace featuring a delicate bar pendant drop. Perfect for layering or making a subtle statement on its own, this piece blends sophistication with modern design for day-to-night styling.",
    "image": "/products/diamond-pendant-1.jpg",
    "secondaryImage": "",
    "imageAlt": "Gold Y-shaped necklace with vertical bar drop pendant worn over a white blazer",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Chain Length", "value": "45 cm + 5 cm" },
      { "label": "Style", "value": "Minimalist, Modern, Sophisticated" },
      { "label": "Occasion", "value": "Everyday Wear, Office, Evening" }
    ]
  },
  {
    "id": "RNG001",
    "name": "Ethereal Majesty Diamond Ring",
    "price": "1299.99",
    "description": "Crafted to perfection, this exquisite diamond ring exudes elegance and timeless grace, capturing the essence of ethereal beauty.",
    "image": "/products/1 Pair Simple Style Classic Style Boots Zinc alloy Drop Earrings.jpg",
    "secondaryImage": "",
    "imageAlt": "Glistening diamond ring with intricate detailing",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "18K White Gold" },
      { "label": "Stone", "value": "Diamond (1.5 ct)" },
      { "label": "Style", "value": "Fine Jewelry, Elegant, Timeless" },
      { "label": "Occasion", "value": "Engagement, Anniversary, Formal Events" }
    ]
  },
  {
    "id": "BR-SS-GP-01",
    "name": "Classic Gold-Plated Stainless Steel Bracelet",
    "price": "79.99",
    "description": "Elevate your style with this exquisite bracelet featuring natural stones, expertly set in premium gold-plated stainless steel for a timeless elegance.",
    "image": "/products/Classic Style Round 304 Stainless Steel natural stone Gold Plated Bracelets In Bulk.jpg",
    "secondaryImage": "",
    "imageAlt": "Elegant gold-plated bracelet with natural stones",
    "type": "Bracelets",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Stone", "value": "Natural Stone" },
      { "label": "Length", "value": "7.5 inches" },
      { "label": "Style", "value": "Classic, Elegant" },
      { "label": "Occasion", "value": "Everyday Wear, Semi-formal" }
    ]
  },
  {
    "id": "R123456",
    "name": "European Elegance Stainless Steel Ring",
    "price": "39.99",
    "description": "Discover the perfect blend of modern innovation and classic charm with this adjustable stainless steel ring, designed to captivate and enchant.",
    "image": "/products/Europe and the United States  stainless steel ring fashion personality opening adjustable ring oil pressure wide pasta finger ring wholesale factory.jpg",
    "secondaryImage": "",
    "imageAlt": "Stainless Steel Adjustable Ring with a Modern Flair",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Style", "value": "Modern, European, Statement" },
      { "label": "Occasion", "value": "Fashion, Casual Wear, Parties" }
    ]
  },
  {
    "id": "P00123",
    "name": "18K Gold Starfish Shell Necklace",
    "price": "149.99",
    "description": "This exquisite 18K gold necklace captures the essence of the ocean with its delicate starfish and shell design, offering a timeless elegance that never fades.",
    "image": "/products/Export Jewelry Stainless Steel Marine Series Necklace  18K Gold Non-Fading Starfish Shell Clavicle Chain.jpg",
    "secondaryImage": "",
    "imageAlt": "Glistening gold necklace featuring a starfish and shell pendant",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Chain Length", "value": "18 inches" },
      { "label": "Style", "value": "Marine, Coastal, Elegant" },
      { "label": "Occasion", "value": "Vacation, Beachwear, Gifting" }
    ]
  },
  {
    "id": "001234-gamepad",
    "name": "Fashion Gamepad 201 Stainless Steel Enamel Unisex Pendant Necklace",
    "price": "49.99",
    "description": "Elevate your style with this gamepad-inspired pendant, crafted from premium 201 stainless steel and vivid enamel, perfect for gaming enthusiasts.",
    "image": "/products/Fashion Gamepad 201 Stainless Steel Enamel Unisex Pendant Necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Vibrant gamepad pendant necklace in stainless steel and enamel",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Chain Length", "value": "24 inches" },
      { "label": "Style", "value": "Gamer, Fashion, Playful" },
      { "label": "Occasion", "value": "Casual Wear, Gifting" }
    ]
  },
  {
    "id": "BR123456-football",
    "name": "Men's New Versatile Alloy Football Pattern Leather Bracelet",
    "price": "69.99",
    "description": "Unleash your inner champion with this rugged yet sophisticated leather bracelet, a perfect blend of sport and style.",
    "image": "/products/Men's New Versatile Alloy Football Pattern Leather Bracelet  DIY Multi-Layer Leather Magnet Buckle Bracelet.jpg",
    "secondaryImage": "",
    "imageAlt": "Football Pattern Leather Bracelet with Magnetic Buckle",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Leather" },
      { "label": "Length", "value": "21 cm" },
      { "label": "Style", "value": "Sporty, Multi-Layer, Rugged" },
      { "label": "Occasion", "value": "Casual Wear, Sports Events" }
    ]
  },
  {
    "id": "BR123457-cactus",
    "name": "Retro Cactus Leather Bracelet",
    "price": "75",
    "description": "Unleash your adventurous spirit with this exquisite hand-woven leather bracelet, featuring a unique magnetic buckle adorned with a retro cactus motif.",
    "image": "/products/New  Retro Style Cactus Zinc Alloy Magnetic Buckle Multi-layer Hand-woven Men's Leather Bracelet.jpg",
    "secondaryImage": "",
    "imageAlt": "Elegant multi-layer leather bracelet with a cactus motif",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Leather" },
      { "label": "Length", "value": "8 inches" },
      { "label": "Style", "value": "Retro, Western, Hand-woven" },
      { "label": "Occasion", "value": "Casual Wear, Festivals" }
    ]
  },
  {
    "id": "001-geometric-pendant",
    "name": "Simple Style Geometric Pendant Necklace",
    "price": "79.99",
    "description": "Elevate your elegance with this geometric pendant, masterfully crafted from 18K gold-plated stainless steel, radiating timeless sophistication.",
    "image": "/products/Simple Style Geometric 18K Gold Plated 316L Stainless Steel  Wholesale Necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Geometric gold pendant necklace on a sleek chain",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Chain Length", "value": "18 inches" },
      { "label": "Style", "value": "Minimalist, Geometric, Elegant" },
      { "label": "Occasion", "value": "Everyday Wear, Office, Formal" }
    ]
  },
  {
    "id": "JWL-00123-geometric",
    "name": "Geometric Elegance Necklace",
    "price": "199.00",
    "description": "A breathtaking piece that exudes sophistication, this 18K gold-plated necklace is a masterpiece of geometric elegance, perfect for any occasion.",
    "image": "/products/Simple Style Geometric 201 Stainless Steel Polishing 18K Gold Plated Unisex.jpg",
    "secondaryImage": "",
    "imageAlt": "Elegant 18K gold-plated geometric necklace",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Chain Length", "value": "18 inches" },
      { "label": "Style", "value": "Geometric, Sophisticated, Statement" },
      { "label": "Occasion", "value": "Formal Events, Parties" }
    ]
  },
  {
    "id": "RNG-SS18K-001",
    "name": "Stainless Steel 18K Gold Plated Geometric Open Ring",
    "price": "119.99",
    "description": "Elevate your style with this exquisite 18K gold-plated geometric open ring, blending modern artistry with timeless elegance.",
    "image": "/products/Screenshot 2025-07-01 at 8.44.45 PM.png",
    "secondaryImage": "",
    "imageAlt": "Elegant gold-plated geometric open ring",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Style", "value": "Modern, Geometric, Artistic" },
      { "label": "Occasion", "value": "Everyday Elegance, Parties" }
    ]
  },
  {
    "id": "BR123456-heart",
    "name": "Titanium Steel 18K Gold Plated Heart Bracelet",
    "price": "79.99",
    "description": "Embrace elegance with this heart-shaped bracelet, combining the resilience of titanium steel with the luxurious glow of 18K gold plating.",
    "image": "/products/Titanium Steel 18K Gold Plated Casual Simple Style Heart Shape Bracelets Necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Exquisite heart-shaped gold bracelet",
    "type": "Bracelets",
    "specs": [
      { "label": "Material", "value": "Titanium Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Length", "value": "7.5 inches" },
      { "label": "Style", "value": "Casual, Simple, Romantic" },
      { "label": "Occasion", "value": "Everyday Wear, Gifting" }
    ]
  },
  {
    "id": "BR123457-celestial",
    "name": "Celestial Harmony Bracelet",
    "price": "85.00",
    "description": "Embrace the celestial charm with our exquisite 316 stainless steel bracelet, featuring sun, star, and moon motifs linked together in a classic Cuban chain design.",
    "image": "/products/NH11110379_21.jpg",
    "secondaryImage": "/products/NH11110379_5.jpg",
    "imageAlt": "Elegant stainless steel bracelet with celestial motifs",
    "type": "Bracelets",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Length", "value": "8 inches" },
      { "label": "Style", "value": "Celestial, Classic" },
      { "label": "Occasion", "value": "Vacation, Everyday Wear" }
    ]
  },
  {
    "id": "PND-30418KG-001",
    "name": "18K Gold Plated Rectangle Pendant Necklace",
    "price": "75.00",
    "description": "Elevate your elegance with this exquisite 18K gold plated pendant, crafted from premium stainless steel for a timeless allure.",
    "image": "/products/NH10793603_5.jpg",
    "secondaryImage": "/products/NH10793603_7.jpg",
    "imageAlt": "Gleaming 18K gold plated rectangle pendant necklace",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Pendant Size", "value": "20mm x 15mm" },
      { "label": "Chain Length", "value": "18 inches" },
      { "label": "Style", "value": "Minimalist, Elegant, Modern" },
      { "label": "Occasion", "value": "Commute, Office Wear, Casual" }
    ]
  },
  {
    "id": "PND00123-grace",
    "name": "Eternal Grace Pendant Necklace",
    "price": "129.99",
    "description": "Exude timeless elegance with our Eternal Grace Pendant Necklace, where minimalist design meets luxurious craftsmanship.",
    "image": "/products/Wholesale Jewelry Casual Simple Style Letter 304 Stainless Steel box chain Pendant Necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Graceful pendant necklace on a box chain, exuding luxury and simplicity.",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Pendant Size", "value": "0.8 inches" },
      { "label": "Chain Length", "value": "18 inches" },
      { "label": "Style", "value": "Minimalist, Simple, Letter" },
      { "label": "Occasion", "value": "Everyday Wear, Gifting" }
    ]
  },
  {
    "id": "PND12345",
    "name": "Elegant Glam Luxurious Bird Pendant",
    "price": "79.99",
    "description": "This exquisite bird pendant features a dazzling zircon inlay, capturing elegance and sophistication in stainless steel artistry.",
    "image": "/products/Wholesale Jewelry Elegant Glam Luxurious Bird Stainless Steel Zircon Plating Inlay Pendant Necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Luxurious Bird Pendant in Stainless Steel with Zircon Inlay",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Stone", "value": "Zircon" },
      { "label": "Length", "value": "3 cm" },
      { "label": "Chain Length", "value": "45 cm" },
      { "label": "Style", "value": "Elegant, Glamorous, Luxurious" },
      { "label": "Occasion", "value": "Parties, Formal Events" }
    ]
  },
  {
    "id": "Jz001",
    "name": "Elegant Retro French Style Sunflower Pendant Necklace",
    "price": "129.99",
    "description": "This exquisite pendant necklace captures the essence of timeless elegance with a sunflower motif, gracefully set in 18K gold plating and adorned with imitation pearls and natural stone.",
    "image": "/products/Wholesale Jewelry Elegant Retro French Style SUNFLOWER (Jz001) Pearl 316L Stainless Steel  Imitation Pearl Natural Stone 18K Gold Plated Beaded Inlay Pendant Necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Elegant sunflower pendant with pearls and gold plating",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Stone", "value": "Faux Pearl, Natural Stone" },
      { "label": "Chain Length", "value": "45 cm" },
      { "label": "Style", "value": "Retro, French, Elegant" },
      { "label": "Occasion", "value": "Parties, Special Events" }
    ]
  },
  {
    "id": "123456789",
    "name": "Hexagram Moon Double Layer Necklace",
    "price": "79.99",
    "description": "Embrace celestial elegance with this Hexagram Moon necklace, crafted from premium titanium steel, designed to captivate and charm.",
    "image": "/products/Wholesale Jewelry Elegant Simple Style Hexagram Moon Titanium Steel Double Layer Necklaces.jpg",
    "secondaryImage": "/products/NH10858006_12.jpg",
    "imageAlt": "Elegant Hexagram Moon Double Layer Necklace",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Titanium Steel" },
      { "label": "Pendant Size", "value": "1.5 inches" },
      { "label": "Chain Length", "value": "16 + 2 inches" },
      { "label": "Style", "value": "Celestial, Double Layer, Elegant" },
      { "label": "Occasion", "value": "Everyday Wear, Night Out" }
    ]
  },
  {
    "id": "RNG-0023",
    "name": "Elegant Sweet Flower Ring",
    "price": "120.00",
    "description": "Experience timeless elegance with this exquisite 18K gold plated ring, featuring a delicate flower design inlaid with lustrous shell accents.",
    "image": "/products/NH10780183_6.jpg",
    "secondaryImage": "/products/NH10780183_8.jpg",
    "imageAlt": "Elegant floral ring with shell accents",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Stone", "value": "Shell" },
      { "label": "Style", "value": "Elegant, Sweet, Floral" },
      { "label": "Occasion", "value": "Gifting, Special Events" }
    ]
  },
  {
    "id": "HJ-304-SS-Open-Ring",
    "name": "IG Style Heart Shape Open Ring",
    "price": "39.99",
    "description": "Embrace elegance with this heart-shaped open ring, crafted from durable 304 stainless steel with a lustrous finish designed to captivate.",
    "image": "/products/NH10345808_10.jpg",
    "secondaryImage": "/products/NH10345808_9.jpg",
    "imageAlt": "Heart Shape Stainless Steel Open Ring",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Style", "value": "Elegant, Minimalist, Romantic" },
      { "label": "Occasion", "value": "Everyday Wear, Gifting" }
    ]
  },
  {
    "id": "HJ-001",
    "name": "Heart of Elegance Necklace",
    "price": "79.99",
    "description": "This exquisite heart-shaped pendant captures the essence of love and sophistication, crafted with high-quality stainless steel and a luxurious plating finish.",
    "image": "/products/NH10334804_1.jpg",
    "secondaryImage": "",
    "imageAlt": "Elegant heart-shaped stainless steel pendant",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Chain Length", "value": "18 inches" },
      { "label": "Style", "value": "Elegant, Sophisticated, Romantic" },
      { "label": "Occasion", "value": "Anniversary, Gifting, Special Events" }
    ]
  },
  {
    "id": "SR-2023-001",
    "name": "Starfish Elegance Open Ring",
    "price": "49.99",
    "description": "Dive into elegance with this starfish-inspired ring, expertly crafted in 304 stainless steel with a luxurious plating that gleams like the ocean at sunrise.",
    "image": "/products/NH10770296_9.jpg",
    "secondaryImage": "",
    "imageAlt": "Elegant starfish-shaped open ring with oceanic gleam",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Style", "value": "Coastal, Elegant, Beachy" },
      { "label": "Occasion", "value": "Vacation, Summer Wear, Casual" }
    ]
  },
  {
    "id": "RNG123456-modern",
    "name": "Modern Style Leaf Starfish Shell Ring",
    "price": "49.99",
    "description": "Dive into elegance with this ocean-inspired open ring, artfully crafted for those who embrace the allure of the sea.",
    "image": "/products/Wholesale Jewelry Modern Style Classic Style Leaf Starfish Shell 304 Stainless Steel Plating Open Rings.jpg",
    "secondaryImage": "/products/NH10770296_13.jpg",
    "imageAlt": "Elegant open ring with leaf, starfish, and shell motifs",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Style", "value": "Modern, Classic, Coastal" },
      { "label": "Occasion", "value": "Everyday Wear, Beach Vacation" }
    ]
  },
  {
    "id": "BR-00123",
    "name": "Retro Beach Shell Stainless Steel Bracelet",
    "price": "79.99",
    "description": "Add a touch of coastal elegance to your wrist with this retro beach-inspired bracelet, crafted from durable 304 stainless steel and featuring a polished finish with a lustrous natural shell accent.",
    "image": "/products/NH11202058_3.jpg",
    "secondaryImage": "/products/NH11202058_1.jpg",
    "imageAlt": "Elegant Retro Beach Shell Bracelet",
    "type": "Bracelets",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Stone", "value": "Shell" },
      { "label": "Style", "value": "Retro, Beachy, Coastal" },
      { "label": "Occasion", "value": "Vacation, Summer Parties" }
    ]
  },
  {
    "id": "PND-001-cowboy",
    "name": "Retro Cowboy Style Boots Pendant Necklace",
    "price": "59.99",
    "description": "Embrace the spirit of the Wild West with this stunning 18K gold plated pendant, featuring intricate cowboy boot designs that exude timeless charm and rugged elegance.",
    "image": "/products/Wholesale Jewelry Retro Cowboy Style Boots 304 Stainless Steel 18K Gold Plated Plating Pendant Necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Gold plated cowboy boot pendant necklace",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Chain Length", "value": "18 inches" },
      { "label": "Style", "value": "Retro, Cowboy, Western" },
      { "label": "Occasion", "value": "Themed Events, Casual Wear" }
    ]
  },
  {
    "id": "PND-00123-floral",
    "name": "Floral Butterfly Stainless Steel Pendant Necklace",
    "price": "$45.99",
    "description": "Exquisitely crafted, this pendant necklace combines the elegance of floral motifs with the delicate grace of a butterfly, capturing the essence of nature's beauty.",
    "image": "/products/e2182e0f-67b2-4d60-9e3c-e4f28a3f4b42.jpg",
    "secondaryImage": "",
    "imageAlt": "Elegant floral butterfly pendant necklace",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Chain Length", "value": "45 cm + 5 cm" },
      { "label": "Style", "value": "Elegant, Classic, Nature-Inspired" },
      { "label": "Occasion", "value": "Everyday Wear, Gifting" }
    ]
  },
  {
    "id": "BRC1001-heart",
    "name": "Timeless Heart Stainless Steel Bracelet",
    "price": "59.99",
    "description": "Elegantly crafted with a heart motif, this stainless steel bracelet exudes a classic charm perfect for any occasion.",
    "image": "/products/NH10427795_6.jpg",
    "secondaryImage": "",
    "imageAlt": "Elegant heart-shaped stainless steel bracelet",
    "type": "Bracelets",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Length", "value": "7.5 inches" },
      { "label": "Style", "value": "Classic, Simple, Romantic" },
      { "label": "Occasion", "value": "Everyday Wear, Gifting" }
    ]
  },
  {
    "id": "RJ-304SS-18KGP-001",
    "name": "Elegant Gold-Plated Open Ring",
    "price": "79.99",
    "description": "This exquisite open ring combines timeless elegance with a modern twist, crafted from high-quality 18K gold-plated stainless steel.",
    "image": "/products/NH10830445_8.jpg",
    "secondaryImage": "/products/NH10770296_13.jpg",
    "imageAlt": "Luxurious gold-plated open ring shining with elegance",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Style", "value": "Elegant, Modern, Minimalist" },
      { "label": "Occasion", "value": "Everyday Wear, Special Events" }
    ]
  },
  {
    "id": "PND001-heart-gold",
    "name": "Heart of Gold Necklace",
    "price": "49.99",
    "description": "This exquisite heart pendant necklace is crafted from premium titanium steel with a gleaming imitation gold finish, offering a timeless elegance that enhances any outfit.",
    "image": "/products/Wholesale Jewelry Simple Style Heart Titanium Steel Imitation Gold  snake chain Necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Elegant heart pendant with a shimmering gold snake chain",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Titanium Steel" },
      { "label": "Chain Length", "value": "45cm" },
      { "label": "Style", "value": "Elegant, Simple, Romantic" },
      { "label": "Occasion", "value": "Everyday Wear, Gifting" }
    ]
  },
  {
    "id": "001230-sunlit",
    "name": "Sunlit Elegance Pendant Necklace",
    "price": "89.99",
    "description": "Exude sophistication with this exquisite sun-themed pendant, crafted from premium titanium steel and designed to captivate under any light.",
    "image": "/products/Screenshot 2025-06-30 at 7.08.34 PM.png",
    "secondaryImage": "",
    "imageAlt": "Radiant sun-themed pendant on a sleek snake chain",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Titanium Steel" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Chain Length", "value": "45 cm" },
      { "label": "Style", "value": "Celestial, Classic, Elegant" },
      { "label": "Occasion", "value": "Vacation, Everyday Wear" }
    ]
  },
  {
    "id": "PND10234",
    "name": "Vintage Heart & Butterfly Titanium Pendant",
    "price": "49.99",
    "description": "Embrace timeless elegance with this vintage heart and butterfly pendant, crafted from durable titanium steel for a chic and sophisticated look.",
    "image": "/products/Wholesale Jewelry Vintage Style Heart Shape Butterfly Rectangle Titanium Steel Pendant Necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Elegant titanium pendant with heart and butterfly design",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Titanium Steel" },
      { "label": "Chain Length", "value": "18 inches" },
      { "label": "Style", "value": "Vintage, Romantic, Chic" },
      { "label": "Occasion", "value": "Everyday Wear, Gifting" }
    ]
  },
  {
    "id": "001-vintage-marine",
    "name": "Vintage Marine Style Pendant Necklace",
    "price": "129.99",
    "description": "Embrace the beauty of the ocean with this exquisite vintage-style pendant, featuring intricate marine motifs and a stunning natural stone centerpiece.",
    "image": "/products/Wholesale Jewelry Vintage Style Marine Style Sun Starfish Conch 304 Stainless Steel natural stone 18K Gold Plated Plating Beaded Chain cable chain snake chain Pendant Necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Graceful vintage marine-themed gold pendant necklace with starfish and conch design",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Stone", "value": "Natural Stone" },
      { "label": "Chain Length", "value": "18 inches" },
      { "label": "Style", "value": "Vintage, Marine, Coastal" },
      { "label": "Occasion", "value": "Vacation, Themed Events" }
    ]
  },
  {
    "id": "RJ-00784",
    "name": "Vintage Starfish Floral Open Ring",
    "price": "89.99",
    "description": "Embrace the allure of the ocean with this exquisite stainless steel ring, featuring delicate starfish and floral motifs entwined in timeless elegance.",
    "image": "/products/Wholesale Jewelry Vintage Style Simple Style Round Starfish Flower 304 Stainless Steel Open Rings.jpg",
    "secondaryImage": "",
    "imageAlt": "Elegant vintage starfish and floral open ring",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Style", "value": "Vintage, Simple, Nature-Inspired" },
      { "label": "Occasion", "value": "Everyday Wear, Casual" }
    ]
  },
  {
    "id": "PDT-0457",
    "name": "Casual Basketball Football Stainless Steel Enamel Unisex Pendant Necklace",
    "price": "69.99",
    "description": "Showcase your love for sports with this dynamic and chic unisex pendant, crafted in premium stainless steel and vibrant enamel.",
    "image": "/products/casual basketball football stainless steel enamel unisex pendant necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Vibrant sports-themed unisex pendant necklace",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Chain Length", "value": "24 inches" },
      { "label": "Style", "value": "Sporty, Casual, Dynamic" },
      { "label": "Occasion", "value": "Casual Wear, Sports Events, Gifting" }
    ]
  },
  {
    "id": "BR123456-cross",
    "name": "Fashion Cross Rectangle Stainless Steel PU Leather Braid Unisex Bracelet",
    "price": "39.99",
    "description": "A striking blend of modern design and timeless elegance, this bracelet features a stainless steel cross on braided PU leather, perfect for any occasion.",
    "image": "/products/fashion cross rectangle stainless steel pu leather braid unisex bracelets.jpg",
    "secondaryImage": "",
    "imageAlt": "Stainless steel cross bracelet on braided black leather",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Leather" },
      { "label": "Length", "value": "8 inches" },
      { "label": "Style", "value": "Modern, Edgy, Braided" },
      { "label": "Occasion", "value": "Casual Wear, Fashion Statement" }
    ]
  },
  {
    "id": "BR123456-geometric",
    "name": "Fashion Geometric Alloy Plated Bracelet",
    "price": "39.99",
    "description": "Elevate your style with this exquisite unisex bracelet, showcasing modern geometric designs in a luxurious alloy finish.",
    "image": "/products/fashion geometric alloy plating unisex bracelets 1 piece.jpg",
    "secondaryImage": "",
    "imageAlt": "Sleek geometric alloy bracelet",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Length", "value": "7.5 inches" },
      { "label": "Style", "value": "Geometric, Modern, Fashion" },
      { "label": "Occasion", "value": "Casual Outings, Parties" }
    ]
  },
  {
    "id": "J123456",
    "name": "Geometric Titanium Steel Pendant",
    "price": "120.00",
    "description": "A stunning fusion of modern design and timeless elegance, this titanium steel pendant exudes a captivating charm with its intricate patchwork plating.",
    "image": "/products/fashion geometric titanium steel patchwork plating chain necklace 1 piece.jpg",
    "secondaryImage": "",
    "imageAlt": "Elegant geometric titanium steel pendant necklace.",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Titanium Steel" },
      { "label": "Chain Length", "value": "18 inches" },
      { "label": "Style", "value": "Geometric, Modern, Statement" },
      { "label": "Occasion", "value": "Parties, Fashion Events" }
    ]
  },
  {
    "id": "BRC1001-titanium",
    "name": "Eternal Elegance Titanium Bracelet",
    "price": "79.99",
    "description": "Experience timeless sophistication with this unisex titanium steel bracelet, a blend of durability and elegance designed to elevate any ensemble.",
    "image": "/products/fashion solid color titanium steel plating unisex bracelets.jpg",
    "secondaryImage": "",
    "imageAlt": "Sleek titanium steel bracelet with a polished finish",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Titanium Steel" },
      { "label": "Length", "value": "7.5 inches" },
      { "label": "Style", "value": "Minimalist, Sophisticated, Classic" },
      { "label": "Occasion", "value": "Casual Wear, Formal Events, Office" }
    ]
  },
  {
    "id": "0017-hiphop",
    "name": "Hip-Hop Geometric Titanium Steel Plating Unisex Necklace",
    "price": "79.99",
    "description": "Elevate your style with this striking hip-hop pendant featuring a geometric design, meticulously crafted from premium titanium steel for an unforgettable statement piece.",
    "image": "/products/hip-hop geometric titanium steel plating unisex necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Bold geometric hip-hop necklace in titanium steel",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Titanium Steel" },
      { "label": "Length", "value": "24 inches" },
      { "label": "Style", "value": "Hip-Hop, Geometric, Bold" },
      { "label": "Occasion", "value": "Street Style, Parties, Casual" }
    ]
  },
  {
    "id": "P001234-lady",
    "name": "Lady Heart Shape Flower Pendant",
    "price": "$149.99",
    "description": "A captivating blend of elegance and charm, this heart-shaped flower pendant dazzles with its zircon inlays and gold-plated titanium steel, perfect for any special occasion.",
    "image": "/products/lady heart shape flower titanium steel plating inlay zircon gold plated pendant necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Elegant gold-plated heart-shaped flower pendant",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Titanium Steel" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Stone", "value": "Zircon" },
      { "label": "Chain Length", "value": "18 inches" },
      { "label": "Style", "value": "Elegant, Floral, Romantic" },
      { "label": "Occasion", "value": "Special Occasions, Gifting, Parties" }
    ]
  },
  {
    "id": "BRC1001-retro",
    "name": "Retro Cross Alloy Natural Stone Haematite Men's Bracelet",
    "price": "49.99",
    "description": "Embrace timeless style with this exquisite haematite bracelet, adorned with a striking retro cross design that speaks to the soul of a true gentleman.",
    "image": "/products/NH10102690_4.jpg",
    "secondaryImage": "",
    "imageAlt": "Elegant haematite bracelet with a retro cross design for men",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Stone", "value": "Haematite" },
      { "label": "Length", "value": "8 inches" },
      { "label": "Style", "value": "Retro, Edgy, Masculine" },
      { "label": "Occasion", "value": "Casual Wear, Night Out" }
    ]
  },
  {
    "id": "RF123TZB",
    "name": "Retro Fruit Titanium Steel Plating Inlay Zircon Unisex Bracelet",
    "price": "79.99",
    "description": "A timeless piece of elegance, this bracelet combines retro charm with modern luxury, featuring zircon inlays on a titanium steel plated band.",
    "image": "/products/retro fruit titanium steel plating inlay zircon unisex bracelets.jpg",
    "secondaryImage": "",
    "imageAlt": "Vibrant unisex bracelet with zircon inlays and titanium sheen",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Titanium Steel" },
      { "label": "Stone", "value": "Zircon" },
      { "label": "Length", "value": "7.5 inches" },
      { "label": "Style", "value": "Retro, Luxury, Playful" },
      { "label": "Occasion", "value": "Parties, Fashion Statement" }
    ]
  },
  {
    "id": "001-commute",
    "name": "Elegant Commute Letter Pendant",
    "price": "69.99",
    "description": "Elevate your style with this stunning titanium steel pendant, plated with 18k gold for a touch of timeless sophistication. A perfect blend of modern simplicity and classic elegance.",
    "image": "/products/simple style commute letter titanium steel plating 18k gold plated necklace.jpg",
    "secondaryImage": "",
    "imageAlt": "Luxurious gold-plated letter pendant necklace",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Titanium Steel" },
      { "label": "Plating Material", "value": "18K Gold Plated" },
      { "label": "Chain Length", "value": "45 cm" },
      { "label": "Style", "value": "Minimalist, Elegant, Modern" },
      { "label": "Occasion", "value": "Office Wear, Everyday Elegance" }
    ]
  },
  {
    "id": "soccer-leather-braided-bracelet",
    "name": "Soccer Leather Braided Bracelet",
    "price": "$12",
    "description": "A sporty black leather braided bracelet featuring a classic black-and-white soccer ball charm. Perfect for sports fans, it combines casual style with a love of the game.",
    "image": "/products/Men's New Versatile Alloy Football Pattern Leather Bracelet  DIY Multi-Layer Leather Magnet Buckle Bracelet.jpg",
    "imageAlt": "Black braided leather bracelet with soccer ball charm and metal bead accents",
    "type": "Men",
    "specs": [
      { "label": "Material", "value": "Leather" },
      { "label": "Length", "value": "21 cm" },
      { "label": "Style", "value": "Sporty, Casual, Braided" },
      { "label": "Occasion", "value": "Casual Wear, Sports Events, Gifting" }
    ]
  },
  {
    "id": "silver-flower-hook-earrings",
    "name": "Silver Flower Hook Earrings",
    "price": "$10",
    "description": "Delicate silver-tone earrings featuring small floral charms with a polished finish, suspended on easy-to-wear hooks. A subtle and charming accent for any outfit.",
    "image": "/products/NH10592677_3.jpg",
    "imageAlt": "Small silver flower charm earrings with hook closures displayed on a white background",
    "type": "Earrings",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Plating Material", "value": "Silver Plated" },
      { "label": "Length", "value": "20 mm" },
      { "label": "Style", "value": "Delicate, Minimalist, Floral" },
      { "label": "Occasion", "value": "Everyday Wear, Gifting" }
    ]
  },
  {
    "id": "gold-statement-flower-ring",
    "name": "Gold Statement Flower Ring",
    "price": "$15",
    "description": "Bold and eye-catching, this statement ring features a large flower-inspired design with radiant pleats and a polished gold-tone finish. Perfect for making a fashion-forward impression.",
    "image": "/products/Screenshot 2025-06-30 at 2.05.20 PM.png",
    "imageAlt": "Large gold flower statement ring worn on a woman's finger",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Style", "value": "Statement, Bold, Floral" },
      { "label": "Occasion", "value": "Parties, Weddings, Special Occasions" }
    ]
  },
  {
    "id": "gold-sunflower-statement-ring",
    "name": "Gold Sunflower Statement Ring",
    "price": "$15",
    "description": "This bold ring showcases a sunflower-inspired design with beautifully detailed petals and a textured center, finished in a radiant gold tone. A perfect accessory to brighten any outfit.",
    "image": "/products/Screenshot 2025-06-30 at 2.05.53 PM.png",
    "imageAlt": "Large gold sunflower-shaped statement ring worn on a woman's finger",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Style", "value": "Statement, Floral, Bohemian" },
      { "label": "Occasion", "value": "Casual Wear, Parties, Festivals" }
    ]
  },
  {
    "id": "gold-chain-mother-of-pearl-flower-necklace",
    "name": "Gold Chain with Mother of Pearl Flower Pendant",
    "price": "$18",
    "description": "A delicate gold-toned chain featuring a carved white mother-of-pearl flower pendant with a subtle golden center, perfect for an elegant and feminine touch.",
    "image": "/products/NH10780183_3.jpg",
    "secondaryImage": "/products/NH10780183_10.jpg",
    "imageAlt": "Gold chain necklace with a carved white flower pendant displayed on a textured surface",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Stone", "value": "Mother of Pearl" },
      { "label": "Chain Length", "value": "40 cm + 5 cm" },
      { "label": "Style", "value": "Elegant, Feminine, Delicate" },
      { "label": "Occasion", "value": "Daily Wear, Formal Occasions, Gifting" }
    ]
  },
  {
    "id": "mother-of-pearl-flower-jewelry-set",
    "name": "Mother of Pearl Flower Jewelry Combo Set",
    "price": "$45",
    "description": "A beautifully coordinated jewelry combo set featuring a necklace, ring, and stud earrings, all designed with elegant white mother-of-pearl flower motifs accented by delicate golden centers. This set combines minimalism with timeless sophistication, perfect for elevating any outfit.",
    "image": "/products/NH10780183_1.jpg",
    "secondaryImage": "/products/NH10780183_3.jpg",
    "imageAlt": "Mother of pearl flower necklace, ring, and earrings set in gold tone",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Stone", "value": "Mother of Pearl" },
      { "label": "Set Includes", "value": "Necklace, Ring, Stud Earrings" },
      { "label": "Style", "value": "Coordinated Set, Elegant, Minimalist" },
      { "label": "Occasion", "value": "Gifting, Formal Events, Everyday Elegance" }
    ]
  },
  {
    "id": "gold-mini-heart-chain-necklace",
    "name": "Gold Mini Heart Chain Necklace",
    "price": "$25",
    "description": "A chic and modern gold-tone necklace designed with a series of delicate mini heart charms along a fine chain. The polished hearts add a playful yet elegant vibe, making this piece perfect for everyday wear or layering with other necklaces.",
    "image": "/products/NH10653688_2.jpg",
    "secondaryImage": "/products/NH10653688_1.jpg",
    "imageAlt": "Gold chain necklace with mini heart charms worn by a model",
    "type": "Pendants",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Chain Length", "value": "40 cm + 5 cm" },
      { "label": "Style", "value": "Modern, Playful, Elegant" },
      { "label": "Occasion", "value": "Everyday Wear, Parties, Gifting" }
    ]
  },
  {
    "id": "RG-00245",
    "name": "Golden Bloom Adjustable Ring",
    "price": "39.99",
    "description": "A playful yet elegant open band ring featuring a blooming flower silhouette, crafted from polished gold-tone stainless steel. Its adjustable design ensures a perfect fit for any finger.",
    "image": "/products/Screenshot 2025-06-30 at 8.01.14 PM.png",
    "secondaryImage": "",
    "imageAlt": "Gold open band ring with a flower-shaped design",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Stainless Steel" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Style", "value": "Minimalist, Playful, Floral" },
      { "label": "Occasion", "value": "Casual Wear, Everyday, Gifting" }
    ]
  },
  {
    "id": "RG-00246",
    "name": "Orbit Noir Open Cuff Ring",
    "price": "42.99",
    "description": "Make a bold statement with this striking open cuff ring, featuring layered gold-tone bands accented with glossy black stones. Its modern yet timeless design makes it a standout piece for any occasion.",
    "image": "/products/NH10481479_2.jpg",
    "secondaryImage": "",
    "imageAlt": "Gold multi-band open cuff ring with black stone accents",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Stone", "value": "Black Resin" },
      { "label": "Style", "value": "Statement, Contemporary, Bold" },
      { "label": "Occasion", "value": "Evening Events, Special Occasions" }
    ]
  },
  {
    "id": "RG-00257",
    "name": "Golden Horizon Textured Open Ring",
    "price": "36.99",
    "description": "A minimal yet eye-catching open ring featuring hammered textured bands in a radiant gold-tone finish. Its airy, layered design makes it perfect for stacking or wearing solo.",
    "image": "/products/Screenshot 2025-06-30 at 8.17.51 PM.png",
    "secondaryImage": "",
    "imageAlt": "Gold hammered open ring with multiple textured bands",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Style", "value": "Minimalist, Boho Chic, Textured" },
      { "label": "Occasion", "value": "Everyday Wear, Casual Layering" }
    ]
  },
  {
    "id": "RG-00274",
    "name": "Golden Shell Open Ring",
    "price": "39.99",
    "description": "Channel coastal elegance with this chic open ring, crafted in a gold-tone finish and adorned with delicately embossed shell motifs on both ends. Perfect for adding a beachy yet sophisticated touch to any look.",
    "image": "/products/WhatsApp Image 2025-07-01 at 15.38.01.jpeg",
    "secondaryImage": "",
    "imageAlt": "Gold open ring featuring embossed shell designs at both ends",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Style", "value": "Coastal, Beachy, Minimalist" },
      { "label": "Occasion", "value": "Vacation, Resort Wear, Casual" }
    ]
  },
  {
    "id": "RG-00315",
    "name": "Modern Abstract Wire Gold Ring",
    "price": "49.99",
    "description": "Make a bold statement with this contemporary openwork ring featuring a layered wire design in radiant gold plating. Its wide, sculptural silhouette adds modern sophistication to any ensemble.",
    "image": "/products/Screenshot 2025-06-30 at 8.15.17 PM.png",
    "secondaryImage": "",
    "imageAlt": "Wide openwork gold ring with abstract wire design",
    "type": "Rings",
    "specs": [
      { "label": "Material", "value": "Alloy" },
      { "label": "Plating Material", "value": "Gold Plated" },
      { "label": "Style", "value": "Modern, Statement, Abstract" },
      { "label": "Occasion", "value": "Parties, Evening Wear, Fashion Events" }
    ]
  }
];

export default products;