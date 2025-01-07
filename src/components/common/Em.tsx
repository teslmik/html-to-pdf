import React from 'react';
import { Text } from '@react-pdf/renderer';
import { ChildArrayType } from 'src/utils/render-components';
import { styles } from 'src/styles';

export const Em: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  return <Text style={styles.em}>{children.props.children}</Text>;
};