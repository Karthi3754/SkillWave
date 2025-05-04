import React, { useState, useEffect } from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = 2; // Number of testimonials visible at once
  
  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        (prevIndex + 1) % (testimonialsData.length - visibleTestimonials + 1)
      );
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [testimonialsData.length]);
  
  // Handle manual navigation
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 
        ? testimonialsData.length - visibleTestimonials 
        : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % (testimonialsData.length - visibleTestimonials + 1)
    );
  };
  
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">What our students say</h2>
        
        <div className="testimonials__carousel">
          <button 
            className="testimonials__nav testimonials__nav--prev" 
            onClick={handlePrev}
            aria-label="Previous testimonials"
          >
            &#8249;
          </button>
          
          <div className="testimonials__track">
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial ${
                  index >= activeIndex && index < activeIndex + visibleTestimonials
                    ? "testimonial--active"
                    : ""
                }`}
                style={{
                  transform: `translateX(${(index - activeIndex) * 100}%)`,
                }}
              >
                <div className="testimonial__content">
                  <div className="testimonial__quote">
                    <p>{testimonial.message}</p>
                  </div>
                  
                  <div className="testimonial__footer">
                    <div className="testimonial__avatar">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="testimonial__info">
                      <h4 className="testimonial__name">{testimonial.name}</h4>
                      <p className="testimonial__position">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="testimonials__nav testimonials__nav--next" 
            onClick={handleNext}
            aria-label="Next testimonials"
          >
            &#8250;
          </button>
        </div>
        
        <div className="testimonials__dots">
          {Array.from({ length: testimonialsData.length - visibleTestimonials + 1 }).map((_, index) => (
            <button
              key={index}
              className={`testimonials__dot ${
                activeIndex === index ? "testimonials__dot--active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;