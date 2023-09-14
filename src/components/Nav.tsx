import { MenuQuery } from "@/globals";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "gatsby";

type Props = {
  menuItems: MenuQuery["wpMenu"]["menuItems"]["nodes"];
  className?: string;
};

export default function Nav({ menuItems }: Props) {
  const LinkItem = (item: MenuQuery["wpMenu"]["menuItems"]["nodes"][0]) => {
    return (
      <NavigationMenuItem>
        <Link to={item.url}>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {item.label}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  };

  const SubMenuItem = (item: MenuQuery["wpMenu"]["menuItems"]["nodes"][0]) => {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul>
            {item.childItems.nodes.map((subItem) => (
              <li key={subItem.id}>
                <Link to={subItem.url}>{subItem.label}</Link>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => {
          if (item.parentId) return;

          const hasSubMenu = item.childItems.nodes.length > 0;
          return hasSubMenu ? SubMenuItem(item) : LinkItem(item);
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
