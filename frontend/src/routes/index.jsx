import { createBrowserRouter, Navigate } from "react-router-dom";
import Template from "../layout/Template";
import Dashboard from "../pages/Dashboard";
import Blog from "../pages/users/Blog";
import Events from "../pages/users/Events";
import CaseStudy from "../pages/users/CaseStudy";
import DemoEmail from "../pages/users/Demo-Email";
import BrilianAI from "../pages/users/brilian-ai/BrilianAI";
import BrilianBanking from "../pages/users/brilian-ai/BrilianBanking";
import BrilianInsurance from "../pages/users/brilian-ai/BrilianInsurance";
import BrilianHospital from "../pages/users/brilian-ai/BrilianHospital";
import BrilianHumanR from "../pages/users/brilian-ai/BrilianHumanR";
import BrilianFMGC from "../pages/users/brilian-ai/BrilianFMGC";
import RangkumAI from "../pages/users/rangkum-ai/RangkumAI";
import RangkumBanking from "../pages/users/rangkum-ai/RangkumBanking";
import RangkumInsurance from "../pages/users/rangkum-ai/RangkumInsurance";
import RangkumHospital from "../pages/users/rangkum-ai/RangkumHospital";
import RangkumHumanR from "../pages/users/rangkum-ai/RangkumHumanR";
import Solutions from "../pages/users/Solutions";
import History from "../pages/users/History";
import ContactUs from "../pages/users/ContactUs";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "events",
                element: <Events />,
            },
            {
                path: "casestudy",
                element: <CaseStudy />,
            },
            {
                path: "demo-email",
                element: <DemoEmail />,
            },
            {
                path: "brilian-ai",
                element: <BrilianAI />,
            },
            {
                path: "brilianai-banking",
                element: <BrilianBanking />,
            },
            {
                path: "brilianai-insurance",
                element: <BrilianInsurance />
            },
            {
                path: "brilianai-hospital",
                element: <BrilianHospital />,
            },
            {
                path: "brilianai-humanr",
                element: <BrilianHumanR />,
            },
            {
                path: "brilianai-fmgc",
                element: <BrilianFMGC />,
            },
            {
                path: "rangkum-ai",
                element: <RangkumAI />,
            },
            {
                path: "rangkum-banking",
                element: <RangkumBanking />,
            },
            {
                path: "rangkum-insurance",
                element: <RangkumInsurance />
            },
            {
                path: "rangkum-hospital",
                element: <RangkumHospital />,
            },
            {
                path: "rangkum-humanr",
                element: <RangkumHumanR />,
            },
            {
                path: "solutions",
                element: <Solutions />,
            },
            {
                path: "history",
                element: <History />,
            },
            {
                path: "contact-us",
                element: <ContactUs />,
            },
            {
                path: "*",
                element: <Navigate to="/" replace />,
            },
        ],
    },
]);