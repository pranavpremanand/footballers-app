import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./Content.css";

const Content = () => {
  const inputRef = useRef();
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState([]);
  //   const [leagues,setLeagues] = useState([])
  useEffect(() => {
    inputRef.current.focus();
    // getLeagues();
  }, []);
  
  const getPlayers = (prefix) => {
      if (prefix !== "") {
        setTimeout(() => {
          axios
            .get(
              `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${prefix}`
            )
            .then((response) => {
              const footballers = response.data.player.filter(
                (player) => player.strSport === "Soccer" && player.strCutout
              );
              setPlayers(footballers);
            });
        }, 1000);
      } else {
        setPlayers([]);
      }
  };
  const getPlayerData = (id) => {
    const data = players.find((player) => player.idPlayer === id);
    setPlayer(data);
  };
  //   const getLeagues = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"
  //       );
  //       let allLeagues = data.leagues.filter((team)=>team.strSport==='Soccer')
  //       allLeagues = allLeagues.slice(0,50)
  //       setLeagues(allLeagues)
  //     } catch (err) {
  //       console.log(err, "ERROR");
  //     }
  //   };

  return (
    <div className=" h-5/6 flex justify-center py-8">
      <div className="flex md:justify-evenly flex-wrap">
        <div className="ml-1 sm:basis-full md:basis-1/4 mb-5 justify-self-start">
          <h5 className="text-stroke text-start italic text-white">
            Search footballer name
          </h5>
          <input
            ref={inputRef}
            onChange={(e) => getPlayers(e.target.value)}
            type="text"
            id="player_name"
            className="bg-gray-50 border-none w-80 p-3 mb-2 placeholder:italic max-h-96 md:w-80 border placeholder:text-gray-900 border-gray-300 text-md rounded-lg shadow-sm focus:outline-none focus:ring-1 sm:text-sm md:text-md lg:text-lg focus:ring-gray-900 focus:border-blue-500 block dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-500 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Lionel Messi..."
            required
          />
          {players ? (
            <div className="no-scrollbar max-h-80 w-full sm:w-1/2 md:w-80 overflow-scroll scroll-hidden display-none rounded dark:bg-white-800 bg-white px-2 ring-1 ring-slate-900/5 shadow-xl">
              {players.map((player) => {
                return (
                  <div
                    onClick={() => getPlayerData(player.idPlayer)}
                    className="w-[100%] p-1 flex m-1 cursor-pointer items-center gap-3 bg-slate-300 rounded-xl"
                  >
                    <img
                      class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                      src={player.strCutout}
                      alt=""
                    />
                    <h6 className="concat">{player.strPlayer}</h6>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        {player && (
          <div className="sm:basis-full md:basis-2/4">
            <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
              <div className=" dark:bg-slate-200">
                <div className="md:shrink-0">
                  {player.strFanart2 ? (
                    <img
                      className="w-full max-h-56 sm:object-cover md:h-full"
                      src={player.strFanart2}
                      alt=""
                    />
                  ) : player.strCutout ? (
                    <img
                      className="w-full max-h-56 object-contain md:h-full"
                      src={player.strCutout}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-full max-h-56 object-fit md:h-full"
                      src="https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png"
                      alt=""
                    />
                  )}
                </div>
                <div className="p-4">
                  <h1 className="text-bold text-2xl">{player.strPlayer}</h1>
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {player.strTeam}
                  </div>
                  {/* <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  >
                  </a> */}
                  <p className="mt-2 text-slate-500 text-start no-scrollbar max-h-64  overflow-scroll scroll-hidden display-none">
                    {player.strDescriptionEN}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
