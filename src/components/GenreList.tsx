import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { Datas } = useGenre();
  return (
    <ul>
      {Datas.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
