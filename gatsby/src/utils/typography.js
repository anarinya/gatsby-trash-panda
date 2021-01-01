import Typography from 'typography';
import fairyGateTheme from 'typography-theme-fairy-gates';
import altonTheme from 'typography-theme-alton';

const typography = new Typography(altonTheme);

export const { scale, rhythm, options } = typography;
export default typography;
