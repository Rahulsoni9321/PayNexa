"use client"
import {useBalance} from "@repo/store/useBalance"

export default function Home() {
    const value = useBalance();
  return (
   <>

     hi public {value}
   </>
  );
}
