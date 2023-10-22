import React, { useState } from "react";
import { generateRandomImage } from "../util/util";
import { useNavigate } from "react-router-dom";

export interface ICampsiteCardProps {
  campsiteId: number;
  userId: number;
  address: string;
  campsiteName: string;
  size: number;
  remarks: string;
}

const Card = (props: { card: ICampsiteCardProps }) => {
  const navigate = useNavigate();

  return (
    <>
      <div key={props.card.campsiteId}>
        <div className="relative">
          <div className="relative h-72 w-full overflow-hidden rounded-lg">
            <img
              src={generateRandomImage()}
              alt="Campsite area"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative mt-4">
            <h3 className="text-sm font-medium text-gray-900">
              {props.card.campsiteName}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              <strong>Address: </strong>
              {props.card.address}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              <strong>Remarks: </strong>
              {props.card.remarks}
            </p>
          </div>
          <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="button"
            className="w-full rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
            onClick={() => navigate(`/campsites/${props.card.campsiteId}`)}
          >
            More Info<span className="sr-only"> {props.card.campsiteName}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
