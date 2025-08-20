import {
  CircleCheck,
  Clock,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import KitImg from "../public/kit1.jpg";
import KitImg2 from "../public/kit2.jpg";
import KitImg3 from "../public/kit3.jpg";
import KitImg4 from "../public/kit4.jpg";
import SpecificationCard from "@/components/SpecificationCard";
import Button from "@/components/button";
import StatCard from "@/components/StatCard";
import { productList } from "@/data/productList";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <section className="w-full bg-radial-[at_50%_25%] from-slate-100 via-purple-100 to-rose-200 to-90%">
        <div className="max-w-7xl mx-auto p-4 flex flex-col gap-5 md:gap-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl text-slate-800 font-bold text-center md:leading-16">
              Accelerate Your Growth with Smart CNG Kit Marketing Strategies
            </h1>
          </div>
          <p className="max-w-5xl mx-auto text-sm md:text-lg text-slate-700 text-center">
            We help businesses grow by leveraging cutting-edge digital marketing
            strategies that drive results, increase ROI, and build lasting
            customer relationships.
          </p>

          <div className="w-full flex items-center justify-center gap-3">
            <button className="p-2 rounded-xl bg-purple-600 text-lg font-semibold text-white hover:cursor-pointer">
              Get Started Today
            </button>
            <button className="p-2 rounded-xl border-1 border-purple-600 text-lg font-semibold text-purple-600 hover:bg-purple-100 hover:cursor-pointer">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-5 px-2 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col-reverse gap-5 md:gap-0 md:flex-row md:items-center justify-center">
          <div className="flex-1 flex flex-col gap-5">
            <h2 className="text-2xl md:text-4xl text-slate-800 font-semibold">
              Elegance Meets Functionality
            </h2>
            <p className="text-lg text-slate-400">
              Crafted from aerospace-grade aluminum with a sapphire crystal
              display, the Chronos X is built to impress while standing up to
              daily wear.
            </p>
            <ul className="list-none flex flex-col gap-4">
              <li className="flex items-center gap-5">
                <CircleCheck className="text-purple-600" />
                <span>40mm and 44mm case sizes to fit any wrist</span>
              </li>
              <li className="flex items-center gap-5">
                <CircleCheck className="text-purple-600" />
                <span>
                  Interchangeable straps in leather, metal, and silicone
                </span>
              </li>
              <li className="flex items-center gap-5">
                <CircleCheck className="text-purple-600" />
                <span>Always-on Retina display with 1000 nits brightness</span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="w-full grid grid-cols-2 gap-2">
              <Image src={KitImg} alt="kit one" className="rounded-lg" />
              <Image src={KitImg2} alt="kit two" className="rounded-lg" />
              <Image src={KitImg3} alt="kit two" className="rounded-lg" />
              <Image src={KitImg4} alt="kit two" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-5 px-2 lg:px-0 bg-radial-[at_50%_25%] from-white via-purple-100 to-rose-200 to-90%">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-2xl md:text-4xl font-semibold text-slate-800 text-center mb-5">
            Product X Specifications
          </h4>

          <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-5">
            <div className="flex-1">
              <Image src={KitImg2} alt="product image" className="rounded-xl" />
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
              <SpecificationCard
                title="CNG Kit"
                desc="0 to 100% in just 45 minutes. Battery lasts up to 7 days with
                  normal use."
              />
              <SpecificationCard
                title="CNG Kit"
                desc="0 to 100% in just 45 minutes. Battery lasts up to 7 days with
                  normal use."
              />
              <SpecificationCard
                title="CNG Kit"
                desc="0 to 100% in just 45 minutes. Battery lasts up to 7 days with
                  normal use."
              />
              <SpecificationCard
                title="CNG Kit"
                desc="0 to 100% in just 45 minutes. Battery lasts up to 7 days with
                  normal use."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-5 px-2 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-5 justify-center">
            <div className="flex-1 flex flex-col gap-5">
              <h4 className="text-2xl lg:text-4xl font-semibold text-slate-800">
                NO #1 CNG Kit Centre In Patna
              </h4>
              <p className="text-lg text-slate-400">
                At Let Go CNG, we provide expert CNG kit installation with
                high-quality components. Whether you need a CNG kit for a car or
                a premium Lovato CNG kit, we ensure top-notch service at
                competitive prices.
              </p>
              <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5">
                <StatCard value="500+" label="Happy Customers" />
                <StatCard value="5+" label="Year Experience" />
                <StatCard value="100%" label="Satisfaction Rate" />
              </div>
              <Button>Learn More</Button>
            </div>
            <div className="flex-1">
              <Image src={KitImg} alt="product image" className="rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-10 px-2 lg:px-0 bg-gradient-to-b from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Premium CNG Kit Products
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover our range of high-quality CNG conversion kits designed
              for different vehicle types. Each kit comes with professional
              installation and comprehensive warranty coverage.
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productList.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-5 px-2 lg:px-0 bg-gradient-to-b from-green-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="w-full lg:w-3xl mx-auto flex flex-col gap-3 lg:gap-4 items-center mb-5">
            <h4 className="text-2xl md:text-4xl text-[#004030] font-semibold">
              Get In Touch With CNG Experts
            </h4>
            <p className="text-slate-600 text-lg text-center">
              Ready to convert your vehicle to CNG? Wed love to help you save
              money and go green. Reach out to us for any questions, quotes, or
              CNG kit installations!
            </p>
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center gap-5">
            <div className="flex-1 border-2 border-transparent p-2 lg:p-5 rounded-xl bg-white hover:border-green-800 hover:bg-green-100/10 shadow-xl hover:shadow-2xl hover:shadow-slate-700">
              <div className="flex flex-col gap-2 mb-3">
                <h5 className="text-green-800 text-xl font-semibold">
                  Contact Information
                </h5>
                <p className="text-slate-600">
                  Were here to help you convert your vehicle to CNG and save
                  money on fuel. Get in touch with us through any of the
                  following methods.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-5 p-4 bg-slate-100 rounded-xl">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-700">
                    <MapPin width={20} className="text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h6 className="text-lg font-bold text-green-800">
                      Visit Our Workshop
                    </h6>
                    <p className="text-slate-600">
                      CNG Kit Installation Center Patna, Bihar 800001
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-4 bg-slate-100 rounded-xl">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-700">
                    <Phone width={20} className="text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h6 className="text-lg font-bold text-green-800">
                      Call Us
                    </h6>
                    <p className="text-slate-600">+91 9122620236</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-4 bg-slate-100 rounded-xl">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-700">
                    <Mail width={20} className="text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h6 className="text-lg font-bold text-green-800">
                      Email Us
                    </h6>
                    <p className="text-slate-600">info@cngkit.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-4 bg-slate-100 rounded-xl">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-700">
                    <Clock width={20} className="text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h6 className="text-lg font-bold text-green-800">
                      Workshop Hours
                    </h6>
                    <p className="text-slate-600">
                      Mon - Sat: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                  <h6 className="text-lg font-bold text-green-800 text-center">
                    Follow Us
                  </h6>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-700 hover:cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in">
                      <Phone width={20} className="text-white" />
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-700 hover:cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in">
                      <Facebook width={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 border-2 border-transparent p-2 lg:p-8 rounded-xl bg-white hover:border-green-800 hover:bg-green-100/10 shadow-xl hover:shadow-2xl hover:shadow-slate-700">
              <div className="flex flex-col gap-2 mb-3">
                <h5 className="text-green-800 text-xl font-semibold">
                  Get Free CNG Kit Quote
                </h5>
                <p className="text-slate-600">
                  Fill out the form below and well provide you with a free quote
                  for your vehicles CNG conversion.
                </p>
              </div>

              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-green-800 font-medium">
                      Full Name *
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="p-3 bg-slate-50 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-200 hover:border-slate-300"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-green-800 font-medium">
                      Phone Number *
                    </span>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="p-3 bg-slate-50 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-200 hover:border-slate-300"
                      required
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-green-800 font-medium">
                    Email Address *
                  </span>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="p-3 bg-slate-50 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-200 hover:border-slate-300"
                    required
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-green-800 font-medium">
                    Vehicle Type *
                  </span>
                  <select
                    className="p-3 bg-slate-50 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-200 hover:border-slate-300 cursor-pointer"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your vehicle type
                    </option>
                    <option value="car-petrol-diesel">
                      Car (Petrol/Diesel)
                    </option>
                    <option value="taxi-cab">Taxi/Cab</option>
                    <option value="auto-rickshaw">Auto Rickshaw</option>
                    <option value="truck-commercial">
                      Truck/Commercial Vehicle
                    </option>
                    <option value="motorcycle">Motorcycle</option>
                    <option value="other">Other</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-green-800 font-medium">Message</span>
                  <textarea
                    placeholder="Tell us about your CNG conversion requirements, vehicle details, or any specific questions you have..."
                    rows={3}
                    className="p-3 bg-slate-50 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-200 hover:border-slate-300 resize-vertical min-h-[100px]"
                  ></textarea>
                </label>

                <Button>Get Free Quote</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
