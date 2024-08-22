import { Link as PdfLink, Text } from "@react-pdf/renderer";

import { styles } from "src/styles";
import { ChildArrayType } from "src/utils/render-components";


export const Link: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  const child = children.props.children;
  
  return (
    <PdfLink src={children.props.href} style={styles.a}>
      {
        typeof child === 'string'
          ? child
          : <Text style={{ fontWeight: 500 }}>{child.props.children}</Text>
      }
    </PdfLink>
  );
};
