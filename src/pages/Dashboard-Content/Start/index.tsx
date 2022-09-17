import React from 'react';
import Start from './Start';

import { Panel } from 'rsuite';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">Bienvenue</h3>
        </>
      }
    >
      <Start />
    </Panel>
  );
};

export default Page;