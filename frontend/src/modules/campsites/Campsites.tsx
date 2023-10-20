import React, { useEffect, useState } from "react";
import CardListing from "../../shared/card/CardListing";
import { toast } from "react-toastify";
import axios from "axios";
import Spinner from "../../shared/spinner/Spinner";

const Campsites = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [campsitesList, setCampsitesList] = useState([]);

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
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
          {
            isLoading ? <Spinner /> : null
          }
          <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
            {
              !isLoading ? <CardListing cards={campsitesList} /> : null
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Campsites;
