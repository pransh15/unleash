/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * The current state of the change request.
 */
export type ChangeRequestSchemaState =
    typeof ChangeRequestSchemaState[keyof typeof ChangeRequestSchemaState];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ChangeRequestSchemaState = {
    Draft: 'Draft',
    In_review: 'In review',
    Approved: 'Approved',
    Applied: 'Applied',
    Cancelled: 'Cancelled',
} as const;
