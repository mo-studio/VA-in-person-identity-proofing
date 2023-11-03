import * as React from "react";

const SvgIdentification = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
    <path d="M11 14.14C11 13.38 9.33 13 8.5 13S6 13.38 6 14.14V15h5Z" />
    <circle cx={8.5} cy={10.5} r={1.5} />
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-7 13H4V7h9Zm7 0h-5v-2h5Zm0-4h-5v-2h5Zm0-4h-5V7h5Z" />
  </svg>
);
export default SvgIdentification;
