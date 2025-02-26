/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Schema representing the creation of feedback information.
 */
export interface ProvideFeedbackSchema {
    /**
     * Details aspects of the service or product that could benefit from enhancements or modifications. Aids in pinpointing areas needing attention for improvement.
     * @nullable
     */
    areasForImprovement?: string | null;
    /** The category of the feedback. */
    category: string;
    /**
     * A score indicating the difficulty experienced by the user.
     * @nullable
     */
    difficultyScore?: number | null;
    /**
     * This field is for users to mention what they liked.
     * @nullable
     */
    positive?: string | null;
    /**
     * The type of user providing the feedback.
     * @nullable
     */
    userType?: string | null;
}
