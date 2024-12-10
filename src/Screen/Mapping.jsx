import React from 'react'

function Mapping() {
    const array = [
        {
            name: 'rafay',
            class: 2,
            school: 'xyz',
            img: 'https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
        },
        {
            name: 'gull',
            class: 3,
            school: 'ideal',
            img: 'https://images.unsplash.com/photo-1731331323996-7ff41939ddf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8'
        },
        {
            name: 'ahtasham',
            class: 1,
            school: 'model',
            img: 'https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
        }

    ]
    return (
        <div>
            {array.map((data,index) => (
                <div key={index}>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="card ">
                                    <img className="card-img-top" src={data.img} alt="Title" height={200} width={'200px'} />
                                    <div className="card-body">
                                        <h4 className="card-title">{data.name}</h4>
                                        <p className="card-text">{data.class}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Mapping
