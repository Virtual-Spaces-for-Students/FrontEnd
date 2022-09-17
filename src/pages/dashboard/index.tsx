import React from 'react';
import { Panel } from 'rsuite';
import Dashboard from './Dashboard';

const Page = () => {
  return (
    <Panel header={<h3 className="title">Panneau d'administration</h3>}>
      <Dashboard />
    </Panel>
  );
};

export default Page;
