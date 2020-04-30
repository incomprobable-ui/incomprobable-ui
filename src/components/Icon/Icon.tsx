import * as React from 'react';
import { G, Path, Rect, Svg } from '../Primitives/Primitives';
import { IconProps, SVGIconProps } from '../../types';

const Add = ({ color, size }: SVGIconProps) => (
  <Svg fill={color} height={size} viewBox="0 0 24 24" width={size}>
    <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    <Path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

const Check = ({ color, size }: SVGIconProps) => (
  <Svg viewBox="0 0 24 24" fill={color} width={size} height={size}>
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </Svg>
);

const DateRange = ({ color, size }: SVGIconProps) => (
  <Svg viewBox="0 0 24 24" fill={color} width={size} height={size}>
    <Path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
    <Path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

const Delete = ({ color, size }: SVGIconProps) => (
  <Svg viewBox="0 0 24 24" fill={color} width={size} height={size}>
    <Path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    <Path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

const Linear = ({ color, size }: SVGIconProps) => (
  <Svg
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    fill={color}
    width={size}
    height={size}>
    <G>
      <Rect fill="none" height="24" width="24" />
    </G>
    <G>
      <G>
        <G>
          <Path d="M19.5,9.5c-1.03,0-1.9,0.62-2.29,1.5h-2.92C13.9,10.12,13.03,9.5,12,9.5s-1.9,0.62-2.29,1.5H6.79 C6.4,10.12,5.53,9.5,4.5,9.5C3.12,9.5,2,10.62,2,12s1.12,2.5,2.5,2.5c1.03,0,1.9-0.62,2.29-1.5h2.92c0.39,0.88,1.26,1.5,2.29,1.5 s1.9-0.62,2.29-1.5h2.92c0.39,0.88,1.26,1.5,2.29,1.5c1.38,0,2.5-1.12,2.5-2.5S20.88,9.5,19.5,9.5z" />
        </G>
      </G>
    </G>
  </Svg>
);

const Map = ({ color, size }: SVGIconProps) => (
  <Svg viewBox="0 0 24 24" fill={color} width={size} height={size}>
    <Path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
    <Path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

const Tune = ({ color, size }: SVGIconProps) => (
  <Svg viewBox="0 0 24 24" fill={color} width={size} height={size}>
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
  </Svg>
);

const People = ({ color, size }: SVGIconProps) => (
  <Svg viewBox="0 0 24 24" fill={color} width={size} height={size}>
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </Svg>
);

const Photo = ({ color, size }: SVGIconProps) => (
  <Svg viewBox="0 0 24 24" fill={color} width={size} height={size}>
    <Path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    <Path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

const Remove = ({ color, size }: SVGIconProps) => (
  <Svg fill={color} height={size} viewBox="0 0 24 24" width={size}>
    <Path d="M19 13H5v-2h14v2z" />
    <Path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

const Search = ({ color, size }: SVGIconProps) => (
  <Svg viewBox="0 0 24 24" fill={color} width={size} height={size}>
    <Path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    <Path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

enum Icons {
  Add = 'add',
  Check = 'check',
  DateRange = 'date-range',
  Delete = 'delete',
  Linear = 'linear',
  Map = 'map',
  People = 'people',
  Photo = 'photo',
  Remove = 'remove',
  Search = 'search',
  Tune = 'tune',
}

const Icon = ({ color, disabled, name, size }: IconProps) => {
  switch (name) {
    case Icons.Add:
      return <Add {...{ color, disabled, size }} />;
    case Icons.Check:
      return <Check {...{ color, disabled, size }} />;
    case Icons.Delete:
      return <Delete {...{ color, disabled, size }} />;
    case Icons.DateRange:
      return <DateRange {...{ color, disabled, size }} />;
    case Icons.Linear:
      return <Linear {...{ color, disabled, size }} />;
    case Icons.Map:
      return <Map {...{ color, disabled, size }} />;
    case Icons.People:
      return <People {...{ color, disabled, size }} />;
    case Icons.Photo:
      return <Photo {...{ color, disabled, size }} />;
    case Icons.Remove:
      return <Remove {...{ color, disabled, size }} />;
    case Icons.Search:
      return <Search {...{ color, disabled, size }} />;
    case Icons.Tune:
      return <Tune {...{ color, disabled, size }} />;
    default:
      return null;
  }
};

export default Icon;
