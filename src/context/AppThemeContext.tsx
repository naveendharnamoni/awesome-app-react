import React, {useState, type JSX} from "react";

export type ThemeState = {
    mode: string,
    changeMode: (mode: string) => void
}

export const initialState: ThemeState = {
    mode: 'dark',
    changeMode: (mode: string) => {}
}
type AppThemeProviderProps = {
    children: JSX.Element
}
export const AppThemeContext = React.createContext(initialState);

export function AppThemeProvider(props: AppThemeProviderProps){
    const [mode, setMode] = useState(initialState.mode);
    return(
        <AppThemeContext.Provider value={{mode, changeMode: setMode}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}