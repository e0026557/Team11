import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  generateRandomImage,
  generateRandomInteger,
} from "../../shared/util/util";
import { toast } from "react-toastify";
import axios from "axios";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CampsiteDetail = () => {
  const navigate = useNavigate();
  const campsiteId = useParams().campsiteId;
  const [campsiteDetails, setCampsiteDetails] = useState({
    name: "Campsite",
    description:
      "Nestled in a pristine natural setting, our campsite offers a tranquil escape from the hustle and bustle of everyday life. Surrounded by lush greenery and towering trees, it provides a serene space for outdoor enthusiasts to set up tents or RVs. Campfires, picnic tables, and clean, modern facilities ensure a comfortable and memorable camping experience. Whether you're seeking adventure or simply a peaceful retreat, our campsite offers the perfect backdrop for enjoying nature and creating lasting memories with family and friends.",
  });

  const reviews = {
    average: generateRandomInteger(5),
    totalCount: generateRandomInteger(3000),
  };

  useEffect(() => {
    (async () => {
      try {
        // TODO: Add axios call to retrieve campsite details and ratings
        // const campsiteDetailsResponse = await axios.post();
      } catch (error) {
        console.log("error: ", error);
        toast.error(
          "An error occurred while retrieving campsite details. Please try again.",
          {
            toastId: "campsiteDetails-retrieve-error",
          }
        );
      }
    })();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Campsite details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {campsiteDetails.name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <div className="flex items-center">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <div>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-yellow-400"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                </div>
                <p className="ml-2 text-sm text-gray-500">
                  {reviews.totalCount} reviews
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">
                {campsiteDetails.description}
              </p>
            </div>
          </section>
        </div>

        {/* Campsite image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <img
              src={generateRandomImage()}
              alt="Campsite area"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Apply permit */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <div className="mt-10 flex gap-3">
              <button
                type="button"
                className="flex w-50 items-center justify-center rounded-md border border-transparent bg-gray-500 px-4 py-2 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                onClick={() => navigate("/campsites")}
              >
                Back to campsites
              </button>
              <button
                type="button"
                className="flex w-50 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                onClick={() => navigate("/apply")}
              >
                Apply permit
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CampsiteDetail;
