import { useEffect, useState } from "react";
import { AttackOnTitanApi } from "../services/AttackOnTitanApi";
import { useParams } from "react-router-dom";

function Card() {
  const { id } = useParams(); 
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const { getCharacters } = AttackOnTitanApi();
    console.log(id)

    const fetchData = async () => {
      try {
        const data = await getCharacters(id);
        setTimeout(() => {
          setCharacter(data);
        }, 3000);
        
      } catch (err) {
        alert("Error al obtener el personaje");
        console.log(err)
      }
    };

    fetchData();
  }, [id]);

  if (!character) return <p className="text-center mt-10">Cargando personaje...</p>;

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
        <img
          src={`https://images.weserv.nl/?url=${encodeURIComponent(character.img)}`}
          alt={character.name}
          className="w-full h-85 object-cover rounded-t-lg"
        />
        <h2 className="text-2xl font-semibold my-2">{character.name}</h2>
        <p className="text-gray-600">Altura: {character.height}</p>
        <p className="text-gray-600">Alianza: {character.allegiance}</p>
        <h3 className="text-lg font-semibold mt-4">Habilidades:</h3>
        <ul className="list-disc pl-5">
          {character.abilities?.length > 0 ? (
            character.abilities.map((ability, index) => (
              <li key={index} className="text-gray-600">{ability}</li>
            ))
          ) : (
            <li className="text-gray-600">No hay habilidades disponibles</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Card;
