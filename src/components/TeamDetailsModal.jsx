import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from "../service";
import { useState, useEffect } from "react";

const TeamDetailsModal = ({ show, setShow, member }) => {
  const [Loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [facebook, setFacebook] = useState("");
  const [insta, setInsta] = useState("");
  const [github, setGithub] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    console.log(member);
    if (member !== null) {
      setName(member.name === null ? "" : member.name);
      setBranch(member.branch === null ? "" : member.branch);
      setFacebook(member.fb_url === null ? "" : member.fb_url);
      setInsta(member.instagram_url === null ? "" : member.instagram_url);
      setGithub(member.github_url === null ? "" : member.github_url);
      setEmail(member.email_id === null ? "" : member.email_id);
      setPhone(member.phone === null ? "" : member.phone);
    } else {
      handleClose();
    }
  }, [member]);
  const handleClose = () => setShow(false);

  const patchData = () => {
    setLoading(true);
    let form_data = new FormData();
    if (photo) form_data.append("photo", photo, photo.name);
    if (name) form_data.append("name", name);
    if (branch) form_data.append("branch", branch);
    if (facebook) form_data.append("fb_url", facebook);
    if (insta) form_data.append("instagram_url", insta);
    if (github) form_data.append("github_url", github);
    if (email) form_data.append("email_id", email);
    if (phone) form_data.append("phone", phone);

    api
      .patch(`/about/updateTeam/${member.id}/`, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        setLoading(false);
        alert("Success");
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          if (err.response.status === 400) {
            let error = "";
            for (var x in err.response.data) {
              let temp = err.response.data[x][0];
              temp =
                temp.toLowerCase().substring(0, temp.length - 1) + " for " + x;
              error += temp + "\n";
            }
            alert(error + "Or leave them empty");
          }
        }
        setLoading(false);
      });
  };
  const handlePhoto = (e) => {
    if (!e.target.files[0]) return;
    if (e.target.files[0].size > 2097152) {
      e.target.value = "";
      alert("File is too big!");
    } else {
      setPhoto(e.target.files[0]);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        style={{ display: "grid", gridTemplateColumns: "9fr 1fr" }}
      >
        <Modal.Title style={{ color: "black" }}>Change Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3" style={{ color: "black" }}>
            *Any details changed will be saved permanently.
          </div>
          <Form.Group className="mb-3" controlId="formBasicFile">
            <input
              style={{ background: "white", border: "none", height: "50%" }}
              type="file"
              accept="images/*"
              onChange={handlePhoto}
            />
            <Form.Text style={{ paddingLeft: "10px", color: "#000000" }}>
              Display Image (max. 2MB)
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoComplete={"off"}
            />
            <br />
            <Form.Control
              type="text"
              placeholder="Branch"
              onChange={(e) => setBranch(e.target.value)}
              value={branch}
              autoComplete={"off"}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUrl">
            <Form.Control
              type="url"
              placeholder="Facebook id"
              onChange={(e) => setFacebook(e.target.value)}
              value={facebook}
              autoComplete={"off"}
            />
            <br />
            <Form.Control
              type="url"
              placeholder="Instagram id"
              onChange={(e) => setInsta(e.target.value)}
              value={insta}
              autoComplete={"off"}
            />
            <br />
            <Form.Control
              type="url"
              placeholder="LinkedIn id"
              onChange={(e) => setGithub(e.target.value)}
              value={github}
              autoComplete={"off"}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email id"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete={"off"}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Control
              type="number"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              autoComplete={"off"}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ flexWrap: "inherit" }}>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" disabled={Loading} onClick={patchData}>
          {Loading ? "Loading.." : "Save Changes"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TeamDetailsModal;
