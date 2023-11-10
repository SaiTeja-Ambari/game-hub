import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { GameQuery } from "./HomePage";
import { useState } from "react";

const Layout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <NavBar
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />
      <Outlet />
    </>
  );
};

export default Layout;
