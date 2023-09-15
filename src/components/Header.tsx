import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MenuQueryData } from "@/globals";
import Logo from "./Logo";
import Nav from "./Nav";

type Props = {};

export default function Header({}: Props) {
  const { site, wpMenu }: MenuQueryData = useStaticQuery(graphql`
    query MenuQuery {
      site {
        siteMetadata {
          title
        }
      }
      wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            id
            parentId
            label
            url
            childItems {
              nodes {
                id
                parentId
                label
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <header className="px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo title={site.siteMetadata.title} />
          <Nav menuItems={wpMenu.menuItems.nodes} />
        </div>
      </div>
    </header>
  );
}
