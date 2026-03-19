export const NavBarStyles = {
    backgroundColor: "bg-red-950 w-full",
    default: "mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-20",
    navCenter: "flex items-center gap-8",
    itemMenu: "font-medium text-lg transition-all duration-300 hover:-translate-y-1 inline-block",
    itemTheme: "text-white hover:text-rose-500",
    buttonReservation: "rounded-full bg-rose-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-rose-700 hover:scale-105 hover:-translate-y-1 hover:shadow-rose-500/50 hover:shadow-lg cursor-pointer",
    NavbarLogo: "h-35 w-auto transition-all duration-300 hover:scale-110 cursor-pointer"
}
NavBarStyles.itemMenuTheme = `${NavBarStyles.itemMenu} ${NavBarStyles.itemTheme}`

//default ele se distribui os 3 grupos ,no caso a logo na esquerda ,os itens no meio  e o botao na direita ,diante disso o nav center deiixa agrupado os links no meio !!! 