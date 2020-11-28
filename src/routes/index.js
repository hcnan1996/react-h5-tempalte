import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import BlankLayout from '../layouts/BlankLayout'
const SuspenseComponent = (Component) => (props) => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  );
};

const HomeComponets = lazy(() => import("../pages/home/index"))
const OtherComponets = lazy(() => import("../pages/other/index"))

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/home"} />,
      },
      {
        path: "/home",
        component: SuspenseComponent(HomeComponets),
      },
      {
        path: "/other",
        component: SuspenseComponent(OtherComponets),
      },
    ],
  },
]
