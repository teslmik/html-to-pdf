import { Text } from "@react-pdf/renderer";

import { styles } from "src/styles";

export const Footer = () => {
  return (
    <Text
      style={styles.pageCount}
      render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )}
      fixed
    />
  );
};
