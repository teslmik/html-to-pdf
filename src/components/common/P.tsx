import { Text } from "@react-pdf/renderer";

import { ChildArrayType, renderComponents } from "src/utils/render-components";
import { styles } from 'src/styles'

export const P: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  return (
    <Text style={styles.p}>
      {
        typeof children.props.children === 'string'
          ? children.props.children
          : renderComponents(children.props.children)
      }
    </Text>
  )
}
