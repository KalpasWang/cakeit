import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function IndexPage({}: PageProps) {
  return (
    <Layout>
      <h1>Hello</h1>
      <Button>Button</Button>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
