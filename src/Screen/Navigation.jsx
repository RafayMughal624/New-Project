import React from 'react'

function Navigation() {
    const data = [
        {
            name1: 'Select Skills',
            submenu: [
                {
                    title: 'Web Development'
                },
                {
                    title: 'Graphic Designing'
                },
                {
                    title: 'Shopify'
                },
            ],
            name2: 'Select Schools',
            submenu1: [
                {
                    title1: 'Agha Taj Muhammad High School'
                },
                {
                    title1: 'Ideal Public Scholl'
                },
                {
                    title1: 'Noor Public School'
                },
            ],
            name3: 'Select Subjects',
            submenu2: [
                {
                    title2: 'English'
                },
                {
                    title2: 'Science'
                },
                {
                    title2: 'Sindhi'
                },
            ],
        }
    ]
    return (
        <div>
            {
                data.map((item, index) => (
                    <div key={index}>
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">Navbar</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Link</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">{item.name1}
                                                    {
                                                        item.submenu.map((items) => (
                                                            <div className='dropdown2'>
                                                                <li><a className="dropdown-item" href="#">{items.title}</a></li>
                                                            </div>
                                                        ))
                                                    }
                                                </a></li>
                                                <li><a className="dropdown-item" href="#">{item.name2}
                                                    {
                                                        item.submenu1.map((items) => (
                                                            <div className='dropdown2'>
                                                                <li><a className="dropdown-item" href="#">{items.title1}</a></li>
                                                            </div>
                                                        ))
                                                    }
                                                </a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">{item.name3}
                                                    {
                                                        item.submenu2.map((items) => (
                                                            <div className='dropdown2'>
                                                                <li><a className="dropdown-item" href="#">{items.title2}</a></li>
                                                            </div>
                                                        ))
                                                    }</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                ))
            }
        </div>
    )
}

export default Navigation
