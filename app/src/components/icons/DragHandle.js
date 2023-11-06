import * as React from "react";

const SvgDragHandle = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
  </svg>
);
export default SvgDragHandle;
