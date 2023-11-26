import { useEffect, useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);

  return (
    <div>
      <label>First Name: </label>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <br />
      <label>Last Name: </label>
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <h2>{fullName}</h2>
    </div>
  );
}
