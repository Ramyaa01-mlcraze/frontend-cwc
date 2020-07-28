import React from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

function Notificationportal() {
  return (
    <>
      CWC Notification portal
      <button
        onClick={() => {
          store.addNotification({
            title: 'DCPU',
            message: 'Meeting is scheduled at 3 P.M.',
            type: 'success',                         
            container: 'bottom-left',                
            animationIn: ["animated", "fadeIn"],     
            animationOut: ["animated", "fadeOut"],   
            dismiss: {
              duration: 3000
            }
            
          })
        
        }}
      >
        Notifications
      </button>
    </>
  )
}
export default Notificationportal;