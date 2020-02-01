import { Provider } from 'mobx-react';
import React from 'react';
import * as stores from './stores';
import { GroupList } from './views';


export default () => (
  <Provider {...stores}>
    <GroupList />
  </Provider>
)