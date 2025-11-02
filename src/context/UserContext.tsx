import { createContext, useContext, useState, useEffect } from "react";
import { invites } from "../lib/constants";

type User = {
  name: string;
  userId: string;
  plusOneName?: string;
} | null;

type UserContextType = {
  user: User;
  setUser: (u: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);

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

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
