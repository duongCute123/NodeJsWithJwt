import { useState, useEffect } from "react";
export const useFetch = (url) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const Fetdata = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
        }
        Fetdata()
    }, [url]

    )
    return data
}
export default useFetch