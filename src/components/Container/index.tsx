const Container = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex justify-between items-center w-full max-w-[90%] mx-auto lg:max-w-7xl">
      {children}
    </div>
  );
};

export default Container;