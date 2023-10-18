import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ROUTES } from "./routers";
import {
  IGenericResponse,
  UserLoginPayload,
  UserRegistrationPayload,
} from "../interfaces";
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

export const updateSession = (session: Session, token: JWT) => {
  if (token) {
    session.user.id = token?.id as string;
    session.user.name = token?.name as string;
    session.user.firstName = token?.firstName as string;
    session.user.lastName = token?.lastName as string;
    session.user.mobileNumber = token?.mobileNumber as string;
    session.user.email = token?.email as string;
    session.user.gender = token?.gender as string;
    session.user.isEmailVerified = token?.id as boolean;
  }
  return session;
};

export const updateToken = (token: JWT, user: User) => {
  if (token) {
    token.id = user.id;
    token.name = user?.firstName + " " + user?.lastName;
    token.email = user?.email;
    token.mobileNumber = user?.mobileNumber;
    token.firstName = user?.firstName;
    token.lastName = user?.lastName;
  }
  return token;
};

export const userLogin = async (payload: UserLoginPayload) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${API_ROUTES.LOGIN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    }
  );
  const data = await response.json();
  return data;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation<IGenericResponse, UserRegistrationPayload>({
      query: (body) => {
        return {
          url: API_ROUTES.REGISTER,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useSignUpUserMutation } = authApi;
