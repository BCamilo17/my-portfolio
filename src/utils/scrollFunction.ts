export const scrollFunction = (scrollTo: string): void => {
    const scrollElement = document.getElementById(scrollTo);
    scrollElement?.scrollIntoView({behavior:"smooth", block: "start"});
    
}