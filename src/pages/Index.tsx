import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to main app
  return <Navigate to="/" replace />;
};

export default Index;
