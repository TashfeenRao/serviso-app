import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ClientProfile from "./components/profile/ClientProfile";
import Register from "./components/Registration/Register";
import MainPage from "./components/Root/MainPage";
import Root from "./components/Root/Root";
import toastSuccess from "./components/toast/toastSuccess";

function App() {
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) setLoggedin(true);
  }, [user]);

  useEffect(() => {
    if (loggedin) {
      toastSuccess("successfully logged in");
    } else return;
  }, [loggedin]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        {!loggedin ? (
          <Switch>
            <Route
              exact
              path="/register"
              component={() => <Register setUser={setUser} />}
            />
            <Redirect to="/register" />
          </Switch>
        ) : (
          <>
            <Switch>
              <Route exact path="/" component={MainPage} />
            </Switch>
            <Root />
            <Switch>
              <Route exact path="/client/:user" component={ClientProfile} />
            </Switch>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
