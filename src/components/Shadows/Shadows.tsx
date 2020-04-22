import { Shadow, NativeShadow } from '../../types';
import Colors from '../Colors/Colors';

const Shadows: Shadow = {
  s1: '1px 2px 6px rgba(0, 0, 0, 0.2)',
  s2: '1px 4px 17px rgba(0, 0, 0, 0.2)',
  s3: '1px 10px 35px rgba(0, 0, 0, 0.2)',
};

export const NativeShadows: NativeShadow = {
  s1: {
    elevation: 6,
    shadowColor: Colors.Neutral.c1000,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  s2: {
    elevation: 12,
    shadowColor: Colors.Neutral.c1000,
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  s3: {
    elevation: 24,
    shadowColor: Colors.Neutral.c1000,
    shadowOffset: {
      height: 12,
      width: 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,
  },
};

export default Shadows;
