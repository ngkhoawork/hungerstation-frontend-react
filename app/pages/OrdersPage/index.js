import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./hoc'),
  loading: () => null,
});
