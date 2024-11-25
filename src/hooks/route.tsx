import { useNavigate } from "react-router-dom";

export interface MenuItem {
  key: string;
  label: string;
  path: string;
}

const useMenuNavigation = (items: MenuItem[]) => {
  const navigate = useNavigate();

  const handleMenuClick = (item: { key: string }) => {
    const selected = items.find((menuItem) => menuItem.key === item.key);
    if (selected) {
      navigate(selected.path);
    }
  };

  return { handleMenuClick };
};

export default useMenuNavigation;
