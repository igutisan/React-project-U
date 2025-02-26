import Navbar from "./NavBar";
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedLayout() {


  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div>
        <Navbar />
        <main className="container mx-auto p-4">
          <Outlet/>
        </main>
      </div>
    </>
  );
}

export default ProtectedLayout;
