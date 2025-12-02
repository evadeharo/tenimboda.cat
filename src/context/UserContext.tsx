import { createContext, useContext, useState, useEffect } from "react";
import { invites } from "../lib/constants";
import { fetchCSV } from "../api/confirmation";

export type User = {
  name: string;
  userId: string;
  plusOneName?: string;
} | null;

type UserContextType = {
  user: User;
  setUser: (u: User) => void;
  hasAnswered: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("userId");

    if (id) {
      const guest = invites.find((c) => c.userId === id);
      if (guest) {
        setUser(guest);
      }
    }
  }, []);

  useEffect(() => {
    async function check() {
      if (!user?.userId) return;

      const responded = await hasUserResponded(user.userId);
      setHasAnswered(responded);
    }

    check();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, hasAnswered }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export async function hasUserResponded(userId: string) {
  const csv = await fetchCSV();

  if (csv.trim().startsWith("[") || csv.trim().startsWith("{")) {
    const data = JSON.parse(csv);
    return data.some((row: any) => row.userId === userId);
  }

  return false;
}
