import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import locales from './locales';
import Frame from './components/Frame';
import DashboardPage from './pages/dashboard';
import Error404Page from './pages/Error/404';
import Error500Page from './pages/Error/500';
import { appNavs } from './config';
import HomePage from './pages/Accueil/index';
import Contact from './pages/Contact/index';
import About from './pages/About/index';
import VirtualizedTablePage from './pages/Dashboard-Content/tables';
import Feedback from './pages/Dashboard-Content/Feedback/index';
import Start from './pages/Dashboard-Content/Start/Start';
import Stockage from './pages/Stockage/Stockage';

const App = () => {
  return (
    <IntlProvider locale="fr" messages={locales.fr}>
      <Routes>
        {/* Accueil */}
        <Route>
          <Route index element={<HomePage />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
        </Route>
        {/* Admin Panel */}
        <Route path="dashboard" element={<Frame navs={appNavs} />}>
          <Route index element={<Start/>} />
          <Route path='me' element={<DashboardPage />} />
          <Route path="vm" element={<VirtualizedTablePage />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="stockage" element={<Stockage />} />
        </Route>
        <Route path="*" element={<Error404Page />} />

        <Route path="error-500" element={<Error500Page />} />
      </Routes>
    </IntlProvider>
  );
};

export default App;
