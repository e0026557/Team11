import React, { useState } from "react";
import Modal from "../modal/Modal";

export interface ICardProps {
  id: number;
  name: string;
  detail: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
}

const Card = (props: { card: ICardProps }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div key={props.card.id}>
        <div className="relative">
          <div className="relative h-72 w-full overflow-hidden rounded-lg">
            <img
              src={props.card.imgSrc}
              alt={props.card.imgAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative mt-4">
            <h3 className="text-sm font-medium text-gray-900">
              {props.card.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              <strong>Area: </strong>
              {props.card.detail}
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
            onClick={() => setOpen(true)}
          >
            Reviews<span className="sr-only"> {props.card.name}</span>
          </button>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default Card;
