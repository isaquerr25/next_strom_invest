import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. BigInt can represent values between -(2^53) + 1 and 2^53 - 1.  */
  BigInt: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type CreateUser = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type CycleAll = {
  __typename?: 'CycleAll';
  action: Scalars['String'];
  beginDate: Scalars['DateTime'];
  createdAt?: Maybe<Scalars['DateTime']>;
  finalValueBTC?: Maybe<Scalars['BigInt']>;
  finalValueUSD?: Maybe<Scalars['Int']>;
  finishDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  state: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
  valueBTC: Scalars['BigInt'];
  valueUSD: Scalars['Int'];
};

export type GraphState = {
  __typename?: 'GraphState';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type InputDeleteCycle = {
  id: Scalars['Int'];
};

export type InputDeleteTransaction = {
  id: Scalars['Int'];
};

export type InputMonthlyProfit = {
  finishDate: Scalars['DateTime'];
  profit: Scalars['Int'];
};

export type InputNewCycle = {
  action: Scalars['String'];
  beginDate: Scalars['DateTime'];
  finishDate: Scalars['DateTime'];
  state: Scalars['String'];
  userId?: InputMaybe<Scalars['Int']>;
  valueBTCbig: Scalars['String'];
  valueUSD: Scalars['Int'];
};

export type InputNewTransaction = {
  action: Scalars['String'];
  hash?: InputMaybe<Scalars['String']>;
  state: Scalars['String'];
  userId?: InputMaybe<Scalars['Int']>;
  value: Scalars['Int'];
  wallet: Scalars['String'];
};

export type InputUpdateCycle = {
  action?: InputMaybe<Scalars['String']>;
  beginDate?: InputMaybe<Scalars['DateTime']>;
  finalValueBTCbig?: InputMaybe<Scalars['String']>;
  finalValueUSD?: InputMaybe<Scalars['Int']>;
  finishDate?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  state?: InputMaybe<Scalars['String']>;
  valueBTC?: InputMaybe<Scalars['Int']>;
  valueUSD?: InputMaybe<Scalars['Int']>;
};

export type InputUpdateMonthlyProfit = {
  finishDate?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  profit?: InputMaybe<Scalars['Int']>;
};

export type InputUpdateTransaction = {
  action?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  state?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Int']>;
  wallet?: InputMaybe<Scalars['String']>;
};

export type LoginUser = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MonthlyProfitAll = {
  __typename?: 'MonthlyProfitAll';
  createdAt?: Maybe<Scalars['DateTime']>;
  finishDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  profit?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCycle: Array<GraphState>;
  createMonthlyProfit: Array<GraphState>;
  createTransaction: Array<GraphState>;
  createUserResolver: Array<GraphState>;
  deleteCycle: Array<GraphState>;
  deleteMonthlyProfit: Array<GraphState>;
  deleteTransaction: Array<GraphState>;
  loginAuthUser: Array<GraphState>;
  updateAuthPassword?: Maybe<GraphState>;
  updateCycle: Array<GraphState>;
  updateMonthlyProfit: Array<GraphState>;
  updateTransaction: Array<GraphState>;
  updateWallet?: Maybe<GraphState>;
};


export type MutationCreateCycleArgs = {
  data: InputNewCycle;
};


export type MutationCreateMonthlyProfitArgs = {
  data: InputMonthlyProfit;
};


export type MutationCreateTransactionArgs = {
  data: InputNewTransaction;
};


export type MutationCreateUserResolverArgs = {
  data: CreateUser;
};


export type MutationDeleteCycleArgs = {
  data: InputDeleteCycle;
};


export type MutationDeleteMonthlyProfitArgs = {
  data: InputDeleteCycle;
};


export type MutationDeleteTransactionArgs = {
  data: InputDeleteTransaction;
};


export type MutationLoginAuthUserArgs = {
  data: LoginUser;
};


export type MutationUpdateAuthPasswordArgs = {
  data: PasswordAlter;
};


export type MutationUpdateCycleArgs = {
  data: InputUpdateCycle;
};


export type MutationUpdateMonthlyProfitArgs = {
  data: InputUpdateMonthlyProfit;
};


export type MutationUpdateTransactionArgs = {
  data: InputUpdateTransaction;
};


export type MutationUpdateWalletArgs = {
  data: WalletAlter;
};

export type PasswordAlter = {
  oldPassword: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allCycle?: Maybe<Array<CycleAll>>;
  allCycleByUser?: Maybe<Array<CycleAll>>;
  allMonthlyProfit?: Maybe<Array<MonthlyProfitAll>>;
  allTransactions?: Maybe<Array<TransactionAll>>;
  allTransactionsByUser?: Maybe<Array<TransactionAll>>;
  allUsers?: Maybe<Array<UserAll>>;
  changePasswordUser?: Maybe<UserAll>;
};

export type TransactionAll = {
  __typename?: 'TransactionAll';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  hash?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  state: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  value: Scalars['Int'];
  wallet?: Maybe<Scalars['String']>;
};

export type UserAll = {
  __typename?: 'UserAll';
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  wallet?: Maybe<Scalars['String']>;
};

export type WalletAlter = {
  wallet: Scalars['String'];
};

export type CreateUserResolverMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
}>;


export type CreateUserResolverMutation = { __typename?: 'Mutation', createUserResolver: Array<{ __typename?: 'GraphState', field?: string | null, message?: string | null }> };

