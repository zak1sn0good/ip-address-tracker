type layoutProps = {
  children : React.ReactNode
};

const SearchBarLayout = ({ children } : layoutProps) => {
  return (
    <div 
      className={`
        flex h-12 rounded-xl overflow-hidden
        w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]
      `}
    >
      {children}
    </div>
  );
}
 
export default SearchBarLayout;