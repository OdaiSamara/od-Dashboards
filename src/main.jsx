
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import React from 'react';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Teams from './pages/teams/Teams.jsx';
import Contacts from './pages/contacts/Contacts.jsx';
import Invoices from './pages/invoices/Invoices.jsx';
import Form from './pages/form/Form.jsx';
import Calendar from './pages/Calendar/Calendar.jsx';
import Faq from './pages/faq/Faq.jsx';
import Geography from './pages/geography/Geography.jsx';
import NotFound from './pages/notFound/NotFound.jsx';
import LineChart from './pages/line/LineChart.jsx';
import PieChart from './pages/pie/PieChart.jsx';
import BarChart from './pages/bar/BarChart.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='team' element={<Teams />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path='form' element={<Form />} />
      <Route path='Calendar' element={<Calendar />} />
      <Route path='faq' element={<Faq />} />
      <Route path='bar' element={<BarChart />} />
      <Route path='pie' element={<PieChart />} />
      <Route path='line' element={<LineChart />} />
      <Route path='geography' element={<Geography />} />
      <Route path='*' element={<NotFound />} />

    </Route>
  )
);


// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
