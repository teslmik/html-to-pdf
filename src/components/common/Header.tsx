import { Text, View, Image } from "@react-pdf/renderer";

import { styles } from "src/styles";
import haloLogo from '../../assets/haloLogo.png';

export const Header = () => {
  return (
    <View
      style={styles.header}
      render={() => (
        <>
          <Text style={styles.headerText}>Sample Technical Audit</Text>
          <Image source={haloLogo} style={{ height: 19.35, width: 85.4 }} />
        </>
      )}
      fixed
    />
  );
};
