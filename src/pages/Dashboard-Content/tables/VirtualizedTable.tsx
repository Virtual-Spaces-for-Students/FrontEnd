import React, { useState } from 'react';
import { DOMHelper, Table, Divider } from 'rsuite';
import VMDATA from '../../../data/VM';
import Popup from './Popup';


const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

const data = VMDATA;

const VirtualizedTable = () => {

  const [popUp, setPopUp] = useState(false);

  return (
    <div>
      <button className='bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300' onClick={() => setPopUp(true)}>Ajouter une nouvelle machine</button>
      <Divider />
      <Table
        virtualized
        height={Math.max(getHeight(window) - 120, 400)}
        data={data}
        translate3d={false}
      >
        <Column width={70} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200}>
          <HeaderCell>Nom de la machine</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={200}>
          <HeaderCell>Utilisateur</HeaderCell>
          <Cell dataKey="utilisateur" />
        </Column>

        <Column width={150}>
          <HeaderCell>Nom de l'OS</HeaderCell>
          <Cell dataKey="osname" />
        </Column>

        <Column width={150}>
          <HeaderCell>Version de l'OS</HeaderCell>
          <Cell dataKey="osversion" />
        </Column>
      </Table>
      <div>
        {popUp && <Popup setPopUp={setPopUp} />}
      </div>
    </div>
  );
};

export default VirtualizedTable;
