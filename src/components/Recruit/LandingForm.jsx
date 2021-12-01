import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/recruitForm.css";
import { v4 as uuidv4 } from "uuid";

const LandingForm = ({ getValues, placeValues }) => {
  useEffect(() => {
    document.getElementById("a_step1").classList.add("r_active");
    document.getElementById("a_step2").classList.remove("r_active");
    document.getElementById("a_step3").classList.remove("r_active");
  });

  const [name, setName] = useState(placeValues ? placeValues.name : "");
  const [email, setEmail] = useState(placeValues ? placeValues.email : "");
  const [contact, setContact] = useState(
    placeValues ? placeValues.contact : ""
  );
  const [whatsapp, setWhatsapp] = useState(
    placeValues ? placeValues.whatsapp : ""
  );

  useEffect(() => {
    if (localStorage.getItem("selDomains") !== null) {
      let selDomains = JSON.parse(localStorage.getItem("selDomains"));
      if (selDomains.length !== 0) {
        selDomains.map((element) => {
          for (let i = 1; i <= 5; i++) {
            let temp = document.getElementById(`cb${i}`);
            if (temp.value === element) {
              temp.checked = true;
            }
          }
        });
      }
    }
  }, []);
  const [sem, setSem] = useState(placeValues ? placeValues.sem : 0);
  const setValue = () => {
    let values = {
      Name: name,
      ID: uuidv4(),
      Email: email,
      Mobile: contact,
    };
    getValues(values);
  };
  const getDomains = () => {
    let selDoamins = [];
    for (let i = 1; i <= 5; i++) {
      let temp = document.getElementById(`cb${i}`);
      if (temp.checked) {
        selDoamins.push(temp.value);
      }
    }

    console.log(JSON.stringify(selDoamins));
    localStorage.setItem("selDomains", JSON.stringify(selDoamins));
    console.log(JSON.parse(localStorage.getItem("selDomains")));
  };

  return (
    <Container className="step1">
      <Row>
        <Col xs={12} md={6}>
          <Container style={{ padding: "10px" }}>
            <Row>
              <Col xs={4}>
                <label htmlFor="name">Name</label>
              </Col>
              <Col xs={8}>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  id="name"
                  placeholder="Your name..."
                  autoComplete="off"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <label htmlFor="email">Email</label>
              </Col>
              <Col xs={8}>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  id="email"
                  placeholder="Your email..."
                  autoComplete="off"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <label htmlFor="phone">Contact</label>
              </Col>
              <Col xs={8}>
                <input
                  onChange={(e) => setContact(e.target.value)}
                  value={contact}
                  type="text"
                  id="phone"
                  placeholder="Your phone no..."
                  autoComplete="off"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <label htmlFor="whatsapp">Whatsapp</label>
              </Col>
              <Col xs={8}>
                <input
                  onChange={(e) => setWhatsapp(e.target.value)}
                  value={whatsapp}
                  type="text"
                  id="whatsapp"
                  placeholder="Your Whatsapp no..."
                  autoComplete="off"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <label htmlFor="semester">Semester</label>
              </Col>
              <Col xs={8}>
                <Form>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Control
                      as="select"
                      onChange={(e) => setSem(e.target.value)}
                      value={sem}
                      custom
                      style={{
                        backgroundColor: "rgba(0, 212, 201, 0)",
                        color: "rgba(250,250,250,0.7)",
                        border: "none",
                        borderBottom: "2px solid rgba(195, 0, 255, 0.5)",
                        marginTop: "15px",
                      }}
                    >
                      <option style={{ background: "#4424b2" }}>
                        1st Semester
                      </option>
                      <option style={{ background: "#4424b2" }}>
                        3rd Semester
                      </option>
                      <option style={{ background: "#4424b2" }}>
                        5th Semester
                      </option>
                      <option style={{ background: "#4424b2" }}>
                        7th Semester
                      </option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </Col>

        <Col xs={12} md={6}>
          <Row style={{ padding: "10px" }}>
            <label htmlFor="whatsapp">
              Why do you want to join robotix club??
            </label>
            <textarea
              className="textarea"
              placeholder="Write here..."
              autoComplete="off"
            />
            <br />
            Select an option and see the dynamic mature of this form!!
            <br />
            <br />
            <form style={{ width: "100%", display: "flex", float: "left" }}>
              <input
                style={{
                  height: "15px",
                  margin: "0px",
                  float: "left",
                  width: "40px",
                }}
                type="checkbox"
                id="cb5"
                value="CORE"
              />
              <label style={{ lineHeight: "1" }} htmlFor="cb5">
                Core
              </label>
              <input
                style={{ height: "15px", margin: "0px", width: "40px" }}
                type="checkbox"
                id="cb4"
                value="DESIGN"
              />
              <label style={{ lineHeight: "1" }} htmlFor="cb4">
                Design
              </label>
              <input
                style={{ height: "15px", margin: "0px", width: "40px" }}
                type="checkbox"
                id="cb3"
                value="DOCS"
              />
              <label style={{ lineHeight: "1" }} htmlFor="cb3">
                Documentation
              </label>
              <br />
              <input
                style={{ height: "15px", margin: "0px", width: "40px" }}
                type="checkbox"
                id="cb2"
                value="PR"
              />
              <label style={{ lineHeight: "1" }} htmlFor="cb2">
                Public Relations
              </label>
              <br />
              <input
                style={{ height: "15px", margin: "0px", width: "40px" }}
                type="checkbox"
                id="cb1"
                value="WEB"
              />
              <label style={{ lineHeight: "1" }} htmlFor="cb1">
                Web
              </label>
            </form>
          </Row>
        </Col>
      </Row>
      <div className="rec_btn_wrap">
        <Link
          onClick={() => {
            setValue();
            getDomains();
          }}
          to={"/Domain1"}
        >
          <div className="rec_btn">
            Step 2{" "}
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default LandingForm;
