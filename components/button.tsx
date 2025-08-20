type buttonProps = {
  children: string;
};

const Button = ({ children }: buttonProps) => {
  return (
    <button
      type="submit"
      className="px-4 py-2 rounded-xl bg-purple-600 text-lg text-white hover:cursor-pointer w-fit"
    >
      {children}
    </button>
  );
};

export default Button;
