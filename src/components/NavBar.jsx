import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/');
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">Mi Aplicación</div>
                <div className="flex gap-4">
                    <button 
                        onClick={() => navigate('/dashboard')}
                        className="hover:text-gray-300"
                    >
                        Dashboard
                    </button>
                    <button 
                        onClick={handleLogout}
                        className="hover:text-gray-300"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
