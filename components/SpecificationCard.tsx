import { Boxes } from "lucide-react";

type specificationProps = {
  title: string;
  desc: string;
};

const SpecificationCard = ({ title, desc }: specificationProps) => {
  return (
    <div className="p-2 flex flex-col gap-3 rounded-xl bg-slate-100 shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
      <div className="w-10 h-10 rounded-lg bg-purple-300 flex items-center justify-center">
        <Boxes className="text-purple-600" />
      </div>
      <h4 className="text-2xl text-slate-800">{title}</h4>
      <p className="text-slate-500 text-lg leading-6">{desc}</p>
    </div>
  );
};

export default SpecificationCard;
