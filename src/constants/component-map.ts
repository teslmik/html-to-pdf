import { JSXElementConstructor } from "react";

import { H1, H2, H3, Ol, P, Strong, Ul, Image, Link, Table, Cell, Row, Em } from "@/components/common";

export const componentMap: Record<string, JSXElementConstructor<any>> = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ol: Ol,
  ul: Ul,
  strong: Strong,
  a: Link,
  img: Image,
  table: Table,
  tr: Row,
  th: ({ children }) => Cell({ children, header: true }),
  td: Cell,
  em: Em,
  i: Em,
};