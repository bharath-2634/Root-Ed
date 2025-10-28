import React from 'react';

const blogPosts = [
  {
    id: 1,
    category: 'EVENTS',
    date: '20 APR',
    image: 'https://img.freepik.com/free-photo/diverse-business-people-dinner-party_53876-98341.jpg?semt=ais_hybrid&w=740&q=80', // Replace with actual image URLs
    title: 'Media To Promote Your Upcoming Event',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    link: '#',
  },
  {
    id: 2,
    category: 'EVENTS',
    date: '20 APR',
    image: 'https://img.freepik.com/free-photo/diverse-business-people-dinner-party_53876-98341.jpg?semt=ais_hybrid&w=740&q=80', // Replace with actual image URLs
    title: 'Strategies For Cost-Effective Planning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    link: '#',
  },
  {
    id: 3,
    category: 'EVENTS',
    date: '20 APR',
    image: 'https://img.freepik.com/free-photo/diverse-business-people-dinner-party_53876-98341.jpg?semt=ais_hybrid&w=740&q=80', // Replace with actual image URLs
    title: 'Theme Ideas To Make Your Event',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    link: '#',
  },
  {
    id: 3,
    category: 'EVENTS',
    date: '20 APR',
    image: 'https://img.freepik.com/free-photo/diverse-business-people-dinner-party_53876-98341.jpg?semt=ais_hybrid&w=740&q=80', // Replace with actual image URLs
    title: 'Theme Ideas To Make Your Event',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    link: '#',
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 font-poppins">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className='w-full m-6'>
            {/* <p className="text-sm font-semibold text-purple-600 uppercase mb-2">Insights & Inspiration</p> */}
            <h2 className=" text-4xl md:text-5xl font-bold text-gray-900 text-center">
              Lets Discover Our Blog Post <br /> And News Content.
            </h2>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <span className="absolute top-4 left-4 bg-slate-100 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="absolute bottom-4 left-4 bg-white rounded-md px-3 py-1 shadow-sm text-sm font-medium">
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 text-base mb-4">{post.description}</p>
                <a href={post.link} className="text-primary font-semibold flex items-center hover:text-primary transition-colors">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;