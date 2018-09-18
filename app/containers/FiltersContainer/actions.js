/*
 *
 * FiltersContainer actions
 *
 */

import { TOGGLE_SECTION } from './constants';

export const toggleSection = sectionName => ({
  type: TOGGLE_SECTION,
  sectionName,
});
