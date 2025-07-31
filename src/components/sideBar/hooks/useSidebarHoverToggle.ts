import {useState} from "react";

const useSidebarHoverToggle = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpenSidebar = () => setIsOpen(true);
    
    const handleCloseSidebar = () => setIsOpen(false);

    return {isOpen, handleOpenSidebar, handleCloseSidebar};
};

export default useSidebarHoverToggle;