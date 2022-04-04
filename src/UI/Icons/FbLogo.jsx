import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function FbLogo() {
  return (
    <Svg
      width='8'
      height='16'
      viewBox='0 0 8 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Path
        d='M5.16415 15.4975V8.6675H7.46832L7.81082 5.99334H5.16415V4.29C5.16415 3.51834 5.37915 2.99 6.48665 2.99H7.88998V0.605837C7.20718 0.532663 6.52086 0.497331 5.83415 0.500004C3.79749 0.500004 2.39915 1.74334 2.39915 4.02584V5.98834H0.109985V8.6625H2.40415V15.4975H5.16415Z'
        fill='#1C7193'
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});
