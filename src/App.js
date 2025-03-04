import React from 'react';
import {useSelector} from 'react-redux';

import {SignedIn, SignedOut} from './routes';

export default function App() {
  const signed = useSelector((state) => state.auth.signed);

  return signed ? <SignedIn /> : <SignedOut />;
}
