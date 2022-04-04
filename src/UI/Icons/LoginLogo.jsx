import React from 'react';
import Svg, { Path } from 'react-native-svg';
import View from 'react-native';

const LoginLogo = props => {
  return (
    <Svg width='24' height='28' viewBox='0 0 24 28' fill='none' {...props}>
      <Path
        d='M22 28H10C9.46957 28 8.96086 27.7893 8.58579 27.4142C8.21071 27.0391 8 26.5304 8 26V23H10V26H22V2H10V5H8V2C8 1.46957 8.21071 0.960859 8.58579 0.585786C8.96086 0.210714 9.46957 0 10 0H22C22.5304 0 23.0391 0.210714 23.4142 0.585786C23.7893 0.960859 24 1.46957 24 2V26C24 26.5304 23.7893 27.0391 23.4142 27.4142C23.0391 27.7893 22.5304 28 22 28Z'
        fill='#4DAAAA'
      />
      <Path
        d='M10.59 18.59L14.17 15H0V13H14.17L10.59 9.41L12 8L18 14L12 20L10.59 18.59Z'
        fill='#4DAAAA'
      />
    </Svg>
  );
};

export default LoginLogo;
