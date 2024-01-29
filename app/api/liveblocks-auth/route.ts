// Build using Refernce https://liveblocks.io/docs/rooms/authentication/access-token-permissions/nextjs

import { Liveblocks } from "@liveblocks/node";

const liveblocks = new Liveblocks({
  // please use your own secret key
  secret: "sk_prod_HXSYGA7SUOJDrZwhtcPB2p_kluXhob4CwEPfQeoBMpTcXNjOpXAu38Q_VSs8Yi72",
});

export async function POST(request: Request) {
 //Get the current user from your database
const user = __getUserFromDB__(request);

//Start an auth session inside your endpoint
const session = liveblocks.prepareSession(
  user.id,
  {
    userInfo: {
      name: user.name,
      avatar: user.avatarUrl,
      colors: user.colorArray,
    }
  }
);

  // Implement your own security, and give the user access to the room
  const { room } = await request.json();
  if (room && __shouldUserHaveAccess__(user, room)) {
    session.allow(room, session.FULL_ACCESS);
  }

  // Authorize the user and return the result
  const { status, body } = await session.authorize();
  return new Response(body, { status });
}

// Build using Refernce https://liveblocks.io/docs/rooms/authentication/access-token-permissions/nextjs