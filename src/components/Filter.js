export function filter(data, search) {
  let res = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()));
    if (!search) return data; 

    return res ? res:"Not found";
    
  }