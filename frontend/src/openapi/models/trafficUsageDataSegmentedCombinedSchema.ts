/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { TrafficUsageDataSegmentedCombinedSchemaApiDataItem } from './trafficUsageDataSegmentedCombinedSchemaApiDataItem';
import type { TrafficUsageDataSegmentedCombinedSchemaDateRange } from './trafficUsageDataSegmentedCombinedSchemaDateRange';
import type { TrafficUsageDataSegmentedCombinedSchemaGrouping } from './trafficUsageDataSegmentedCombinedSchemaGrouping';

/**
 * Contains the recorded data usage for each API path, segmented by day/month and type of traffic
 */
export interface TrafficUsageDataSegmentedCombinedSchema {
    /** Contains the recorded daily/monthly data usage for each API path */
    apiData: TrafficUsageDataSegmentedCombinedSchemaApiDataItem[];
    /** The date range there is data for. The range is inclusive and goes from the start of the `from` date to the end of the `to` date */
    dateRange: TrafficUsageDataSegmentedCombinedSchemaDateRange;
    /** Whether the data is aggregated by month or by day. */
    grouping: TrafficUsageDataSegmentedCombinedSchemaGrouping;
}
