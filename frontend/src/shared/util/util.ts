export const generateRandomImage = () => {
  const imageList = [
    "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcHNpdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1526491109672-74740652b963?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbXBzaXRlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1557292916-eaa52c7e5939?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbXBzaXRlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1636569999480-7eed231a7633?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbXBzaXRlfGVufDB8fDB8fHww",
  ];
  const randomIndex = Math.floor(Math.random() * imageList.length);
  return imageList[randomIndex];
};

export const generateRandomDescription = () => {
  const descriptionList = [
    "Our campsite is a peaceful nature retreat with modern amenities for outdoor enthusiasts and relaxation. Enjoy the tranquility of lush surroundings and make lasting memories with family and friends.",
    "Nestled within a serene natural environment, our campsite is the ideal retreat for outdoor enthusiasts and those seeking relaxation. Set against a backdrop of lush greenery and towering trees, it offers a tranquil space to pitch tents or park RVs. Campfires, picnic tables, and modern facilities ensure a comfortable stay, while the surrounding natural beauty provides the perfect setting for adventure and quality time with family and friends. Whether you're an avid explorer or simply in search of a peaceful getaway, our campsite invites you to immerse yourself in the beauty of nature and create lasting memories.",
    "Discover our campsite, where the great outdoors meets comfort and serenity. Set amidst breathtaking natural landscapes, it's a haven for camping and adventure. Enjoy campfires, scenic picnic areas, and modern amenities for a relaxing stay. Whether you're an explorer or seeking tranquility, our campsite invites you to embrace the beauty of nature and forge lasting memories.",
    "Our campsite is an outdoor sanctuary, nestled in the heart of nature's beauty. Surrounded by picturesque landscapes, it caters to both campers and adventure-seekers. With campfires, scenic picnic spots, and updated facilities, it ensures a comfortable escape. Whether you crave adventure or serenity, our campsite beckons you to immerse yourself in the wonders of the natural world and create cherished memories.",
  ];
  const randomIndex = Math.floor(Math.random() * descriptionList.length);
  return descriptionList[randomIndex];
};

export const generateRandomInteger = (max: number) => {
  return Math.floor(Math.random() * (max + 1));
};
