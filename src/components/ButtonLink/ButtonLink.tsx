import * as React from 'react';
import { useHistory } from "react-router-dom";
import {
  Button,
  IButtonProps,
} from "@blueprintjs/core";

export interface LinkProps extends IButtonProps {
  to: string;
}

const ButtonLink = (props: LinkProps) => {
  let { to } = props;
  let history = useHistory();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    history.push(to);
  }

  return (<Button {...props} onClick={handleClick} />)
}

export default ButtonLink;