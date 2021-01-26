import React, {FC} from 'react';
import {Box, BoxProps, TypographyProps} from '@material-ui/core';

export type TypoBoxProps = BoxProps & TypographyProps;

export const TypoBox: FC<TypoBoxProps> = ({children, ...rest}) => <Box {...rest}>{children}</Box>;

export const Hello = () => (
  <TypoBox mb={3} fontWeight="200" variant="h1" component="h1">
    Hello Component!!!
  </TypoBox>
);
