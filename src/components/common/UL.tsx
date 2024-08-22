import { Image, View } from "@react-pdf/renderer";
import { Fragment } from "react";

import { ChildArrayType, renderComponents } from "src/utils/render-components";
import { Li } from "./LI";
import { styles } from 'src/styles';
import bullet from '../../assets/bullet.png';

export const Ul: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  return (
    <View style={{ flexDirection: 'column' }}>
      {
        children.props.children
          .filter((item: string) => !/^\s*$/.test(item))
          .map((child: ChildArrayType, index: number, arr: ChildArrayType[]) => {
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

            const isExistChild = typeof liItems.props.children !== 'string';
            return (
              <Fragment key={index}>
                <View style={{ flexDirection: "row", gap: 10, marginBottom: 10, ...styles.li }}>
                  <View style={{ height: '100%', alignItems: 'flex-start' }}>
                    <Image source={bullet} style={{ width: 12, height: 12, paddingTop: 2 }} />
                  </View>
                  {
                    isExistChild
                      ? (
                        <View style={{ flexDirection: "row", flex: 1, flexWrap: 'wrap' }}>
                          <Li>{liItems}</Li>
                        </View>
                      )
                      : (<Li>{liItems}</Li>)
                  }
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
  );
};
