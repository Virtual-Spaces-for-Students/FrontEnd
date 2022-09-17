import React from 'react';
import VirtualizedTable from './VirtualizedTable';

import { Panel } from 'rsuite';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">Mes machines</h3>
        </>
      }
    >
      <VirtualizedTable />
    </Panel>
  );
};

export default Page;
