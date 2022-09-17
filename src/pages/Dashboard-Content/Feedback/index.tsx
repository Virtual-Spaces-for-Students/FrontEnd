import React from 'react';
import Feedback from './Feedback';

import { Panel } from 'rsuite';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">Feedback</h3>
        </>
      }
    >
      <Feedback />
    </Panel>
  );
};

export default Page;
