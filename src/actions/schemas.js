import { schema } from 'normalizr';

export const userSchema = new schema.Entity('users');
export const userListSchema = [userSchema];

export const trackSchema = new schema.Entity('tracks');
export const trackListSchema = [trackSchema];
