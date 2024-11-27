import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'my-piral-app';
const Page = React.lazy(() => import('./Page'));

export function setup(api: PiletApi) {
  const connect = api.createConnector(() => Promise.resolve(true));

  // Register page component
  api.registerPage('/page', connect(() => <Page user={api.getData('user')} />));

  const SelectedValueTile: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<string>(api.getData('selectedValue') || '');

    useEffect(() => {
      const handleSelectChange = (event: { value: string }) => {
        setSelectedValue(event.value);
      };

      // Listen for dropdown changes
      api.on('selectChange', handleSelectChange);

      return () => {
        api.off('selectChange', handleSelectChange);
      };
    }, [api]);

    return <div>Welcome to Pilet v2! Selected Value: {selectedValue || 'None'}</div>;
  };

  api.showNotification('Hello from Pilet v2!', {
    autoClose: 2000,
  });

  api.registerTile(SelectedValueTile, {
    initialColumns: 2,
    initialRows: 2,
  });
}
