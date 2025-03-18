import React from "react";

const ServiceCard = ({ id, name, quantity, img }) => {
  return (
    <div className="text-center p-6 bg-white shadow-lg rounded-lg">
      <img className="w-24 h-24 mx-auto" src={img} alt={name} />
      <h3 className="mt-4 text-2xl font-semibold text-gray-800">{name}</h3>
      <p className="mt-2 text-lg text-gray-600">{quantity}</p>
    </div>
  );
};

export default ServiceCard;
