import React from "react";
import Card, { ICampsiteCardProps } from "./Card";


const CardListing = (props: {cards: ICampsiteCardProps[]}) => {

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {
          props.cards.map((item) => (<Card card={item} key={item.campsiteId} />))
        }
      </div>
    </>
  );
};

export default CardListing;
