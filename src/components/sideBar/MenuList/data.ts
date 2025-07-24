import  homeIcon from '/public/assets/icons/Group 46.png';
import  watchLaterIcon from '/public/assets/icons/Group 47.png';
import  genresIcon from '/public/assets/icons/Group 53.png';
import  moviesIcon from '/public/assets/icons/Group 54.png';
import  twShowsIcon from '/public/assets/icons/Group 56.png';
import type {SidebarMenuItem} from "../types.ts";


export const sideBarMenuList : SidebarMenuItem[] = [
    {
        id:1,
        label: "Home",
        path:'/',
        icon :homeIcon
    },
    {
        id:2,
        label: "TV Shows",
        path:'/tv-shows',
        icon :twShowsIcon

    },
    {
        id:3,
        label: "Movies",
        path:'/movies',
        icon :moviesIcon

    },
    {
        id:4,
        label: "Genres",
        path:'/genres',
        icon :genresIcon

    },
    {
        id:5,
        label: "Watch Later",
        path:'/watch-later',
        icon :watchLaterIcon
    }
]