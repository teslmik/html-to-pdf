import { Text, View } from "@react-pdf/renderer";

import { ChildArrayType, ChildrenType, renderComponents } from "src/utils/render-components";
import { styles } from 'src/styles'
import { Fragment } from "react/jsx-runtime";

export const P: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  const nestedImage =
    children.props.children.type === 'img' ? (
      renderComponents(children.props.children)
    ) : (
      <Text style={styles.p}>{renderComponents(children.props.children)}</Text>
    );
  const nestedItems = Array.isArray(children.props.children)
    ? children.props.children
        .filter((item: string) => !/^\s*$/.test(item))
        .map((child: ChildArrayType, index: number) => {
          return <Fragment key={index}>{renderComponents(child)}</Fragment>;
        })
    : nestedImage;

  return (
    <>
      {typeof children.props.children === 'string' ? (
        <Text style={styles.p}>{children.props.children}</Text>
      ) : (
        <View style={styles.pContainer}>{nestedItems}</View>
      )}
    </>
  );
};
