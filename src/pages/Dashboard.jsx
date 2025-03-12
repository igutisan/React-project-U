import { useEffect, useState } from "react";
import { AttackOnTitanApi } from "../services/AttackOnTitanApi";
import { motion } from "framer-motion";
import { filter } from "../components/Filter";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const { getCharacters } = AttackOnTitanApi();

    const fetchData = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data.results);
        setFilteredCharacters(data.results);
      } catch (err) {
        alert("Error getting characters");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = filter(characters, search);
    setFilteredCharacters(filtered);
  }, [search, characters]);

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        </div>
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
        />
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">Lista de Personajes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {filteredCharacters.length<1 ? <p className="text-3xl font-bold mb-2">No hay personajes</p>:
            filteredCharacters.map((character) => (
              <motion.div
                key={character.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                onClick={() => navigate(`/card/${character.id}`)} 
              >
                <img
                  src={`https://images.weserv.nl/?url=${encodeURIComponent(character.img)}`}
                  alt={character.name}
                  className="w-full h-48 object-cover rounded-t-lg hover:opacity-75 transition-opacity duration-300"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{character.name}</h3>
                  <p className="text-gray-600">Altura: {character.height}</p>
                  <p className="text-gray-600">Alianza: {character.allegiance}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
