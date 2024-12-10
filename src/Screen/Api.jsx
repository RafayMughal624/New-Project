import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Api() {

    const [data, setData] = useState(null)

    const Fetch_APi_Data = async () => {

        axios.get('https://fakestoreapi.com/products')
            .then(response => setData(response.data)

            )
    }
    useEffect(() => {
        Fetch_APi_Data()
    }, [])
    console.log(data, 'data')
    return (
        <div>
            <h6>
                {data && data.map((data, i) => (
                    <div key={i}>
                        <br />
                        ID{data.id}.
                        <br />

                        Title{data.title}.
                        <br />

                        Description {data.description}
                        <br />

                        Pri{data.price}
                    </div>
                ))}
                {/* {data&&data[0].id} */}

            </h6>
        </div>
    )
}

export default Api
