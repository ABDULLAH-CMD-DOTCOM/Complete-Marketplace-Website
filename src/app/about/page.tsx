import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className=" text-black py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-blue-500 ">
            About Morent Car Company
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Welcome to Morent, where trust, innovation, and excellence drive our mission to transform the automotive world. We don t just make cars—we shape experiences.
          </p>
         
        </div>
      </section>

      {/* About Company Section */}
      <section className="px-8 py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold  text-blue-500 mb-8">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At Morent, we re more than just a car company. We re a team of passionate engineers, designers, and visionaries committed to creating vehicles that transform the way people experience the world.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Since our inception, Morent has been dedicated to redefining automotive standards. Our cars aren’t just machines; they are symbols of innovation, craftsmanship, and sustainability. We blend cutting-edge technology with beautiful design to create vehicles that deliver unparalleled performance and comfort.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="bg-blue-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold  text-blue-500 mb-8">
            Our Mission & Vision
          </h2>
          <div className="md:flex justify-between gap-10">
            <div className="flex-1 bg-white shadow-xl p-8 rounded-lg mb-6 md:mb-0">
              <h3 className="text-xl font-extrabold text-black mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To push the boundaries of automotive design, engineering, and technology, ensuring that every car is an epitome of sustainability, performance, and comfort.
              </p>
            </div>
            <div className="flex-1 bg-white shadow-xl p-8 rounded-lg">
              <h3 className="text-xl font-extrabold text-black mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                We envision a future where cars are not just machines but integral parts of a sustainable and interconnected world, enhancing lives while protecting the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Quality */}
      <section className="px-8 py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold  text-blue-500 mb-8">
            Our Commitment to Excellence
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At Morent, we don t just make cars; we craft experiences that last a lifetime. Every vehicle that leaves our production line is a testament to our relentless pursuit of perfection. From safety features to cutting-edge technology and sustainable materials, we ensure that every detail meets the highest standards.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-blue-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold  text-blue-500 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What makes Morent cars different?</h3>
              <p className="text-lg text-gray-700">
                Morent cars combine cutting-edge technology with exceptional design, ensuring both performance and sustainability. We use high-quality materials and advanced engineering techniques to create a seamless driving experience.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">How do I rent a car from Morent?</h3>
              <p className="text-lg text-gray-700">
                Renting a car from Morent is simple. Browse our available cars on the website, choose your preferred model, select your rental dates, and proceed with booking. We offer flexible rental options to suit your needs.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What is the warranty period for Morent cars?</h3>
              <p className="text-lg text-gray-700">
                All Morent vehicles come with a standard 3-year warranty that covers major components. We also offer extended warranty options for added peace of mind.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Are Morent cars environmentally friendly?</h3>
              <p className="text-lg text-gray-700">
                Yes, sustainability is at the core of our design and production process. We use eco-friendly materials and focus on fuel-efficient technologies that reduce emissions, making our cars a greener choice for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Credit Section */}
      <div className="mt-10 text-center text-lg text-gray-700">
        <p>
          Website developed by <span className="font-semibold">Abdullah</span>.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
