import { Text, View } from "@react-pdf/renderer";
import { Fragment } from "react";

import { styles } from 'src/styles';
import { getListItems } from "src/utils/get-list-items";
import { ChildArrayType, renderComponents } from "src/utils/render-components";
import { Li } from "./LI";

export const Ol: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  return (
    <View style={{ flexDirection: "column" }}>
      {
        children.props.children
          .filter((item: string) => !/^\s*$/.test(item))
          .map((child: ChildArrayType, index: number) => {
            const liItems = getListItems(child) as ChildArrayType;
            const nestedList = getListItems(child, true);

            return (
              <Fragment key={index}>
                <View style={styles.ol}>
                  <Text style={{ width: 20 }}>{`${index + 1}.`}</Text>
                  <View style={styles.olText}><Li>{liItems}</Li></View>
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
