import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import sha256 from "crypto-js/sha256";
import api from "../service";

const TeamModal = ({ show, setShow, email, setVerified }) => {
  const [isLoading, setLoading] = useState(false);
  const [hash, setHash] = useState("");
  const [time, setTime] = useState(0);
  const [otp, setOtp] = useState("");
  const handleClose = () => {
    setShow(false);
    setHash("");
    setOtp("");
  };
  const sendOtp = () => {
    setLoading(true);
    api
      .post("/about/verify/", { email })
      .then((res) => {
        let date = new Date();
        setTime(date.getTime());
        setHash(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const checkHash = () => {
    let date = new Date();
    let totalT = date.getTime() - time;
    if (totalT >= 5 * 1000 * 60) {
      alert("OTP EXPIRED");
      handleClose();
      return;
    }
    let calcHash = sha256(otp).toString();
    if (calcHash === hash) {
      setVerified(true);
      handleClose();
      alert("Verified");
    } else {
      alert("Invalid OTP");
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ display: "grid", gridTemplateColumns: "9fr 1fr" }}
        >
          <Modal.Title style={{ color: "#000000e1" }}>
            OTP Verification
          </Modal.Title>
        </Modal.Header>
        {!hash && (
          <Modal.Body style={{ color: "#000000" }}>
            Click continue to send a verification code to your registered email
            address.
          </Modal.Body>
        )}
        {hash && (
          <Modal.Body style={{ color: "#000000" }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  type="text"
                  placeholder="Enter OTP"
                  onChange={(e) => setOtp(e.target.value)}
                  value={otp}
                />
                <Form.Text className="text-muted" style={{ color: "#000000" }}>
                  OTP expires in 5 minutes.
                </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
        )}
        <Modal.Footer style={{ flexWrap: "inherit" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              hash ? checkHash() : sendOtp();
            }}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Continue"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default TeamModal;
