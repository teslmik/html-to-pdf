import { Image, View } from "@react-pdf/renderer";
import { Fragment } from "react";

import bullet from 'src/assets/bullet.png';
import { styles } from 'src/styles';
import { getListItems } from "src/utils/get-list-items";
import { ChildArrayType, renderComponents } from "src/utils/render-components";
import { Li } from "./LI";

export const Ul: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  return (
    <View style={{ flexDirection: 'column' }}>
      {
        children.props.children
          .filter((item: string) => !/^\s*$/.test(item))
          .map((child: ChildArrayType, index: number) => {
            const liItems = getListItems(child) as ChildArrayType;
            const nestedList = getListItems(child, true);

            const isExistChild = typeof liItems.props.children !== 'string';
            return (
              <Fragment key={index}>
                <View style={styles.ul}>
                  <View style={styles.ulImageContainer}>
                    <Image source={bullet} style={styles.ulImage} />
                  </View>
                  {
                    isExistChild
                      ? (
                        <View style={styles.ulLiContainer}>
                          <Li>{liItems}</Li>
                        </View>
                      )
                      : <Li>{liItems}</Li>
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
