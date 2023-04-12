import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const tShirts = useLoaderData()
    console.log(tShirts)
    return (
        <div>
            <h1>this is home page:{tShirts.length}</h1>
            <div>
                {
                    tShirts.map(tshirt=><Tshirt key={tshirt._id
                    } tshirt={tshirt}></Tshirt>)
                }
            </div>
        </div>
    );
};

export default Home;