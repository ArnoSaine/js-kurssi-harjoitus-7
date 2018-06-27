import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ message /*,_id, _rev*/ }) => <Alert>{message}</Alert>;

export default Message;
