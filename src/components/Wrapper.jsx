const Wrapper = ({ children, style }) => {
  return <div className={`max-w-[1440px] mx-auto ${style}`}>{children}</div>;
};

export default Wrapper;
