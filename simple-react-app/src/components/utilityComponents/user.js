import useFetch from "react-fetch-hook";
import { GetApi } from "./currentAPI";


export function GetProfile(username) {
    const profile = useFetch(
        GetApi(`profiles/${username}`)
    )
    return (profile);
}