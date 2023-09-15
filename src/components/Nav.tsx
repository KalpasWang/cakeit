import { MenuItem } from "@/globals";
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
  menuItems: MenuItem[];
  className?: string;
};

export default function Nav({ menuItems }: Props) {
  const LinkItem = (item: MenuItem) => {
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

  const SubMenuItem = (item: MenuItem) => {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 w-72 md:w-125 md:grid-cols-2 lg:w-150">
            {item.childItems.nodes.map((subItem) => (
              <li key={subItem.id}>
                <NavigationMenuLink asChild>
                  <Link
                    to={subItem.url}
                    className="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    {subItem.label}
                  </Link>
                </NavigationMenuLink>
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
