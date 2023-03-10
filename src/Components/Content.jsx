import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Best11 from "./Best11";
import "./Content.css";

const Content = () => {
  const inputRef = useRef();
  const [player, setPlayer] = useState(null);
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState([]);
  const [desc, setDesc] = useState(true);
  const [squad, setSquad] = useState(false);
  const [best11, setBest11] = useState([]);
  //   const [leagues,setLeagues] = useState([])

  const turnoff = ()=>{
    setSquad((prev)=>!prev)
    // setPlayer(null)
    setBest11([])
    players([])
  }
  const turnon = ()=>{
    setSquad((prev)=>!prev)
    setDesc(false);
    players([])
  }
  useEffect(() => {
    inputRef.current.focus();
    // getLeagues();
  }, []);

  const getPlayers = async (prefix) => {
    setPlayerName(prefix);
    setDesc(false);
    setPlayers(null);
    if (prefix !== "") {
      axios
        .get(
          `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${playerName}`
        )
        .then((response) => {
          let footballers = response.data.player.filter(
            (player) => player.strSport === "Soccer"
            // && player.strCutout
          );
          console.log(footballers);
          setPlayers(footballers);
        })
        .catch((err) => {
          // Error handler
        });
      // axios
      //   .get(
      //     `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='${prefix}'`
      //   )
      //   .then((response) => {
      //     console.log('Wiki data',response.data);
      //     const data = JSON.parse(response.data)
      //     console.log(data,'data')
      //   })
      //   .catch((err) => {
      //     //handle error
      //   });
    } else {
      setPlayers([]);
      setPlayer(null);
    }
  };
  const getPlayerData = (id) => {
    setPlayers([]);
    setPlayer(null);
    const data = players.find((player) => player.idPlayer === id);
    if (squad) {
      const status = best11.some((player)=>player.idPlayer===data.idPlayer)
      if(!status){
        setBest11([...best11,data]);
      }else{

      }
    } else {
      setPlayerName(data.strPlayer);
      setPlayer(data);
    }
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
    <>
      {desc && (
        <div className="flex justify-center">
          <h6 className="header max-w-sm">More updates will come soon...</h6>
        </div>
      )}
      <div className="mt-3 flex flex-col place-content-center justify-center md:flex-row md:justify-evenly flex-wrap">
        {/* <div className="flex py-2"> */}
        <div className="flex flex-col flex-wrap">
          <div className="justify-self-center place-content-center">
            <h5 className="text-stroke text-start italic text-white">
              Search footballer name
            </h5>
            <input
              ref={inputRef}
              onChange={(e) => getPlayers(e.target.value)}
              type="text"
              id="player_name"
              value={playerName}
              className="bg-gray-50 border-none w-72 p-3 mb-2 placeholder:italic max-h-96 md:w-80 border placeholder:text-gray-600 border-gray-300 text-md rounded-lg shadow-sm focus:outline-none focus:ring-1 sm:text-sm md:text-md lg:text-lg focus:ring-gray-900 focus:border-blue-500 block dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search a player..."
              required
            />
            {players ? (
              <div className="no-scrollbar w-80 max-h-64 md:w-80 overflow-scroll scroll-hidden display-none rounded dark:bg-white-800 bg-white px-2 ring-1 ring-slate-900/5 shadow-xl">
                {players.map((player) => {
                  return (
                    <div
                      onClick={() => getPlayerData(player.idPlayer)}
                      className="w-[100%] p-1 flex m-1 cursor-pointer items-center gap-3 bg-slate-300 rounded-xl"
                    >
                      {player.strCutout ? (
                        <img
                          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                          src={player.strCutout}
                          alt=""
                        />
                      ) : (
                        <img
                          className="inline-block rounded-full h-12 w-12 ring-2 object-fit"
                          src="https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png"
                          alt=""
                        />
                      )}
                      <h6 className="concat">{player.strPlayer}</h6>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>

          {player && (
            <div className="max-w-md">
              <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
                <div className=" dark:bg-slate-200">
                  <div className="md:shrink-0">
                    {player.strFanart1 ? (
                      <img
                        className="w-full max-h-72 sm:object-contain md:h-full"
                        src={
                          player.strThumb
                            ? player.strThumb
                            : player.strFanart3
                            ? player.strFanart3
                            : player.strFanart1
                        }
                        alt=""
                      />
                    ) : player.strCutout ? (
                      <img
                        className="w-full max-h-72 object-contain md:h-full"
                        src={player.strCutout}
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-full max-h-72 object-contain md:h-full"
                        src="https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h1 className="text-bold text-2xl">{player.strPlayer}</h1>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Club : {player.strTeam}
                    </div>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Nationality : {player.strNationality}
                    </div>
                    <p className="mt-2 text-slate-500 text-start no-scrollbar max-h-64  overflow-scroll scroll-hidden display-none">
                      {player.strDescriptionEN}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* </div> */}
        <div className="mt-7">
          <button
            onClick={() => squad?turnoff():turnon()}
            type="button"
            className={squad?"text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2":
          'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'}
          >
            {squad?'Turn Off':'Build Squad'}
          </button>
          {/* <h5 className="text-stroke text-start italic text-white">
              Search footballer name
            </h5>
            <input
              ref={inputRef}
              onChange={(e) => getPlayers(e.target.value)}
              type="text"
              id="player_name"
              value={playerName}
              className="bg-gray-50 border-none w-80 p-3 mb-2 placeholder:italic max-h-96 md:w-80 border placeholder:text-gray-600 border-gray-300 text-md rounded-lg shadow-sm focus:outline-none focus:ring-1 sm:text-sm md:text-md lg:text-lg focus:ring-gray-900 focus:border-blue-500 block dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Lionel Messi..."
              required
            />
            {players ? (
              <div className="no-scrollbar w-80 max-h-64 md:w-80 overflow-scroll scroll-hidden display-none rounded dark:bg-white-800 bg-white px-2 ring-1 ring-slate-900/5 shadow-xl">
                {players.map((player) => {
                  return (
                    <div
                      onClick={() => getPlayerData(player.idPlayer)}
                      className="w-[100%] p-1 flex m-1 cursor-pointer items-center gap-3 bg-slate-300 rounded-xl"
                    >
                      {player.strCutout ? (
                        <img
                          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                          src={player.strCutout}
                          alt=""
                        />
                      ) : (
                        <img
                          className="inline-block rounded-full h-12 w-12 ring-2 object-fit"
                          src="https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png"
                          alt=""
                        />
                      )}
                      <h6 className="concat">{player.strPlayer}</h6>
                    </div>
                  );
                })}
              </div>
            ) : null} */}
          <Best11 key="players" mode={squad?true:false} players={best11} />
        </div>
      </div>
    </>
  );
};

export default Content;
