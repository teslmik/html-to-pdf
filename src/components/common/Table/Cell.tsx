import { View, Text } from '@react-pdf/renderer';
import React from 'react';

import { styles } from 'src/styles';
import { ChildArrayType } from 'src/utils/render-components'

export const Cell: React.FC<{
  children: ChildArrayType,
  header: boolean
}> = ({ children, header = false }) => {
  return (
    <View style={styles.tableCol}>
      <Text style={[styles.tableCell, header ? styles.headerCell : {}]}>
        {children.props.children}
      </Text>
    </View>
  )
}