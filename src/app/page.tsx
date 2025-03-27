"use client"

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-black text-white flex items-center justify-center min-h-[85vh]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/clave-logo-white.png"
              alt="Clave Logo"
              width={220}
              height={80}
              className="h-20 w-auto mb-14"
              priority
            />
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full mx-auto" style={{
              background: "linear-gradient(135deg, #70cef4 0%, #49a5d3 30%, #0979b9 70%, #005fa2 100%)",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
              <div className="p-10 md:p-16 backdrop-blur-sm backdrop-brightness-75">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-6 sm:mb-8 text-white max-w-4xl mx-auto leading-tight">
                  Your AI-powered co-store operator
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto mb-8 sm:mb-12">
                  Turn raw franchise data into real-time, actionable insights with Clave&apos;s AI-powered platform for QSR operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-20">
                  <a href="/form" className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center justify-center text-sm sm:text-base lg:text-lg">
                    Start with 3 months free <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                  <a href="/form" className="px-6 sm:px-10 py-3 sm:py-4 rounded-full border border-white hover:bg-white hover:text-black hover:border-transparent transition-colors text-sm sm:text-base lg:text-lg">
                    Book a Demo
                  </a>
                </div>
                
                {/* Insights Dashboard Demo Section */}
                <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white my-12">
                  {/* Browser Header */}
                  <div className="bg-gray-100 border-b border-gray-200 p-3 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-white rounded-md px-4 py-1 text-sm text-gray-600 shadow-sm border border-gray-200 flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>insights.clave.ai</span>
                      </div>
                    </div>
                  </div>

                  {/* Browser Content */}
                  <div className="p-4 sm:p-6 md:p-8 bg-gray-50">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                      {/* First Insight Card */}
                      <div className="bg-white rounded-xl shadow-md border border-gray-100">
                        <div className="p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 border-b border-gray-100">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#A9CDCB]/20 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-base sm:text-lg text-primary">Revenue Insight</h3>
                        </div>
                        
                        <div className="p-3 sm:p-4">
                          <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">Push the 20 Pack churro upsell</h3>
                          <p className="mb-4 text-sm sm:text-base text-gray-600">Suggest the "family size" for groups of 3+ people</p>
                          
                          <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-medium text-gray-500">Projected impact:</p>
                          <div className="space-y-2">
                            <div className="bg-gray-900 p-2 sm:p-3 rounded-lg">
                              <p className="text-xs sm:text-sm text-gray-400">Hourly revenue</p>
                              <p className="text-base sm:text-xl font-bold text-green-400">+$98.40 ↗</p>
                            </div>
                            <div className="bg-gray-900 p-2 sm:p-3 rounded-lg">
                              <p className="text-xs sm:text-sm text-gray-400">Store perf.</p>
                              <p className="text-base sm:text-xl font-bold text-green-400">Good ↗</p>
                            </div>
                            <div className="bg-gray-900 p-2 sm:p-3 rounded-lg">
                              <p className="text-xs sm:text-sm text-gray-400">Avg. TPT</p>
                              <p className="text-base sm:text-xl font-bold text-white">3:17 →</p>
                            </div>
                          </div>
                          
                          <button className="w-full p-2 sm:p-3 bg-[#A9CDCB] text-primary font-medium rounded-lg mt-3 sm:mt-4 mb-2 hover:bg-[#98bcba] transition-colors text-sm sm:text-base">
                            IMPLEMENT
                          </button>
                          <button className="w-full p-2 sm:p-3 text-primary font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm sm:text-base">
                            Learn more
                          </button>
                        </div>
                      </div>

                      {/* Second Insight Card */}
                      <div className="bg-white rounded-xl shadow-md border border-gray-100">
                        <div className="p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 border-b border-gray-100">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-base sm:text-lg text-primary">Staffing Alert</h3>
                        </div>
                        
                        <div className="p-3 sm:p-4">
                          <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">Add one more cook from 6-7pm</h3>
                          <p className="mb-4 text-sm sm:text-base text-gray-600">Orders are coming in 2.4x faster than they're going out</p>
                          
                          <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-medium text-gray-500">Projected impact:</p>
                          <div className="space-y-2">
                            <div className="bg-gray-900 p-2 sm:p-3 rounded-lg">
                              <p className="text-xs sm:text-sm text-gray-400">Lost revenue</p>
                              <p className="text-base sm:text-xl font-bold text-red-400">-$173 ↘</p>
                            </div>
                            <div className="bg-gray-900 p-2 sm:p-3 rounded-lg">
                              <p className="text-xs sm:text-sm text-gray-400">Wait time</p>
                              <p className="text-base sm:text-xl font-bold text-red-400">12:40 ↘</p>
                            </div>
                            <div className="bg-gray-900 p-2 sm:p-3 rounded-lg">
                              <p className="text-xs sm:text-sm text-gray-400">Customer sat.</p>
                              <p className="text-base sm:text-xl font-bold text-red-400">Low ↘</p>
                            </div>
                          </div>
                          
                          <button className="w-full p-2 sm:p-3 bg-[#A9CDCB] text-primary font-medium rounded-lg mt-3 sm:mt-4 mb-2 hover:bg-[#98bcba] transition-colors text-sm sm:text-base">
                            IMPLEMENT
                          </button>
                          <button className="w-full p-2 sm:p-3 text-primary font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm sm:text-base">
                            Learn more
                          </button>
                        </div>
                      </div>

                      {/* Third Insight Card */}
                      <div className="bg-white rounded-xl shadow-md border border-gray-100">
                        <div className="p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 border-b border-gray-100">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-base sm:text-lg text-primary">Inventory Alert</h3>
                        </div>
                        
                        <div className="p-3 sm:p-4">
                          <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">Run a 2-hour flash sale on tenders</h3>
                          <p className="mb-4 text-sm sm:text-base text-gray-600">Chicken tenders usage is 31% below forecast</p>
                          
                          <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-medium text-gray-500">Projected impact:</p>
                          <div className="space-y-2">
                            <div className="bg-gray-900 p-2 sm:p-3 rounded-lg">
                              <p className="text-xs sm:text-sm text-gray-400">Waste saved</p>
                              <p className="text-base sm:text-xl font-bold text-green-400">+$87.50 ↗</p>
                            </div>
                            <div className="bg-gray-900 p-2 sm:p-3 rounded-lg">
                              <p className="text-xs sm:text-sm text-gray-400">Inventory</p>
                              <p className="text-base sm:text-xl font-bold text-green-400">Fresh ↗</p>
                            </div>
                            <div className="bg-gray-900 p-2 sm:p-3 rounded-lg">
                              <p className="text-xs sm:text-sm text-gray-400">Foot traffic</p>
                              <p className="text-base sm:text-xl font-bold text-green-400">+8% ↗</p>
                            </div>
                          </div>
                          
                          <button className="w-full p-2 sm:p-3 bg-[#A9CDCB] text-primary font-medium rounded-lg mt-3 sm:mt-4 mb-2 hover:bg-[#98bcba] transition-colors text-sm sm:text-base">
                            IMPLEMENT
                          </button>
                          <button className="w-full p-2 sm:p-3 text-primary font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm sm:text-base">
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-2">
                      <p className="text-xs sm:text-sm text-gray-500">Next update in 56 minutes</p>
                      <a href="#" className="text-primary font-medium flex items-center hover:text-gray-600 transition-colors text-sm sm:text-base">
                        View All Insights <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-base font-mono text-center mb-12 text-gray-500 tracking-wide">TRUSTED BY FRANCHISE OPERATORS OF</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center max-w-5xl mx-auto pl-4 md:px-4">
            <div className="h-6 sm:h-16 w-full relative grayscale hover:grayscale-0 transition-all">
              <Image
                src="/images/partners/dunkin.png"
                alt="Dunkin'"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-16 sm:h-20 w-full relative grayscale hover:grayscale-0 transition-all">
              <Image
                src="/images/partners/bonchon.png"
                alt="Bon Chon"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-16 sm:h-20 w-full relative grayscale hover:grayscale-0 transition-all">
              <Image
                src="/images/partners/churromania.png"
                alt="Churromania"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-16 sm:h-20 w-full relative grayscale hover:grayscale-0 transition-all">
              <Image
                src="/images/partners/cinnabon.png"
                alt="Cinnabon"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-16 sm:h-20 w-full relative grayscale hover:grayscale-0 transition-all">
              <Image
                src="/images/partners/auntieannes.png"
                alt="Auntie Anne's"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-16 sm:h-20 w-full relative grayscale hover:grayscale-0 transition-all">
              <Image
                src="/images/partners/gogreen.png"
                alt="Go Green"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-16 sm:h-20 w-full relative grayscale hover:grayscale-0 transition-all">
              <Image
                src="/images/partners/jreck.png"
                alt="JRECK Subs"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-16 sm:h-20 w-full relative grayscale hover:grayscale-0 transition-all">
              <Image
                src="/images/partners/Wienerschnitzel.png"
                alt="Wienerschnitzel"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-8 pb-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-200 to-gray-300 text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16 text-black">Transform Your QSR Operations</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 border border-primary/20 rounded-xl bg-primary">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path><path d="M16 16a2 2 0 0 1 2 2v-5"></path><path d="M21 21a2 2 0 0 1-2-2"></path><path d="m9 3 2 2 2-2"></path><path d="M3 7h10"></path><path d="M3 11h10"></path><path d="M3 15h6"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Automated Data Collection</h3>
              <p className="text-gray-300">Automatically gather data from all your franchise locations into one centralized platform.</p>
            </div>
            
            <div className="p-6 border border-primary/20 rounded-xl bg-primary">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Real-time Insights</h3>
              <p className="text-gray-300">Get immediate visibility into performance metrics and operational efficiency across all locations.</p>
            </div>
            
            <div className="p-6 border border-primary/20 rounded-xl bg-primary">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered Recommendations</h3>
              <p className="text-gray-300">Receive actionable recommendations to optimize operations, increase revenue, and reduce costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-32 px-4 md:px-6 lg:px-8 bg-black text-white relative isolate overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-20 text-white max-w-3xl mx-auto break-words">
            What Operators Say<br />About Clave
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {/* Luis */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20 p-8 text-white transition-all duration-300 hover:bg-white/15 hover:shadow-xl transform hover:-translate-y-1">
                <div className="flex items-center gap-3 sm:gap-5 mb-5">
                  <div className="h-16 w-16 sm:h-18 sm:w-18 rounded-full overflow-hidden bg-accent">
                    <Image
                      src="/images/testimonials/luis.png"
                      alt="Luis"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg sm:text-xl">Luis</h4>
                    <p className="text-sm text-teal-200">220+ stores</p>
                  </div>
                </div>
                <p className="text-white text-base sm:text-lg">"Clave certainly does a lot more than the typical franchisee does. And a lot better. It's a great tool!"</p>
              </div>
              
              {/* Kim */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20 p-8 text-white transition-all duration-300 hover:bg-white/15 hover:shadow-xl transform hover:-translate-y-1">
                <div className="flex items-center gap-3 sm:gap-5 mb-5">
                  <div className="h-16 w-16 sm:h-18 sm:w-18 rounded-full overflow-hidden bg-accent">
                    <Image
                      src="/images/testimonials/kim.png"
                      alt="Kim"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg sm:text-xl">Kim</h4>
                    <p className="text-sm text-teal-200">95 stores</p>
                  </div>
                </div>
                <p className="text-white text-base sm:text-lg">"Without Clave, I spend 15 hours a WEEK collecting and analyzing data into an excel and still struggle with making any sense of it."</p>
              </div>
              
              {/* Fernando */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20 p-8 text-white transition-all duration-300 hover:bg-white/15 hover:shadow-xl transform hover:-translate-y-1">
                <div className="flex items-center gap-3 sm:gap-5 mb-5">
                  <div className="h-16 w-16 sm:h-18 sm:w-18 rounded-full overflow-hidden bg-accent">
                    <Image
                      src="/images/testimonials/fernando.png"
                      alt="Fernando"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg sm:text-xl">Fernando</h4>
                    <p className="text-sm text-teal-200">15+ stores</p>
                  </div>
                </div>
                <p className="text-white text-base sm:text-lg">"If you give me Clave right now, I'll fire my CEO and use it instead."</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Werner */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20 p-8 text-white transition-all duration-300 hover:bg-white/15 hover:shadow-xl transform hover:-translate-y-1">
                <div className="flex items-center gap-3 sm:gap-5 mb-5">
                  <div className="h-16 w-16 sm:h-18 sm:w-18 rounded-full overflow-hidden bg-accent">
                    <Image
                      src="/images/testimonials/werner.png"
                      alt="Werner"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg sm:text-xl">Werner</h4>
                    <p className="text-sm text-teal-200">400+ stores</p>
                  </div>
                </div>
                <p className="text-white text-base sm:text-lg">"There's lots of tools that put together the data and make it look pretty, but Clave is the only one that goes above and beyond and delivers useful, actionable steps."</p>
              </div>
              
              {/* Ariel */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20 p-8 text-white transition-all duration-300 hover:bg-white/15 hover:shadow-xl transform hover:-translate-y-1">
                <div className="flex items-center gap-3 sm:gap-5 mb-5">
                  <div className="h-16 w-16 sm:h-18 sm:w-18 rounded-full overflow-hidden bg-accent">
                    <Image
                      src="/images/testimonials/ariel.png"
                      alt="Ariel"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg sm:text-xl">Ariel</h4>
                    <p className="text-sm text-teal-200">120 stores</p>
                  </div>
                </div>
                <p className="text-white text-base sm:text-lg">"Clave is like having my best operator at every single one of my stores every single day."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pt-0 pb-20 sm:py-32 px-4 md:px-6 lg:px-8 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-10 text-white">
            Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-300 mb-12 sm:mb-20 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
            Flexible plans designed to meet the needs of any QSR franchise operation.
          </p>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full mx-auto" style={{
            background: "linear-gradient(135deg, #70cef4 0%, #49a5d3 30%, #0979b9 70%, #005fa2 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <div className="p-10 md:p-16 backdrop-blur-sm backdrop-brightness-75">
              <div className="grid md:grid-cols-3 gap-10">
                {/* Basic Tier */}
                <div className="bg-black/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-xl transition-all hover:translate-y-[-8px] hover:shadow-2xl group">
                  <div className="p-8 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-2 text-gray-200">Basic</h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-4xl font-bold">$200</span>
                      <span className="text-gray-400 ml-2">/month/store</span>
                    </div>
                    <p className="text-gray-400 mb-8">Perfect for single locations or small franchisees so you get a feel for the power of Clave.</p>
                    
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        POS data integration
                      </li>
                      <li className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Hourly insights
                      </li>
                      <li className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Most important KPI tracking
                      </li>
                      <li className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        12 month historical data
                      </li>
                      <li className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Email support
                      </li>
                    </ul>
                    
                    <div className="mt-auto">
                      <a href="/form" className="w-full py-3 px-6 rounded-lg border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition duration-300 text-sm md:text-base font-medium group-hover:bg-teal-400 group-hover:text-black inline-block text-center">
                        Start with 3 months free
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Pro Tier */}
                <div className="bg-black/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-teal-500 shadow-xl transform transition-all hover:translate-y-[-8px] hover:shadow-2xl relative group z-10">
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-teal-400 to-teal-600"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-300 opacity-20 blur-lg group-hover:opacity-30 transition duration-300"></div>
                  
                  <div className="p-8 relative z-10 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-2 text-white">Pro</h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-4xl font-bold">$300</span>
                      <span className="text-gray-400 ml-2">/month/store</span>
                    </div>
                    <p className="text-gray-300 mb-8">For growing franchisees who want even more out of their operations.</p>
                    
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-gray-200">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Everything in Basic
                      </li>
                      <li className="flex items-center text-gray-200">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Advanced integrations with other systems
                      </li>
                      <li className="flex items-center text-gray-200">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Double the number of insights
                      </li>
                      <li className="flex items-center text-gray-200">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        AI Forecasting to optimize ROPs
                      </li>
                      <li className="flex items-center text-gray-200">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Priority support
                      </li>
                    </ul>
                    
                    <div className="mt-auto">
                      <a href="/form" className="w-full py-3 px-6 rounded-lg bg-teal-500 text-black hover:bg-teal-400 transition duration-300 text-sm md:text-base font-medium inline-block text-center">
                        Start with 3 months free
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Enterprise Tier */}
                <div className="bg-black/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-xl transform transition-all hover:translate-y-[-8px] hover:shadow-2xl group">
                  <div className="p-8 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-2 text-gray-200">Enterprise</h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-2xl font-bold">Custom Pricing</span>
                    </div>
                    <p className="text-gray-400 mb-8">Full store vertical integration for large franchisees managing complex multi-location operations.</p>
                    
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Everything in Pro
                      </li>
                      <li className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Clave POS system
                      </li>
                      <li className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Automatic menu board integration
                      </li>
                      <li className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        AI agent to automate inventory management, staff scheduling, and more
                      </li>
                      <li className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Custom AI model training
                      </li>
                      <li className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Dedicated account manager
                      </li>
                      <li className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        24/7 phone and email support
                      </li>
                    </ul>
                    
                    <div className="mt-auto">
                      <a href="/form" className="w-full py-3 px-6 rounded-lg border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition duration-300 text-sm md:text-base font-medium group-hover:bg-teal-400 group-hover:text-black inline-block text-center">
                        Schedule a Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 md:px-6 lg:px-8 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/clave-logo-white.png"
                  alt="Clave Logo"
                  width={140}
                  height={50}
                  className="h-10 w-auto mb-3"
                />
              </div>
              <p className="text-sm text-gray-400">© 2025 Clave. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
