export const HomeStyles = {
    section: "relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden",

    sectionBackground: {background: "linear-gradient(180deg,rgba(122, 7, 7, 1) 42%, rgba(220, 38, 38, 1) 100%)",},

    overlay: "absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]",

    content: "relative z-10 flex flex-col items-center justify-center text-center gap-6 px-4 animate-fade-in",

    subtitle: "text-orange-300 text-sm font-medium tracking-[0.3em] uppercase drop-shadow-md",

    title: "text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-orange-200 text-5xl lg:text-6xl font-extrabold uppercase tracking-wide leading-tight drop-shadow-2xl",

    buttonGroup: "flex flex-row gap-4 mt-2",

    buttonBookTable: "px-6 py-2.5 bg-orange-500 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/50 active:scale-95 cursor-pointer",

    buttonOpenMenu: "px-6 py-2.5 bg-transparent border border-white text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-lg hover:shadow-white/30 active:scale-95 cursor-pointer",
};