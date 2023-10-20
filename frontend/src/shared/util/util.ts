export const generateRandomImage = () => {
  const imageList = [
    "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcHNpdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1526491109672-74740652b963?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbXBzaXRlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1557292916-eaa52c7e5939?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbXBzaXRlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1636569999480-7eed231a7633?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbXBzaXRlfGVufDB8fDB8fHww",
  ];
  const randomIndex = Math.floor(Math.random() * 5);
  return imageList[randomIndex];
};