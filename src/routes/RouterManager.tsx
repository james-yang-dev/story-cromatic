import { Test } from '@src/components/test/Test';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export function RouterManager() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </Router>
  );
}
