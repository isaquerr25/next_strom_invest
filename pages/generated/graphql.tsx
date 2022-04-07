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
  finalValueBTC?: Maybe<Scalars['String']>;
  finalValueUSD?: Maybe<Scalars['Int']>;
  finishDate?: Maybe<Scalars['DateTime']>;
  hash?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  state: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
  valueBTC: Scalars['String'];
  valueUSD: Scalars['Int'];
};

export type CycleAllUser = {
  __typename?: 'CycleAllUser';
  action: Scalars['String'];
  beginDate: Scalars['DateTime'];
  createdAt?: Maybe<Scalars['DateTime']>;
  finalValueBTC?: Maybe<Scalars['String']>;
  finalValueUSD?: Maybe<Scalars['Int']>;
  finishDate?: Maybe<Scalars['DateTime']>;
  hash?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  state: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserAll;
  valueBTC: Scalars['String'];
  valueUSD: Scalars['Int'];
};

export type DepositState = {
  __typename?: 'DepositState';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
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

export type DocumentAllUser = {
  __typename?: 'DocumentAllUser';
  createdAt: Scalars['DateTime'];
  fileName: Scalars['String'];
  id: Scalars['Int'];
  state: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UserAll;
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

export type InputDocumentAlter = {
  id: Scalars['Int'];
  state: Scalars['String'];
};

export type InputMonthlyProfit = {
  finishDate: Scalars['DateTime'];
  profit: Scalars['Int'];
};

export type InputNewCycle = {
  action?: InputMaybe<Scalars['String']>;
  beginDate: Scalars['DateTime'];
  finishDate: Scalars['DateTime'];
  hash?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
  valueBTC?: InputMaybe<Scalars['String']>;
  valueUSD: Scalars['Int'];
};

export type InputNewTransaction = {
  action: Scalars['String'];
  hash?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
  value: Scalars['Int'];
  valueBTC?: InputMaybe<Scalars['String']>;
  wallet?: InputMaybe<Scalars['String']>;
};

export type InputTypeTransaction = {
  action: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
};

export type InputUpdateCycle = {
  action?: InputMaybe<Scalars['String']>;
  beginDate?: InputMaybe<Scalars['DateTime']>;
  finalValueBTC?: InputMaybe<Scalars['String']>;
  finalValueUSD?: InputMaybe<Scalars['Int']>;
  finishDate?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  state?: InputMaybe<Scalars['String']>;
  valueBTC?: InputMaybe<Scalars['String']>;
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
  alterDocument?: Maybe<Scalars['Boolean']>;
  createCycle: Array<GraphState>;
  createDeposit: RequestDeposit;
  createMonthlyProfit: Array<GraphState>;
  createTransaction: Array<GraphState>;
  createUserResolver: Array<GraphState>;
  deleteCycle: Array<GraphState>;
  deleteMonthlyProfit: Array<GraphState>;
  deleteTransaction: Array<GraphState>;
  getTypeTransaction: Array<TransactionUser>;
  loginAuthUser: Array<GraphState>;
  loginStaff: Array<GraphState>;
  logout?: Maybe<Scalars['Boolean']>;
  updateAuthPassword?: Maybe<GraphState>;
  updateCycle: Array<GraphState>;
  updateMonthlyProfit: Array<GraphState>;
  updateTransaction: Array<GraphState>;
  updateWallet?: Maybe<GraphState>;
};


export type MutationAddDocumentPictureArgs = {
  picture: Scalars['Upload'];
};


export type MutationAlterDocumentArgs = {
  data: InputDocumentAlter;
};


export type MutationCreateCycleArgs = {
  data: InputNewCycle;
};


export type MutationCreateDepositArgs = {
  data: InputNewTransaction;
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


export type MutationGetTypeTransactionArgs = {
  data: InputTypeTransaction;
};


export type MutationLoginAuthUserArgs = {
  data: LoginUser;
};


export type MutationLoginStaffArgs = {
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
  activeStartStaff?: Maybe<StaffActivity>;
  allCycle?: Maybe<Array<CycleAll>>;
  allCycleByUser?: Maybe<Array<CycleAll>>;
  allCycleUserAdminProcess?: Maybe<Array<CycleAllUser>>;
  allDocuments: Array<DocumentAll>;
  allDocumentsValidation: Array<DocumentAllUser>;
  allMonthlyProfit?: Maybe<Array<MonthlyProfitAll>>;
  allTransactions?: Maybe<Array<TransactionAll>>;
  allTransactionsByUser?: Maybe<Array<TransactionAll>>;
  allUsers?: Maybe<Array<UserAll>>;
  userAllMoney?: Maybe<UserCash>;
  userInfoDocument?: Maybe<UserHaveComponents>;
};

export type RequestDeposit = {
  __typename?: 'RequestDeposit';
  status?: Maybe<Array<DepositState>>;
  url?: Maybe<Scalars['String']>;
};

export type StaffActivity = {
  __typename?: 'StaffActivity';
  cyclesStart: Scalars['Int'];
  documentsValidate: Scalars['Int'];
  transactionPay: Scalars['Int'];
  valueEnterToday: Scalars['Int'];
  withdrawAll: Scalars['Int'];
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

export type TransactionUser = {
  __typename?: 'TransactionUser';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  hash?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  state: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserAll;
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

export type UserCash = {
  __typename?: 'UserCash';
  balance?: Maybe<Scalars['String']>;
  profitCycle?: Maybe<Scalars['String']>;
  profitFuture?: Maybe<Scalars['String']>;
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

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: boolean | null };

export type AddDocumentPictureMutationVariables = Exact<{
  picture: Scalars['Upload'];
}>;


export type AddDocumentPictureMutation = { __typename?: 'Mutation', addDocumentPicture?: boolean | null };

export type AlterDocumentMutationVariables = Exact<{
  id: Scalars['Int'];
  state: Scalars['String'];
}>;


export type AlterDocumentMutation = { __typename?: 'Mutation', alterDocument?: boolean | null };

export type CreateCycleMutationVariables = Exact<{
  valueUSD: Scalars['Int'];
  beginDate: Scalars['DateTime'];
  finishDate: Scalars['DateTime'];
}>;


export type CreateCycleMutation = { __typename?: 'Mutation', createCycle: Array<{ __typename?: 'GraphState', field?: string | null, message?: string | null }> };

export type CreateDepositMutationVariables = Exact<{
  action: Scalars['String'];
  value: Scalars['Int'];
}>;


export type CreateDepositMutation = { __typename?: 'Mutation', createDeposit: { __typename?: 'RequestDeposit', url?: string | null, status?: Array<{ __typename?: 'DepositState', field?: string | null, message?: string | null }> | null } };

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

export type GetTypeTransactionMutationVariables = Exact<{
  action: Scalars['String'];
  state: Scalars['String'];
}>;


export type GetTypeTransactionMutation = { __typename?: 'Mutation', getTypeTransaction: Array<{ __typename?: 'TransactionUser', id: number, action: string, value: any, state: string, hash?: string | null, createdAt?: any | null, updatedAt?: any | null, wallet?: string | null, userId?: number | null, user: { __typename?: 'UserAll', id: number, email: string, name?: string | null, wallet?: string | null } }> };

export type LoginAuthUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginAuthUserMutation = { __typename?: 'Mutation', loginAuthUser: Array<{ __typename?: 'GraphState', field?: string | null, message?: string | null }> };

export type LoginStaffMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginStaffMutation = { __typename?: 'Mutation', loginStaff: Array<{ __typename?: 'GraphState', field?: string | null, message?: string | null }> };

export type UpdateAuthPasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  password: Scalars['String'];
}>;


export type UpdateAuthPasswordMutation = { __typename?: 'Mutation', updateAuthPassword?: { __typename?: 'GraphState', field?: string | null, message?: string | null } | null };

export type UpdateCycleMutationVariables = Exact<{
  id: Scalars['Int'];
  valueUSD?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  beginDate?: InputMaybe<Scalars['DateTime']>;
  finishDate?: InputMaybe<Scalars['DateTime']>;
}>;


export type UpdateCycleMutation = { __typename?: 'Mutation', updateCycle: Array<{ __typename?: 'GraphState', field?: string | null, message?: string | null }> };

export type UpdateTransactionMutationVariables = Exact<{
  id: Scalars['Int'];
  state?: InputMaybe<Scalars['String']>;
  action?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Int']>;
  hash?: InputMaybe<Scalars['String']>;
  wallet?: InputMaybe<Scalars['String']>;
}>;


export type UpdateTransactionMutation = { __typename?: 'Mutation', updateTransaction: Array<{ __typename?: 'GraphState', field?: string | null, message?: string | null }> };

export type UpdateWalletMutationVariables = Exact<{
  wallet: Scalars['String'];
}>;


export type UpdateWalletMutation = { __typename?: 'Mutation', updateWallet?: { __typename?: 'GraphState', field?: string | null, message?: string | null } | null };

export type ActiveStartStaffQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveStartStaffQuery = { __typename?: 'Query', activeStartStaff?: { __typename?: 'StaffActivity', cyclesStart: number, documentsValidate: number, valueEnterToday: number, withdrawAll: number, transactionPay: number } | null };

export type AllCycleQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCycleQuery = { __typename?: 'Query', allCycle?: Array<{ __typename?: 'CycleAll', action: string, id: number, createdAt?: any | null, beginDate: any, finishDate?: any | null, valueBTC: string, valueUSD: number, finalValueUSD?: number | null, finalValueBTC?: string | null, hash?: string | null, state: string, userId?: number | null }> | null };

export type AllCycleByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCycleByUserQuery = { __typename?: 'Query', allCycleByUser?: Array<{ __typename?: 'CycleAll', id: number, action: string, valueUSD: number, valueBTC: string, finalValueUSD?: number | null, finalValueBTC?: string | null, state: string, beginDate: any, finishDate?: any | null, createdAt?: any | null, updatedAt?: any | null, userId?: number | null }> | null };

export type AllCycleUserAdminProcessQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCycleUserAdminProcessQuery = { __typename?: 'Query', allCycleUserAdminProcess?: Array<{ __typename?: 'CycleAllUser', id: number, action: string, valueUSD: number, valueBTC: string, finalValueUSD?: number | null, finalValueBTC?: string | null, state: string, beginDate: any, finishDate?: any | null, createdAt?: any | null, hash?: string | null, user: { __typename?: 'UserAll', id: number, email: string, name?: string | null, wallet?: string | null } }> | null };

export type AllDocumentsValidationQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDocumentsValidationQuery = { __typename?: 'Query', allDocumentsValidation: Array<{ __typename?: 'DocumentAllUser', id: number, state: string, fileName: string, userId: number, user: { __typename?: 'UserAll', id: number, name?: string | null, email: string, wallet?: string | null } }> };

export type AllTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTransactionsQuery = { __typename?: 'Query', allTransactions?: Array<{ __typename?: 'TransactionAll', id: number, value: any, hash?: string | null, action: string, wallet?: string | null, createdAt?: any | null, updatedAt?: any | null, state: string, userId?: number | null }> | null };

export type AllTransactionsByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTransactionsByUserQuery = { __typename?: 'Query', allTransactionsByUser?: Array<{ __typename?: 'TransactionAll', id: number, action: string, value: any, state: string, hash?: string | null, createdAt?: any | null, updatedAt?: any | null, wallet?: string | null }> | null };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', allUsers?: Array<{ __typename?: 'UserAll', id: number, email: string, name?: string | null, wallet?: string | null }> | null };

export type UserAllMoneyQueryVariables = Exact<{ [key: string]: never; }>;


export type UserAllMoneyQuery = { __typename?: 'Query', userAllMoney?: { __typename?: 'UserCash', balance?: string | null, profitCycle?: string | null, profitFuture?: string | null } | null };

export type UserInfoDocumentQueryVariables = Exact<{ [key: string]: never; }>;


export type UserInfoDocumentQuery = { __typename?: 'Query', userInfoDocument?: { __typename?: 'UserHaveComponents', email: string, name?: string | null, wallet?: string | null, valuePrice?: any | null, document?: string | null } | null };


export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
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
export const AlterDocumentDocument = gql`
    mutation AlterDocument($id: Int!, $state: String!) {
  alterDocument(data: {id: $id, state: $state})
}
    `;
export type AlterDocumentMutationFn = Apollo.MutationFunction<AlterDocumentMutation, AlterDocumentMutationVariables>;

/**
 * __useAlterDocumentMutation__
 *
 * To run a mutation, you first call `useAlterDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAlterDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [alterDocumentMutation, { data, loading, error }] = useAlterDocumentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useAlterDocumentMutation(baseOptions?: Apollo.MutationHookOptions<AlterDocumentMutation, AlterDocumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AlterDocumentMutation, AlterDocumentMutationVariables>(AlterDocumentDocument, options);
      }
export type AlterDocumentMutationHookResult = ReturnType<typeof useAlterDocumentMutation>;
export type AlterDocumentMutationResult = Apollo.MutationResult<AlterDocumentMutation>;
export type AlterDocumentMutationOptions = Apollo.BaseMutationOptions<AlterDocumentMutation, AlterDocumentMutationVariables>;
export const CreateCycleDocument = gql`
    mutation CreateCycle($valueUSD: Int!, $beginDate: DateTime!, $finishDate: DateTime!) {
  createCycle(
    data: {valueUSD: $valueUSD, beginDate: $beginDate, finishDate: $finishDate}
  ) {
    field
    message
  }
}
    `;
export type CreateCycleMutationFn = Apollo.MutationFunction<CreateCycleMutation, CreateCycleMutationVariables>;

/**
 * __useCreateCycleMutation__
 *
 * To run a mutation, you first call `useCreateCycleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCycleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCycleMutation, { data, loading, error }] = useCreateCycleMutation({
 *   variables: {
 *      valueUSD: // value for 'valueUSD'
 *      beginDate: // value for 'beginDate'
 *      finishDate: // value for 'finishDate'
 *   },
 * });
 */
export function useCreateCycleMutation(baseOptions?: Apollo.MutationHookOptions<CreateCycleMutation, CreateCycleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCycleMutation, CreateCycleMutationVariables>(CreateCycleDocument, options);
      }
export type CreateCycleMutationHookResult = ReturnType<typeof useCreateCycleMutation>;
export type CreateCycleMutationResult = Apollo.MutationResult<CreateCycleMutation>;
export type CreateCycleMutationOptions = Apollo.BaseMutationOptions<CreateCycleMutation, CreateCycleMutationVariables>;
export const CreateDepositDocument = gql`
    mutation CreateDeposit($action: String!, $value: Int!) {
  createDeposit(data: {action: $action, value: $value}) {
    url
    status {
      field
      message
    }
  }
}
    `;
export type CreateDepositMutationFn = Apollo.MutationFunction<CreateDepositMutation, CreateDepositMutationVariables>;

/**
 * __useCreateDepositMutation__
 *
 * To run a mutation, you first call `useCreateDepositMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDepositMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDepositMutation, { data, loading, error }] = useCreateDepositMutation({
 *   variables: {
 *      action: // value for 'action'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useCreateDepositMutation(baseOptions?: Apollo.MutationHookOptions<CreateDepositMutation, CreateDepositMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDepositMutation, CreateDepositMutationVariables>(CreateDepositDocument, options);
      }
export type CreateDepositMutationHookResult = ReturnType<typeof useCreateDepositMutation>;
export type CreateDepositMutationResult = Apollo.MutationResult<CreateDepositMutation>;
export type CreateDepositMutationOptions = Apollo.BaseMutationOptions<CreateDepositMutation, CreateDepositMutationVariables>;
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
export const GetTypeTransactionDocument = gql`
    mutation GetTypeTransaction($action: String!, $state: String!) {
  getTypeTransaction(data: {action: $action, state: $state}) {
    id
    action
    value
    state
    hash
    createdAt
    updatedAt
    wallet
    userId
    user {
      id
      email
      name
      wallet
    }
  }
}
    `;
export type GetTypeTransactionMutationFn = Apollo.MutationFunction<GetTypeTransactionMutation, GetTypeTransactionMutationVariables>;

/**
 * __useGetTypeTransactionMutation__
 *
 * To run a mutation, you first call `useGetTypeTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetTypeTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getTypeTransactionMutation, { data, loading, error }] = useGetTypeTransactionMutation({
 *   variables: {
 *      action: // value for 'action'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useGetTypeTransactionMutation(baseOptions?: Apollo.MutationHookOptions<GetTypeTransactionMutation, GetTypeTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetTypeTransactionMutation, GetTypeTransactionMutationVariables>(GetTypeTransactionDocument, options);
      }
export type GetTypeTransactionMutationHookResult = ReturnType<typeof useGetTypeTransactionMutation>;
export type GetTypeTransactionMutationResult = Apollo.MutationResult<GetTypeTransactionMutation>;
export type GetTypeTransactionMutationOptions = Apollo.BaseMutationOptions<GetTypeTransactionMutation, GetTypeTransactionMutationVariables>;
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
export const LoginStaffDocument = gql`
    mutation LoginStaff($email: String!, $password: String!) {
  loginStaff(data: {email: $email, password: $password}) {
    field
    message
  }
}
    `;
export type LoginStaffMutationFn = Apollo.MutationFunction<LoginStaffMutation, LoginStaffMutationVariables>;

/**
 * __useLoginStaffMutation__
 *
 * To run a mutation, you first call `useLoginStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginStaffMutation, { data, loading, error }] = useLoginStaffMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginStaffMutation(baseOptions?: Apollo.MutationHookOptions<LoginStaffMutation, LoginStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginStaffMutation, LoginStaffMutationVariables>(LoginStaffDocument, options);
      }
export type LoginStaffMutationHookResult = ReturnType<typeof useLoginStaffMutation>;
export type LoginStaffMutationResult = Apollo.MutationResult<LoginStaffMutation>;
export type LoginStaffMutationOptions = Apollo.BaseMutationOptions<LoginStaffMutation, LoginStaffMutationVariables>;
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
export const UpdateCycleDocument = gql`
    mutation UpdateCycle($id: Int!, $valueUSD: Int, $state: String, $beginDate: DateTime, $finishDate: DateTime) {
  updateCycle(
    data: {id: $id, valueUSD: $valueUSD, state: $state, beginDate: $beginDate, finishDate: $finishDate}
  ) {
    field
    message
  }
}
    `;
export type UpdateCycleMutationFn = Apollo.MutationFunction<UpdateCycleMutation, UpdateCycleMutationVariables>;

/**
 * __useUpdateCycleMutation__
 *
 * To run a mutation, you first call `useUpdateCycleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCycleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCycleMutation, { data, loading, error }] = useUpdateCycleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      valueUSD: // value for 'valueUSD'
 *      state: // value for 'state'
 *      beginDate: // value for 'beginDate'
 *      finishDate: // value for 'finishDate'
 *   },
 * });
 */
export function useUpdateCycleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCycleMutation, UpdateCycleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCycleMutation, UpdateCycleMutationVariables>(UpdateCycleDocument, options);
      }
export type UpdateCycleMutationHookResult = ReturnType<typeof useUpdateCycleMutation>;
export type UpdateCycleMutationResult = Apollo.MutationResult<UpdateCycleMutation>;
export type UpdateCycleMutationOptions = Apollo.BaseMutationOptions<UpdateCycleMutation, UpdateCycleMutationVariables>;
export const UpdateTransactionDocument = gql`
    mutation UpdateTransaction($id: Int!, $state: String, $action: String, $value: Int, $hash: String, $wallet: String) {
  updateTransaction(
    data: {id: $id, state: $state, action: $action, value: $value, hash: $hash, wallet: $wallet}
  ) {
    field
    message
  }
}
    `;
export type UpdateTransactionMutationFn = Apollo.MutationFunction<UpdateTransactionMutation, UpdateTransactionMutationVariables>;

/**
 * __useUpdateTransactionMutation__
 *
 * To run a mutation, you first call `useUpdateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransactionMutation, { data, loading, error }] = useUpdateTransactionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      state: // value for 'state'
 *      action: // value for 'action'
 *      value: // value for 'value'
 *      hash: // value for 'hash'
 *      wallet: // value for 'wallet'
 *   },
 * });
 */
export function useUpdateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransactionMutation, UpdateTransactionMutationVariables>(UpdateTransactionDocument, options);
      }
export type UpdateTransactionMutationHookResult = ReturnType<typeof useUpdateTransactionMutation>;
export type UpdateTransactionMutationResult = Apollo.MutationResult<UpdateTransactionMutation>;
export type UpdateTransactionMutationOptions = Apollo.BaseMutationOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>;
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
export const ActiveStartStaffDocument = gql`
    query ActiveStartStaff {
  activeStartStaff {
    cyclesStart
    documentsValidate
    valueEnterToday
    withdrawAll
    transactionPay
  }
}
    `;

/**
 * __useActiveStartStaffQuery__
 *
 * To run a query within a React component, call `useActiveStartStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveStartStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveStartStaffQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveStartStaffQuery(baseOptions?: Apollo.QueryHookOptions<ActiveStartStaffQuery, ActiveStartStaffQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActiveStartStaffQuery, ActiveStartStaffQueryVariables>(ActiveStartStaffDocument, options);
      }
export function useActiveStartStaffLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveStartStaffQuery, ActiveStartStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActiveStartStaffQuery, ActiveStartStaffQueryVariables>(ActiveStartStaffDocument, options);
        }
export type ActiveStartStaffQueryHookResult = ReturnType<typeof useActiveStartStaffQuery>;
export type ActiveStartStaffLazyQueryHookResult = ReturnType<typeof useActiveStartStaffLazyQuery>;
export type ActiveStartStaffQueryResult = Apollo.QueryResult<ActiveStartStaffQuery, ActiveStartStaffQueryVariables>;
export const AllCycleDocument = gql`
    query AllCycle {
  allCycle {
    action
    id
    createdAt
    beginDate
    finishDate
    valueBTC
    valueUSD
    finalValueUSD
    finalValueBTC
    hash
    state
    beginDate
    userId
  }
}
    `;

/**
 * __useAllCycleQuery__
 *
 * To run a query within a React component, call `useAllCycleQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCycleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCycleQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCycleQuery(baseOptions?: Apollo.QueryHookOptions<AllCycleQuery, AllCycleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCycleQuery, AllCycleQueryVariables>(AllCycleDocument, options);
      }
export function useAllCycleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCycleQuery, AllCycleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCycleQuery, AllCycleQueryVariables>(AllCycleDocument, options);
        }
export type AllCycleQueryHookResult = ReturnType<typeof useAllCycleQuery>;
export type AllCycleLazyQueryHookResult = ReturnType<typeof useAllCycleLazyQuery>;
export type AllCycleQueryResult = Apollo.QueryResult<AllCycleQuery, AllCycleQueryVariables>;
export const AllCycleByUserDocument = gql`
    query AllCycleByUser {
  allCycleByUser {
    id
    action
    valueUSD
    valueBTC
    finalValueUSD
    finalValueBTC
    state
    beginDate
    finishDate
    createdAt
    updatedAt
    userId
  }
}
    `;

/**
 * __useAllCycleByUserQuery__
 *
 * To run a query within a React component, call `useAllCycleByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCycleByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCycleByUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCycleByUserQuery(baseOptions?: Apollo.QueryHookOptions<AllCycleByUserQuery, AllCycleByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCycleByUserQuery, AllCycleByUserQueryVariables>(AllCycleByUserDocument, options);
      }
export function useAllCycleByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCycleByUserQuery, AllCycleByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCycleByUserQuery, AllCycleByUserQueryVariables>(AllCycleByUserDocument, options);
        }
export type AllCycleByUserQueryHookResult = ReturnType<typeof useAllCycleByUserQuery>;
export type AllCycleByUserLazyQueryHookResult = ReturnType<typeof useAllCycleByUserLazyQuery>;
export type AllCycleByUserQueryResult = Apollo.QueryResult<AllCycleByUserQuery, AllCycleByUserQueryVariables>;
export const AllCycleUserAdminProcessDocument = gql`
    query AllCycleUserAdminProcess {
  allCycleUserAdminProcess {
    id
    action
    valueUSD
    valueBTC
    finalValueUSD
    finalValueBTC
    state
    beginDate
    finishDate
    createdAt
    finishDate
    hash
    user {
      id
      email
      name
      wallet
    }
  }
}
    `;

/**
 * __useAllCycleUserAdminProcessQuery__
 *
 * To run a query within a React component, call `useAllCycleUserAdminProcessQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCycleUserAdminProcessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCycleUserAdminProcessQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCycleUserAdminProcessQuery(baseOptions?: Apollo.QueryHookOptions<AllCycleUserAdminProcessQuery, AllCycleUserAdminProcessQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCycleUserAdminProcessQuery, AllCycleUserAdminProcessQueryVariables>(AllCycleUserAdminProcessDocument, options);
      }
export function useAllCycleUserAdminProcessLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCycleUserAdminProcessQuery, AllCycleUserAdminProcessQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCycleUserAdminProcessQuery, AllCycleUserAdminProcessQueryVariables>(AllCycleUserAdminProcessDocument, options);
        }
export type AllCycleUserAdminProcessQueryHookResult = ReturnType<typeof useAllCycleUserAdminProcessQuery>;
export type AllCycleUserAdminProcessLazyQueryHookResult = ReturnType<typeof useAllCycleUserAdminProcessLazyQuery>;
export type AllCycleUserAdminProcessQueryResult = Apollo.QueryResult<AllCycleUserAdminProcessQuery, AllCycleUserAdminProcessQueryVariables>;
export const AllDocumentsValidationDocument = gql`
    query AllDocumentsValidation {
  allDocumentsValidation {
    id
    state
    fileName
    userId
    user {
      id
      name
      email
      wallet
    }
  }
}
    `;

/**
 * __useAllDocumentsValidationQuery__
 *
 * To run a query within a React component, call `useAllDocumentsValidationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllDocumentsValidationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllDocumentsValidationQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllDocumentsValidationQuery(baseOptions?: Apollo.QueryHookOptions<AllDocumentsValidationQuery, AllDocumentsValidationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllDocumentsValidationQuery, AllDocumentsValidationQueryVariables>(AllDocumentsValidationDocument, options);
      }
export function useAllDocumentsValidationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllDocumentsValidationQuery, AllDocumentsValidationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllDocumentsValidationQuery, AllDocumentsValidationQueryVariables>(AllDocumentsValidationDocument, options);
        }
export type AllDocumentsValidationQueryHookResult = ReturnType<typeof useAllDocumentsValidationQuery>;
export type AllDocumentsValidationLazyQueryHookResult = ReturnType<typeof useAllDocumentsValidationLazyQuery>;
export type AllDocumentsValidationQueryResult = Apollo.QueryResult<AllDocumentsValidationQuery, AllDocumentsValidationQueryVariables>;
export const AllTransactionsDocument = gql`
    query AllTransactions {
  allTransactions {
    id
    value
    hash
    action
    wallet
    createdAt
    updatedAt
    state
    userId
  }
}
    `;

/**
 * __useAllTransactionsQuery__
 *
 * To run a query within a React component, call `useAllTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<AllTransactionsQuery, AllTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTransactionsQuery, AllTransactionsQueryVariables>(AllTransactionsDocument, options);
      }
export function useAllTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTransactionsQuery, AllTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTransactionsQuery, AllTransactionsQueryVariables>(AllTransactionsDocument, options);
        }
export type AllTransactionsQueryHookResult = ReturnType<typeof useAllTransactionsQuery>;
export type AllTransactionsLazyQueryHookResult = ReturnType<typeof useAllTransactionsLazyQuery>;
export type AllTransactionsQueryResult = Apollo.QueryResult<AllTransactionsQuery, AllTransactionsQueryVariables>;
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
export const AllUsersDocument = gql`
    query AllUsers {
  allUsers {
    id
    email
    name
    wallet
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const UserAllMoneyDocument = gql`
    query UserAllMoney {
  userAllMoney {
    balance
    profitCycle
    profitFuture
  }
}
    `;

/**
 * __useUserAllMoneyQuery__
 *
 * To run a query within a React component, call `useUserAllMoneyQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAllMoneyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAllMoneyQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserAllMoneyQuery(baseOptions?: Apollo.QueryHookOptions<UserAllMoneyQuery, UserAllMoneyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserAllMoneyQuery, UserAllMoneyQueryVariables>(UserAllMoneyDocument, options);
      }
export function useUserAllMoneyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserAllMoneyQuery, UserAllMoneyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserAllMoneyQuery, UserAllMoneyQueryVariables>(UserAllMoneyDocument, options);
        }
export type UserAllMoneyQueryHookResult = ReturnType<typeof useUserAllMoneyQuery>;
export type UserAllMoneyLazyQueryHookResult = ReturnType<typeof useUserAllMoneyLazyQuery>;
export type UserAllMoneyQueryResult = Apollo.QueryResult<UserAllMoneyQuery, UserAllMoneyQueryVariables>;
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