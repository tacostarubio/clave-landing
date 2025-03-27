"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    storeConcept: "",
    numberOfStores: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your interest! Our team will contact you shortly.',
        });
        // Reset form after successful submission
        setFormData({
          fullName: "",
          email: "",
          storeConcept: "",
          numberOfStores: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to submit the form. Please try again later.',
      });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <header className="py-6 px-4 md:px-8 z-10 relative">
        <div className="container mx-auto">
          <Link href="/">
            <Image
              src="/clave-logo-goodsize.svg"
              alt="Clave Logo"
              width={120}
              height={40}
              className="h-8 w-auto invert"
            />
          </Link>
        </div>
      </header>

      {/* Background insights */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="insight-card absolute top-[10%] left-[5%] transform rotate-[-5deg] animate-float-slow">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 w-64">
            <h3 className="text-teal-400 text-sm font-semibold">Revenue Insight</h3>
            <p className="text-white text-xs">Push the 20 Pack churro upsell for groups of 3+ people</p>
          </div>
        </div>
        
        <div className="insight-card absolute top-[30%] right-[8%] transform rotate-[3deg] animate-float-medium">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 w-64">
            <h3 className="text-red-400 text-sm font-semibold">Staffing Alert</h3>
            <p className="text-white text-xs">Add one more cook from 6-7pm. Orders are coming in 2.4x faster than they&apos;re going out.</p>
          </div>
        </div>
        
        <div className="insight-card absolute bottom-[15%] left-[15%] transform rotate-[7deg] animate-float-fast">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 w-64">
            <h3 className="text-yellow-400 text-sm font-semibold">Inventory Alert</h3>
            <p className="text-white text-xs">Run a 2-hour flash sale on tenders. Usage is 31% below forecast.</p>
          </div>
        </div>
        
        <div className="insight-card absolute bottom-[35%] right-[20%] transform rotate-[-8deg] animate-float-medium">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 w-64">
            <h3 className="text-teal-400 text-sm font-semibold">Customer Insight</h3>
            <p className="text-white text-xs">Customer satisfaction is up with a 20% increase in positive reviews.</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center py-10 px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl w-full bg-black/60 backdrop-blur-md rounded-2xl border border-gray-700 p-8 md:p-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-teal-400">Clave</span> is almost ready for you!
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              For now, we are only accepting a select amount of users that will get unique access to Clave. Want to get Clave for your store(s)? 
              Sign up below and we'll contact you if you're selected.
            </p>
          </div>

          {submitStatus.success ? (
            <div className="text-center p-6 bg-teal-500/20 rounded-lg mb-6">
              <h2 className="text-2xl font-bold text-teal-400 mb-4">Submission Received!</h2>
              <p className="text-white text-lg">{submitStatus.message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="storeConcept"
                    value={formData.storeConcept}
                    onChange={handleChange}
                    placeholder="Franchise Brand(s)"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="numberOfStores"
                    value={formData.numberOfStores}
                    onChange={handleChange}
                    placeholder="Number of Stores"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              {submitStatus.message && !submitStatus.success && (
                <div className="p-3 bg-red-500/20 rounded-lg text-center">
                  <p className="text-red-400">{submitStatus.message}</p>
                </div>
              )}
              
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className={`px-12 py-4 ${isSubmitting ? 'bg-gray-500' : 'bg-teal-500 hover:bg-teal-400'} text-black font-medium rounded-lg transition-colors duration-300 text-center relative`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="opacity-0">Submit</span>
                      <span className="absolute inset-0 flex items-center justify-center">
                        Sending...
                      </span>
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-20px) rotate(-3deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(7deg); }
          50% { transform: translateY(-25px) rotate(4deg); }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 12s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 10s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
} 