import React, { useState } from 'react'
import { Card, Col, Container, Form, InputGroup, Navbar, Row, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Hidden from '../assets/images/Hidden.png'
import box from '../assets/images/box.jpg'
import account from '../assets/images/account.jpg'
import card from '../assets/images/card.jpg'
import transaction from '../assets/images/transaction.jpg'
import payment from '../assets/images/payment.jpg'
import invoice from '../assets/images/invoice.png'
import trading from '../assets/images/trading.jpg'
import report from '../assets/images/report.jpg'
import use from '../assets/images/use.jpg'
import europe from '../assets/images/europe.jpg'
import uk from '../assets/images/uk.jpg'
import open from '../assets/images/open.jpg'
import setting from '../assets/images/setting.jpg'
import human from '../assets/images/human.jpg'
import bell1 from '../assets/images/bell1.jpg'
import search from '../assets/images/search.jpg'
import growth from '../assets/images/growth.jpg'
import loss from '../assets/images/loss.jpg'
import Visa from '../assets/images/Visa.png'
import MasterCard from '../assets/images/MasterCard.png'
import icon from '../assets/images/icon.png'
import Overlay from '../assets/images/Overlay.png'
import rocket from '../assets/images/rocket.jpg'
import AmericanExpress from '../assets/images/American Express.png'
import '../assets/css/style.css'
import { Avatar, Typography } from '@mui/material';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactApexChart from 'react-apexcharts'
function ReactBootstrap() {
    const [state, setState] = React.useState({

        series: [{
            data: [
                [1327359600000, 30.95],
                [1327446000000, 31.34],
                [1327532400000, 31.18],
                [1327618800000, 31.05],
                [1327878000000, 31.00],
                [1327964400000, 30.95],
                [1328050800000, 31.24],
                [1328137200000, 31.29],
                [1328223600000, 31.85],
                [1328482800000, 31.86],
                [1328569200000, 32.28],
                [1328655600000, 32.10],
                [1328742000000, 32.65],
                [1328828400000, 32.21],
                [1329087600000, 32.35],
                [1329174000000, 32.44],
                [1329260400000, 32.46],
                [1329346800000, 32.86],
                [1329433200000, 32.75],
                [1329778800000, 32.54],
                [1329865200000, 32.33],
                [1329951600000, 32.97],
                [1330038000000, 33.41],
                [1330297200000, 33.27],
                [1330383600000, 33.27],
                [1330470000000, 32.89],
                [1330556400000, 33.10],
                [1330642800000, 33.73],
                [1330902000000, 33.22],
                [1330988400000, 31.99],
                [1331074800000, 32.41],
                [1331161200000, 33.05],
                [1331247600000, 33.64],
                [1331506800000, 33.56],
                [1331593200000, 34.22],
                [1331679600000, 33.77],
                [1331766000000, 34.17],
                [1331852400000, 33.82],
                [1332111600000, 34.51],
                [1332198000000, 33.16],
                [1332284400000, 33.56],
                [1332370800000, 33.71],
                [1332457200000, 33.81],
                [1332712800000, 34.40],
                [1332799200000, 34.63],
                [1332885600000, 34.46],
                [1332972000000, 34.48],
                [1333058400000, 34.31],
                [1333317600000, 34.70],
                [1333404000000, 34.31],
                [1333490400000, 33.46],
                [1333576800000, 33.59],
                [1333922400000, 33.22],
                [1334008800000, 32.61],
                [1334095200000, 33.01],
                [1334181600000, 33.55],
                [1334268000000, 33.18],
                [1334527200000, 32.84],
                [1334613600000, 33.84],
                [1334700000000, 33.39],
                [1334786400000, 32.91],
                [1334872800000, 33.06],
                [1335132000000, 32.62],
                [1335218400000, 32.40],
                [1335304800000, 33.13],
                [1335391200000, 33.26],
                [1335477600000, 33.58],
                [1335736800000, 33.55],
                [1335823200000, 33.77],
                [1335909600000, 33.76],
                [1335996000000, 33.32],
                [1336082400000, 32.61],
                [1336341600000, 32.52],
                [1336428000000, 32.67],
                [1336514400000, 32.52],
                [1336600800000, 31.92],
                [1336687200000, 32.20],
                [1336946400000, 32.23],
                [1337032800000, 32.33],
                [1337119200000, 32.36],
                [1337205600000, 32.01],
                [1337292000000, 31.31],
                [1337551200000, 32.01],
                [1337637600000, 32.01],
                [1337724000000, 32.18],
                [1337810400000, 31.54],
                [1337896800000, 31.60],
                [1338242400000, 32.05],
                [1338328800000, 31.29],
                [1338415200000, 31.05],
                [1338501600000, 29.82],
                [1338760800000, 30.31],
                [1338847200000, 30.70],
                [1338933600000, 31.69],
                [1339020000000, 31.32],
                [1339106400000, 31.65],
                [1339365600000, 31.13],
                [1339452000000, 31.77],
                [1339538400000, 31.79],
                [1339624800000, 31.67],
                [1339711200000, 32.39],
                [1339970400000, 32.63],
                [1340056800000, 32.89],
                [1340143200000, 31.99],
                [1340229600000, 31.23],
                [1340316000000, 31.57],
                [1340575200000, 30.84],
                [1340661600000, 31.07],
                [1340748000000, 31.41],
                [1340834400000, 31.17],
                [1340920800000, 32.37],
                [1341180000000, 32.19],
                [1341266400000, 32.51],
                [1341439200000, 32.53],
                [1341525600000, 31.37],
                [1341784800000, 30.43],
                [1341871200000, 30.44],
                [1341957600000, 30.20],
                [1342044000000, 30.14],
                [1342130400000, 30.65],
                [1342389600000, 30.40],
                [1342476000000, 30.65],
                [1342562400000, 31.43],
                [1342648800000, 31.89],
                [1342735200000, 31.38],
                [1342994400000, 30.64],
                [1343080800000, 30.02],
                [1343167200000, 30.33],
                [1343253600000, 30.95],
                [1343340000000, 31.89],
                [1343599200000, 31.01],
                [1343685600000, 30.88],
                [1343772000000, 30.69],
                [1343858400000, 30.58],
                [1343944800000, 32.02],
                [1344204000000, 32.14],
                [1344290400000, 32.37],
                [1344376800000, 32.51],
                [1344463200000, 32.65],
                [1344549600000, 32.64],
                [1344808800000, 32.27],
                [1344895200000, 32.10],
                [1344981600000, 32.91],
                [1345068000000, 33.65],
                [1345154400000, 33.80],
                [1345413600000, 33.92],
                [1345500000000, 33.75],
                [1345586400000, 33.84],
                [1345672800000, 33.50],
                [1345759200000, 32.26],
                [1346018400000, 32.32],
                [1346104800000, 32.06],
                [1346191200000, 31.96],
                [1346277600000, 31.46],
                [1346364000000, 31.27],
                [1346709600000, 31.43],
                [1346796000000, 32.26],
                [1346882400000, 32.79],
                [1346968800000, 32.46],
                [1347228000000, 32.13],
                [1347314400000, 32.43],
                [1347400800000, 32.42],
                [1347487200000, 32.81],
                [1347573600000, 33.34],
                [1347832800000, 33.41],
                [1347919200000, 32.57],
                [1348005600000, 33.12],
                [1348092000000, 34.53],
                [1348178400000, 33.83],
                [1348437600000, 33.41],
                [1348524000000, 32.90],
                [1348610400000, 32.53],
                [1348696800000, 32.80],
                [1348783200000, 32.44],
                [1349042400000, 32.62],
                [1349128800000, 32.57],
                [1349215200000, 32.60],
                [1349301600000, 32.68],
                [1349388000000, 32.47],
                [1349647200000, 32.23],
                [1349733600000, 31.68],
                [1349820000000, 31.51],
                [1349906400000, 31.78],
                [1349992800000, 31.94],
                [1350252000000, 32.33],
                [1350338400000, 33.24],
                [1350424800000, 33.44],
                [1350511200000, 33.48],
                [1350597600000, 33.24],
                [1350856800000, 33.49],
                [1350943200000, 33.31],
                [1351029600000, 33.36],
                [1351116000000, 33.40],
                [1351202400000, 34.01],
                [1351638000000, 34.02],
                [1351724400000, 34.36],
                [1351810800000, 34.39],
                [1352070000000, 34.24],
                [1352156400000, 34.39],
                [1352242800000, 33.47],
                [1352329200000, 32.98],
                [1352415600000, 32.90],
                [1352674800000, 32.70],
                [1352761200000, 32.54],
                [1352847600000, 32.23],
                [1352934000000, 32.64],
                [1353020400000, 32.65],
                [1353279600000, 32.92],
                [1353366000000, 32.64],
                [1353452400000, 32.84],
                [1353625200000, 33.40],
                [1353884400000, 33.30],
                [1353970800000, 33.18],
                [1354057200000, 33.88],
                [1354143600000, 34.09],
                [1354230000000, 34.61],
                [1354489200000, 34.70],
                [1354575600000, 35.30],
                [1354662000000, 35.40],
                [1354748400000, 35.14],
                [1354834800000, 35.48],
                [1355094000000, 35.75],
                [1355180400000, 35.54],
                [1355266800000, 35.96],
                [1355353200000, 35.53],
                [1355439600000, 37.56],
                [1355698800000, 37.42],
                [1355785200000, 37.49],
                [1355871600000, 38.09],
                [1355958000000, 37.87],
                [1356044400000, 37.71],
                [1356303600000, 37.53],
                [1356476400000, 37.55],
                [1356562800000, 37.30],
                [1356649200000, 36.90],
                [1356908400000, 37.68],
                [1357081200000, 38.34],
                [1357167600000, 37.75],
                [1357254000000, 38.13],
                [1357513200000, 37.94],
                [1357599600000, 38.14],
                [1357686000000, 38.66],
                [1357772400000, 38.62],
                [1357858800000, 38.09],
                [1358118000000, 38.16],
                [1358204400000, 38.15],
                [1358290800000, 37.88],
                [1358377200000, 37.73],
                [1358463600000, 37.98],
                [1358809200000, 37.95],
                [1358895600000, 38.25],
                [1358982000000, 38.10],
                [1359068400000, 38.32],
                [1359327600000, 38.24],
                [1359414000000, 38.52],
                [1359500400000, 37.94],
                [1359586800000, 37.83],
                [1359673200000, 38.34],
                [1359932400000, 38.10],
                [1360018800000, 38.51],
                [1360105200000, 38.40],
                [1360191600000, 38.07],
                [1360278000000, 39.12],
                [1360537200000, 38.64],
                [1360623600000, 38.89],
                [1360710000000, 38.81],
                [1360796400000, 38.61],
                [1360882800000, 38.63],
                [1361228400000, 38.99],
                [1361314800000, 38.77],
                [1361401200000, 38.34],
                [1361487600000, 38.55],
                [1361746800000, 38.11],
                [1361833200000, 38.59],
                [1361919600000, 39.60],
            ]
        }],
        options: {
            chart: {
                id: 'area-datetime',
                type: 'area',
                height: 350,
                zoom: {
                    autoScaleYaxis: true
                }
            },
            annotations: {
                yaxis: [{
                    y: 30,
                    borderColor: '#999',
                    label: {
                        show: true,
                        text: 'Support',
                        style: {
                            color: "#fff",
                            background: '#00E396'
                        }
                    }
                }],
                xaxis: [{
                    x: new Date('14 Nov 2012').getTime(),
                    borderColor: '#999',
                    yAxisIndex: 0,
                    label: {
                        show: true,
                        text: 'Rally',
                        style: {
                            color: "#fff",
                            background: '#775DD0'
                        }
                    }
                }]
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
                style: 'hollow',
            },
            xaxis: {
                type: 'datetime',
                min: new Date('01 Mar 2012').getTime(),
                tickAmount: 6,
            },
            tooltip: {
                x: {
                    format: 'dd MMM yyyy'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 100]
                }
            },
        },


        selection: 'one_year',

    });


    const updateData = (timeline) => {
        setState({
            selection: timeline
        })

        switch (timeline) {
            case 'one_month':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('28 Jan 2013').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            case 'six_months':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Sep 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            case 'one_year':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Feb 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            case 'ytd':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('01 Jan 2013').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            case 'all':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('23 Jan 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            default:
        }
    }

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={2} style={{background: 'rgba(235, 240, 240, 1)'
}} className=''>
                        <Offcanvas.Header className='mt-3 ms-2'>
                            <Offcanvas.Title><img src={Hidden} /></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='mt-4 ms-2'>
                            <span className='text-muted'>Navigation</span>
                            <Col className='d-flex mt-3'>
                                <img src={box} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-dark'><h6 className='ms-2'>Dashboard</h6></a>
                            </Col>
                            <Col className='d-flex mt-2'>
                                <img src={account} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Accounts</h6></a>
                            </Col>
                            <Col className='d-flex mt-2'>
                                <img src={card} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Cards</h6></a>
                            </Col>
                            <Col className='d-flex mt-2'>
                                <img src={transaction} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Transactions</h6></a>
                            </Col>
                            <Col className='d-flex mt-2'>
                                <img src={payment} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Payment</h6></a>
                            </Col>
                            <Col className='d-flex mt-2'>
                                <img src={invoice} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Invoicing</h6></a>
                            </Col>
                            <Col className='d-flex mt-2'>
                                <img src={trading} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Trading</h6></a>
                            </Col>
                            <Col className='d-flex mt-2'>
                                <img src={report} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Reports</h6></a>
                            </Col>
                            <Col className='mt-3'><span className='text-muted'>Balances</span></Col>
                            <Col className='d-flex mt-3'>
                                <img src={use} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>100,050.75 USD</h6></a>
                            </Col>
                            <Col className='d-flex mt-2'>
                                <img src={europe} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>2310.40 EUR</h6></a>
                            </Col>
                            <Col className='d-flex mt-2'>
                                <img src={uk} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>9455.50 GBP</h6></a>
                            </Col>
                            <Col className='d-flex mt-2'>
                                <img src={open} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Open a balance</h6></a>
                            </Col>
                            <Col className='d-flex' style={{ marginTop: '300px' }}>
                                <img src={setting} className='' width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted '><h6 className='ms-2'>Profile Settings</h6></a>
                            </Col>
                        </Offcanvas.Body>
                    </Col>
                    <Col xs={10} className='d-flex justify-content-around mt-4'>
                        {/* <Row> */}
                        <Col xs={5}>
                            <Col className='mt-2'><h4 className='fw-bold'>Dashboard</h4></Col>
                            <Col className='mt-5'><h1 className='fw-bold' style={{ lineHeight: '30px' }}>$120,420.50</h1></Col>
                            <Col><small className='text-muted'>Total balance from all accounts <span className='text-primary fw-bold'>USD</span></small></Col>
                            <Col xs={12} className='d-flex'>
                                <Col xs={7}>
                                    <Card style={{ width: '16rem' }} className='mt-5'>
                                        <Card.Img variant="top" />
                                        <Card.Body>
                                            <Col className='d-flex justify-content-between'>
                                                <small className='text-muted'>Income</small>
                                                <img src={growth} width={'20px'} height={'20px'} alt="" />
                                            </Col>
                                            <Card.Text>
                                                <h5 className='mt-3 fw-bold'>$9.650,00</h5>
                                            </Card.Text>
                                            <Col className='d-flex justify-content-between'>
                                                <small className='text-dark'>84 Transactions</small>
                                                <small style={{
                                                    color: 'rgba(35, 227, 62, 1)'
                                                }} className='fw-bold'>+10%</small>
                                            </Col>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={6}>
                                    <Card style={{ width: '15rem', position: 'relative', left: '1px' }} className='mt-5 ms-1'>
                                        <Card.Img variant="top" />
                                        <Card.Body>
                                            <Col className='d-flex justify-content-between'>
                                                <small className='text-muted'>Spendings</small>
                                                <img src={loss} width={'20px'} height={'20px'} alt="" />
                                            </Col>
                                            <Card.Text>
                                                <h5 className='mt-3 fw-bold'>$7.845,00</h5>
                                            </Card.Text>
                                            <Col className='d-flex justify-content-between'>
                                                <small className='text-dark'>58 Transactions</small>
                                                <small style={{
                                                    color: 'rgba(35, 227, 62, 1)'
                                                }} className='fw-bold'>-2%</small>
                                            </Col>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Col>
                            <Card style={{ width: '32.7rem' }} className='mt-4'>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title><h6>Your Assets</h6></Card.Title>
                                    <hr />
                                    <Card.Text>
                                        <div id="chart">
                                            <div id="chart-timeline">
                                                <ReactApexChart options={state.options} series={state.series} type="area" height={171} />
                                            </div>
                                        </div>
                                        <div id="html-dist"></div>
                                    </Card.Text>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <img style={{ borderRadius: '20px', position: 'relative', top: '2px' }} src={Visa} className='mt-1' width={'24px'} height={'24px'} alt="" />
                                        <div className="ms-3 me-auto" style={{ position: 'relative', bottom: '5px' }}>
                                            <small style={{ fontSize: '12px' }} className="fw-bold">3210 **** **** 7890</small>
                                            <h6 style={{ fontSize: '10px' }} className='text-muted mt-1'>Account number</h6>
                                        </div>
                                        <small className="fw-bold mt-1" style={{ position: 'relative', bottom: '4px', fontSize: '12px' }}>
                                            $88.200,00
                                            <h6 style={{ fontSize: '10px' }} className='text-muted mt-1'>Account balance</h6>
                                        </small>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start mt-3"
                                    >
                                        <img style={{ borderRadius: '20px', position: 'relative', top: '2px' }} src={MasterCard} className='mt-1' width={'24px'} height={'24px'} alt="" />
                                        <div className="ms-3 me-auto" style={{ position: 'relative', bottom: '5px' }}>
                                            <small style={{ fontSize: '12px' }} className="fw-bold">8210 **** **** 4340</small>
                                            <h6 style={{ fontSize: '10px' }} className='text-muted mt-1'>Account number</h6>
                                        </div>
                                        <small className="fw-bold mt-1" style={{ position: 'relative', bottom: '4px', fontSize: '12px' }}>
                                            €64.120,50
                                            <h6 style={{ fontSize: '10px' }} className='text-muted mt-1'>Account balance</h6>
                                        </small>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start mt-3"
                                    >
                                        <img style={{ borderRadius: '20px', position: 'relative', top: '2px' }} src={AmericanExpress} className='mt-1' width={'24px'} height={'24px'} alt="" />
                                        <div className="ms-3 me-auto" style={{ position: 'relative', bottom: '5px' }}>
                                            <small style={{ fontSize: '12px' }} className="fw-bold">8210 **** **** 4990</small>
                                            <h6 style={{ fontSize: '10px' }} className='text-muted mt-1'>Account number</h6>
                                        </div>
                                        <small className="fw-bold mt-1" style={{ position: 'relative', bottom: '4px', fontSize: '12px' }}>
                                            £230,50
                                            <h6 style={{ fontSize: '10px' }} className='text-muted mt-1'>Account balance</h6>
                                        </small>
                                    </ListGroup.Item>
                                </Card.Body>
                            </Card>
                            {/* <Col xs={12}>
                            <Row>
                            <Col className='mt-3'><hr width={1063} /></Col>
                            </Row>
                            </Col> */}
                        </Col>
                        <Col xs={5}>
                            <Row xs={'auto'} className='justify-content-end'>
                                <Col xs={8} className='ms-2'><InputGroup className="mb-3 ms-4">
                                    <InputGroup.Text id="basic-addon1"><img src={search} width={'20px'} height={'20px'} alt="" /></InputGroup.Text>
                                    <Form.Control
                                        placeholder="Type to search..."
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup></Col>
                                <Col xs={2} className='ms-1'><InputGroup className="mb-3 ms-3">
                                    <InputGroup.Text id="basic-addon1"><img className='mt-1' src={bell1} width={'20px'} height={'20px'} alt="" /></InputGroup.Text>
                                </InputGroup></Col>
                                <Col><Avatar src={human} width={'20px'} height={'20px'} alt="" /></Col>
                            </Row>
                            <Row xs={'auto'} className='justify-content-end mt-5'>
                                <Col xs={1}><img src={open} height={'20px'} width={'20px'} alt="" /></Col>
                                <Col className='mt-1' style={{ position: 'relative', right: '10px', bottom: '2px' }}><small className='fw-bold' htmlFor="">Open an account or deposit</small></Col>
                            </Row>
                            <Row xs={'auto'} className='justify-content-end mt-5'>
                                <Card style={{ width: '32.7rem', position: 'relative', top: '-8px', height: '620px' }} className='mt-4'>
                                    <Card.Img variant="top" />
                                    <Card.Body>
                                        <Card.Title className='d-flex justify-content-between'>
                                            <h6>Latest transactions</h6>
                                            <img src={growth} height={'20px'} width={'20px'} alt="" />
                                        </Card.Title>
                                        <hr />
                                        <Card.Text>
                                            <small className='text-muted ms-1'>28 August</small>
                                        </Card.Text>

                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <img style={{ borderRadius: '20px' }} src={'https://s3-alpha-sig.figma.com/img/feff/e44e/7f5bdaeb42265ec34c8f52fb91644e57?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TkkYZIys1oPaPDIDd15Jqj-Rz1tkNJRNCGqgto5JRo~EQACcKp5YrLaEfBNPHLuedXECgVPa~E3TWaFHE-VoH7g49C5y4AGQKO9L45oNXrnXhToznktftvlMuqqnsHx2Tw5HGVVwUK0WMtgkn~w6AmOzPeW~uv4wU-Wa2eAd~LFbnc44U9AeoIyie7dAL-yvZfJkJFQAVJTlQhXFj386Wn3drGJY6YYJu2nAK8egF8fmxCcVzwunQ1Px70O7dC~g8gIzO~fdQaFGu-0naSTvqYtRHW9gsgLHem~Y5zSqfl-XoKYpcebSz~LjmlBw8qbWZdfpst~LMWHO09QZ7KYaAw__'} width={'34px'} height={'34px'} alt="" />
                                            <div className="ms-3 me-auto" style={{ position: 'relative', bottom: '3px' }}>
                                                <small style={{ fontSize: '12px' }} className="fw-bold">Online purchase at Ebay.com</small>
                                                <h6 style={{ fontSize: '10px' }} className='text-muted'>28 Aug, 3:00 PM</h6>
                                            </div>
                                            <small className="fw-bold mt-1" style={{ position: 'relative', bottom: '2px', fontSize: '12px' }}>
                                                -$10.480,00
                                            </small>
                                        </ListGroup.Item>
                                        <hr style={{ position: 'relative', bottom: '10px' }} />
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                            style={{ position: 'relative', bottom: '10px' }}
                                        >
                                            <img style={{ borderRadius: '20px' }} src={'https://s3-alpha-sig.figma.com/img/62a3/4e1c/8e7bd6ecbe59eaf9349b289ae329322f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRTp6PM8yUL4a-dDy9mlJfW2IaeKup39Zso3TDDEPYSGUBecQuiOOF~wwVi1KBPlKghO9hDdsY4nLoX3-H6PZ4GxMNMd9R-CnEa62iBDJg7OeftvMRKo3QDqlde3sGNwE9HIDea1ZF5SYU7Al7tQbBp2KAuqMbCwFxP1HTHJUCbbEM8NvnF2OTKcADuhelGCQ6pKHsaWx8P5dXoj6KFE5UQUQiGks6cNW~uH7zBUw6umNy7ROCl7cj-A0hCbsS6cUgI-RNq2jGbG9dS6KVr1VIZ6H0ysMaqQ-eU~hvE0R2vukufS9cVs7vehB7S9fZzhkxw5lvEadDpKOUQl9JF6ZA__'} width={'34px'} height={'34px'} alt="" />
                                            <div className="ms-3 me-auto" style={{ position: 'relative', bottom: '3px' }}>
                                                <small style={{ fontSize: '12px' }} className="fw-bold">ATM Cash withdrawal</small>
                                                <h6 style={{ fontSize: '10px' }} className='text-muted'>28 Aug, 2:15 AM</h6>
                                            </div>
                                            <small className="fw-bold mt-1" style={{ position: 'relative', bottom: '2px', fontSize: '12px' }}>
                                                -$201.50
                                            </small>
                                        </ListGroup.Item>
                                        <hr style={{ position: 'relative', bottom: '20px' }} />
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                            style={{ position: 'relative', bottom: '20px' }}
                                        >
                                            <img style={{ borderRadius: '20px' }} src={'https://s3-alpha-sig.figma.com/img/0479/c79e/ef9263c8fca2d3f3ef7e7201cd5b9609?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b7hTtGaLVBjLsXNtF4zi1h2ez7Gf-QkjiyPC55rTpw5SUIaN1KX85wQhdxpmTpym5cRi6ZYn-1djcKRMf81AFUmggykYpwcDp8g4yYHFG41VFy0Q8mjT~fPk9hLY9nm3clyR4P~HwDUVdB5IH04HBM6zRpPinNFUlUN9utiD7xpIZDhtmulOpTQy~CJ3LFA2CzQlg3rJ-nFKvi4j5eYw3UsfqLsoGo50IrIRoV~VQ3x2FW0r7SHnfdA0tBIrGNtHZuUL2uFNOocgH6CGbx3VzIMr6Zx0T5Ahs~N3wdQlSHRS~9CEu2UKZIpalrQ~PfAV80QOz310I1Fsx-dit1tYGQ__'} width={'34px'} height={'34px'} alt="" />
                                            <div className="ms-3 me-auto" style={{ position: 'relative', bottom: '3px' }}>
                                                <small style={{ fontSize: '12px' }} className="fw-bold">Online purchase on Amazon.com</small>
                                                <h6 style={{ fontSize: '10px' }} className='text-muted'>28 Aug, 5:40 PM</h6>
                                            </div>
                                            <small className="fw-bold mt-1" style={{ position: 'relative', bottom: '2px', fontSize: '12px' }}>
                                                -$184.00
                                            </small>
                                        </ListGroup.Item>
                                        <hr style={{ position: 'relative', bottom: '30px' }} />
                                        <Card.Text style={{ position: 'relative', bottom: '30px' }}>
                                            <small className='text-muted ms-1'>24 August</small>
                                        </Card.Text>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                            style={{ position: 'relative', bottom: '30px' }}
                                        >
                                            <img style={{ borderRadius: '20px' }} src={'https://s3-alpha-sig.figma.com/img/62a3/4e1c/8e7bd6ecbe59eaf9349b289ae329322f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRTp6PM8yUL4a-dDy9mlJfW2IaeKup39Zso3TDDEPYSGUBecQuiOOF~wwVi1KBPlKghO9hDdsY4nLoX3-H6PZ4GxMNMd9R-CnEa62iBDJg7OeftvMRKo3QDqlde3sGNwE9HIDea1ZF5SYU7Al7tQbBp2KAuqMbCwFxP1HTHJUCbbEM8NvnF2OTKcADuhelGCQ6pKHsaWx8P5dXoj6KFE5UQUQiGks6cNW~uH7zBUw6umNy7ROCl7cj-A0hCbsS6cUgI-RNq2jGbG9dS6KVr1VIZ6H0ysMaqQ-eU~hvE0R2vukufS9cVs7vehB7S9fZzhkxw5lvEadDpKOUQl9JF6ZA__'} width={'34px'} height={'34px'} alt="" />
                                            <div className="ms-3 me-auto" style={{ position: 'relative', bottom: '3px' }}>
                                                <small style={{ fontSize: '12px' }} className="fw-bold">Income payment for projects</small>
                                                <h6 style={{ fontSize: '10px' }} className='text-muted'>24 Aug, 6:20 PM</h6>
                                            </div>
                                            <small className="fw-bold mt-1" style={{ position: 'relative', bottom: '2px', fontSize: '12px' }}>
                                                +$3.000,00
                                            </small>
                                        </ListGroup.Item>
                                        <hr style={{ position: 'relative', bottom: '40px' }} />
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                            style={{ position: 'relative', bottom: '40px' }}
                                        >
                                            <img style={{ borderRadius: '20px' }} src={'https://s3-alpha-sig.figma.com/img/5b19/3e64/0c72a6b7056194bc5facec54759ead4a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C2Tp4qW1KNuHRvtY4GjkdY9oAf7GWoKBG7qcAvv~GbDyKlNiRYErCgQZTdgPqjce8RmeLBVxIL~jHyFKznE5waN3zD-BGb8vtzhqySlIIGBCZuzT4JpvGi-LHBIImgnoQm6qXnmqyk7cMRIwR3yIvf864PBssv0-xkj0q8B-iYKF0QNRKdM2Am6cC~hNXm1kA6XWMdnN5IsN1ryKe0bZyviH7eATcl-Y2O6l4fDWlR7voyP48F8oFQGBWJxcF5oAWkm92VgFMPQpivxGhRA5Vg~vYAXmg4E3HolVX-qkrUpJE2TPrHRQZgKRgy-4uonWyXCayc36yMCfvWR7wVcZkw__'} width={'34px'} height={'34px'} alt="" />
                                            <div className="ms-3 me-auto" style={{ position: 'relative', bottom: '3px' }}>
                                                <small style={{ fontSize: '12px' }} className="fw-bold">Groceries store</small>
                                                <h6 style={{ fontSize: '10px' }} className='text-muted'>24 Aug, 1:00 AM</h6>
                                            </div>
                                            <small className="fw-bold mt-1" style={{ position: 'relative', bottom: '2px', fontSize: '12px' }}>
                                                -$400.00
                                            </small>
                                        </ListGroup.Item>
                                        <hr style={{ position: 'relative', bottom: '50px' }} />
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                            disabled
                                            style={{ position: 'relative', bottom: '50px' }}
                                        >
                                            <img style={{ borderRadius: '20px' }} src={rocket} width={'34px'} height={'34px'} alt="" />
                                            <div className="ms-3 me-auto" style={{ position: 'relative', bottom: '3px' }}>
                                                <small style={{ fontSize: '12px' }} className="fw-bold">Monthly home rent</small>
                                                <h6 style={{ fontSize: '10px' }} className='text-muted'>24 Aug, 1:00 AM</h6>
                                            </div>
                                            <small className="fw-bold mt-1" style={{ position: 'relative', bottom: '2px', fontSize: '12px' }}>
                                                -$400.00
                                            </small>
                                        </ListGroup.Item>
                                        <hr style={{ position: 'relative', bottom: '60px' }} />
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                            style={{ position: 'relative', bottom: '60px' }}
                                        >
                                            {/* <Typography fontFamily={'inter'}>hello</Typography> */}
                                            <img style={{ borderRadius: '20px' }} src={'https://s3-alpha-sig.figma.com/img/feff/e44e/7f5bdaeb42265ec34c8f52fb91644e57?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TkkYZIys1oPaPDIDd15Jqj-Rz1tkNJRNCGqgto5JRo~EQACcKp5YrLaEfBNPHLuedXECgVPa~E3TWaFHE-VoH7g49C5y4AGQKO9L45oNXrnXhToznktftvlMuqqnsHx2Tw5HGVVwUK0WMtgkn~w6AmOzPeW~uv4wU-Wa2eAd~LFbnc44U9AeoIyie7dAL-yvZfJkJFQAVJTlQhXFj386Wn3drGJY6YYJu2nAK8egF8fmxCcVzwunQ1Px70O7dC~g8gIzO~fdQaFGu-0naSTvqYtRHW9gsgLHem~Y5zSqfl-XoKYpcebSz~LjmlBw8qbWZdfpst~LMWHO09QZ7KYaAw__'} width={'34px'} height={'34px'} alt="" />
                                            <div className="ms-3 me-auto" style={{ position: 'relative', bottom: '3px' }}>
                                                <small style={{ fontSize: '12px' }} className="fw-bold">Online purchase at Ebay.com</small>
                                                <h6 style={{ fontSize: '10px' }} className='text-muted'>28 Aug, 3:00 PM</h6>
                                            </div>
                                            <small className="fw-bold mt-1" style={{ position: 'relative', bottom: '2px', fontSize: '12px' }}>
                                                -$396.00
                                            </small>
                                        </ListGroup.Item>
                                        {/* </ListGroup> */}
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>

                        {/* </Row> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}



// <ApexChart />
export default ReactBootstrap;