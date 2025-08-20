import React from 'react';

type CardWithImageExampleProps = {
  image?: string;
  title?: string;
};

export default function CardWithImageExample({
  image,
  title,
}: CardWithImageExampleProps) {
  return (
      <div
        className="w-72 bg-white shadow-md">
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={image}
            alt="" />
        </a>
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight ">
            {title}
          </h5>
          
      
        </div>
      </div>
  );
}