import { Text } from "@react-pdf/renderer";

import { ChildArrayType, renderComponents } from "src/utils/render-components";
import { styles } from 'src/styles'

export const H1: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  return (
    <Text style={styles.h1}>
      {
        typeof children.props.children === 'string'
          ? children.props.children
          : renderComponents(children.props.children)
      }
    </Text>
  )
}
