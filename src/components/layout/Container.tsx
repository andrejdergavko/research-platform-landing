const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-16 py-5 w-full flex justify-center">{children}</div>
  );
};

export default Container;
