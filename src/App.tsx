import { Suspense, lazy } from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

const App:React.FC=() =>{
  const Login = lazy(() => import("./pages/Login"));
  const Register = lazy(() => import("./pages/Register"));
//  const NotFound = lazy(() => import("./pages/NotFound"));
  const Home = lazy(() => import("./pages/Home"));
  const Profile = lazy(() => import("./pages/Profile"));

  return (
    <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Routes>
            <Route path={"/login"} Component={Login} />
            <Route path={"/register"} Component={Register} />
            <Route path={"/"} Component={Home} />
            {/* <Route path="*" Component={NotFound} /> */}
            <Route path={"/profile"} Component={Profile} />
          </Routes>
        </Suspense>
      </Router>
  )
}

export default App
