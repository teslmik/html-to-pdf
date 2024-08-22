import { Text } from "@react-pdf/renderer";

import { styles } from 'src/styles'
import { ChildArrayType } from 'src/utils/render-components'

export const Strong: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  return (
    <Text style={styles.strong}>
      {children.props.children}
    </Text>
  )
}
