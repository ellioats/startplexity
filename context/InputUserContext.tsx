import { createContext, useContext, useState, ReactNode } from "react";

// move declaration to types folder?
type UserInput = {
  initialQuery: string;
  answerOne: string;
  answerTwo: string;
  answerThree: string;
}

const UserInputContext = createContext<{
  userInput: UserInput;
  setUserInput: (data: UserInput) => void;
} | null>(null);

export const UserInputProvider = ({ children }: { children: ReactNode }) => {
  const [userInput, setUserInput] = useState<UserInput>({
    initialQuery: "",
    answerOne: "",
    answerTwo: "",
    answerThree: ""
  });



  return (
    <UserInputContext.Provider value={{ userInput, setUserInput }} >
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

