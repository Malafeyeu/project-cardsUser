import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageUser, PageWithCards, SignIn, SignUp } from "./components";
//eve.holt@reqres.in
//pistol

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}>
          <Route index element={<SignUp />} />
          <Route path={'cards'}>
            <Route index element={localStorage.getItem('access') ? <PageWithCards /> : <SignUp />} />
            <Route path={':pageCardId'} element={localStorage.getItem('access') ? <PageUser /> : <SignUp />} />
            <Route path={'*'} element={<div>ERROR, WRONG PAGE</div>}/>
          </Route>
        </Route>
        <Route path={'signUp'} element={<SignUp />} />
        <Route path={'signIn'} element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
