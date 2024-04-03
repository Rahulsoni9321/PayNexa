import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?
    onSignin:any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="absolute top-0 bg-gray-500/40 w-full items-center shadow-lg flex justify-between px-12">
        <div >
            PayTM
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button  onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}
    