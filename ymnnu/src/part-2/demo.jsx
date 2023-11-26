import { useState } from "react";
import Profile from "./solution";

export default function Demo() {
  const [userId, setUserId] = useState(1);

  const changeUser = () => {
    setUserId((prevUserId) => (prevUserId === 1 ? 2 : 1));
  };

  return (
    <div>
      <button onClick={changeUser}>Change User</button>
      <Profile userId={userId} key={userId} />
    </div>
  );
}
