export const defaultState = () => ({
  number: 1,
  character: {
    name:'',
    eye_color:'',
    hair_color:'',
    height:'',
    mass:'',
    homeworld:[],
    films:[]
  },
  favorites: []
});

export async function fetchPeople(number) {
  const path = `https://swapi.dev/api/people/${number}/`;
  const res = await fetch(path);
  const json = await res.json();
  // Fetch homeworld data
  const homeworldRes = await fetch(json.homeworld);
  const homeworld = await homeworldRes.json();
  json.homeworld = homeworld.name;
  // Get an array of Promises, these are the responses
  const filmsRes = await Promise.all(json.films.map(film => fetch(film)))
  // Resolve the responses to JSON
  const filmsJSON = await Promise.all(filmsRes.map((res) => res.json()))
  json.films =filmsJSON.map(film => film.title);
  return json;
}