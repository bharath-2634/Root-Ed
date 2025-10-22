import React from 'react';

const LearnSmarterSection = () => {
    return (
        <section className='w-full lg:py-16 md:py-16 sm:py-13 px-4 md:px-8 lg:px-16 bg-gray-900 text-white font-poppins relative overflow-hidden'>
            <div className="absolute inset-0 z-0 opacity-20" 
                 style={{ 
                    backgroundImage: `linear-gradient(to right, #343a40 1px, transparent 1px),
                                      linear-gradient(to bottom, #343a40 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                 }}>
            </div>

            <div className='relative z-10 max-w-4xl mx-auto text-left py-12'>
                
                <h2 className='text-3xl sm:text-3xl md:text-5xl font-extrabold  mb-6 text-primary leading-loose'>
                    Learn to study smarter <br className='hidden sm:block'/> and effectively
                </h2>

                <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
                    Acquire in demand skills ✏️ through Focotech's
                    comprehensive learning platform, designed to
                    provide you with necessary knowledge 💡
                    & tools 🧑‍💻 for career advancement.
                </p>
            </div>
        </section>
    );
};

export default LearnSmarterSection;
