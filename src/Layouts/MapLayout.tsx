type layoutProps = {
  children : React.ReactNode
}
const MapLayout = ({ children } : layoutProps) => {
  return (
    <div className="w-full h-[500px] overflow-hidden z-0">
      {children}
    </div>
  );
}
 
export default MapLayout;