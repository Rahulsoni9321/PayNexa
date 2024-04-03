import { RecoilState, useRecoilValue } from "recoil";
import { balance } from "../atom/Balance";

export function useBalance() {
    const value = useRecoilValue(balance);

    return value;
}