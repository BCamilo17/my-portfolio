import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
type Themecontext = "light" | "dark";

interface ThemeContextProps {
    theme: Themecontext;
    setTheme: React.Dispatch<React.SetStateAction<Themecontext>>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Themecontext>(() => {
        const savedTheme = localStorage.getItem('theme') as Themecontext | null;
        return savedTheme || 'light';
    });
    useEffect(() => {
        localStorage.setItem('theme', theme);
        // Se agrega el tag para controlar el tema en el HTML-Css
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );	
}
export const useTheme = () => {
    const context = useContext(ThemeContext);
    
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
