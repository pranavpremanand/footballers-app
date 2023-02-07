import React from "react";
import "./Best11.css";
const Best11 = ({ players,mode }) => {
  const allPlayers = players.map((player) => {
    player.strCutout = !player.strCutout
      ? "https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png"
      : player.strCutout;
    return player;
  });
  return (
    <>
      {allPlayers && (
        <div
          className="relative justify-center flex max-w-md mb-4 border border-b-2"
          style={{
            width: "300px",
            height: "450px",
            backgroundImage: `url(${mode?"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Football_field.svg/400px-Football_field.svg.png?20221122165539":"https://pbs.twimg.com/media/FVYqD6DXEAIRXS8?format=jpg&name=large"})`,
            backgroundPosition: `${mode?"center":'top'}`,
            backgroundSize: `${mode?"contain":'100%'}`,
            filter:`${mode?"":'brightness(0.9)'}`,
            borderRadius:'10px'
          }}
        >
          {allPlayers[0] ? (
            <img
              class="absolute top-4 w-14 h-14 rounded-full"
              src={allPlayers[0]?.strCutout}
              alt=""
            />
          ) : null}
          {allPlayers[1] ? (
            <img
              class="absolute top-24 left-4 w-14 h-14 rounded-full"
              src={allPlayers[1]?.strCutout}
              alt=""
            />
          ) : null}
          {allPlayers[2] ? (
            <img
              class="absolute top-20 left-20 w-14 h-14 rounded-full"
              src={allPlayers[2]?.strCutout}
              alt=""
            />
          ) : null}
          {allPlayers[3] ? (
            <img
              class="absolute top-20 right-20 w-14 h-14 rounded-full"
              src={allPlayers[3]?.strCutout}
              alt=""
            />
          ) : null}
          {allPlayers[4] ? (
            <img
              class="absolute top-24 right-4 w-14 h-14 rounded-full"
              src={allPlayers[4]?.strCutout}
              alt=""
            />
          ) : null}
          {allPlayers[5] ? (
            <img
              class="absolute top-56 left-8 w-14 h-14 rounded-full"
              src={allPlayers[5]?.strCutout}
              alt=""
            />
          ) : null}
          {allPlayers[6] ? (
            <img
              class="absolute top-48 w-14 h-14 rounded-full"
              src={allPlayers[6]?.strCutout}
              alt=""
            />
          ) : null}
          {allPlayers[7] ? (
            <img
              class="absolute top-56 right-8 w-14 h-14 rounded-full"
              src={allPlayers[7]?.strCutout}
              alt=""
            />
          ) : null}
          {allPlayers[8] ? (
            <img
              class="absolute bottom-16 left-8 w-14 h-14 rounded-full"
              src={allPlayers[8]?.strCutout}
              alt=""
            />
          ) : null}
          {allPlayers[9] ? (
            <img
              class="absolute bottom-14 w-14 h-14 rounded-full"
              src={allPlayers[9]?.strCutout}
              alt=""
            />
          ) : null}
          {allPlayers[10] ? (
            <img
              class="absolute bottom-16 right-8 w-14 h-14 rounded-full"
              src={allPlayers[10]?.strCutout}
              alt=""
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default Best11;
