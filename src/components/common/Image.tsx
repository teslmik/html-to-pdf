import { View, Image as PdfImage } from "@react-pdf/renderer";

import { styles } from "src/styles";
import { ChildArrayType } from "src/utils/render-components";


export const Image: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  return (
    <View style={styles.imageContainer}>
      <PdfImage src={children.props.src} style={styles.image} />
    </View>
  );
};
