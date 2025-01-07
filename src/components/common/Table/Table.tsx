import { View } from '@react-pdf/renderer';
import React, { Fragment } from 'react';

import { styles } from 'src/styles';
import { ChildArrayType, ChildrenType, renderComponents } from 'src/utils/render-components';

export const Table: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  const rows = children.props.children.flatMap((item: ChildrenType) => {
    if (typeof item !== 'string') {
      return item.props.children;
    }
  });

  return (
    <View style={styles.table}>
      {rows.map((item: ChildrenType, i: number) => (
        <Fragment key={i}>
          {renderComponents(item)}
        </Fragment>
      ))}
    </View>
  )
}
