import { hashtagInfo } from "../../../db/db";

export default {
    Query: {
        selectHashTag: (_, { hashTag }) => hashtagInfo(hashTag)
    }
}