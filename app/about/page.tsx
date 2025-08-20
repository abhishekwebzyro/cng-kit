import StatCard from "@/components/StatCard";
import { Metadata } from "next";
import Image from "next/image";
import kitImg from "@/public/kit1.jpg";

export const metadata: Metadata = {
  title: "About Us - CNG Kit Services | Auto & Vehicle Solutions",
  description:
    "Leading provider of CNG kit installation and services for automobiles and vehicles. Expert technicians, quality products, and reliable after-sales support.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-radial-[at_50%_25%] from-slate-100 via-purple-100 to-rose-200 to-90% py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              About Our CNG Kit Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in eco-friendly automotive solutions with premium
              CNG kit installation and maintenance services for all types of
              vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Trusted CNG Conversion Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over a decade of experience in the automotive industry, we
                specialize in converting petrol and diesel vehicles to run on
                Compressed Natural Gas (CNG). Our mission is to make
                eco-friendly transportation accessible and affordable for
                everyone.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We are committed to reducing carbon emissions and helping
                vehicle owners save significantly on fuel costs while
                maintaining optimal vehicle performance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <StatCard label="Years Experience" value="10+" />
                <StatCard label="Vehicles Converted" value="5000+" />
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <Image src={kitImg} alt="kitImage" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Our CNG Kit Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive CNG solutions for all types of vehicles with expert
              installation and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                CNG Kit Installation
              </h3>
              <p className="text-gray-600 mb-4">
                Professional installation of high-quality CNG kits for cars,
                buses, trucks, and commercial vehicles with certified
                components.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Sequential CNG Systems</li>
                <li>• Venturi CNG Systems</li>
                <li>• ECU Programming</li>
                <li>• Safety Valve Installation</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Maintenance & Repair
              </h3>
              <p className="text-gray-600 mb-4">
                Regular maintenance and repair services to ensure optimal
                performance and safety of your CNG system.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Regular System Check-ups</li>
                <li>• Component Replacement</li>
                <li>• Leak Detection & Repair</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Certification & Documentation
              </h3>
              <p className="text-gray-600 mb-4">
                Complete assistance with RTO approvals, fitness certificates,
                and all required documentation for legal CNG conversion.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• RTO Approval Process</li>
                <li>• Fitness Certificate</li>
                <li>• Insurance Documentation</li>
                <li>• Compliance Certificates</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Commercial Vehicle Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized CNG conversion services for commercial fleets,
                buses, and heavy-duty vehicles with bulk pricing options.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Fleet Conversion Programs</li>
                <li>• Heavy-Duty CNG Systems</li>
                <li>• Bulk Installation Discounts</li>
                <li>• Fleet Maintenance Contracts</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality Inspection
              </h3>
              <p className="text-gray-600 mb-4">
                Thorough quality checks and safety inspections to ensure your
                CNG system meets all safety standards and regulations.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Safety System Testing</li>
                <li>• Pressure Testing</li>
                <li>• Emission Testing</li>
                <li>• Performance Analysis</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600 mb-4">
                Round-the-clock customer support and emergency assistance for
                all CNG-related issues and queries.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Emergency Roadside Assistance</li>
                <li>• Technical Support Hotline</li>
                <li>• Online Troubleshooting</li>
                <li>• Warranty Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vehicles We Service
            </h2>
            <p className="text-lg text-gray-600">
              CNG conversion services for all types of vehicles
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚗</span>
              </div>
              <h3 className="font-semibold text-gray-900">Cars</h3>
              <p className="text-sm text-gray-600">Hatchbacks, Sedans, SUVs</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚐</span>
              </div>
              <h3 className="font-semibold text-gray-900">Vans</h3>
              <p className="text-sm text-gray-600">Commercial & Personal</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚌</span>
              </div>
              <h3 className="font-semibold text-gray-900">Buses</h3>
              <p className="text-sm text-gray-600">City & Interstate</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚛</span>
              </div>
              <h3 className="font-semibold text-gray-900">Trucks</h3>
              <p className="text-sm text-gray-600">Light & Heavy Commercial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our CNG Services?
            </h2>
            <p className="text-xl opacity-90">
              Experience the difference with our professional CNG conversion
              services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold mb-2">
                Certified Technicians
              </h3>
              <p className="opacity-90">
                Trained and certified professionals with years of experience
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold mb-2">Quality Components</h3>
              <p className="opacity-90">
                Only premium, ISI-marked CNG components and accessories
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold mb-2">Cost Effective</h3>
              <p className="opacity-90">
                Competitive pricing with transparent cost structure
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold mb-2">Warranty & Support</h3>
              <p className="opacity-90">
                Comprehensive warranty and ongoing technical support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Benefits of CNG Conversion
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4">
                    <span className="text-green-600 text-xl">💚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Eco-Friendly
                    </h3>
                    <p className="text-gray-600">
                      Reduces harmful emissions by up to 85% compared to petrol
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <span className="text-blue-600 text-xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Cost Savings
                    </h3>
                    <p className="text-gray-600">
                      Save up to 60% on fuel costs with CNG pricing
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <span className="text-purple-600 text-xl">🔧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Engine Longevity
                    </h3>
                    <p className="text-gray-600">
                      CNG burns cleaner, extending engine life and reducing
                      maintenance
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-2 mr-4">
                    <span className="text-orange-600 text-xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Safety</h3>
                    <p className="text-gray-600">
                      CNG is lighter than air and disperses quickly in case of
                      leaks
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Ready to Convert Your Vehicle?
                </h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of satisfied customers who have made the switch
                  to CNG
                </p>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-green-600">
                      ₹40,000 - ₹60,000
                    </div>
                    <div className="text-sm text-gray-600">
                      Average conversion cost
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">
                      6-12 months
                    </div>
                    <div className="text-sm text-gray-600">Payback period</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make the Switch to CNG?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and quote for your vehicle
            conversion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get Free Quote
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
