// Dependencies
import styled from '../../Theme';
import { ITextProps, Platform } from '../../types';
import { Fonts } from '../Fonts/Fonts';
import { H1, H2, H3, H4, H5, H6, Paragraph, Span } from '../Primitives/Primitives';
import { getPlatform } from '../../utils/Platform';

const platform = getPlatform();

export const StyledH1: React.FC<ITextProps> = styled(H1)<React.FC<ITextProps>>`
  ${Fonts}
  font-family: ${platform === Platform.Web ? 'Roboto' : 'Roboto-Bold'};
  font-weight: 600;
  margin: 0;
`;

export const StyledH2: React.FC<ITextProps> = styled(H2)<React.FC<ITextProps>>`
  ${Fonts}
  font-family: ${platform === Platform.Web ? 'Roboto' : 'Roboto-Bold'};
  font-weight: 600;
  margin: 0;
`;

export const StyledH3: React.FC<ITextProps> = styled(H3)<React.FC<ITextProps>>`
  ${Fonts}
  font-family: ${platform === Platform.Web ? 'Roboto' : 'Roboto-Bold'};
  font-weight: 600;
  margin: 0;
`;

export const StyledH4: React.FC<ITextProps> = styled(H4)<React.FC<ITextProps>>`
  ${Fonts}
  font-family: ${platform === Platform.Web ? 'Roboto' : 'Roboto-Bold'};
  font-weight: 600;
  margin: 0;
`;

export const StyledH5: React.FC<ITextProps> = styled(H5)<React.FC<ITextProps>>`
  ${Fonts}
  font-family: ${platform === Platform.Web ? 'Roboto' : 'Roboto-Bold'};
  font-weight: 600;
  margin: 0;
`;

export const StyledH6: React.FC<ITextProps> = styled(H6)<React.FC<ITextProps>>`
  ${Fonts}
  font-family: ${platform === Platform.Web ? 'Roboto' : 'Roboto-Bold'};
  font-weight: 600;
  margin: 0;
`;

export const StyledParagraph: React.FC<ITextProps> = styled(Paragraph)<React.FC<ITextProps>>`
  ${Fonts}
  font-family: ${platform === Platform.Web ? 'Roboto' : 'Roboto-Regular'};
  font-weight: 400;
  margin: 0;
`;

export const StyledSpan: React.FC<ITextProps> = styled(Span)<React.FC<ITextProps>>`
  ${Fonts}
  font-family: ${platform === Platform.Web ? 'Roboto' : 'Roboto-Regular'};
  font-weight: 400;
  margin: 0;
`;
