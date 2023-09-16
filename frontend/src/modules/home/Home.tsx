import React from "react";
import CardListing from "../../shared/card/CardListing";

const Home = () => {
  // TODO: To replace sample data with data from API
  const listing = [
    {
      id: 1,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 2,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 3,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 4,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 5,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 6,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 7,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 8,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
  ];

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <CardListing cards={listing} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
