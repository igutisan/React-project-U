import axios from 'axios';

export function AttackOnTitanApi(){
    const URLAPI = "https://api.attackontitanapi.com/titans";
    

    const getCharacters = async (id) => {
       try {
        if(id){
          const response = await axios.get(`${URLAPI}/${id}`);
          return response.data; 
        }
        const response = await axios.get(URLAPI);
        return response.data; 
        
       } catch (error) {
         
            console.error("There is a problem with getting characters:", err);
            throw error;
       }

    
    }

   
    return {getCharacters};
}