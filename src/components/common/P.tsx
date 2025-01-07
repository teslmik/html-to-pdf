import { Text, View } from "@react-pdf/renderer";

import { ChildArrayType, ChildrenType, renderComponents } from "src/utils/render-components";
import { styles } from 'src/styles'
import { Fragment } from "react/jsx-runtime";

export const P: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  return (
    <View style={styles.p}>
      {
        typeof children.props.children === 'string'
          ? (<Text>{children.props.children}</Text>)
          : children.props.children.map((item: ChildrenType, i: number) => (
              <Fragment key={i}>{renderComponents(item)}</Fragment>
            )
          )
      }
    </View>
  )
}
