type layoutProps = {
  children : React.ReactNode,
}
const InfoLyaout = ({ children } : layoutProps) => {
  return (
    <div 
        className={`
          px-4 py-4 flex items-center bg-white flex-col 
          rounded-3xl shadow-md lg:flex-row w-[90%] lg:w-auto 
          lg:h-32 z-10 absolute top-[400px] lg:top-[300px] -translate-y-1/2
        `}
    >
      { children }
    </div>
  );
}
 
export default InfoLyaout;