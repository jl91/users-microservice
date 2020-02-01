import {QueryOptions} from "@nestjsx/crud/lib/interfaces/query-options.interface";

export const DEFAULT_QUERY_CONFIGURATIONS: QueryOptions = {
    limit: 10,
    maxLimit: 100,
};
