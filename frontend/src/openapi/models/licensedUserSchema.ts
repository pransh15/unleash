/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * A schema representing a single licensed user data point.
 */
export interface LicensedUserSchema {
    /**
     * The count of licensed users on the given date.
     * @minimum 0
     */
    count: number;
    /** The date associated with the licensed users count. */
    date: string;
}
