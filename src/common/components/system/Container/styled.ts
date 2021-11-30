import styled from 'styled-components';

export interface ContainerRootProps {
  disableGutters?: boolean;
}

export const ContainerRoot = styled.div<ContainerRootProps>((props) => ({
  display: 'block',
  width: '100%',
  maxWidth: 1440,
  marginLeft: 'auto',
  marginRight: 'auto',

  ...(!props.disableGutters && {
    paddingLeft: 16,
    paddingRight: 16,

    '@media (min-width: 960px)': {
      paddingLeft: 24,
      paddingRight: 24,
    },
  }),
}));
