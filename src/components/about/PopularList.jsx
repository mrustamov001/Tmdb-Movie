import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PopularList = () => {

    const [count, setCount] = useState([])

    useEffect(() => {
        async function create() {
            let  { data }  = await axios.get(`/now_playing?api_key=c2847ee5ae5ffca9842280e6f3078881&language=en-US&page`)
            setCount(data.results)
        }
        create()
    }, []);


    return (
        <div>
            {count.map((el, index) => (
                <div key={index} className="w-100">
                    <img width={200} height={350} src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} alt="Images" />
                </div>
            ))}
        </div>
    )
}

export default PopularList