import * as React from 'react';
import { PiletApi } from 'piral';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from './dropdown'; // Import your dropdown component
export function setup(api: PiletApi) {
  api.showNotification('Hello from menu-pilet - v1!', {
    autoClose: 2000,
  });
  console.log('Registering top-menu extension from my-pilet-menu');
  api.registerExtension('top-menu', () => {
    return (
      <header>
        <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" >
          <div>
            <Link className="navbar-brand" to="/">
              Piral App
            </Link>
            
            <div>
            <ul className="navbar-nav flex-grow">
              <li className="nav-item">
              <Link to="/page1">Pilet-v1</Link>               
              </li>
              <li className="nav-item">
              <Link to="/page">Pilet-v2</Link>                
              </li>
              <li className="nav-item">
                <Dropdown
                  api={api}
                  onChange={(value) => {
                    api.emit('selectChange', { value });
                    console.log('Emitted selectChange event with value:', value);
                  }}
                />
               </li>
            </ul>
            
            </div>
          </div>
        </nav>
      </header>
    );
  });
}
