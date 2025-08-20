type statCardProps = {
  value: string;
  label: string;
};

const StatCard = ({ value, label }: statCardProps) => {
  return (
    <div className="p-4 rounded-xl shadow-xl">
      <h4 className="text-2xl lg:text-4xl text-green-800 font-semibold">
        {value}
      </h4>
      <p className="text-xl text-slate-400">{label}</p>
    </div>
  );
};

export default StatCard;
