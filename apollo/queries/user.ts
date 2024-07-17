import { gql } from "@apollo/client";
import { DATE_TIME_SCHEMA, STYLIST_SCHEMA } from "../fragments";

export const GET_USER_BY_ID = gql`
  ${DATE_TIME_SCHEMA}
  ${STYLIST_SCHEMA}
  query GetUser($userId: ID!) {
    user(id: $userId) {
      _id
      ccDueDate {
        ...DateTime
      }
      cityName
      cityId
      countryCode
      countryName
      createdAt
      customerSegment
      customerSrNo
      customerType
      dateOfBirth {
        ...DateTime
      }
      email
      firstName
      fullName
      gender
      images {
        profile
      }
      isEmailVerified
      isMobileVerified
      lastName
      lastUpdatedAt {
        ...DateTime
      }
      phone
      stylist {
        ...StylistSchema
      }
      aboutMe
    }
  }
`;
