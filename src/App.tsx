import Divider from './components/Dvider';
import Info from './components/Info';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import InfoLyaout from './Layouts/InfoLayout';
import MainLayout from './Layouts/MainLayout';
import MapLayout from './Layouts/MapLayout';
import SearchBarLayout from './Layouts/SearchBarLayout';
import SearchLayout from './Layouts/SearchLayout';
import { useState } from 'react';
import useFetch from './hooks/useFetch';
import MapController from './components/MapController';

function App() {

  const [ipAddress, setIpAddress] = useState<string>("8.8.8.8");
  const changeInput = (value : string) => {
    setIpAddress(value);
  };

  const { data, loading, error } = useFetch(ipAddress);

  return (
    <MainLayout>
      <SearchLayout>
        <h2 className="mt-16 text-white text-3xl font-medium">IP Address Tracker</h2>
        <SearchBarLayout>
          <SearchBar changeInput={changeInput} loading={loading} />
        </SearchBarLayout>
      </SearchLayout>
      <InfoLyaout>  
        <Info label="ip address" value={data?.ip} />
        <Divider/>
        <Info label="location" value={`${data?.location.region}, ${data?.location.country}`} />
        <Divider/>
        <Info label="timezone" value={data?.location.timezone} />
        <Divider/>
        <Info label="isp" value={data?.isp} />
      </InfoLyaout>
      <MapLayout>
        <Map position={data ? [data?.location.lat, data?.location.lng] : [37.40599, -122.078514]}>
          <MapController center={data ? [data?.location.lat, data?.location.lng] : [37.40599, -122.078514]} />
        </Map>
      </MapLayout>
    </MainLayout>
  )
}

export default App;
