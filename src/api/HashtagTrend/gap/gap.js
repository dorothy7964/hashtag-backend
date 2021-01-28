import { hashtag_trend } from "../../../db/db";

export default {
    Query: {
        gap: () => hashtag_trend
    }
}