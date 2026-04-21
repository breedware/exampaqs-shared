export * from './theme.types.js';
export * from './firestore.table.js';
export * from './model.types.js';

export enum AccountTypes {
    STUDENT = 'student',
    PARENT = 'parent',
    STAFF = 'staff',
    PLATFORMADMIN = 'platformAdmin',
    PROPRIETOR = 'proprietor',
    GENERAL = 'general',
    SMS = 'sms'
}