import { View } from '@react-pdf/renderer';
import React, { Fragment } from 'react';

import { styles } from 'src/styles';
import { ChildArrayType, renderComponents } from 'src/utils/render-components'

export const Row: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  return (
    <View style={styles.tableRow}>
      {children.props.children.map((item: ChildArrayType, i: number) => (
        <Fragment key={i}>
          {renderComponents(item)}
        </Fragment>
      ))}
    </View>
  )
}
