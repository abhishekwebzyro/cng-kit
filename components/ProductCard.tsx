import Image, { StaticImageData } from "next/image";

type ProductCardProps = {
  id: number;
  img: StaticImageData;
  special: string;
  title: string;
  desc: string;
  discount_price: string;
  original_price: string;
  save_price: string;
};

const ProductCard = ({
  img,
  special,
  title,
  desc,
  discount_price,
  original_price,
  save_price,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 overflow-hidden">
      <div className="relative">
        <Image
          src={img}
          alt="Sequential CNG Kit"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {special}
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-slate-800 mb-2">{title}</h4>
        <p className="text-slate-600 mb-4 text-sm">{desc}</p>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-green-700">
              ₹{discount_price}
            </span>
            <span className="text-slate-500 line-through ml-2">
              ₹{original_price}
            </span>
          </div>
          <span className="text-green-600 text-sm font-semibold">
            Save ₹{save_price}
          </span>
        </div>
        <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 px-4 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
