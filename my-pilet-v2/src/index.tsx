// pilet-v2/index.tsx
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import type { PiletApi } from 'my-piral-app';
const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  const connect = app.createConnector(() => Promise.resolve(true));
  
  // Register page component
  app.registerPage('/page', connect(() => {
    console.log('inside child app: ');
    return <Page user={app.getData('user')} />;
  }));

  const SelectedValueTile: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    useEffect(() => {
      const handleSelectChange = (event: { value: string }) => {
        console.log('Received value in pilet-v2:', event.value); 
        setSelectedValue(event.value);
      };
      app.on('selectChange', handleSelectChange);
      return () => {
        app.off('selectChange', handleSelectChange);
      };
    }, []);

    return <div>Welcome to Pilet v2! Selected Value: {selectedValue || 'None'}</div>;
  };
  app.showNotification('Hello from Pilet v2!', {
    autoClose: 2000,
  });

  app.registerMenu(() => (
    <>
      <Link to="/page">Go to Pilet v2</Link>
    </>
  ));

  app.registerTile(SelectedValueTile, {
    initialColumns: 2,
    initialRows: 2,
  });
}
