import {RecoilState, atom} from "recoil"

export const balance= atom<number>({
    key:"balanceatom",
    default:0
})