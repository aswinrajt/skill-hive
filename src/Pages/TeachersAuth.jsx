import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { menLogApi, menRegApi } from "../services/allApi";
// import { teacherLoginApi, teacherRegisterApi } from "../services/allApi";

function TeachersAuth() {
  const [authStatus, setAuthStatus] = useState(false);

  const [teacher, setTeacher] = useState({
    email: "",
    username: "",
    password: "",
  });

  const changeStatus = () => {
    setAuthStatus(!authStatus);
    setTeacher({
      email: "",
      username: "",
      password: "",
    });
  };

  const nav = useNavigate();

  const handleRegister = async () => {
    const { email, username, password } = teacher;
    if (!email || !username || !password) {
      toast.error("Enter valid data!!");
    } else {
      const res = await menRegApi(teacher);
      if (res.status === 200) {
        toast.success("Registration successful!!");
        setAuthStatus(false);
      } else {
        toast.error("Registration failed!!");
      }
    }
  };

  const handleLogin = async () => {
    const { email, password } = teacher;
    if (!email || !password) {
      toast.warning("Enter valid inputs!!");
    } else {
      const res = await menLogApi(teacher);
      if (res.status === 200) {
        toast.success("Login successful!!");
        sessionStorage.setItem("teacherToken", res.data.token);
        sessionStorage.setItem("teacherUsername", res.data.username);
        nav("/teacherdash");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="w-75 border shadow p-4 row m-5">
        <div className="col">
  {authStatus ? (
    <img
      src="https://cdn.educba.com/academy/wp-content/uploads/2019/08/teacher-role.jpg"
      alt="Teacher Register Illustration"
      className="img-fluid"
    />
  ) : (
    <img
      src="https://www.shutterstock.com/image-vector/teacher-concept-illustration-character-lecturer-260nw-1736262621.jpg"
      alt="Teacher Login Illustration"
      className="img-fluid"
    />
  )}
</div>


          <div className="col m-5">
            {authStatus ? <h2>Register as Teacher</h2> : <h2>Teacher Login</h2>}

            <div className="my-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  onChange={(e) =>
                    setTeacher({ ...teacher, email: e.target.value })
                  }
                  value={teacher.email}
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              {authStatus && (
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    onChange={(e) =>
                      setTeacher({ ...teacher, username: e.target.value })
                    }
                    value={teacher.username}
                    placeholder="name"
                  />
                </FloatingLabel>
              )}

              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
              >
                <Form.Control
                  type="password"
                  onChange={(e) =>
                    setTeacher({ ...teacher, password: e.target.value })
                  }
                  value={teacher.password}
                  placeholder="Password"
                />
              </FloatingLabel>
            </div>
            <div className="d-flex justify-content-between">
              {authStatus ? (
                <button className="btn btn-primary" onClick={handleRegister}>
                  Register
                </button>
              ) : (
                <button className="btn btn-info"  onClick={handleLogin}>
                  Login
                </button>
              )}

              <button className="btn btn-link" onClick={changeStatus}>
                {authStatus ? <>Existing user?</> : <>Not a user yet?</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeachersAuth;
