import { useLocation } from 'react-router-dom';


function Dashboard() {          
   
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    console.log(currentUser);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Bienvenido, {currentUser?.username}!</p>
        </div>
    );
}

export default Dashboard;
