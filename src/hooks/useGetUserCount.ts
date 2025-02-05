"use client"
import { getUserCount } from "@/actions/getUserCount";
import { useEffect, useState } from "react";

function useGetUserCount() {

    const [count, setCount] = useState<number | undefined>();
    useEffect(() => {
      (async () => {
        const c = await getUserCount();
        setCount(c);
      })();
    }, []);

    return count;
    
}

export default useGetUserCount