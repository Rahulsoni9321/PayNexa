"use client"
import { Appbar } from "@repo/ui/AppBar";
import { signIn, signOut, useSession } from "next-auth/react";



export default function Page(): JSX.Element {
  const session = useSession();
  return (
  <>
    <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user}></Appbar>
   
    </>
    
      
  );
}
