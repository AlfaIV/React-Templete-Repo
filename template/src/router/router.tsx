import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../components/layout/layout';
import TestComponent2 from '../components/testComponent2/testComponent2';
import TestComponent1 from '../components/testComponent1/testComponent1';
import { baseUrl, test2Url } from '../constants/constants';

const RouterWrapper = () => {
  return (
    <Router>
      <Routes>
        <Route path={baseUrl} element={<Layout />}>
          <Route index element={<TestComponent1 />} />
          <Route path={test2Url} element={<TestComponent2 />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}

export default RouterWrapper;
