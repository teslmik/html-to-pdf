import { Text, View, Image } from "@react-pdf/renderer";

import { styles } from "src/styles";
import haloLogo from '../../assets/haloLogo.png';

export const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <View
      style={styles.header}
      render={() => (
        <>
          <Text style={styles.headerText}>{title}</Text>
          <Image source={haloLogo} style={{ height: 19.35, width: 85.4 }} />
        </>
      )}
      fixed
    />
  );
};
