import { hashtag_trend } from "../../../db/db";

export default {
    Query: {
        rate: () => hashtag_trend
    }
}