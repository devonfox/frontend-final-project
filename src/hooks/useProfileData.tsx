import { useEffect, useState } from 'react';

interface ProfileData {
  name: string;
  description: string;
}

const INIT_DATA: ProfileData = {
  name: '',
  description: '',
};

function useProfileData(symbol: string) {
  const [profileData, setProfileData] = useState<ProfileData>(INIT_DATA);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const fetchName = async () => {
      const nameResponse = await fetch(`/api/polygonDetail?symbol=${symbol}`);
      if (!nameResponse.ok) {
        console.error(`Failed to fetch name data for ${symbol}`);
        throw new Error('Failed to fetch name data');
      }
      const nameData = await nameResponse.json();
      const { name, description } = nameData.results;
      setProfileData({ name, description });
    };
    fetchName().catch(() => setNotFound(true)).finally(() => { setLoading(false); });
  }, [symbol]);

  return { profileData, loading, notFound };
}

export default useProfileData;
