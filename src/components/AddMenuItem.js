// import React from "react";
// // import "./AddMenu.css";
// import { BsCloudUpload } from "react-icons/bs";
// import { Modal, Button } from 'react-bootstrap'
// const AddMenu = ({ open }) =>


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<AddMenu />);
//  {

// console.log("openkkli",open)
//   const [isShow, invokeModal] = React.useState(false)
//   const initModal = () => {
//     return invokeModal(!false)
//   }
//   return (

//     <>

//       <Button variant="success" onClick={initModal}>
//         Open Modal
//       </Button>
//       <Modal show={isShow}>
//         <Modal.Header closeButton onClick={initModal}>
//           <Modal.Title>React Modal Popover Example</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="danger" onClick={initModal}>
//             Close
//           </Button>
//           <Button variant="dark" onClick={initModal}>
//             Store
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   )
// }
// return (


//   <>
//     <div
//       // onClick={() => {
//       //   close(false);
//       // }}
//       // class="overlay"
//     ></div>
//     <div 
//     //  class="add-recipe-window"
//      class="btn--close-modal"
//     >
//       {/* <button
//         onClick={() => {
//           close(false);
//         }} */}
//         {/* // class="btn--close-modal" */}
//       >
//         {/* &times;
//       </button> */}
//       <form class="upload">
//         <div class="upload__column">
//           <h3 class="upload__heading">Recipe data</h3>
//           <label>Title</label>
//           <input value="" required name="title" type="text" />
//           <label>URL</label>
//           <input value="" required name="sourceUrl" type="text" />
//           <label>Image URL</label>
//           <input value="TEST23" required name="image" type="text" />
//           <label>Description</label>
//           <input value="TEST23" required name="Description" type="text" />
//           <label>Price</label>
//           <input value="23" required name="Price" type="number" />
//           <label>Servings</label>
//           <input value="" required name="servings" type="number" />
//         </div>

//         <button class="btn upload__btn">
//           <BsCloudUpload className="upload-icon" />

//           <span>Add Menu</span>
//         </button>
//       </form>
//       <div />
//     </div>
//   </>
// );


export default AddMenu;
