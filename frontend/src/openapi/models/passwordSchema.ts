/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Fields used to create new password or update old password
 */
export interface PasswordSchema {
    /** The confirmation of the new password. This field is for the non-admin users changing their own password. */
    confirmPassword?: string;
    /** The old password the user is changing. This field is for the non-admin users changing their own password. */
    oldPassword?: string;
    /** The new password to change or validate. */
    password: string;
}
