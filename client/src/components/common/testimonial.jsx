import React from "react";
import { motion } from "framer-motion";

// === TESTIMONIAL DATA ===
const testimonials = [
  {
    quote:
      "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    name: "Isabella Rodriguez",
    title: "CEO and Co-founder of ABC Company",
    avatarColor: "bg-orange-400",
  },
  {
    quote:
      "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    name: "Gabrielle Williams",
    title: "CEO and Co-founder of ABC Company",
    avatarColor: "bg-pink-400",
  },
  {
    quote:
      "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
    name: "Victoria Thompson",
    title: "CEO and Co-founder of ABC Company",
    avatarColor: "bg-purple-400",
  },
  {
    quote:
      "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
    name: "John Peter",
    title: "CEO and Co-founder of ABC Company",
    avatarColor: "bg-amber-700",
  },
  {
    quote:
      "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.",
    name: "Natalie Martinez",
    title: "CEO and Co-founder of ABC Company",
    avatarColor: "bg-indigo-400",
  },
];

// === TESTIMONIAL CARD ===
const TestimonialCard = ({ quote, name, title, avatarColor }) => (
  <div className="flex-shrink-0 w-80 p-6 bg-white rounded-xl shadow-lg m-4 hover:shadow-2xl transition-shadow duration-300">
    <blockquote className="text-2xl font-serif text-indigo-500 mb-4 leading-none">
      “
    </blockquote>
    <p className="text-gray-700 text-sm mb-6 h-20 overflow-hidden">{quote}</p>
    <div className="flex items-center">
      <div
        className={`w-10 h-10 ${avatarColor} rounded-full flex items-center justify-center text-white font-bold text-sm mr-3`}
      >
        {name.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-gray-900 text-sm">{name}</p>
        <p className="text-xs text-gray-500">{title}</p>
      </div>
    </div>
  </div>
);

const ScrollingRow = ({ direction = "left" }) => {
  const duplicatedList = [...testimonials, ...testimonials]; // duplicate to make loop seamless
  const scrollWidth = duplicatedList.length * 22; // adjust spacing

  return (
    <div className="overflow-hidden w-full relative">
      <motion.div
        className="flex"
        animate={{
          x:
            direction === "left"
              ? ["0%", "-50%"]
              : ["-50%", "0%"], // move half width to make it seamless
        }}
        transition={{
          duration: 30, // adjust for speed
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          width: `${scrollWidth}rem`,
        }}
      >
        {duplicatedList.map((testimonial, index) => (
          <TestimonialCard key={`${direction}-${index}`} {...testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

// === MAIN COMPONENT ===
const TestimonialCarousel = () => {
  return (
    <section className="py-16 bg-white overflow-hidden relative font-poppins px-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">

        <h2 className='lg:text-[2.4rem] md:text-[1.8rem] sm:text-[1.8rem] text-[1.8rem] font-semibold text-primary_nav text-center m-6'>Words of praise from others <br /><span className='bg-white lg:text-[2.5rem] md:text-[1.8rem] sm:text-[1.8rem] text-[1.8 rem] p-1 text-primary'>about our presence.</span></h2>

      </div>

      {/* === Two Opposite Rows === */}
      <div className="space-y-10 relative">
        {/* Row 1 → scrolls left */}
        <ScrollingRow direction="left" />
        {/* Row 2 → scrolls right */}
        <ScrollingRow direction="right" />

        {/* Gradient Fade Edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
