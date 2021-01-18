import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const cardlistStyle = {
    height: '100%',
    width: '20rem',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll'
}

const CardList = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const _data = await axios.get('https://jsonplaceholder.typicode.com/comments');
            setData(_data.data);
        }
        fetchData();
    })
    return (
        <div style={cardlistStyle}>
            {data.map(item =>
                <Card name={item.name} body={item.body} />
            )}
        </div>
    )
}

export default CardList
