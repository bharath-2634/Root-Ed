import React from 'react';

const companyLogos = [
    // Replace these placeholder URLs with your actual logo imports or public URLs
    'https://cdn.worldvectorlogo.com/logos/hopin-io.svg',
    'https://cdn.worldvectorlogo.com/logos/databricks-logo.svg',
    'https://cdn.worldvectorlogo.com/logos/medium-2.svg',
    'https://cdn.worldvectorlogo.com/logos/basecamp-2.svg',
    'https://cdn.worldvectorlogo.com/logos/airwallex.svg',
    'https://cdn.worldvectorlogo.com/logos/pipedrive.svg',
    'https://cdn.worldvectorlogo.com/logos/culture-amp-logo.svg',
    'https://cdn.worldvectorlogo.com/logos/lattice.svg',
    'https://cdn.worldvectorlogo.com/logos/launchdarkly.svg',
    'https://cdn.worldvectorlogo.com/logos/treehouse.svg', // Assuming a tree-like logo for Treehouse
    'https://cdn.worldvectorlogo.com/logos/rippling.svg',
    'https://cdn.worldvectorlogo.com/logos/basecamp-2.svg', // Duplicated for demonstration as in image
    
];

const LovedByLearners = () => {
    return (
        <section className="py-16 md:py-24 bg-white font-poppins">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-12 md:mb-16 leading-tight">
                    Loved by 200k+ <span className="text-primary">learners</span>
                </h2>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 items-center justify-items-center">
                    {companyLogos.map((logoUrl, index) => (
                        <div key={index} className="w-32 sm:w-40 md:w-48 flex items-center justify-center p-2">
                            <img 
                                src={logoUrl} 
                                alt={`Company logo ${index + 1}`} 
                                className="w-full h-auto object-contain grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LovedByLearners;
