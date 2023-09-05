function Characters( props) {


 const { characters, setCharacters} = props;
 const resetCharacters = () => {
  setCharacters(null);
}
    return (
      <>
        <div>
            <h1>Personajes</h1>
            <span onClick={resetCharacters}>Volver a la home </span>
            {characters.map((character, index) =>(
                <div key={index}>
                    <div>
                        <img src={character.image} alt= {character.name}/>
                    </div>
                    <p>{character.name}</p><br/>
                </div>
            ))}

        </div>
      </>
    )
  }
  
  export default Characters;
  