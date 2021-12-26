import styled from 'styled-components';
import { css, SystemCssProperties } from '@styled-system/css';

export const BoxRoot = styled.div<{ sx?: SystemCssProperties }>((props) => css(props.sx));
