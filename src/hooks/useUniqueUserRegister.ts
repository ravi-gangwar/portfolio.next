import { useEffect, useState } from "react";
import { getFingerprint } from "@/utils/fingerprint";
import { fetchUserIP } from "@/utils/fetchIp";
import { registerUser } from "@/actions/registeruser";
import { getUserCount } from "@/actions/getUserCount";

function useUniqueUserRegister() {
  const [state, setState] = useState({isLoading: false, visitorCount: 0});

  useEffect(() => {
    (async () => {
      try {
        setState((state) => ({...state, isLoading: true}));
        const uniqueId = await getFingerprint();
        const { ipv4, ipv6 } = await fetchUserIP();
        await registerUser(uniqueId, ipv4, ipv6);
        const count = await getUserCount();
        setState((state) => ({...state, visitorCount: count}));
      } catch (error) {
        console.error("Error fetching IP or registering user:", error);
      }finally{
        setState((state) => ({...state, isLoading: false}));
      }
    })();
  }, []);

  return state;
}

export default useUniqueUserRegister;
