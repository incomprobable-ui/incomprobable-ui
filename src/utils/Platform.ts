import { Platform } from '../types';

export const getPlatform = (): Platform =>
  (process.env.PLATFORM || process.env.STORYBOOK_PLATFORM || 'web') as Platform;
