import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
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
import search from '../assets/images/search.jpg'
import bell1 from '../assets/images/bell1.jpg'
import '../assets/css/style.css'
import { Avatar } from '@mui/material';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function React_Bootstrap() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={2} style={{ backgroundColor: 'red' }}>
                        <Offcanvas.Header className='mt-3 ms-2'>
                            <Offcanvas.Title><img src={Hidden} height={'40px'} width={'40px'} /></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='mt-3 ms-2'>
                            <span className='text-muted'>Navigation</span>
                            <Col className='d-flex mt-3'>
                                <img src={box} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-dark'><h6 className='ms-2'>Dashboard</h6></a>
                            </Col>
                            <Col className='d-flex mt-2 text-muted'>
                                <img src={account} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Accounts</h6></a>
                            </Col>
                            <Col className='d-flex mt-2 text-muted'>
                                <img src={card} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Cards</h6></a>
                            </Col>
                            <Col className='d-flex mt-2 text-muted'>
                                <img src={transaction} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Transactions</h6></a>
                            </Col>
                            <Col className='d-flex mt-2 text-muted'>
                                <img src={payment} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Payment</h6></a>
                            </Col>
                            <Col className='d-flex mt-2 text-muted'>
                                <img src={invoice} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Invoicing</h6></a>
                            </Col>
                            <Col className='d-flex mt-2 text-muted'>
                                <img src={trading} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Trading</h6></a>
                            </Col>
                            <Col className='d-flex mt-2 text-muted'>
                                <img src={report} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Reports</h6></a>
                            </Col>
                            <Col className='mt-2'><span className='text-muted'>Balances</span></Col>
                            <Col className='d-flex mt-2 text-muted'>
                                <img src={use} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>100,050.75 USD</h6></a>
                            </Col>
                            <Col className='d-flex mt-2 text-muted'>
                                <img src={europe} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>2310.40 EUR</h6></a>
                            </Col>
                            <Col className='d-flex mt-2 text-muted'>
                                <img src={uk} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>9455.50 GBP</h6></a>
                            </Col>
                            <Col className='d-flex mt-2 text-muted'>
                                <img src={open} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Open a balance</h6></a>
                            </Col>
                            <Col className='d-flex mt-2 text-muted'>
                                <img src={setting} width={'20px'} height={'20px'} alt="" />
                                <a href="" className='text-muted'><h6 className='ms-2'>Profile setting</h6></a>
                            </Col>
                        </Offcanvas.Body>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default React_Bootstrap;