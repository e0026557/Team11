import React, { useEffect, useState } from "react";
import CardListing from "../../shared/card/CardListing";
import { toast } from "react-toastify";
import axios from "axios";

const Campsites = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [campsitesList, setCampsitesList] = useState([]);


  // TODO: To replace sample data with data from API
  const listing = [
    {
      id: 1,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        '',
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 2,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        '',
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 3,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        '',
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 4,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        '',
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 5,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        '',
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 6,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        '',
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 7,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        '',
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 8,
      name: "Zip Tote Basket",
      detail: "White and black",
      href: "#",
      imgSrc:
        '',
      imgAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const campsitesResponse = await axios.get('https://922n74bivg.execute-api.ap-southeast-1.amazonaws.com/dev/api/campsites/SearchCampsites');
        console.log('campsiteResponse: ', campsitesResponse);

        if (campsitesResponse?.data) {
          setCampsitesList(campsitesResponse?.data);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log('error: ', error);
        toast.error(
          "An error occurred while retrieving campsites. Please try again.",
          {
            toastId: "campsites-error",
          }
        );
      }
    })();
  }, []);

  return (
    <>
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <CardListing cards={campsitesList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Campsites;
