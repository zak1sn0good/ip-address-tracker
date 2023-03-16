
type layoutProps = {
  children : React.ReactNode
}

const MainLayout = ({ children } : layoutProps) => {
  return (
    <div 
      className={`
        w-full h-full flex flex-col items-center
      `}
    >
      { children }
    </div>
  );
}
 
export default MainLayout;