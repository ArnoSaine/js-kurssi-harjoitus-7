import React from 'react';
import { Alert } from 'react-bootstrap';
import moment from 'moment';
import { dbAddress } from './db';

const Message = ({ message, timestamp, _id, _rev }) => (
  <Alert
    onDismiss={() =>
      fetch(`${dbAddress}/${_id}?rev=${_rev}`, {
        credentials: 'same-origin',
        method: 'DELETE'
      })
    }
  >
    {message}{' '}
    <span className="pull-right">{moment(timestamp).format('LLLL')}</span>
  </Alert>
);

export default Message;
