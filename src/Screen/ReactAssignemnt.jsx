import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ReactAssignment() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div className='col-3 bg-dark text-white' style={{height:'593px'}}>
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </div>
    </div>
  );
}

export default ReactAssignment;