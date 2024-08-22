import { Text } from "@react-pdf/renderer";
import { JSXElementConstructor, ReactElement } from "react";

import { H1, H2, H3, Ol, P, Strong, Ul, Image, Link } from "@/components/common";
import { styles } from '../styles';

export type ChildArrayType = ReactElement<any, string | JSXElementConstructor<any>>
export type ChildrenType = string | ChildArrayType

export const renderComponents = (children: ChildrenType) => {
  if (typeof children === "string" && /^\s*$/.test(children)) {
    return null;
  }

  else
    if (typeof children !== "string") {

      // Heading H1
      if (children.type === 'h1') {
        return <H1>{children}</H1>;
      }

      // Heading H2
      else if (children.type === 'h2') {
        return <H2>{children}</H2>;
      }

      // Heading H3
      else if (children.type === 'h3') {
        return <H3>{children}</H3>;
      }

      // Heading P
      else if (children.type === 'p') {
        return <P>{children}</P>;
      }

      // List OL
      else if (children.type === 'ol') {
        return <Ol>{children}</Ol>;
      }

      // List UL
      else if (children.type === 'ul') {
        return <Ul>{children}</Ul>;
      }

      // Text Bold
      else if (children.type === 'strong') {
        return <Strong>{children}</Strong>;
      }

      // Link
      else if (children.type === 'a') {
        return <Link>{children}</Link>;
      }

      // Image
      else if (children.type === 'img') {
        return <Image>{children}</Image>;
      }
    }

    // Text Plain
    else if (typeof children === "string") {
      return (
        <Text style={styles.span}>
          {children.split('\n')[0].trim()}
        </Text>
      );
    }

  return children;
};
