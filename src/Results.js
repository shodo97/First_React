import React from "react";
import Pet from "./Pet";        //use pet component that we created
                                    
const Results = ({ pets }) => {
    return (
        <div className = "Search">              
            {!pets.length ? (                   //No results from API came back. i.e. length === 0 
                <h1> No Pets Found</h1>         //display no pets found
            ):(                                 // otherwise something that displays all the pets
                pets.map(pet => {               //making pet component
                    return (
                       < Pet
                        animal={pet.type}
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breeds.primary}
                        media={pet.photos}
                        location={`${pet.contact.address.city}, ${pet.contact .address.state}`}
                        id={pet.id}
                        />
                    );
                })
            )}
        </div>
    )
};

export default Results;