"use client"
import { Appbar } from "@repo/ui/AppBar";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { authOptions } from "./lib/auth";



export default function Page(): JSX.Element {
  const session = useSession();
 


  console.log(session.data?.user)
  return (
  <>
    <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user}></Appbar>
   




    </>
    
      
  );
}
