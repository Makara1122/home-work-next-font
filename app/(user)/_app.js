import { Inter,Suwannaphum } from 'next/font/google'
import localFont from 'next/font/local'
 
// If loading a variable font, you don't need to specify the font weight
export const inter = Inter({ subsets: ['latin'], 
variable : "--font-inter",
display : 'swap',
weight : ["100","200", "300","600", "700","900"]})
export const suwannaphum = Suwannaphum({subsets: ["khmer"],
variable : "--font-suwannaphu",
display : "swap",
weight : ["100","300","400","700","900"]})
 
export const localCustomFont = localFont({
    variable : "--font-demo",
    display : "swap",
    src : "./fonts/Hi.otf",
})
