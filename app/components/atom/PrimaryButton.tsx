interface PrimaryProps {
  children: React.ReactNode;
  fullwidth: boolean;
  className: string;
  onClick?(): void;
}

export const PrimaryButton: React.FC<PrimaryProps> = ({
  children,
  className,
  fullwidth = false,
}) => {
  const fullWidth = fullwidth ? "w-full" : "w-fit";

  return (
    <button
      className={`rounded-md px-4 py-2 ${fullWidth} z-40 bg-[#708957] ${className}`}
    >
      {children}
    </button>
  );
};
