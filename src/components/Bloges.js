import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Bloges = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const getData = async () => {
      const requst = await fetch(
        "http://localhost:8080/api/v1/blog/" + param.id
      );
      const data =await requst.json();
      setTitle(data.title);
      setBody(data.body);
    };
    getData();
  }, []);


  const onClick = () => {
    navigate("/");
  };
  return (
    <>
      <input
        type="text"
        className="form-control my-3"
        value={title}
        readOnly
      />
      <textarea
        className="form-control my-3"
        value={body}
        readOnly
      ></textarea>

      <button onClick={onClick} type="button" className="btn btn-primary w-100">
        Back Blog
      </button>
    </>
  );
};

export default Bloges;
