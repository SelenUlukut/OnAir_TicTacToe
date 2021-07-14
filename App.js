import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '@reducers/index';
import Main from '@screens/Main';

const store = createStore(reducer);

export default function () {
  return (
    <Provider store={store} >
      <Main />
    </Provider>
  )
}
