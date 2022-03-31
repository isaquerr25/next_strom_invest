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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
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

export type DocumentAll = {
  __typename?: 'DocumentAll';
  createdAt: Scalars['DateTime'];
  fileName: Scalars['String'];
  id: Scalars['Int'];
  state: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
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
  userId?: InputMaybe<Scalars['Int']>;
  value: Scalars['Int'];
  wallet?: InputMaybe<Scalars['String']>;
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
  addDocumentPicture?: Maybe<Scalars['Boolean']>;
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


export type MutationAddDocumentPictureArgs = {
  picture: Scalars['Upload'];
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
  allDocuments: Array<DocumentAll>;
  allMonthlyProfit?: Maybe<Array<MonthlyProfitAll>>;
  allTransactions?: Maybe<Array<TransactionAll>>;
  allTransactionsByUser?: Maybe<Array<TransactionAll>>;
  allUsers?: Maybe<Array<UserAll>>;
  userInfoDocument?: Maybe<UserHaveComponents>;
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
  value: Scalars['BigInt'];
  wallet?: Maybe<Scalars['String']>;
};

export type UserAll = {
  __typename?: 'UserAll';
  email: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  wallet?: Maybe<Scalars['String']>;
};

export type UserHaveComponents = {
  __typename?: 'UserHaveComponents';
  document?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  valuePrice?: Maybe<Scalars['BigInt']>;
  wallet?: Maybe<Scalars['String']>;
};

export type WalletAlter = {
  wallet: Scalars['String'];
};

export type AddDocumentPictureMutationVariables = Exact<{
  picture: Scalars['Upload'];
}>;


export type AddDocumentPictureMutation = { __typename?: 'Mutation', addDocumentPicture?: boolean | null };

export type CreateTransactionMutationVariables = Exact<{
  action: Scalars['String'];
  value: Scalars['Int'];
}>;


export type CreateTransactionMutation = { __typename?: 'Mutation', createTransaction: Array<{ __typename?: 'GraphState', field?: string | null, message?: string | null }> };

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

export type AllTransactionsByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTransactionsByUserQuery = { __typename?: 'Query', allTransactionsByUser?: Array<{ __typename?: 'TransactionAll', id: number, action: string, value: any, state: string, hash?: string | null, createdAt?: any | null, updatedAt?: any | null, wallet?: string | null }> | null };

export type UserInfoDocumentQueryVariables = Exact<{ [key: string]: never; }>;


export type UserInfoDocumentQuery = { __typename?: 'Query', userInfoDocument?: { __typename?: 'UserHaveComponents', email: string, name?: string | null, wallet?: string | null, valuePrice?: any | null, document?: string | null } | null };


export const AddDocumentPictureDocument = gql`
    mutation AddDocumentPicture($picture: Upload!) {
  addDocumentPicture(picture: $picture)
}
    `;
export type AddDocumentPictureMutationFn = Apollo.MutationFunction<AddDocumentPictureMutation, AddDocumentPictureMutationVariables>;

/**
 * __useAddDocumentPictureMutation__
 *
 * To run a mutation, you first call `useAddDocumentPictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDocumentPictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDocumentPictureMutation, { data, loading, error }] = useAddDocumentPictureMutation({
 *   variables: {
 *      picture: // value for 'picture'
 *   },
 * });
 */
export function useAddDocumentPictureMutation(baseOptions?: Apollo.MutationHookOptions<AddDocumentPictureMutation, AddDocumentPictureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDocumentPictureMutation, AddDocumentPictureMutationVariables>(AddDocumentPictureDocument, options);
      }
export type AddDocumentPictureMutationHookResult = ReturnType<typeof useAddDocumentPictureMutation>;
export type AddDocumentPictureMutationResult = Apollo.MutationResult<AddDocumentPictureMutation>;
export type AddDocumentPictureMutationOptions = Apollo.BaseMutationOptions<AddDocumentPictureMutation, AddDocumentPictureMutationVariables>;
export const CreateTransactionDocument = gql`
    mutation CreateTransaction($action: String!, $value: Int!) {
  createTransaction(data: {action: $action, value: $value, userId: 0}) {
    field
    message
  }
}
    `;
export type CreateTransactionMutationFn = Apollo.MutationFunction<CreateTransactionMutation, CreateTransactionMutationVariables>;

/**
 * __useCreateTransactionMutation__
 *
 * To run a mutation, you first call `useCreateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionMutation, { data, loading, error }] = useCreateTransactionMutation({
 *   variables: {
 *      action: // value for 'action'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useCreateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateTransactionMutation, CreateTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTransactionMutation, CreateTransactionMutationVariables>(CreateTransactionDocument, options);
      }
export type CreateTransactionMutationHookResult = ReturnType<typeof useCreateTransactionMutation>;
export type CreateTransactionMutationResult = Apollo.MutationResult<CreateTransactionMutation>;
export type CreateTransactionMutationOptions = Apollo.BaseMutationOptions<CreateTransactionMutation, CreateTransactionMutationVariables>;
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
export const AllTransactionsByUserDocument = gql`
    query AllTransactionsByUser {
  allTransactionsByUser {
    id
    action
    value
    state
    hash
    createdAt
    updatedAt
    wallet
  }
}
    `;

/**
 * __useAllTransactionsByUserQuery__
 *
 * To run a query within a React component, call `useAllTransactionsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTransactionsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTransactionsByUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTransactionsByUserQuery(baseOptions?: Apollo.QueryHookOptions<AllTransactionsByUserQuery, AllTransactionsByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTransactionsByUserQuery, AllTransactionsByUserQueryVariables>(AllTransactionsByUserDocument, options);
      }
export function useAllTransactionsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTransactionsByUserQuery, AllTransactionsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTransactionsByUserQuery, AllTransactionsByUserQueryVariables>(AllTransactionsByUserDocument, options);
        }
export type AllTransactionsByUserQueryHookResult = ReturnType<typeof useAllTransactionsByUserQuery>;
export type AllTransactionsByUserLazyQueryHookResult = ReturnType<typeof useAllTransactionsByUserLazyQuery>;
export type AllTransactionsByUserQueryResult = Apollo.QueryResult<AllTransactionsByUserQuery, AllTransactionsByUserQueryVariables>;
export const UserInfoDocumentDocument = gql`
    query UserInfoDocument {
  userInfoDocument {
    email
    name
    wallet
    valuePrice
    document
  }
}
    `;

/**
 * __useUserInfoDocumentQuery__
 *
 * To run a query within a React component, call `useUserInfoDocumentQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInfoDocumentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInfoDocumentQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserInfoDocumentQuery(baseOptions?: Apollo.QueryHookOptions<UserInfoDocumentQuery, UserInfoDocumentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserInfoDocumentQuery, UserInfoDocumentQueryVariables>(UserInfoDocumentDocument, options);
      }
export function useUserInfoDocumentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserInfoDocumentQuery, UserInfoDocumentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserInfoDocumentQuery, UserInfoDocumentQueryVariables>(UserInfoDocumentDocument, options);
        }
export type UserInfoDocumentQueryHookResult = ReturnType<typeof useUserInfoDocumentQuery>;
export type UserInfoDocumentLazyQueryHookResult = ReturnType<typeof useUserInfoDocumentLazyQuery>;
export type UserInfoDocumentQueryResult = Apollo.QueryResult<UserInfoDocumentQuery, UserInfoDocumentQueryVariables>;