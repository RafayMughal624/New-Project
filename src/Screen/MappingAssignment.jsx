import React from 'react'
import '../assets/css/style.css'
function MappingAssignment() {
    const data = [
        {
            name1: 'Select Skills',
            submenu: [
                {
                    tilte: 'Web Development',
                },
                {
                    tilte: 'Graphic Designing',
                },
                {
                    tilte: 'Shopify',
                },
            ],
            name2: 'Select Roll no',
            submenu1: [
                {
                    tilte1: '389',
                },
                {
                    tilte1: '347',
                },
                {
                    tilte1: '555',
                },
            ],
            name3: 'Select Classes',
            submenu2: [
                {
                    tilte2: '9th',
                },
                {
                    tilte2: 'Metric',
                },
                {
                    tilte2: '1st Year',
                },
            ],
        }
    ]
    return (
        <div>
            {
                data.map((item, index) => (
                    <div key={index}>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Courses
                                <div className='dropdown'>
                                    <ul>
                                        <li>{item.name1}
                                            <div className='dropdown2'>
                                                <ul>
                                                    <li style={{ backgroundColor: 'black', color: 'white' }}>{item.submenu.map((items) => (
                                                        <div>
                                                            <ul style={{ height: '29.7px ' }}>
                                                                <li style={{ position: 'relative', top: '-25px' }}>{items.tilte}</li>
                                                            </ul>
                                                        </div>
                                                    ))}</li>
                                                    {/* <li>Powser Bank</li>
                                <li>congqcugwyu</li>
                                <li>qyc cycetyec</li> */}
                                                </ul>
                                            </div> 
                                        </li>
                                        <li>{item.name2}
                                            <div className='dropdown2'>
                                            <ul>
                                                    <li style={{ backgroundColor: 'black', color: 'white' }}>{item.submenu1.map((items) => (
                                                        <div>
                                                            <ul style={{ height: '29.7px ' }}>
                                                                <li style={{ position: 'relative', top: '-25px' }}>{items.tilte1}</li>
                                                            </ul>
                                                        </div>
                                                    ))}</li>
                                                    {/* <li>Powser Bank</li>
                                <li>congqcugwyu</li>
                                <li>qyc cycetyec</li> */}
                                                </ul>
                                            </div>
                                        </li>
                                        <li>{item.name3}
                                            <div className='dropdown2'>
                                            <ul>
                                                    <li style={{ backgroundColor: 'black', color: 'white' }}>{item.submenu2.map((items) => (
                                                        <div>
                                                            <ul style={{ height: '29.7px ' }}>
                                                                <li style={{ position: 'relative', top: '-25px' }}>{items.tilte2}</li>
                                                            </ul>
                                                        </div>
                                                    ))}</li>
                                                    {/* <li>Powser Bank</li>
                                <li>congqcugwyu</li>
                                <li>qyc cycetyec</li> */}
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <li>Data Science
                                            <div className='dropdown2'>
                                                <ul>
                                                    <li>React Js</li>
                                                    <li>Powser Bank</li>
                                                    <li>congqcugwyu</li>
                                                    <li>qyc cycetyec</li>
                                                </ul>
                                            </div>
                                        </li> */}
                                    </ul>
                                </div>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default MappingAssignment
