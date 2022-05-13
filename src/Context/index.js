import React, { createContext } from 'react';
import { INITIAL_PROPS_LIST_FAVORITES } from './INITIAL_PROPS';

const Context = createContext([INITIAL_PROPS_LIST_FAVORITES, () => {}]);

export default Context;