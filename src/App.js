import UserContext from "./components/Store/UserContext";
import UserFinder from "./components/UserFinder";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
  { id: "u4", name: "Shaheer" },
  { id: "u5", name: "Wasil" },
  { id: "u6", name: "Sherjil" },
  { id: "u7", name: "Naemm" },
];

function App() {
  const userContext = {
    users: DUMMY_USERS,
  };
  return (
    <UserContext.Provider value={userContext}>
      <UserFinder />
    </UserContext.Provider>
  );
}

export default App;
