import React from 'react';
import {HeightSize} from '~/theme/size';
import {Pressable, View} from 'react-native';

import IconCloseBrown from '~/assets/icons/ic_close_brown.svg';
import IconSearchBrown from '~/assets/icons/ic_search_brown.svg';
import IconCheckedWhite from '~/assets/icons/ic_checked_white.svg';
import IconBagBlack from '~/assets/icons/ic_bag_black.svg';
import IconHeartGray from '~/assets/icons/ic_heart_gray.svg';
import IconHeartRed from '~/assets/icons/ic_heart_red.svg';

interface IconSvgProps {
  icon:
    | 'IconCloseBrown'
    | 'IconSearchBrown'
    | 'IconCheckedWhite'
    | 'IconBagBlack'
    | 'IconHeartGray'
    | 'IconHeartRed';
  width?: number;
  height?: number;
  onPress?: () => void;
}

const svgComponents: Record<string, React.ComponentType> = {
  IconCloseBrown,
  IconSearchBrown,
  IconCheckedWhite,
  IconBagBlack,
  IconHeartGray,
  IconHeartRed,
};

interface Svg {
  icon: string;
  width: number;
  height: number;
}

const SvgComponent: React.FC<Svg> = ({icon, width, height}) => {
  const Component: any = svgComponents[icon] || svgComponents.arrownUp;
  return <Component width={width} height={height} />;
};

export const IconSvg: React.FC<IconSvgProps> = ({
  icon,
  width = HeightSize(24),
  height = HeightSize(24),
  onPress,
}) => {
  const iconComponent = (
    <SvgComponent width={width} height={height} icon={icon} />
  );

  return onPress ? (
    <Pressable onPress={onPress}>{iconComponent}</Pressable>
  ) : (
    <View style={{width, height}}>{iconComponent}</View>
  );
};