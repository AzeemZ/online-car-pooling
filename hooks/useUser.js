import { useState, useLayoutEffect } from "react";
import axios from "axios";

export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const { data } = await axios.get("/api/auth/current-user");
      setLoading(false);
      setUser(data.currentUser);
    };
    fetchUser();
  }, []);

  return { user, loading };
}
