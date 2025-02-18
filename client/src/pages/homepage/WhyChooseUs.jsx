import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12"> {/* Adjust styling as needed */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose GetHired?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"> {/* Grid layout */}
          {/* Feature 1 */}
          <div className="p-6 rounded-lg shadow-md">
            <i className="fas fa-chart-line text-4xl text-[#66b3ff] mb-4"></i> {/* Example icon */}
            <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
            <p>We've helped countless students and professionals achieve their interview goals.</p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-lg shadow-md">
            <i className="fas fa-users text-4xl text-[#66b3ff] mb-4"></i> {/* Example icon */}
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p>Our team of experienced interviewers and career coaches are dedicated to your success.</p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-lg shadow-md">
            <i className="fas fa-graduation-cap text-4xl text-[#66b3ff] mb-4"></i> {/* Example icon */}
            <h3 className="text-xl font-semibold mb-2">Comprehensive Resources</h3>
            <p>Access a wide range of resources, including practice questions, mock interviews, and personalized feedback.</p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-lg shadow-md lg:block hidden"> {/* Hidden on smaller screens */}
            <i className="fas fa-hand-holding-usd text-4xl text-[#66b3ff] mb-4"></i> {/* Example icon */}
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p>We offer flexible pricing plans to suit your needs and budget.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;