export interface SidebarMenuItem {
    id: number;
    path: string;
    label: string;
    icon: string;
}

export interface SidebarStateProps {
    isOpen: boolean;
}