export type LoginAuthUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginAuthUserMutation = { __typename?: 'Mutation', loginAuthUser: Array<{ __typename?: 'GraphState', field?: string | null, message?: string | null }> };

export type UpdateAuthPasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  password: Scalars['String'];
}>;


export type UpdateAuthPasswordMutation = { __typename?: 'Mutation', updateAuthPassword?: { __typename?: 'GraphState', field?: string | null, message?: string | null } | null };

export type UpdateWalletMutationVariables = Exact<{
  wallet: Scalars['String'];
}>;


export type UpdateWalletMutation = { __typename?: 'Mutation', updateWallet?: { __typename?: 'GraphState', field?: string | null, message?: string | null } | null };


export const CreateUserResolverDocument = gql`
    mutation CreateUserResolver($email: String!, $password: String!, $name: String!) {
  createUserResolver(data: {email: $email, password: $password, name: $name}) {
    field
    message
  }
}
    `;
export type CreateUserResolverMutationFn = Apollo.MutationFunction<CreateUserResolverMutation, CreateUserResolverMutationVariables>;

/**
 * __useCreateUserResolverMutation__
 *
 * To run a mutation, you first call `useCreateUserResolverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserResolverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserResolverMutation, { data, loading, error }] = useCreateUserResolverMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateUserResolverMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserResolverMutation, CreateUserResolverMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserResolverMutation, CreateUserResolverMutationVariables>(CreateUserResolverDocument, options);
      }
export type CreateUserResolverMutationHookResult = ReturnType<typeof useCreateUserResolverMutation>;
export type CreateUserResolverMutationResult = Apollo.MutationResult<CreateUserResolverMutation>;
export type CreateUserResolverMutationOptions = Apollo.BaseMutationOptions<CreateUserResolverMutation, CreateUserResolverMutationVariables>;
export const LoginAuthUserDocument = gql`
    mutation LoginAuthUser($email: String!, $password: String!) {
  loginAuthUser(data: {email: $email, password: $password}) {
    field
    message
  }
}
    `;
export type LoginAuthUserMutationFn = Apollo.MutationFunction<LoginAuthUserMutation, LoginAuthUserMutationVariables>;

/**
 * __useLoginAuthUserMutation__
 *
 * To run a mutation, you first call `useLoginAuthUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginAuthUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginAuthUserMutation, { data, loading, error }] = useLoginAuthUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginAuthUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginAuthUserMutation, LoginAuthUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginAuthUserMutation, LoginAuthUserMutationVariables>(LoginAuthUserDocument, options);
      }
export type LoginAuthUserMutationHookResult = ReturnType<typeof useLoginAuthUserMutation>;
export type LoginAuthUserMutationResult = Apollo.MutationResult<LoginAuthUserMutation>;
export type LoginAuthUserMutationOptions = Apollo.BaseMutationOptions<LoginAuthUserMutation, LoginAuthUserMutationVariables>;
export const UpdateAuthPasswordDocument = gql`
    mutation UpdateAuthPassword($oldPassword: String!, $password: String!) {
  updateAuthPassword(data: {oldPassword: $oldPassword, password: $password}) {
    field
    message
  }
}
    `;
export type UpdateAuthPasswordMutationFn = Apollo.MutationFunction<UpdateAuthPasswordMutation, UpdateAuthPasswordMutationVariables>;

/**
 * __useUpdateAuthPasswordMutation__
 *
 * To run a mutation, you first call `useUpdateAuthPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAuthPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAuthPasswordMutation, { data, loading, error }] = useUpdateAuthPasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUpdateAuthPasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAuthPasswordMutation, UpdateAuthPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAuthPasswordMutation, UpdateAuthPasswordMutationVariables>(UpdateAuthPasswordDocument, options);
      }
export type UpdateAuthPasswordMutationHookResult = ReturnType<typeof useUpdateAuthPasswordMutation>;
export type UpdateAuthPasswordMutationResult = Apollo.MutationResult<UpdateAuthPasswordMutation>;
export type UpdateAuthPasswordMutationOptions = Apollo.BaseMutationOptions<UpdateAuthPasswordMutation, UpdateAuthPasswordMutationVariables>;
export const UpdateWalletDocument = gql`
    mutation UpdateWallet($wallet: String!) {
  updateWallet(data: {wallet: $wallet}) {
    field
    message
  }
}
    `;
export type UpdateWalletMutationFn = Apollo.MutationFunction<UpdateWalletMutation, UpdateWalletMutationVariables>;

/**
 * __useUpdateWalletMutation__
 *
 * To run a mutation, you first call `useUpdateWalletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWalletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWalletMutation, { data, loading, error }] = useUpdateWalletMutation({
 *   variables: {
 *      wallet: // value for 'wallet'
 *   },
 * });
 */
export function useUpdateWalletMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWalletMutation, UpdateWalletMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWalletMutation, UpdateWalletMutationVariables>(UpdateWalletDocument, options);
      }
export type UpdateWalletMutationHookResult = ReturnType<typeof useUpdateWalletMutation>;
export type UpdateWalletMutationResult = Apollo.MutationResult<UpdateWalletMutation>;
export type UpdateWalletMutationOptions = Apollo.BaseMutationOptions<UpdateWalletMutation, UpdateWalletMutationVariables>;