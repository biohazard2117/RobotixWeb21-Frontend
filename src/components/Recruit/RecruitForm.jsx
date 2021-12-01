import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "../../service";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingForm from "./LandingForm";
import Domain1 from "./Domain1";
import Submit from "./Submit.jsx";
import "../../assets/css/recruitForm.css";


const RecruitForm = () => {
  const [questions, setQuestion] = useState(null);
  const [values, setValues] = useState(null);
  const [domainValuesALL, setDomainValuesALL] = useState([]);
  const [domainValuesCORE, setDomainValuesCORE] = useState([]);
  const [domainValuesDESIGN, setDomainValuesDESIGN] = useState([]);
  const [domainValuesPR, setDomainValuesPR] = useState([]);
  const [domainValuesWEB, setDomainValuesWEB] = useState([]);
  const [domainValuesDOCS, setDomainValuesDOCS] = useState([]);

  useEffect(() => {
    api
      .get("/recruitment/response")
      .then((response) => {
        setQuestion(response.data);
        console.log(questions);
      })
      .catch((error) => {});
  }, []);

  const [domainValues,setDomainValues] = useState(null);
  useEffect(()=>{
    const temp={
      "ALL" : domainValuesALL,
      "CORE": domainValuesCORE,
      "DESIGN" : domainValuesDESIGN,
      "PR" : domainValuesPR,
      "WEB" : domainValuesWEB,
      "DOCS" : domainValuesDOCS
    }
    setDomainValues(temp);
  },[domainValuesALL]);

  const getValues = (values) => {
    setValues(values);
  };

  const getDomainValuesALL = (values) => {
    console.log(values);
    setDomainValuesALL(values);
  };

  const getDomainValuesCORE = (values) => {
    console.log(values);
    setDomainValuesCORE(values);
  };

  const getDomainValuesDESIGN = (values) => {
    console.log(values);
    setDomainValuesDESIGN(values);
  };

  const getDomainValuesWEB = (values) => {
    console.log(values);
    setDomainValuesWEB(values);
  };

  const getDomainValuesPR = (values) => {
    console.log(values);
    setDomainValuesPR(values);
  };

  const getDomainValuesDOCS = (values) => {
    console.log(values);
    setDomainValuesDOCS(values);
  };

  const final = () => {
    document.getElementById("dobtn1").click();

    if (JSON.parse(localStorage.getItem("selDomains")).includes("CORE")) {
      document.getElementById("dobtn2").click();
    }
    if (JSON.parse(localStorage.getItem("selDomains")).includes("DESIGN")) {
      document.getElementById("dobtn3").click();
    }
    if (JSON.parse(localStorage.getItem("selDomains")).includes("PR")) {
      document.getElementById("dobtn4").click();
    }
    if (JSON.parse(localStorage.getItem("selDomains")).includes("DOCS")) {
      document.getElementById("dobtn5").click();
    }
    if (JSON.parse(localStorage.getItem("selDomains")).includes("WEB")) {
      document.getElementById("dobtn6").click();
    }
  };
  return (
    <div>
      <div className="r_back"></div>

      <div className="back_glass">
        <div className="r_top_back"></div>
        <div id="step1">
          <div className="r_topnav">
            <Container>
              <Row>
                <Col xs={12} md={4}>
                  <div className="r_txt1">Join us at RobotiX Club!</div>
                </Col>
                <Col style={{ padding: "0px" }}>
                  <div className="r_link " id="a_step1">
                    Step1{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Col>
                <Col style={{ padding: "0px" }}>
                  <div className="r_link " id="a_step2">
                    Step2{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Col>
                <Col style={{ padding: "0px" }}>
                  <div className="r_link " id="a_step3">
                    Step3{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Col>
                <Col xs={12} md={3}></Col>
              </Row>
            </Container>
          </div>
        </div>
        <BrowserRouter>
          <Switch>
            <Route path="/recruitment_form">
              <LandingForm getValues={getValues} placeValues={values} />
            </Route>
            <Route path="/Domain1">
              <Domain1
                questions={questions}
                domainValues={domainValuesALL}
                getDomainValues={getDomainValuesALL}
                DomainFilter="ALL"
                showback={true}
                shownext={true}
                btnid="dobtn1"
              />
              {JSON.parse(localStorage.getItem("selDomains")).includes(
                "CORE"
              ) && (
                <Domain1
                  questions={questions}
                  domainValues={domainValuesCORE}
                  getDomainValues={getDomainValuesCORE}
                  DomainFilter="CORE"
                  showback={false}
                  shownext={true}
                  btnid="dobtn2"
                />
              )}
              {JSON.parse(localStorage.getItem("selDomains")).includes(
                "DESIGN"
              ) && (
                <Domain1
                  questions={questions}
                  domainValues={domainValuesDESIGN}
                  getDomainValues={getDomainValuesDESIGN}
                  DomainFilter="DESIGN"
                  showback={false}
                  shownext={true}
                  btnid="dobtn3"
                />
              )}
              {JSON.parse(localStorage.getItem("selDomains")).includes(
                "PR"
              ) && (
                <Domain1
                  questions={questions}
                  domainValues={domainValuesPR}
                  getDomainValues={getDomainValuesPR}
                  DomainFilter="PR"
                  showback={false}
                  shownext={true}
                  btnid="dobtn4"
                />
              )}
              {JSON.parse(localStorage.getItem("selDomains")).includes(
                "DOCS"
              ) && (
                <Domain1
                  questions={questions}
                  domainValues={domainValuesDOCS}
                  getDomainValues={getDomainValuesDOCS}
                  DomainFilter="DOCS"
                  showback={false}
                  shownext={true}
                  btnid="dobtn1"
                  btnid="dobtn5"
                />
              )}
              {JSON.parse(localStorage.getItem("selDomains")).includes(
                "WEB"
              ) && (
                <Domain1
                  questions={questions}
                  domainValues={domainValuesWEB}
                  getDomainValues={getDomainValuesWEB}
                  DomainFilter="WEB"
                  showback={false}
                  shownext={true}
                  btnid="dobtn6"
                />
              )}

              <button
                onClick={() => {
                  final();
                }}
              >
                click
              </button>
            </Route>
            <Route path="/submit">
              <Submit values={values} domainValues={domainValues}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};
export default RecruitForm;
