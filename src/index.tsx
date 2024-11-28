import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral, createStandardApi } from 'piral';
import { layout } from './layout';

// Define feed URLs for each pilet
const feedUrls = [
  'http://10.238.132.206:9001/pilet-menu.json', 
  'http://10.238.132.206:9002/pilet-v1.json',   
  'http://10.238.132.206:9003/pilet-v2.json',   
];

const instance = createInstance({
  state: {
    components: layout,
  
  },
  plugins: [...createStandardApi()],
  async requestPilets() {
    try {
      const responses = await Promise.all(
        feedUrls.map(url => 
          fetch(url)
            .then(res => {
              if (!res.ok) {
                throw new Error(`Failed to fetch pilet feed from ${url}`);
              }
              return res.json();
            })
            .catch(error => {
              console.error(`Error fetching from ${url}:`, error);
              return { items: [] }; // Return empty items if fetch fails
            })
        )
      );
      const pilets = responses.flatMap(res => res.items);
      console.log('Loaded pilets:', pilets);
      return pilets;
    } catch (error) {
      console.error("Failed to load pilets", error);
      return []; // Return empty array if something goes wrong
    }
  },
});

//const root = createRoot(document.querySelector('#app'));
const container = document.querySelector('#app'); // Get the DOM element
if (container) {
  const root = createRoot(container); // Create the React root
  root.render(<Piral instance={instance} />);
} else {
  console.error("Failed to find the root element for rendering!");
}
//root.render(<Piral instance={instance} />);
