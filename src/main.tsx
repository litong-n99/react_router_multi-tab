import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css'
import Detail from './Detail';

function Home() {
  return <h1>Home</h1>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.PROD ? '/react_router_multi-tab' :  undefined}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<Detail />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
