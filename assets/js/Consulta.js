let animalData=(()=>{
    const url="http://localhost:5500";
    const getData=async()=>{
        const res = await fetch(`${url}/animales.json`);
        const data = await res.json();
        return data;
    };

    return { getData };
})();


export default animalData;