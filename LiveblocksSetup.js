// Built using Reference https://liveblocks.io/docs/api-reference/liveblocks-react

import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { RoomProvider } from "./liveblocks.config";

/*
RoomProvider
Makes a Room available in the component hierarchy below. Joins the room when the component is mounted, and automatically leaves the room when the component is unmounted.

initialPresence - The initial Presence to use for the User currently entering the Room. Presence data belongs to the current User and is readable to all other Users in the room while the current User is connected to the Room. Must be serializable to JSON.
initialStorage (optional) - The initial Storage structure to create when a new Room is entered for the first time. Storage data is shared and belongs to the Room itself. It persists even after all Users leave the room, and is mutable by every client. Must either contain Live structures (e.g. new LiveList(), new LiveObject({ a: 1 }), etc.) or be serializable to JSON.
autoConnect (optional) - Whether or not the room should automatically connect to Liveblocks servers when the RoomProvider is mounted. By default it’s set to typeof window !== "undefined", meaning the RoomProvider attempts to connect to Liveblocks servers only on the client side.
The initialPresence, initialStorage and autoConnect props are ignored after the first render, so changes to the initial value argument won’t have an effect.
*/

function AppRoot() {
  return (
    <RoomProvider
      id="my-room"
      // 😎 Replace with your own data!
      initialPresence={{ cursor: { x: 0, y: 0 } }}
      // 😎 Replace with your own data!
      initialStorage={() => ({
        animals: new LiveList(["🦁", "🦊", "🐵"]),

        mathematician: new LiveObject({
          firstName: "Ada",
          lastName: "Lovelace",
        }),

        fruitsByName: new LiveMap([
          ["apple", "🍎"],
          ["banana", "🍌"],
          ["cherry", "🍒"],
        ]),
      })}
    >
      {/* children */}
    </RoomProvider>
  );
}

// Rebuilt using refrence https://liveblocks.io/docs/api-reference/liveblocks-react#Presence

function App() {
    useOthersListener(({ type, user, others }) => {
      switch (type) {
        case "enter":
          // `user` has entered the room
          break;
  
        case "leave":
          // `user` has left the room
          break;
  
        case "update":
          // Presence for `user` has updated
          break;
  
        case "reset":
          // Others list has been emptied
          break;
      }
    }
  );
}

// Built using Reference https://liveblocks.io/docs/api-reference/liveblocks-react