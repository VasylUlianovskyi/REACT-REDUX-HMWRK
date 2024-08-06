import { Provider } from "react-redux";
import UserCard from "./UserCard/UserCard";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <UserCard />
    </Provider>
  );
}

export default App;
