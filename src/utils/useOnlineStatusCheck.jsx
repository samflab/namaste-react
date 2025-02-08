import { useEffect, useState } from "react";

const useOnlineStatusCheck = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    addEventListener("offline", () => {
      setIsOnline(false);
    });

    addEventListener("online", () => {
      setIsOnline(true);
    });
  }, []);

  return isOnline;
};

export default useOnlineStatusCheck;
