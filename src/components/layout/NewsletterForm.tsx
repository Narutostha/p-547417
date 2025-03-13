import React, { useState } from "react";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this to your backend
      console.log("Subscribing email:", email);
      setIsSubmitted(true);
      setEmail("");

      // Reset the success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-[#F3F4F6] p-6 rounded-lg max-w-md mx-auto my-8">
      <h3 className="text-[#01330A] text-xl font-bold mb-4">
        Join Our Newsletter
      </h3>
      <p className="text-[#4B5563] mb-4">
        Stay updated with our latest sustainable products and exclusive offers.
      </p>

      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Thank you for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="px-4 py-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A432E]"
          />
          <button
            type="submit"
            className="bg-[#1A432E] text-white font-medium py-2 px-4 rounded-md hover:bg-[#15371F] transition-colors"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
