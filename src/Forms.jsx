import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Cards from "./Card";
const Forms = () => {
  const [data, setData] = useState({
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    image: "",
    password: "",
  });
  const [value, setValue] = useState(false);
  const [mouse, setMouse] = useState();
  const [cardValue, setCardValue] = useState(false);
  const { email, username, firstname, lastname, image, password } = data;
  const handleData = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const hadleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).every((value) => value.trim() !== "")) {
      setCardValue(true);
    } 
  };
   const handleMouse =()=>{
    if (Object.values(data).every((value) => value.trim() !== "")) {
      setMouse(false)
    } else {
      setMouse(true)
    }
   }
  return (
    <Container className="mt-4 w-50 ">
      <Form onSubmit={hadleSubmit} className="d-flex flex-column">
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleData}
            id="email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={handleData}
            id="username"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            onChange={handleData}
            id="firstname"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            onChange={handleData}
            id="lastname"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image url"
            onChange={handleData}
            id="image"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <div className="d-flex">
            <Form.Control
              type={value ? "text" : "password"} 
              placeholder="Password"
              onChange={handleData}
              id="password"
         
            />
            <Button variant="dark" onClick={()=>setValue(!value)} >Show/Hidden</Button>
          </div>
        </Form.Group >
        <Button variant="dark" type="submit" onMouseEnter={handleMouse} onMouseLeave ={()=>setMouse(false)} className={mouse ? "submit" : ""}>
          Submit
        </Button>
      </Form>
      {cardValue && <Cards data={data} />}
    </Container>
  );
};

export default Forms;
