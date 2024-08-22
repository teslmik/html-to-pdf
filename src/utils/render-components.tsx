import { Text } from "@react-pdf/renderer";
import { JSXElementConstructor, ReactElement } from "react";

import { componentMap } from "@/constants/component-map";
import { styles } from '../styles';

export type ChildArrayType = ReactElement<any, string | JSXElementConstructor<any>>
export type ChildrenType = string | ChildArrayType

const isStringAndEmpty = (children: ChildrenType): boolean => 
  typeof children === "string" && /^\s*$/.test(children);

export const renderComponents = (children: ChildrenType) => {
  if (isStringAndEmpty(children)) {
    return null;
  }

  if (typeof children === "string") {
    return (
      <Text style={styles.span}>
        {children.trim()}
      </Text>
    );
  }

  const Component = componentMap[children.type as string];

  if (Component) {
    return <Component>{children}</Component>;
  }

  return children;
};