import React, { useState, useEffect, useRef } from 'react';

const MainContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const autoRotateRef = useRef(null);

  // Replace with your own image URLs or use the Unsplash ones
  const slides = [
    {
      id: 1,
      src: 'https://tse1.mm.bing.net/th/id/OIP.41OmFnyJMnCrm_N41tBargHaEo?rs=1&pid=ImgDetMain&o=7&rm=3',
      alt: 'Casual wear',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=600&h=400&fit=crop',
      alt: 'Summer dress',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop',
      alt: 'Winter jacket',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=400&fit=crop',
      alt: 'Formal attire',
    },
  ];

  // Move to a specific slide
  const moveToSlide = (index) => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.children[0]?.getBoundingClientRect().width || 0;
      trackRef.current.style.transform = `translateX(-${slideWidth * index}px)`;
      setCurrentIndex(index);
    }
  };

  // Next slide
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    moveToSlide(newIndex);
  };

  // Previous slide
  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(newIndex);
  };

  // Auto‑rotate setup
  useEffect(() => {
    autoRotateRef.current = setInterval(nextSlide, 3000);

    // Cleanup on unmount
    return () => clearInterval(autoRotateRef.current);
  }, [currentIndex]); // Re‑run when currentIndex changes to reset interval

  // Pause auto‑rotate on hover
  const pauseAutoRotate = () => clearInterval(autoRotateRef.current);
  const resumeAutoRotate = () => {
    autoRotateRef.current = setInterval(nextSlide, 3000);
  };

  // Handle window resize – recalc position without animation glitch
  useEffect(() => {
    const handleResize = () => {
      if (trackRef.current) {
        const slideWidth = trackRef.current.children[0]?.getBoundingClientRect().width || 0;
        trackRef.current.style.transition = 'none';
        trackRef.current.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        // Force reflow
        trackRef.current.offsetHeight;
        trackRef.current.style.transition = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  // Initial positioning after first render
  useEffect(() => {
    moveToSlide(currentIndex);
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Introduction Section */}
      <section className="mb-12 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-white">
          Clothing ni BRY BASUUUU
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto md:mx-0 text-yellow-300">
          etu ang aking clothing website ang araw nagyunb ay march 10 2026 in the future pag aku ay pumaldo sa bohay 
          ay mag nenegusyu aku ng clothing business hehehehe micro credentialk training atm
        </p>
      </section>

      {/* Carousel Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center md:text-left text-white">
          Trending Now
        </h2>

        <div
          className="relative w-full overflow-hidden rounded-2xl shadow-xl"
          onMouseEnter={pauseAutoRotate}
          onMouseLeave={resumeAutoRotate}
        >
          {/* Carousel Track */}
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => moveToSlide(index)}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  index === currentIndex ? 'bg-indigo-600' : 'bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;