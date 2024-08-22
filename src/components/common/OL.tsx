import { Text, View } from "@react-pdf/renderer";
import { Fragment } from "react";

import { ChildArrayType, renderComponents } from "src/utils/render-components";
import { Li } from "./LI";
import { styles } from 'src/styles'

export const Ol: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  return (
    <View style={{ flexDirection: "column" }}>
      {
        children.props.children
          .filter((item: string) => !/^\s*$/.test(item))
          .map((child: ChildArrayType, index: number) => {
            const liItems = Array.isArray(child.props.children)
              ? {
                ...child,
                props: {
                  ...child.props,
                  children: child.props.children
                    .filter((item: ChildArrayType) => item.type !== 'ul' && item.type !== 'ol')
                }
              }
              : child;
            const nestedList = Array.isArray(child.props.children)
              ? {
                ...child,
                props: {
                  ...child.props,
                  children: child.props.children
                    .filter((item: ChildArrayType) => item.type === 'ul' || item.type === 'ol')
                }
              }
              : null;

            return (
              <Fragment key={index}>
                <View style={{ flexDirection: "row", gap: 2, ...styles.li }}>
                  <Text style={{ width: 20 }}>{`${index + 1}.`}</Text>
                  <View style={{ flexDirection: "row", flex: 1, flexWrap: 'wrap' }}><Li>{liItems}</Li></View>
                </View>
                <View style={{ marginLeft: 20 }}>
                  {
                    nestedList?.props.children.map((nestedChild: ChildArrayType, nestedIndex: number) => (
                      <Fragment key={nestedIndex}>
                        {renderComponents(nestedChild)}
                      </Fragment>
                    ))
                  }
                </View>
              </Fragment>
            )
          }
          )
      }
    </View>
  )
}
