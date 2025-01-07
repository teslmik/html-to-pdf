import { Fragment } from "react";

import { ChildArrayType, renderComponents } from "src/utils/render-components";

export const Li: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  if (Array.isArray(children.props.children)) {
    return (
      <Fragment>
        {children.props.children
          .filter((item: string) => !/^\s*$/.test(item))
          .map((child: ChildArrayType, index: number) => {
            return (
              <Fragment key={index + 'li'}>{renderComponents(child)}</Fragment>
            );
          })}
      </Fragment>
    );
  } else {
    return renderComponents(children.props.children);
  }
};
