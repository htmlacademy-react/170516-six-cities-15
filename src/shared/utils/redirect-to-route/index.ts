import {createAction} from '@reduxjs/toolkit';
import {Path} from '@/shared/config';

export const redirectToRoute = createAction<Path>('utils/redirectToRoute');
