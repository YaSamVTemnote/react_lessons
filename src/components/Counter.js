import React, {useCallback, useEffect, useMemo, useState} from 'react';

function Counter(props) {
    const [counts, setCounts] = useState(0);
    const [value, setValue] = useState(2);

    const obj = useMemo(() => ({value}), [value]);
    const func = useCallback(() => console.log('Callback for counts', counts), [counts]);


    useEffect(() => {
        func()
    }, [func])

    const result = useMemo(() => factorial(value), [value]);

    // useMemo(() => function, []);

    // useEffect(() => {
    //     const intervalId = setInterval(() => setCounts((counts) => counts + 1), 1000)
    //     return () => {
    //         clearInterval(intervalId)
    //     }
    // }, []);


    return (
        <>
            <div>
                Counts: <div onClick={() => setCounts(counts + 1)}>{counts}</div>
            </div>
            <div>
                Value: <div  onClick={() => setValue(value + 1)}>{result}</div>
            </div>
        </>
    );
}

export default Counter;

function factorial(n) {
    console.log(n)
    return n === 1 ? 1 : n * factorial(n - 1)
}
