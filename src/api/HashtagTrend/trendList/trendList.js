import { hashtag_trend } from "../../../db/db";

export default {
    Query: {
        trendList: () => hashtag_trend
    }
}