import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
const Domain1 = ({
  questions,
  getDomainValues,
  domainValues,
  DomainFilter,
  showback,
  shownext,
  btnid,
}) => {
  useEffect(() => {
    document.getElementById("a_step2").classList.add("r_active");
    document.getElementById("a_step1").classList.remove("r_active");
    document.getElementById("a_step3").classList.remove("r_active");
  }, []);

  const queId = [];
  const [que, setQue] = useState([]);
  useEffect(() => {
    console.log(questions);
    if (domainValues.length !== 0) {
      domainValues.map((e) => {
        let id = e.ID;
        for (let i = 1; i <= 4; i++) {
          let temp = document.getElementById(`${id}#${i}`);
          if (temp !== null) {
            if (temp.value === e.Answer) temp.checked = true;
          }
        }
        if (document.getElementById(id) !== null)
          document.getElementById(id).value = e.Answer;
      });
    }
  }, []);

  let ans = [];
  const collectValue = (queId) => {
    queId.map((element) => {
      let temp = null;
      let checkMulti = true;
      let inp = document.getElementById(element);
      if (element.toString().includes("#")) {
        if (inp.checked) {
          ans.map((e) => {
            if (e.ID === element.substring(0, element.length - 2)) {
              e.Answer = `${e.Answer},${inp.value}`;
              checkMulti = false;
            }
          });
          if(checkMulti){
            temp = {
              ID: element.substring(0, element.length - 2),
              Answer: inp.value,
            };
          }
        }
      } else {
        temp = {
          ID: element.toString(),
          Answer: inp.value,
        };
      }
      if (temp !== null) ans.push(temp);
    });
    getDomainValues(ans);
  };

  const [abc, setAbc] = useState([]);
  const addQueId = (value) => {
    queId.push(value);
    setAbc(queId);
  };

  useEffect(() => {
    let que;
    for (var x in questions) {
      if (x === DomainFilter) {
        // console.log(questions[x]);
        setQue(
          questions[x].map((element) => {
            // console.log(element);
            if (element.question_type === "MultipleChoice") {
              addQueId(`${element.question_id}#1`);
              addQueId(`${element.question_id}#2`);
              addQueId(`${element.question_id}#3`);
              addQueId(`${element.question_id}#4`);
              return (
                <div key={element.question_id}>
                  <div className="ques">
                    <li>{element.question}</li>

                    <div className="options">
                      <input
                        type="checkbox"
                        id={element.question_id + "#1"}
                        value={element.option1}
                      />{" "}
                      {element.option1} <br />
                      <input
                        type="checkbox"
                        id={element.question_id + "#2"}
                        value={element.option2}
                      />{" "}
                      {element.option2} <br />
                      <input
                        type="checkbox"
                        id={element.question_id + "#3"}
                        value={element.option3}
                      />{" "}
                      {element.option3} <br />
                      <input
                        type="checkbox"
                        id={element.question_id + "#4"}
                        value={element.option4}
                      />{" "}
                      {element.option4} <br />
                    </div>
                  </div>
                </div>
              );
            } else if (element.question_type === "SingleChoice") {
              addQueId(`${element.question_id}#1`);
              addQueId(`${element.question_id}#2`);
              addQueId(`${element.question_id}#3`);
              addQueId(`${element.question_id}#4`);
              return (
                <div key={element.question_id}>
                  <div>
                    <div className="ques">
                      <li>{element.question}</li>
                      <div className="options">
                        <form style={{ width: "100%", float: "left" }}>
                          <table>
                            <tr>
                              <td>
                                <input
                                  style={{ height: "14px", width: "14px" }}
                                  type="radio"
                                  id={element.question_id + "#1"}
                                  name="age"
                                  value={element.option1}
                                  name="singleChoice"
                                />
                              </td>
                              <td>
                                {" "}
                                <label
                                  style={{
                                    lineHeight: "1",
                                    marginLeft: "10px",
                                  }}
                                  htmlFor="age3"
                                >
                                  {element.option1}
                                </label>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <input
                                  style={{ height: "14px", width: "14px" }}
                                  type="radio"
                                  id={element.question_id + "#2"}
                                  name="age"
                                  value={element.option2}
                                  name="singleChoice"
                                />
                              </td>{" "}
                              <td>
                                <label
                                  style={{
                                    lineHeight: "1",
                                    marginLeft: "10px",
                                  }}
                                  htmlFor="age2"
                                >
                                  {element.option2}
                                </label>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  style={{ height: "14px", width: "14px" }}
                                  type="radio"
                                  id={element.question_id + "#3"}
                                  name="age"
                                  value={element.option3}
                                  name="singleChoice"
                                />
                              </td>
                              <td>
                                {" "}
                                <label
                                  style={{
                                    lineHeight: "1",
                                    marginLeft: "10px",
                                  }}
                                  htmlFor="age3"
                                >
                                  {element.option3}
                                </label>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <input
                                  style={{ height: "14px", width: "14px" }}
                                  type="radio"
                                  id={element.question_id + "#4"}
                                  name="age"
                                  value={element.option4}
                                  name="singleChoice"
                                />
                              </td>
                              <td>
                                <label
                                  style={{
                                    lineHeight: "1",
                                    marginLeft: "10px",
                                  }}
                                  htmlFor="age4"
                                >
                                  {element.option4}
                                </label>
                              </td>
                            </tr>
                          </table>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else if (element.question_type === "Answer") {
              addQueId(`${element.question_id}`);
              return (
                <div key={element.question_id}>
                  <div>
                    <li>{element.question}</li>
                  </div>
                  <br />
                  <textarea
                    className="textarea"
                    id={element.question_id}
                  ></textarea>
                </div>
              );
            }
          })
        );
      }
    }
  }, []);

  return (
    <div>
      <Container className="step2">
        <Row>
          <Col xs={12} md={12}>
            {showback && (
              <div className="rec_btn_wrap" style={{ textAlign: "left" }}>
                <Link to={"/recruitment_form"}>
                  <div className="rec_btn">
                    <i
                      className="fa fa-angle-double-left"
                      aria-hidden="true"
                    ></i>{" "}
                    Step 1
                  </div>
                </Link>
              </div>
            )}
            {que}
            {shownext && (
              <div className="rec_btn_wrap">
                <Link
                  id={btnid}
                  to={"/Submit"}
                  onClick={() => {
                    collectValue(abc);
                  }}
                  style={{ display: "none" }}
                >
                  <div className="rec_btn">
                    Step 3{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Link>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Domain1;
