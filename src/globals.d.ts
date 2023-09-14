declare module "*.svg" {
  const value: string;
  export default value;
}

export type MenuQuery = {
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
