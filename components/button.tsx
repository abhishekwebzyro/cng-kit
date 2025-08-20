type buttonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({ children, className = "", type = "submit" }: buttonProps) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-xl bg-purple-600 text-lg text-white hover:cursor-pointer w-fit ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
