import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'my-piral-app';
import Dropdown from './dropdown'; // Import your dropdown component

const Page = React.lazy(() => import('./Page1'));

export function setup(app: PiletApi) {
  app.setData("user", "rabi");

  app.registerPage('/page1', Page);

  app.showNotification('Hello from Piral - v1!', {
    autoClose: 2000,
  });

  app.registerMenu(() => (
    <>
      <Link to="/page1">Go to Pilet-v1</Link>
    </>
  ));

  app.registerTile(() => (
    <div>
      Welcome to Piral-v1!
      <div>
        {/* Pass a function to emit an event on dropdown change */}
        <Dropdown
          onChange={(value: any) => {
            app.emit('selectChange', { value });
            console.log('Emitted selectChange event with value:', value);
          }}
        />
      </div>
    </div>
  ), {
    initialColumns: 2,
    initialRows: 2,
  });
}
