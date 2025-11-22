import FAQSection from '@/components/common/faq'
import Footer from '@/components/common/footer'
import NavHeader from '@/components/common/navHeader'
import TestimonialCarousel from '@/components/common/testimonial'
import EventsHeader from '@/components/events-view/eventsHeader'
import BlogSection from '@/components/events-view/eventsPosts'
import EventsVideo from '@/components/events-view/eventsVideo'
import HomeVideo from '@/components/home-view/homeVideo'
import React from 'react'

const Events = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className="w-full ">
            <NavHeader/>
        </div>
        <EventsHeader/>
        <BlogSection/>
        {/* <EventsVideo/>
        <EventsVideo/> */}
        {/* <TestimonialCarousel/> */}
        <FAQSection/>
        <Footer/>
    </div>
  )
}

export default Events
