import { useEffect } from "react";
import { getFingerprint } from "@/utils/fingerprint";
import { fetchUserIP } from "@/utils/fetchIp";
import { registerUser } from "@/actions/registeruser";

function useUniqueUserRegister() {
  useEffect(() => {
    (async () => {
      try {
        const uniqueId = await getFingerprint();
        const { ipv4, ipv6 } = await fetchUserIP();

        await registerUser(uniqueId, ipv4, ipv6);
      } catch (error) {
        console.error("Error fetching IP or registering user:", error);
      }
    })();
  }, []);
}

export default useUniqueUserRegister;
