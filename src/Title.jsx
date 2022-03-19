import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Title = () => {
  return (
    <Svg width='90' height='42' viewBox='0 0 78 29' fill='none'>
      <Path
        d='M11.8398 14.3491C11.8398 14.0317 11.791 13.7469 11.6934 13.4946C11.6038 13.2342 11.4329 12.9982 11.1807 12.7866C10.9284 12.5669 10.5744 12.3512 10.1187 12.1396C9.66292 11.9281 9.07292 11.7083 8.34863 11.4805C7.54297 11.2201 6.77799 10.9271 6.05371 10.6016C5.33757 10.276 4.7028 9.89762 4.14941 9.46631C3.60417 9.02686 3.17285 8.51823 2.85547 7.94043C2.54622 7.36263 2.3916 6.69124 2.3916 5.92627C2.3916 5.18571 2.55436 4.51432 2.87988 3.91211C3.2054 3.30176 3.66113 2.78092 4.24707 2.34961C4.83301 1.91016 5.52474 1.57243 6.32227 1.33643C7.12793 1.10042 8.0109 0.982422 8.97119 0.982422C10.2814 0.982422 11.4248 1.21842 12.4014 1.69043C13.3779 2.16243 14.1348 2.80941 14.6719 3.63135C15.2171 4.45329 15.4897 5.39323 15.4897 6.45117H11.8521C11.8521 5.93034 11.7422 5.47461 11.5225 5.08398C11.3109 4.68522 10.9854 4.37191 10.5459 4.14404C10.1146 3.91618 9.56934 3.80225 8.91016 3.80225C8.27539 3.80225 7.74642 3.8999 7.32324 4.09521C6.90007 4.28239 6.58268 4.53874 6.37109 4.86426C6.15951 5.18164 6.05371 5.53971 6.05371 5.93848C6.05371 6.23958 6.12695 6.51221 6.27344 6.75635C6.42806 7.00049 6.65592 7.22835 6.95703 7.43994C7.25814 7.65153 7.62842 7.85091 8.06787 8.03809C8.50732 8.22526 9.01595 8.40837 9.59375 8.5874C10.5622 8.88037 11.4126 9.20996 12.145 9.57617C12.8856 9.94238 13.5041 10.3534 14.0005 10.8091C14.4969 11.2648 14.8713 11.7816 15.1235 12.3594C15.3758 12.9372 15.502 13.5923 15.502 14.3247C15.502 15.0978 15.3514 15.7896 15.0503 16.3999C14.7492 17.0103 14.3138 17.527 13.7441 17.9502C13.1745 18.3734 12.495 18.6948 11.7056 18.9146C10.9162 19.1343 10.0332 19.2441 9.05664 19.2441C8.17773 19.2441 7.31104 19.1302 6.45654 18.9023C5.60205 18.6663 4.82487 18.3123 4.125 17.8403C3.43327 17.3683 2.87988 16.7661 2.46484 16.0337C2.0498 15.3013 1.84229 14.4346 1.84229 13.4336H5.5166C5.5166 13.987 5.60205 14.4549 5.77295 14.8374C5.94385 15.2199 6.18392 15.5291 6.49316 15.7651C6.81055 16.0011 7.1849 16.172 7.61621 16.2778C8.05566 16.3836 8.53581 16.4365 9.05664 16.4365C9.69141 16.4365 10.2122 16.347 10.6191 16.168C11.0342 15.9889 11.3394 15.7407 11.5347 15.4233C11.7381 15.106 11.8398 14.7479 11.8398 14.3491ZM24.9014 16.0215V10.1377C24.9014 9.71452 24.8322 9.35238 24.6938 9.05127C24.5555 8.74202 24.3398 8.50195 24.0469 8.33105C23.762 8.16016 23.3918 8.07471 22.936 8.07471C22.5454 8.07471 22.2077 8.14388 21.9229 8.28223C21.638 8.41243 21.4183 8.60368 21.2637 8.85596C21.109 9.1001 21.0317 9.389 21.0317 9.72266H17.5161C17.5161 9.16113 17.6463 8.62809 17.9067 8.12354C18.1672 7.61898 18.5456 7.17546 19.042 6.79297C19.5384 6.40234 20.1284 6.09717 20.812 5.87744C21.5037 5.65771 22.2769 5.54785 23.1313 5.54785C24.1567 5.54785 25.0682 5.71875 25.8657 6.06055C26.6632 6.40234 27.2899 6.91504 27.7456 7.59863C28.2095 8.28223 28.4414 9.13672 28.4414 10.1621V15.814C28.4414 16.5382 28.4862 17.1323 28.5757 17.5962C28.6652 18.0519 28.7954 18.4507 28.9663 18.7925V19H25.4141C25.2432 18.6419 25.113 18.1943 25.0234 17.6572C24.9421 17.112 24.9014 16.5667 24.9014 16.0215ZM25.3652 10.9556L25.3896 12.9453H23.4243C22.9604 12.9453 22.5576 12.9982 22.2158 13.104C21.874 13.2098 21.5933 13.3604 21.3735 13.5557C21.1538 13.7428 20.991 13.9626 20.8853 14.2148C20.7876 14.4671 20.7388 14.7438 20.7388 15.0449C20.7388 15.346 20.8079 15.6187 20.9463 15.8628C21.0846 16.0988 21.284 16.286 21.5444 16.4243C21.8049 16.5545 22.11 16.6196 22.46 16.6196C22.9889 16.6196 23.4487 16.5138 23.8394 16.3022C24.23 16.0907 24.5311 15.8302 24.7427 15.521C24.9624 15.2118 25.0763 14.9188 25.0845 14.6421L26.0122 16.1313C25.882 16.465 25.703 16.8109 25.4751 17.1689C25.2554 17.527 24.9746 17.8647 24.6328 18.1821C24.291 18.4914 23.88 18.7477 23.3999 18.9512C22.9198 19.1465 22.3501 19.2441 21.6909 19.2441C20.8527 19.2441 20.0918 19.0773 19.4082 18.7437C18.7327 18.4019 18.1956 17.9339 17.7969 17.3398C17.4062 16.7376 17.2109 16.054 17.2109 15.2891C17.2109 14.5973 17.3411 13.9829 17.6016 13.4458C17.862 12.9087 18.2445 12.457 18.749 12.0908C19.2617 11.7165 19.9006 11.4357 20.6655 11.2485C21.4305 11.0532 22.3175 10.9556 23.3267 10.9556H25.3652ZM35.4482 16.4365L38.3779 5.79199H42.0522L37.5967 19H35.375L35.4482 16.4365ZM33.4341 5.79199L36.376 16.4487L36.437 19H34.2031L29.7476 5.79199H33.4341ZM55.7729 16.1436V19H46.3125V16.1436H55.7729ZM47.5088 1.22656V19H43.8467V1.22656H47.5088ZM54.54 8.46533V11.2485H46.3125V8.46533H54.54ZM55.7607 1.22656V4.09521H46.3125V1.22656H55.7607ZM64.8184 16.0215V10.1377C64.8184 9.71452 64.7492 9.35238 64.6108 9.05127C64.4725 8.74202 64.2568 8.50195 63.9639 8.33105C63.679 8.16016 63.3088 8.07471 62.853 8.07471C62.4624 8.07471 62.1247 8.14388 61.8398 8.28223C61.555 8.41243 61.3353 8.60368 61.1807 8.85596C61.026 9.1001 60.9487 9.389 60.9487 9.72266H57.4331C57.4331 9.16113 57.5633 8.62809 57.8237 8.12354C58.0841 7.61898 58.4626 7.17546 58.959 6.79297C59.4554 6.40234 60.0454 6.09717 60.729 5.87744C61.4207 5.65771 62.1938 5.54785 63.0483 5.54785C64.0737 5.54785 64.9852 5.71875 65.7827 6.06055C66.5802 6.40234 67.2069 6.91504 67.6626 7.59863C68.1265 8.28223 68.3584 9.13672 68.3584 10.1621V15.814C68.3584 16.5382 68.4032 17.1323 68.4927 17.5962C68.5822 18.0519 68.7124 18.4507 68.8833 18.7925V19H65.3311C65.1602 18.6419 65.0299 18.1943 64.9404 17.6572C64.859 17.112 64.8184 16.5667 64.8184 16.0215ZM65.2822 10.9556L65.3066 12.9453H63.3413C62.8774 12.9453 62.4746 12.9982 62.1328 13.104C61.791 13.2098 61.5103 13.3604 61.2905 13.5557C61.0708 13.7428 60.908 13.9626 60.8022 14.2148C60.7046 14.4671 60.6558 14.7438 60.6558 15.0449C60.6558 15.346 60.7249 15.6187 60.8633 15.8628C61.0016 16.0988 61.201 16.286 61.4614 16.4243C61.7218 16.5545 62.027 16.6196 62.377 16.6196C62.9059 16.6196 63.3657 16.5138 63.7563 16.3022C64.147 16.0907 64.4481 15.8302 64.6597 15.521C64.8794 15.2118 64.9933 14.9188 65.0015 14.6421L65.9292 16.1313C65.799 16.465 65.62 16.8109 65.3921 17.1689C65.1724 17.527 64.8916 17.8647 64.5498 18.1821C64.208 18.4914 63.797 18.7477 63.3169 18.9512C62.8368 19.1465 62.2671 19.2441 61.6079 19.2441C60.7697 19.2441 60.0088 19.0773 59.3252 18.7437C58.6497 18.4019 58.1126 17.9339 57.7139 17.3398C57.3232 16.7376 57.1279 16.054 57.1279 15.2891C57.1279 14.5973 57.2581 13.9829 57.5186 13.4458C57.779 12.9087 58.1615 12.457 58.666 12.0908C59.1787 11.7165 59.8175 11.4357 60.5825 11.2485C61.3475 11.0532 62.2345 10.9556 63.2437 10.9556H65.2822ZM77.5381 5.79199V8.28223H69.8477V5.79199H77.5381ZM71.752 2.53271H75.2676V15.0205C75.2676 15.403 75.3164 15.696 75.4141 15.8994C75.5199 16.1029 75.6745 16.2453 75.8779 16.3267C76.0814 16.3999 76.3377 16.4365 76.647 16.4365C76.8667 16.4365 77.062 16.4284 77.2329 16.4121C77.4119 16.3877 77.5625 16.3633 77.6846 16.3389L77.6968 18.9268C77.3957 19.0244 77.0701 19.1017 76.7202 19.1587C76.3703 19.2157 75.9837 19.2441 75.5605 19.2441C74.7874 19.2441 74.112 19.118 73.5342 18.8657C72.9645 18.6053 72.5251 18.1903 72.2158 17.6206C71.9066 17.0509 71.752 16.3022 71.752 15.3745V2.53271Z'
        fill='#4DAAAA'
      />
      <Path
        d='M1 23.1555C26.7561 22.1866 48.3984 25.9815 56 28'
        stroke='#6CD6D6'
        stroke-width='2'
      />
    </Svg>
  );
};

export default Title;

const styles = StyleSheet.create({});
