import { useLocation } from 'react-router-dom';


function Dashboard() {          
   
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    console.log(currentUser);

    return (
        <div className="flex flex-col items-center min-h-screen p-4">
        <div className="w-full max-w-4xl">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
                <p className="text-lg text-gray-600">Bienvenido, {currentUser?.username}!</p>
            </div>
    
            <main className="w-full">
                <h2 className="text-2xl font-semibold mb-4 text-center">Lista de Usuarios</h2>
                <div className="bg-gray-200 p-5 rounded-lg shadow-md">
                    <table className="w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-2">ID</th>
                                <th className="border border-gray-300 p-2">Nombre</th>
                                <th className="border border-gray-300 p-2">Correo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50">
                                <td className="border border-gray-300 p-2">1</td>
                                <td className="border border-gray-300 p-2">Juan Pérez</td>
                                <td className="border border-gray-300 p-2">juan@example.com</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="border border-gray-300 p-2">2</td>
                                <td className="border border-gray-300 p-2">María López</td>
                                <td className="border border-gray-300 p-2">maria@example.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    </div>
        
    );
}

export default Dashboard;
