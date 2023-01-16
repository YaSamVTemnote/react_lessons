import {useEffect, useState} from "react";

function useDate() {
    const [date, setDate] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setDate(new Date())
        }, 1000)
    }, []);

    return date
}

export default useDate
