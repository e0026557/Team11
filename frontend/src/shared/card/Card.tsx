import React from "react";

export interface ICardProps {
  id: number;
  name: string;
  detail: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
}

const Card = (props: {card: ICardProps}) => {
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
            <p className="mt-1 text-sm text-gray-500">{props.card.detail}</p>
          </div>
          <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
          </div>
        </div>
        <div className="mt-6">
          <a
            href={props.card.href}
            className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
          >
            Reserve<span className="sr-only">, {props.card.name}</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
