import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'my-piral-app';

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('/page', Page);

  app.showNotification('Hello from Pilet v2!', {
    autoClose: 2000,
  });

  app.registerMenu(() => (
    <>
      <Link to="/page">Go to Pilet v2</Link>
    </>
  ));

  app.registerTile(() => <div>Welcome to Pilet v2!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
