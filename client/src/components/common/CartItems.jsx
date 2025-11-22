import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="border-b pb-4 flex gap-4">
      {/* Thumbnail */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-40 h-24 object-cover rounded-md"
      />

      {/* Details */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
        <p className="text-sm text-gray-600">By {item.author}</p>

        <div className="flex items-center gap-3 mt-1">
          <span className="text-green-600 bg-green-100 px-2 py-1 text-xs rounded-md">
            {item.tag}
          </span>
          <span className="text-sm text-yellow-600 font-medium">
            {item.rating} ⭐
          </span>
          <span className="text-sm text-gray-600">
            ({item.reviews} reviews)
          </span>
        </div>

        <div className="mt-2 flex items-center gap-4">
          <button
            onClick={() => onRemove(item.id)}
            className="text-purple-600 text-sm hover:underline"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col justify-start items-end">
        <span className="text-xl font-bold text-gray-900">₹{item.price}</span>
        {item.originalPrice && (
          <span className="text-sm line-through text-gray-500">
            ₹{item.originalPrice}
          </span>
        )}
      </div>
    </div>
  );
};

export default CartItem;
