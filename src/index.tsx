import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral } from 'piral';
import { layout, errors } from './layout';

const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/my-tutorial-v1';

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
  },
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items)
      .catch((error) => {
        console.error("Error fetching pilets:", error);
        return [];
      });
  },
});

const root = createRoot(document.querySelector('#app')!);
root.render(<Piral instance={instance} />);
