import { useEffect, useState } from 'react';

interface ProfileData {
  name: string;
  description: string;
  url: string;
  address: {
    street: string;
    city: string;
    state: string;
    code: string;
  };
  totalEmployees: number;
  listDate: string;
  marketCap: number;
  ticker: string;
}

const INIT_DATA: ProfileData = {
  name: '',
  description: '',
  url: '',
  address: {
    street: '',
    city: '',
    state: '',
    code: '',
  },
  totalEmployees: 0,
  listDate: '',
  marketCap: 0,
  ticker: '',
};

function useProfileData(symbol: string) {
  const [profileData, setProfileData] = useState<ProfileData>(INIT_DATA);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    setNotFound(false);
    const fetchName = async () => {
      const nameResponse = await fetch(`/api/polygonDetail?symbol=${symbol}`);
      if (!nameResponse.ok) {
        console.error(`Failed to fetch name data for ${symbol}`);
        throw new Error('Failed to fetch name data');
      }
      const nameData = await nameResponse.json();
      const {
        name,
        description,
        // eslint-disable-next-line camelcase
        homepage_url,
        address,
        // eslint-disable-next-line camelcase
        total_employees,
        // eslint-disable-next-line camelcase
        list_date,
        // eslint-disable-next-line camelcase
        market_cap,
        ticker,

      } = nameData.results;
      setProfileData({
        // eslint-disable-next-line camelcase,max-len
        name,
        description,
        // eslint-disable-next-line camelcase
        url: homepage_url,
        address: {

          street: address.address1,
          city: address.city,
          state: address.state,
          code: address.postal_code,
        },
        // eslint-disable-next-line camelcase
        totalEmployees: total_employees,
        // eslint-disable-next-line camelcase
        listDate: list_date,
        // eslint-disable-next-line camelcase
        marketCap: market_cap,
        ticker,
      });
    };
    fetchName().catch(() => setNotFound(true)).finally(() => { setLoading(false); });
  }, [symbol]);

  return { profileData, loading, notFound };
}

export default useProfileData;
