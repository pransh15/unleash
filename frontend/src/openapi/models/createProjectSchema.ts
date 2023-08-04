/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { CreateProjectSchemaMode } from './createProjectSchemaMode';

/**
 * Data used to create a new [project](https://docs.getunleash.io/reference/projects).
 */
export interface CreateProjectSchema {
    /** The project's identifier. */
    id: string;
    /** The project's name. */
    name: string;
    /** The project's description. */
    description?: string | null;
    /** A limit on the number of features allowed in the project. `null` if no limit. */
    featureLimit?: number | null;
    /** A mode of the project affecting what actions are possible in this project */
    mode?: CreateProjectSchemaMode;
    /** A default stickiness for the project affecting the default stickiness value for variants and Gradual Rollout strategy */
    defaultStickiness?: string;
}
