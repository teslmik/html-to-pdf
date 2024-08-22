import { ChildArrayType } from "./render-components";

export const getListItems = (children: ChildArrayType, nested = false) => {
  const finalChildren = nested ? null : children;
  
  return Array.isArray(children.props.children)
    ? {
        ...children,
        props: {
          ...children.props,
          children: children.props.children.filter((item: ChildArrayType) =>
            nested
              ? item.type === 'ul' || item.type === 'ol'
              : item.type !== 'ul' && item.type !== 'ol'
          ),
        },
      }
    : finalChildren;
};
