type infoProps = {
  label : string,
  value : string
}

export default function Info({ label, value } : infoProps){
  return (
    <div 
      className={`
        py-1 lg:px-4 lg:py-0 flex flex-col items-center 
        lg:items-start lg:justify-start space-y-1 w-full lg:w-[250px] h-full
      `}
    >
      <h3 
        className={`
          uppercase text-gray-500  font-medium text-sm
        `}
      >
        {label}
      </h3>
      <h2 
        className={`
          lg:text-3xl text-gray-800 font-medium text-center 
          lg:text-left text-xl
        `}
      >
        {value}
      </h2>
    </div>
  );
};