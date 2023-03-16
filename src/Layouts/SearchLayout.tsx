import bgImageDesktop from '../assets/pattern-bg-desktop.png';

type layoutProps = {
  children : React.ReactNode
}

const SearchLayout = ({ children } : layoutProps ) => {
  return (
    <div
        style={{ 
          backgroundImage : `url(${bgImageDesktop})`,
          backgroundRepeat : 'no-repeat',
          backgroundSize : 'cover',
          backgroundPosition : 'center'
        }} 
        className={`
          w-full h-[400px] lg:h-[300px] flex flex-col items-center 
          space-y-6 shadow-md
        `}
      >
        { children }
      </div>
  );
}
 
export default SearchLayout;