import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-[#aeecff]">Clave</span> is almost ready for all Zees!
          </h1>

          <p className="text-xl max-w-3xl mb-12">
            For now, we are only accepting a select amount of users that will get unique access to Clave. Want to get
            Clave for your store(s)? Sign up and we will reach back if you&apos;re accepted:
          </p>

          <div className="w-full max-w-2xl bg-[#2a2a2a] p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  type="text"
                  className="bg-[#333] border-[#444] text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  className="bg-[#333] border-[#444] text-white"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="storeConcept" className="block text-sm font-medium text-gray-300 mb-1">
                  Store Concept(s)
                </label>
                <Input
                  id="storeConcept"
                  type="text"
                  className="bg-[#333] border-[#444] text-white"
                  placeholder="e.g., QSR, Fast Casual"
                />
              </div>
              <div>
                <label htmlFor="storeCount" className="block text-sm font-medium text-gray-300 mb-1">
                  Number of Stores
                </label>
                <Input
                  id="storeCount"
                  type="number"
                  className="bg-[#333] border-[#444] text-white"
                  placeholder="e.g., 5"
                />
              </div>
            </div>

            <Button className="w-full bg-[#aeecff] text-black hover:bg-[#8de0ff] font-bold py-3 text-lg">Submit</Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Insights */}
          <div className="bg-[#2a2a2a] rounded-lg p-5 border border-[#444]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#aeecff]/20 flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-[#aeecff]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium">Clave Insight</span>
            </div>
            <p className="text-gray-300">
              Mobile orders surged by 15% during breakfast hours. Customers clearly value the convenience. Consider
              launching an exclusive mobile breakfast combo to further capitalize on this trend.
            </p>
          </div>

          <div className="bg-[#2a2a2a] rounded-lg p-5 border border-[#444]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#ff6b6b]/20 flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-[#ff6b6b]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 9V13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium">Clave Insight</span>
            </div>
            <p className="text-gray-300">
              Burger sales dropped 20% during lunch hours. Consider adjusting pricing or offering a limited-time deal to
              attract more customers.
            </p>
          </div>

          <div className="bg-[#2a2a2a] rounded-lg p-5 border border-[#444]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#4cd964]/20 flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-[#4cd964]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium">Clave Insight</span>
            </div>
            <p className="text-gray-300">
              Customer satisfaction is up with a 20% increase in positive reviews. Keep the momentum going by promoting
              customer testimonials and referral incentives.
            </p>
          </div>

          <div className="bg-[#2a2a2a] rounded-lg p-5 border border-[#444]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#aeecff]/20 flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-[#aeecff]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium">Clave Insight</span>
            </div>
            <p className="text-gray-300">
              Throughput time decreased by 20%, meaning customers are served faster. Focus on promoting your quick
              service as a competitive advantage. All stores share a similar throughput improvement.
            </p>
          </div>

          <div className="bg-[#2a2a2a] rounded-lg p-5 border border-[#444]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#ff6b6b]/20 flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-[#ff6b6b]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 9V13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium">Clave Insight</span>
            </div>
            <p className="text-gray-300">
              Soup inventory is up by 15% with excess stock accumulating. Bundle soups with popular items to move stock
              faster.
            </p>
          </div>

          <div className="bg-[#2a2a2a] rounded-lg p-5 border border-[#444]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#4cd964]/20 flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-[#4cd964]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium">Clave Insight</span>
            </div>
            <p className="text-gray-300">
              Weekly food waste decreased from 12% to 7% this week! Keep up this rate to save roughly $742 per week.
              This week push ham dishes, as excess stock is nearing spoilage.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

