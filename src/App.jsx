import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

import Header from "./components/Header/Header";
import FoodCards from "./components/Home/FoodCards";
import FoodCart from "./components/Cart/FoodCart";
import Errors from "./components/Error/Errors";
import MainCategory from "./components/Home/MainCategory";
import useOnlineStatus from "./hooks/useOnlineStatus";
import InternetConnectionMessage from "./components/InternetConnectionMessage/InternetConnectionMessage";
import FoodLoader from "./components/Home/FoodLoader";
import appStore from "./utils/Store/appStore";
import PaymentSuccess from "./components/PaymentStats/PaymentSuccess";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

const RestaurantMenu = lazy(() => import("./components/Menu/RestaurantMenu"));
const AboutUs = lazy(() => import("./components/Header/AboutUs"));
const ContactUs = lazy(() => import("./components/Header/ContactUs"));
const SignUp = lazy(() => import("./components/Auth/SignUp"));
const Login = lazy(() => import("./components/Auth/Login"));

const AppParent = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <>
      <div className="flex flex-col items-center justify-between w-full">
        {onlineStatus ? (
          <>
            <Header />
            <Outlet />
            <Footer />
            <FoodCart />
          </>
        ) : (
          <InternetConnectionMessage />
        )}
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppParent />,
    children: [
      {
        path: "",
        element: <FoodCards />,
      },
      {
        path: "aboutus",
        element: (
          <Suspense fallback={<Loader />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "contactus",
        element: (
          <Suspense fallback={<Loader />}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "restaurants/:resId",
        element: (
          <Suspense fallback={<FoodLoader />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "category/:menuId",
        element: <MainCategory />,
      },
    ],
  },
  {
    path: "signup",
    element: (
      <Suspense fallback={<Loader />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/paymentSuccess",
    element: <PaymentSuccess />,
  },
  {
    errorElement: <Errors />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
    <Toaster />
  </>
);
