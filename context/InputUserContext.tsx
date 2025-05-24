"use client"

import { createContext, useContext, useState, ReactNode } from "react";
import { UserInput } from "@/types/UserInputType";

// creates the context type
const UserInputContext = createContext<{
  userInput: UserInput;
  setUserInput: (data: UserInput) => void;
  apiResponse: string;
  setApiResponse: (data: string) => void;
} | null>(null);

// creates the provider with the context + returns the jsx
export const UserInputProvider = ({ children }: { children: ReactNode }) => {
  const [userInput, setUserInput] = useState<UserInput>({
    initialQuery: "",
    answerOne: "",
    answerTwo: "",
    answerThree: ""
  });

  const [apiResponse, setApiResponse] = useState("");

  return (
    <UserInputContext.Provider value={{ userInput, setUserInput, apiResponse, setApiResponse }} >
      {children}
    </UserInputContext.Provider >

  );

};

// custom react hook
export const useUserInput = () => {
  const context = useContext(UserInputContext);
  if (!context) throw new Error("useUserInput must be used inside a UserInputProvider");
  return context;
};

