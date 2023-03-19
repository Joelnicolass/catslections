import { createContext, useContext } from "react";

export const CardContext = createContext({});
export const { Provider: ProviderCard } = CardContext;
export const useCardContext = () => useContext(CardContext);
