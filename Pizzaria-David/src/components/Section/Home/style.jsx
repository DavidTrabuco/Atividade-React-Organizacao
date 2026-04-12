import RestaurantHome from "../../../share/Photo/RestaurantHome.jpg";

export const HomeStyles = {

  // Seção principal
  section:
    "relative w-full h-screen flex items-center justify-center overflow-hidden",

  // Imagem do restaurante com overlay escuro profissional
  sectionBackground: {
    backgroundImage: `linear-gradient(rgba(20,3,3,0.65), rgba(10,2,2,0.75)), url(${RestaurantHome})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
 
  // Overlay com glow central sutil — sem backdrop-blur pesado
  overlay:
    "absolute inset-0 [background:radial-gradient(ellipse_at_50%_60%,rgba(180,60,0,0.18)_0%,transparent_65%)]",
 
  // Conteúdo central
  content:
    "relative z-10 flex flex-col items-center justify-center text-center gap-6 px-4 animate-fade-in",
 
  // Subtítulo — laranja como acento
  subtitle:
    "text-orange-400 text-xs font-semibold tracking-[0.3em] uppercase drop-shadow-md",
 
  // Título — branco puro
  title:
    "text-white text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none drop-shadow-2xl",
 
  // Grupo de botões
  buttonGroup: "flex flex-row gap-4 mt-4",
 
  // Botão primário
  buttonBookTable:
    "px-7 py-3 bg-orange-500 text-white text-xs font-bold tracking-widest uppercase rounded-sm transition-all duration-300 hover:bg-orange-400 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/40 active:scale-95 cursor-pointer",
 
  // Botão ghost
  buttonOpenMenu:
    "px-7 py-3 bg-transparent border border-white/50 text-white text-xs font-bold tracking-widest uppercase rounded-sm transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-1 active:scale-95 cursor-pointer",
};