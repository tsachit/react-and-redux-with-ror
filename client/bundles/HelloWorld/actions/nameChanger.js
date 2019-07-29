/* eslint-disable import/prefer-default-export */

import { NAME_UPDATE } from '../constants';

export const updateName = (text) => ({
  type: NAME_UPDATE,
  text,
});
