import React from 'react';
import Stockage from './Stockage';

import { Panel } from 'rsuite';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">Stockage en cours</h3>
        </>
      }
    >
      <Stockage />
    </Panel>
  );
};

export default Page;
