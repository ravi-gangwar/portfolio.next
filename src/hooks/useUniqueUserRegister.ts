"use client"
import { registerUser } from '@/actions/registeruser';
import { getFingerprint } from '@/utils/fingerprint';
import { useEffect } from 'react'

function useUniqueUserRegister() {

  useEffect(() => {
    (async () => {
        const uniqueId = await getFingerprint();
        await registerUser(uniqueId);
        console.log("seccued");
    })();
  }, []);

}

export default useUniqueUserRegister