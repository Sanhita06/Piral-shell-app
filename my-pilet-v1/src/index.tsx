import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'my-piral-app';
import Dropdown from './dropdown'; // Import your dropdown component

declare module 'piral-core/lib/types/custom' {
  interface AppState {
    selectedOption: string;  // Add selectedOption to the global state
  }
}

const Page = React.lazy(() => import('./Page1'));

export function setup(app: PiletApi) {

  app.registerPage('/page1', Page);
  app.showNotification('Hello from Piral - v1!', {
    autoClose: 2000,
  });


  app.setData('selectedOption', app.getData('selectedOption') || '');
// store-data
  app.registerMenu(() => <>  
    <Link to="/page1">Go to Pilet-v1</Link>
  </>);
  
  app.registerTile(() => (
    <div>
      Welcome to Piral-v1!
      <div>
        {/* Pass a function to update global state via setData */}
        <Dropdown  onChange={(value:any) => app.setData('selectedOption', value)} />
          
      </div>
    </div>
  ), {
    initialColumns: 2,
    initialRows: 2,
  });
}
//app.on