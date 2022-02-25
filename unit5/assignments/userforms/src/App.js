import logo from "./logo.svg";
import "./App.css";
import { FormInput } from "./components/FormInput";
import { useState } from "react";
import Table from "./components/Table";

function App() {
  const [user, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const handleSubmit = (data) => {
    setShow(true);
    setUsers([...user, data]);
  };
  return (
    <div className="App">
      <FormInput handleSubmitForm={handleSubmit} />
      <hr />
      <br />
      {show && <Table userData={user} />}
    </div>
  );
}

export default App;
