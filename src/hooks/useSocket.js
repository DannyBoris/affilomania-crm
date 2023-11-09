import { useEffect, useState } from "react";
import io from "socket.io-client";

const useSocket = ({ handleNewTrace }) => {
  const [socket, setSocket] = useState(null);
  const serverUrl = "https://tra-mgmt.trafficondev.com";

  useEffect(() => {
    const newSocket = io(serverUrl);
    setSocket(newSocket);

    newSocket.on("newConnection", (data) => {
      console.log(data);
    });

    newSocket.on("newTrace", handleNewTrace);

    function cleanup() {
      newSocket.disconnect();
    }
    return cleanup;
  }, [handleNewTrace]);

  return socket;
};

export default useSocket;
