import React from 'react';
import ContextMenu, { Position } from 'devextreme-react/context-menu';
import List from 'devextreme-react/list';
import './userPanel.scss';

function UserPanel() {
    const menuItems = [
        {
          text: 'Profile',
          icon: 'user'
        },
        {
          text: 'Logout',
          icon: 'runner',
        }];
   
    return (
        <div className={'user-panel'}>
        <div className={'user-info'}>
          <div className={'image-container'}>
            <div
              style={{
                background: `no-repeat #fff`,
                backgroundSize: 'cover'
              }}
              className={'user-image'} />
          </div>
          <div className={'user-name'}>{"service@ch.abb.com"}</div>

        </div>
  
          <ContextMenu
            items={menuItems}
            target={'.user-panel'}
            showEvent={'dxclick'}
            width={210}
            cssClass={'user-menu'}
          >
            <Position my={'top center'} at={'bottom center'} />
          </ContextMenu>
        
      </div>
    );
};

export default UserPanel;
