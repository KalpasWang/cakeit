declare module "*.svg" {
  const value: string;
  export default value;
}

export type MenuQueryData = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  wpMenu: {
    menuItems: {
      nodes: Array<{
        id: string;
        parentId?: string;
        label: string;
        url: string;
        childItems: {
          nodes: Array<{
            id: string;
            parentId: string;
            label: string;
            url: string;
          }>;
        };
      }>;
    };
  };
};

export type MenuItem = MenuQueryData["wpMenu"]["menuItems"]["nodes"][0];
