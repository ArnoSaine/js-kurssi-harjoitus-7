import React from 'react';
import { Alert } from 'react-bootstrap';
import { dbAddress } from './db';

const Message = ({ message, _id, _rev }) => (
  <Alert
    onDismiss={() =>
      fetch(`${dbAddress}/${_id}?rev=${_rev}`, {
        credentials: 'same-origin',
        method: 'DELETE'
      })
    }
  >
    {message}
  </Alert>
);

export default Message;
