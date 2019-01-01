import React from 'react';
import { goBack } from 'utils/route';
import Back from 'components/Back';

const BackHOC = () => <Back onClick={goBack} />;

export default BackHOC;
