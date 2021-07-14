function FavoritedCharacter(props) {
  const { name, eye_color, hair_color, height, mass, homeworld, films } = props;
  const filmList = films.map(film => <p key={film}>{film}</p>)
  return (
    <div className="FavoriteList">
      <h1>{name}</h1>
      <hr />
      <p>Eye Color: {eye_color}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <h2>Homeworld</h2>
      <p>{homeworld}</p>
      <h2>Films</h2>
      {filmList}
    </div>
  )
}

export default FavoritedCharacter;