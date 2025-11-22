import React, { useState } from "react";
import CartItem from "@/components/common/CartItems";
import NavHeader from "@/components/common/navHeader";
import mern from "../../assets/mern.jpg";
import { PayPalButtons } from "@paypal/react-paypal-js";
const CartPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "AI Automation: Build LLM Apps & AI Agents",
      author: "Arnold Oberleiter",
      rating: 4.7,
      reviews: "6,263",
      hours: "14.5 total hours",
      lectures: 92,
      level: "All Levels",
      price: 399,
      originalPrice: 799,
      tag: "Updated Recently",
      thumbnail: mern,
    },
    {
      id: 2,
      title: "AI Automation: Build LLM Apps & AI Agents",
      author: "Arnold Oberleiter",
      rating: 4.7,
      reviews: "6,263",
      hours: "14.5 total hours",
      lectures: 92,
      level: "All Levels",
      price: 399,
      originalPrice: 799,
      tag: "Updated Recently",
      thumbnail: mern,
    },
    {
      id: 3,
      title: "AI Automation: Build LLM Apps & AI Agents",
      author: "Arnold Oberleiter",
      rating: 4.7,
      reviews: "6,263",
      hours: "14.5 total hours",
      lectures: 92,
      level: "All Levels",
      price: 399,
      originalPrice: 799,
      tag: "Updated Recently",
      thumbnail: mern,
    },
  ]);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const [showPayPal, setShowPayPal] = useState(false);
  return (
    <>
      <div className="w-full ">
        <NavHeader />
      </div>

      <div className="max-w-7xl mx-auto mt-10 px-4">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">
              {cart.length} Course in Cart
            </h2>

            <div className="space-y-6">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} onRemove={removeItem} />
              ))}
            </div>
          </div>

          {/* Price Summary */}
          <div className="border rounded-lg p-6 shadow-md h-fit">
            <h3 className="text-xl font-semibold mb-4">Total:</h3>

            <p className="text-3xl font-bold text-gray-900">₹{totalPrice}</p>

            <p className="text-gray-500 text-sm">You won't be charged yet</p>

            <button
              onClick={() => {
                setShowPayPal(true);
                console.log("entered");
              }}
              className="w-full mt-5 bg-[#6EC59B] hover:bg-[#5AB184] text-white py-3 rounded-lg font-semibold text-lg transition"
            >
              Proceed to Checkout →
            </button>
          </div>
        </div>

        {/* Paypal modal */}
        {showPayPal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] sm:w-[400px] relative">
            
              <button
                onClick={() => setShowPayPal(false)}
                className="absolute top-2 right-2 text-gray-600 text-xl hover:text-black"
              >
                ✕
              </button>

              <h2 className="text-xl font-semibold mb-4 text-center">
                Complete Your Payment
              </h2>

              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: 1,
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    alert(
                      "Payment successful by " + details.payer.name.given_name
                    );
                    setShowPayPal(false);
                  });
                }}
                onError={(err) => {
                  console.error(err);
                  alert("Payment failed");
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
