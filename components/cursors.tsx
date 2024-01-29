// ReBuilt using Reference: https://liveblocks.io/examples/live-cursors/nextjs-live-cursors

import { useOthersConnectionIds } from "liveblocks.config";
import React from "react"
import Cursor from "./cursor";

export const Cursors =
  // (1) Wrap parent component in a memo and make sure it takes no props
  React.memo(function () {
    const othersConnectionIds = useOthersConnectionIds(); // (2)
    return (
      <>
        { {othersConnectionIds.map((connectionId) => (
          <Cursor
            key={connectionId} // (3)
            connectionId={connectionId}
          />
        ))} }
      </>
    );
  }
);

// ReBuilt using Reference: https://liveblocks.io/examples/live-cursors/nextjs-live-cursors