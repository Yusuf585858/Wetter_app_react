import { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';



function Wetter() {

    const [input, setInput] = useState("Wuppertal");

    const [wetter1, setWetter1] = useState();
    const [api, setApi] = useState(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=a18dc3c27f68e4fdaa6bc399f8e93c76`);
    ;

    useEffect(() => {

        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((wetter1) => {
                setWetter1(wetter1);
                console.log(wetter1);
            });
    }, [api]);

    if (wetter1 === undefined) {
        return;
    }
    return (
        <main>
            <div>
                <input onChange={(e) => setInput(e.target.value)} placeholder="type in Citiy"></input>
                <button onClick={() => { setApi(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=a18dc3c27f68e4fdaa6bc399f8e93c76&units=metric`); }}>Search</button>
            </div>



            <div>

                <p>Temparatur: {wetter1.main.temp} grad Celcius</p>
                <p>Wolken: {wetter1.clouds.all}</p>

            </div>



        </main>
    );

}

export default Wetter;