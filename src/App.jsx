import { useState } from "react";

// import First from './components/firstsec'
// import Second from './components/secondsec'

import Store from "./components/store";
import Donate from "./features/donate";
// import {Third} from './components/third'
// import Home from './components/draft'

import Devotion from "./features/devotion";
import Prayer from "./features/prayer";

import Body from "./components/body";

import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { BiBible } from "react-icons/bi";
import { LiaPrayingHandsSolid, LiaDonateSolid } from "react-icons/lia";

import "./App.css";
// import logo1 from './app/logo1.jpg'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

export default function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Body />} />
        <Route path={"Store"} element={<Store />} />
        <Route path={"data"} element={<Devotion />} />
        <Route path={"done"} element={<Body />} />
        <Route path={"port"} element={<Prayer />} />
        <Route path={"want"} element={<Donate />} />
      </Route>
    )
  );
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div>
        <div
          className="text-2xl px-3 border -mx-[2.1rem]  w-[44.5rem]
        flex py-3 mt-[49rem] h-[8rem] gap-3 bg-gray-100 fixed 
        outline-none md:w-[114.2rem] md:-ml-[20rem]"
        >
          <a
            href="/Store"
            className="ml-[3rem] 
        md:ml-[17rem]"
          >
            <AiOutlineShoppingCart
              className="text-[2.5rem] 
        md:text-[3rem] md:-mt-2"
            />
            <p className="text-sm font-bold ml-1 ">store</p>
          </a>

          <a
            href="/data"
            className="ml-[5rem] 
           md:ml-[15rem]"
          >
            <BiBible className="text-4xl" />
            <p className="text-sm font-bold  -ml-3">Devotion</p>{" "}
          </a>

          <a
            href="/done"
            className="ml-[5rem] 
           md:ml-[15rem]"
          >
            <AiOutlineHome className="text-4xl" />
            <p className="text-sm font-bold -ml-[0.1rem]">Home</p>
          </a>

          <a href="/port" className="ml-[5rem]   md:ml-[15rem]">
            <LiaPrayingHandsSolid className="text-4xl" />
            <p className="text-sm font-bold -ml-1 ">Prayer</p>{" "}
          </a>

          <a href="/want" className="ml-[5rem]   md:ml-[15rem]">
            <LiaDonateSolid className="text-4xl" />
            <p className="text-sm font-bold -ml-1 ">Donate</p>
          </a>
        </div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
