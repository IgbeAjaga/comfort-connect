import React from 'react';
import '../css/Notification.css';

function Notification({ notifications, closeNotifications, markAsRead }) {
  return (
    <div className='notification-popup'>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            <div>
              <p>{notification.message}</p>
              <button onClick={() => markAsRead(notification)}>Mark as Read</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={closeNotifications} className="close-button">
        Close
      </button>
    </div>
  );
}

export default Notification;
