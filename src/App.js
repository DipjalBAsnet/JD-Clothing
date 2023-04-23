import Main from "./routes/home/Main.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/authentication.component";
const App = () => {
  const Shop = () => {
    return (
      <div>
        <h1> here is the shop you can enjoy!!</h1>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="shop" element={<Shop />} />
        <Route index element={<Main />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
