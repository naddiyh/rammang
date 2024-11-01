interface BoxProps {
  children: React.ReactNode;
}
export const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className="flex w-[250px] flex-col items-center justify-center rounded-md px-2 py-4 shadow-xl">
      {children}
    </div>
  );
};
