import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'my-piral-app';


const Page = React.lazy(() => import('./Page1'));

export function setup(api: PiletApi) {
  api.setData("user", "rabi");

  api.registerPage('/page1', Page);

  api.showNotification('Hello from Piral - v1!', {
    autoClose: 2000,
  });

  // api.registerExtension('top-menu', () => (
  //   <li className="nav-item">
  //     <Link className="nav-link text-dark" to="/page1">
  //       Go to Pilet-v1
  //     </Link>
  //   </li>
  // ));

  api.registerTile(() => (
    <div>
      Welcome to Piral-v1!
     
    </div>
  ), {
    initialColumns: 2,
    initialRows: 2,
  });
}
