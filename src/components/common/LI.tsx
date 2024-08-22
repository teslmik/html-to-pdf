import { Fragment } from "react";

import { ChildArrayType, renderComponents } from "src/utils/render-components";

export const Li: React.FC<{ children: ChildArrayType }> = ({ children }) => {
  if (Array.isArray(children.props.children)) {
    return (
      <>
        {children.props.children
          .filter((item: string) => !/^\s*$/.test(item))
          .map((child: ChildArrayType, index: number) => (
            <Fragment key={index}>
              {renderComponents(child)}
            </Fragment>
          ))}
      </>
    );
  } else {
    return renderComponents(children.props.children);
  }
}
