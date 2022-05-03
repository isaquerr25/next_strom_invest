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
  numberTelephone?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type CycleAll = {
  __typename?: 'CycleAll';
  action: Scalars['String'];
  beginDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  finalValueBTC?: Maybe<Scalars['String']>;
  finalValueUSD?: Maybe<Scalars['Int']>;
  finishDate?: Maybe<Scalars['DateTime']>;
  hash?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
  valueBTC?: Maybe<Scalars['String']>;
  valueUSD: Scalars['Int'];
};

export type CycleAllUser = {
  __typename?: 'CycleAllUser';
  action?: Maybe<Scalars['String']>;
  beginDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  finalValueBTC?: Maybe<Scalars['String']>;
  finalValueUSD?: Maybe<Scalars['Int']>;
  finishDate?: Maybe<Scalars['DateTime']>;
  hash?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserAll>;
  valueBTC?: Maybe<Scalars['String']>;
  valueUSD?: Maybe<Scalars['Int']>;
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

export type EmailAll = {
  __typename?: 'EmailAll';
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type ForgetPasswordAlter = {
  email: Scalars['String'];
};

export type ForgetPasswordNewAlter = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type GraphState = {
  __typename?: 'GraphState';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type InputDeleteCycle = {
  id: Scalars['Int'];
};

export type InputDeleteEmailBack = {
  id: Scalars['Int'];
};

export type InputDeleteMonthlyProfit = {
  id: Scalars['Int'];
};

export type InputDeleteTransaction = {
  id: Scalars['Int'];
};

export type InputDocumentAlter = {
  id: Scalars['Int'];
  state: Scalars['String'];
};

export type InputEmailBack = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type InputIdUser = {
  id: Scalars['Int'];
};

export type InputMonthlyProfit = {
  finishDate: Scalars['DateTime'];
  profit: Scalars['Int'];
};

export type InputNewCycle = {
  days: Scalars['String'];
  moneyUser?: InputMaybe<Scalars['Int']>;
  useMoney: Scalars['Boolean'];
  valueUSD: Scalars['Int'];
};

export type InputNewDeposit = {
  action: Scalars['String'];
  days: Scalars['String'];
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

export type InputUpdateEmailBack = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
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

export type InputValidateWithdrawTransaction = {
  token: Scalars['String'];
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
  allCycleByUserStaff?: Maybe<Array<CycleAll>>;
  allTransactionsByUserStaff?: Maybe<Array<TransactionAll>>;
  alterDocument?: Maybe<Scalars['Boolean']>;
  createCycle: RequestDeposit;
  createDeposit: RequestDeposit;
  createEmailBack: GraphState;
  createMonthlyProfit: Array<GraphState>;
  createTransaction: Array<GraphState>;
  createUserResolver: Array<GraphState>;
  deleteCycle: Array<GraphState>;
  deleteEmail: Array<GraphState>;
  deleteMonthlyProfit: Array<GraphState>;
  deleteTransaction: Array<GraphState>;
  getTypeTransaction: Array<TransactionUser>;
  idMonthlyProfit?: Maybe<MonthlyProfitAll>;
  loginAuthUser: Array<GraphState>;
  loginStaff: Array<GraphState>;
  logout?: Maybe<Scalars['Boolean']>;
  newPassword?: Maybe<GraphState>;
  resolverForgetPassword?: Maybe<GraphState>;
  updateAuthPassword?: Maybe<GraphState>;
  updateCycle: Array<GraphState>;
  updateEmail: GraphState;
  updateMonthlyProfit: Array<GraphState>;
  updateNumberTelephone?: Maybe<GraphState>;
  updateTransaction: Array<GraphState>;
  updateWallet?: Maybe<GraphState>;
  userInfoIdStaff?: Maybe<StaffInfoUserComponents>;
  validWithdraw: GraphState;
};


export type MutationAddDocumentPictureArgs = {
  picture: Scalars['Upload'];
};


export type MutationAllCycleByUserStaffArgs = {
  data: InputIdUser;
};


export type MutationAllTransactionsByUserStaffArgs = {
  data: InputIdUser;
};


export type MutationAlterDocumentArgs = {
  data: InputDocumentAlter;
};


export type MutationCreateCycleArgs = {
  data: InputNewCycle;
};


export type MutationCreateDepositArgs = {
  data: InputNewDeposit;
};


export type MutationCreateEmailBackArgs = {
  data: InputEmailBack;
};


export type MutationCreateMonthlyProfitArgs = {
  data: InputMonthlyProfit;
};


export type MutationCreateTransactionArgs = {
  data: InputNewDeposit;
};


export type MutationCreateUserResolverArgs = {
  data: CreateUser;
};


export type MutationDeleteCycleArgs = {
  data: InputDeleteCycle;
};


export type MutationDeleteEmailArgs = {
  data: InputDeleteEmailBack;
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


export type MutationIdMonthlyProfitArgs = {
  data: InputDeleteMonthlyProfit;
};


export type MutationLoginAuthUserArgs = {
  data: LoginUser;
};


export type MutationLoginStaffArgs = {
  data: LoginUser;
};


export type MutationNewPasswordArgs = {
  data: ForgetPasswordNewAlter;
};


export type MutationResolverForgetPasswordArgs = {
  data: ForgetPasswordAlter;
};


export type MutationUpdateAuthPasswordArgs = {
  data: PasswordAlter;
};


export type MutationUpdateCycleArgs = {
  data: InputUpdateCycle;
};


export type MutationUpdateEmailArgs = {
  data: InputUpdateEmailBack;
};


export type MutationUpdateMonthlyProfitArgs = {
  data: InputUpdateMonthlyProfit;
};


export type MutationUpdateNumberTelephoneArgs = {
  data: NumberTelephoneAlter;
};


export type MutationUpdateTransactionArgs = {
  data: InputUpdateTransaction;
};


export type MutationUpdateWalletArgs = {
  data: WalletAlter;
};


export type MutationUserInfoIdStaffArgs = {
  data: InputIdUser;
};


export type MutationValidWithdrawArgs = {
  data: InputValidateWithdrawTransaction;
};

export type NumberTelephoneAlter = {
  numberTelephone: Scalars['String'];
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
  allEmail?: Maybe<Array<EmailAll>>;
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

export type StaffInfoUserComponents = {
  __typename?: 'StaffInfoUserComponents';
  allCompleteInvest?: Maybe<Scalars['String']>;
  allCycleActive?: Maybe<Scalars['String']>;
  allCycleComplete?: Maybe<Scalars['String']>;
  allCycleProcess?: Maybe<Scalars['String']>;
  allDeposit?: Maybe<Scalars['String']>;
  allInvest?: Maybe<Scalars['String']>;
  allWithdraw?: Maybe<Scalars['String']>;
  cash?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  qCompleteInvest?: Maybe<Scalars['String']>;
  qCycleActive?: Maybe<Scalars['String']>;
  qCycleComplete?: Maybe<Scalars['String']>;
  qCycleProcess?: Maybe<Scalars['String']>;
  qDeposit?: Maybe<Scalars['String']>;
  qInvest?: Maybe<Scalars['String']>;
  qWithdraw?: Maybe<Scalars['String']>;
  wallet?: Maybe<Scalars['String']>;
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
  numberTelephone?: Maybe<Scalars['String']>;
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
  numberTelephone?: Maybe<Scalars['String']>;
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

export type AllCycleByUserStaffMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AllCycleByUserStaffMutation = { __typename?: 'Mutation', allCycleByUserStaff?: Array<{ __typename?: 'CycleAll', id: number, action: string, valueUSD: number, valueBTC?: string | null, finalValueUSD?: number | null, finalValueBTC?: string | null, state?: string | null, beginDate?: any | null, finishDate?: any | null, createdAt?: any | null, updatedAt?: any | null, hash?: string | null }> | null };

export type AllTransactionsByUserStaffMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AllTransactionsByUserStaffMutation = { __typename?: 'Mutation', allTransactionsByUserStaff?: Array<{ __typename?: 'TransactionAll', id: number, action: string, value: any, state: string, hash?: string | null, createdAt?: any | null, updatedAt?: any | null, wallet?: string | null }> | null };

export type AlterDocumentMutationVariables = Exact<{
  id: Scalars['Int'];
  state: Scalars['String'];
}>;


export type AlterDocumentMutation = { __typename?: 'Mutation', alterDocument?: boolean | null };

export type CreateCycleMutationVariables = Exact<{
  valueUSD: Scalars['Int'];
  useMoney: Scalars['Boolean'];
  moneyUser?: InputMaybe<Scalars['Int']>;
  days: Scalars['String'];
}>;


export type CreateCycleMutation = { __typename?: 'Mutation', createCycle: { __typename?: 'RequestDeposit', url?: string | null, status?: Array<{ __typename?: 'DepositState', field?: string | null, message?: string | null }> | null } };

export type CreateDepositMutationVariables = Exact<{
  action: Scalars['String'];
  value: Scalars['Int'];
  days: Scalars['String'];
}>;


export type CreateDepositMutation = { __typename?: 'Mutation', createDeposit: { __typename?: 'RequestDeposit', url?: string | null, status?: Array<{ __typename?: 'DepositState', field?: string | null, message?: string | null }> | null } };

export type CreateEmailBackMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  message: Scalars['String'];
}>;


export type CreateEmailBackMutation = { __typename?: 'Mutation', createEmailBack: { __typename?: 'GraphState', field?: string | null, message?: string | null } };

export type CreateMonthlyProfitMutationVariables = Exact<{
  profit: Scalars['Int'];
  finishDate: Scalars['DateTime'];
}>;


export type CreateMonthlyProfitMutation = { __typename?: 'Mutation', createMonthlyProfit: Array<{ __typename?: 'GraphState', field?: string | null, message?: string | null }> };

export type CreateTransactionMutationVariables = Exact<{
  action: Scalars['String'];
  value: Scalars['Int'];
  days: Scalars['String'];
}>;


export type CreateTransactionMutation = { __typename?: 'Mutation', createTransaction: Array<{ __typename?: 'GraphState', field?: string | null, message?: string | null }> };

export type CreateUserResolverMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  numberTelephone: Scalars['String'];
}>;


export type CreateUserResolverMutation = { __typename?: 'Mutation', createUserResolver: Array<{ __typename?: 'GraphState', field?: string | null, message?: string | null }> };

export type DeleteMonthlyProfitMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteMonthlyProfitMutation = { __typename?: 'Mutation', deleteMonthlyProfit: Array<{ __typename?: 'GraphState', field?: string | null, message?: string | null }> };

export type GetTypeTransactionMutationVariables = Exact<{
  action: Scalars['String'];
  state: Scalars['String'];
}>;


export type GetTypeTransactionMutation = { __typename?: 'Mutation', getTypeTransaction: Array<{ __typename?: 'TransactionUser', id: number, action: string, value: any, state: string, hash?: string | null, createdAt?: any | null, updatedAt?: any | null, wallet?: string | null, userId?: number | null, user: { __typename?: 'UserAll', id: number, email: string, name?: string | null, wallet?: string | null } }> };

export type IdMonthlyProfitMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type IdMonthlyProfitMutation = { __typename?: 'Mutation', idMonthlyProfit?: { __typename?: 'MonthlyProfitAll', id: number, profit?: number | null, finishDate?: any | null } | null };

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

export type NewPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type NewPasswordMutation = { __typename?: 'Mutation', newPassword?: { __typename?: 'GraphState', field?: string | null, message?: string | null } | null };

export type ResolverForgetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResolverForgetPasswordMutation = { __typename?: 'Mutation', resolverForgetPassword?: { __typename?: 'GraphState', field?: string | null, message?: string | null } | null };

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

export type UpdateMonthlyProfitMutationVariables = Exact<{
  id: Scalars['Int'];
  profit?: InputMaybe<Scalars['Int']>;
  finishDate?: InputMaybe<Scalars['DateTime']>;
}>;


export type UpdateMonthlyProfitMutation = { __typename?: 'Mutation', updateMonthlyProfit: Array<{ __typename?: 'GraphState', field?: string | null, message?: string | null }> };

export type UpdateNumberTelephoneMutationVariables = Exact<{
  numberTelephone: Scalars['String'];
}>;


export type UpdateNumberTelephoneMutation = { __typename?: 'Mutation', updateNumberTelephone?: { __typename?: 'GraphState', field?: string | null, message?: string | null } | null };

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

export type UserInfoIdStaffMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UserInfoIdStaffMutation = { __typename?: 'Mutation', userInfoIdStaff?: { __typename?: 'StaffInfoUserComponents', name?: string | null, email: string, wallet?: string | null, document?: string | null, qDeposit?: string | null, allDeposit?: string | null, qWithdraw?: string | null, allWithdraw?: string | null, qInvest?: string | null, allInvest?: string | null, qCompleteInvest?: string | null, allCompleteInvest?: string | null, qCycleProcess?: string | null, allCycleProcess?: string | null, qCycleActive?: string | null, allCycleActive?: string | null, qCycleComplete?: string | null, allCycleComplete?: string | null, cash?: string | null } | null };

export type ValidWithdrawMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ValidWithdrawMutation = { __typename?: 'Mutation', validWithdraw: { __typename?: 'GraphState', field?: string | null, message?: string | null } };

export type ActiveStartStaffQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveStartStaffQuery = { __typename?: 'Query', activeStartStaff?: { __typename?: 'StaffActivity', cyclesStart: number, documentsValidate: number, valueEnterToday: number, withdrawAll: number, transactionPay: number } | null };

export type AllCycleQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCycleQuery = { __typename?: 'Query', allCycle?: Array<{ __typename?: 'CycleAll', action: string, id: number, createdAt?: any | null, beginDate?: any | null, finishDate?: any | null, valueBTC?: string | null, valueUSD: number, finalValueUSD?: number | null, finalValueBTC?: string | null, hash?: string | null, state?: string | null, userId?: number | null }> | null };

export type AllCycleByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCycleByUserQuery = { __typename?: 'Query', allCycleByUser?: Array<{ __typename?: 'CycleAll', id: number, action: string, valueUSD: number, valueBTC?: string | null, finalValueUSD?: number | null, finalValueBTC?: string | null, state?: string | null, beginDate?: any | null, finishDate?: any | null, createdAt?: any | null, updatedAt?: any | null, userId?: number | null }> | null };

export type AllCycleUserAdminProcessQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCycleUserAdminProcessQuery = { __typename?: 'Query', allCycleUserAdminProcess?: Array<{ __typename?: 'CycleAllUser', id: number, action?: string | null, valueUSD?: number | null, valueBTC?: string | null, finalValueUSD?: number | null, finalValueBTC?: string | null, state?: string | null, beginDate?: any | null, finishDate?: any | null, createdAt?: any | null, hash?: string | null, user?: { __typename?: 'UserAll', id: number, email: string, name?: string | null, wallet?: string | null } | null }> | null };

export type AllDocumentsValidationQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDocumentsValidationQuery = { __typename?: 'Query', allDocumentsValidation: Array<{ __typename?: 'DocumentAllUser', id: number, state: string, fileName: string, userId: number, user: { __typename?: 'UserAll', id: number, name?: string | null, email: string, wallet?: string | null } }> };

export type AllEmailQueryVariables = Exact<{ [key: string]: never; }>;


export type AllEmailQuery = { __typename?: 'Query', allEmail?: Array<{ __typename?: 'EmailAll', id: number, name: string, email: string, message: string, createdAt?: any | null }> | null };

export type AllMonthlyProfitQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMonthlyProfitQuery = { __typename?: 'Query', allMonthlyProfit?: Array<{ __typename?: 'MonthlyProfitAll', id: number, finishDate?: any | null, createdAt?: any | null, updatedAt?: any | null, profit?: number | null }> | null };

export type AllTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTransactionsQuery = { __typename?: 'Query', allTransactions?: Array<{ __typename?: 'TransactionAll', id: number, value: any, hash?: string | null, action: string, wallet?: string | null, createdAt?: any | null, updatedAt?: any | null, state: string, userId?: number | null }> | null };

export type AllTransactionsByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTransactionsByUserQuery = { __typename?: 'Query', allTransactionsByUser?: Array<{ __typename?: 'TransactionAll', id: number, action: string, value: any, state: string, hash?: string | null, createdAt?: any | null, updatedAt?: any | null, wallet?: string | null }> | null };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', allUsers?: Array<{ __typename?: 'UserAll', id: number, email: string, name?: string | null, wallet?: string | null }> | null };

export type UserAllMoneyQueryVariables = Exact<{ [key: string]: never; }>;


export type UserAllMoneyQuery = { __typename?: 'Query', userAllMoney?: { __typename?: 'UserCash', balance?: string | null, profitCycle?: string | null, profitFuture?: string | null } | null };

export type UserInfoDocumentQueryVariables = Exact<{ [key: string]: never; }>;


export type UserInfoDocumentQuery = { __typename?: 'Query', userInfoDocument?: { __typename?: 'UserHaveComponents', email: string, name?: string | null, wallet?: string | null, valuePrice?: any | null, document?: string | null, numberTelephone?: string | null } | null };


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
export const AllCycleByUserStaffDocument = gql`
    mutation allCycleByUserStaff($id: Int!) {
  allCycleByUserStaff(data: {id: $id}) {
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
    hash
  }
}
    `;
export type AllCycleByUserStaffMutationFn = Apollo.MutationFunction<AllCycleByUserStaffMutation, AllCycleByUserStaffMutationVariables>;

/**
 * __useAllCycleByUserStaffMutation__
 *
 * To run a mutation, you first call `useAllCycleByUserStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAllCycleByUserStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [allCycleByUserStaffMutation, { data, loading, error }] = useAllCycleByUserStaffMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAllCycleByUserStaffMutation(baseOptions?: Apollo.MutationHookOptions<AllCycleByUserStaffMutation, AllCycleByUserStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AllCycleByUserStaffMutation, AllCycleByUserStaffMutationVariables>(AllCycleByUserStaffDocument, options);
      }
export type AllCycleByUserStaffMutationHookResult = ReturnType<typeof useAllCycleByUserStaffMutation>;
export type AllCycleByUserStaffMutationResult = Apollo.MutationResult<AllCycleByUserStaffMutation>;
export type AllCycleByUserStaffMutationOptions = Apollo.BaseMutationOptions<AllCycleByUserStaffMutation, AllCycleByUserStaffMutationVariables>;
export const AllTransactionsByUserStaffDocument = gql`
    mutation AllTransactionsByUserStaff($id: Int!) {
  allTransactionsByUserStaff(data: {id: $id}) {
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
export type AllTransactionsByUserStaffMutationFn = Apollo.MutationFunction<AllTransactionsByUserStaffMutation, AllTransactionsByUserStaffMutationVariables>;

/**
 * __useAllTransactionsByUserStaffMutation__
 *
 * To run a mutation, you first call `useAllTransactionsByUserStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAllTransactionsByUserStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [allTransactionsByUserStaffMutation, { data, loading, error }] = useAllTransactionsByUserStaffMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAllTransactionsByUserStaffMutation(baseOptions?: Apollo.MutationHookOptions<AllTransactionsByUserStaffMutation, AllTransactionsByUserStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AllTransactionsByUserStaffMutation, AllTransactionsByUserStaffMutationVariables>(AllTransactionsByUserStaffDocument, options);
      }
export type AllTransactionsByUserStaffMutationHookResult = ReturnType<typeof useAllTransactionsByUserStaffMutation>;
export type AllTransactionsByUserStaffMutationResult = Apollo.MutationResult<AllTransactionsByUserStaffMutation>;
export type AllTransactionsByUserStaffMutationOptions = Apollo.BaseMutationOptions<AllTransactionsByUserStaffMutation, AllTransactionsByUserStaffMutationVariables>;
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
    mutation CreateCycle($valueUSD: Int!, $useMoney: Boolean!, $moneyUser: Int, $days: String!) {
  createCycle(
    data: {valueUSD: $valueUSD, useMoney: $useMoney, moneyUser: $moneyUser, days: $days}
  ) {
    url
    status {
      field
      message
    }
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
 *      useMoney: // value for 'useMoney'
 *      moneyUser: // value for 'moneyUser'
 *      days: // value for 'days'
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
    mutation CreateDeposit($action: String!, $value: Int!, $days: String!) {
  createDeposit(data: {action: $action, value: $value, days: $days}) {
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
 *      days: // value for 'days'
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
export const CreateEmailBackDocument = gql`
    mutation CreateEmailBack($name: String!, $email: String!, $message: String!) {
  createEmailBack(data: {name: $name, email: $email, message: $message}) {
    field
    message
  }
}
    `;
export type CreateEmailBackMutationFn = Apollo.MutationFunction<CreateEmailBackMutation, CreateEmailBackMutationVariables>;

/**
 * __useCreateEmailBackMutation__
 *
 * To run a mutation, you first call `useCreateEmailBackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmailBackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmailBackMutation, { data, loading, error }] = useCreateEmailBackMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useCreateEmailBackMutation(baseOptions?: Apollo.MutationHookOptions<CreateEmailBackMutation, CreateEmailBackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEmailBackMutation, CreateEmailBackMutationVariables>(CreateEmailBackDocument, options);
      }
export type CreateEmailBackMutationHookResult = ReturnType<typeof useCreateEmailBackMutation>;
export type CreateEmailBackMutationResult = Apollo.MutationResult<CreateEmailBackMutation>;
export type CreateEmailBackMutationOptions = Apollo.BaseMutationOptions<CreateEmailBackMutation, CreateEmailBackMutationVariables>;
export const CreateMonthlyProfitDocument = gql`
    mutation CreateMonthlyProfit($profit: Int!, $finishDate: DateTime!) {
  createMonthlyProfit(data: {profit: $profit, finishDate: $finishDate}) {
    field
    message
  }
}
    `;
export type CreateMonthlyProfitMutationFn = Apollo.MutationFunction<CreateMonthlyProfitMutation, CreateMonthlyProfitMutationVariables>;

/**
 * __useCreateMonthlyProfitMutation__
 *
 * To run a mutation, you first call `useCreateMonthlyProfitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMonthlyProfitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMonthlyProfitMutation, { data, loading, error }] = useCreateMonthlyProfitMutation({
 *   variables: {
 *      profit: // value for 'profit'
 *      finishDate: // value for 'finishDate'
 *   },
 * });
 */
export function useCreateMonthlyProfitMutation(baseOptions?: Apollo.MutationHookOptions<CreateMonthlyProfitMutation, CreateMonthlyProfitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMonthlyProfitMutation, CreateMonthlyProfitMutationVariables>(CreateMonthlyProfitDocument, options);
      }
export type CreateMonthlyProfitMutationHookResult = ReturnType<typeof useCreateMonthlyProfitMutation>;
export type CreateMonthlyProfitMutationResult = Apollo.MutationResult<CreateMonthlyProfitMutation>;
export type CreateMonthlyProfitMutationOptions = Apollo.BaseMutationOptions<CreateMonthlyProfitMutation, CreateMonthlyProfitMutationVariables>;
export const CreateTransactionDocument = gql`
    mutation CreateTransaction($action: String!, $value: Int!, $days: String!) {
  createTransaction(
    data: {action: $action, value: $value, userId: 0, days: $days}
  ) {
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
 *      days: // value for 'days'
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
    mutation CreateUserResolver($email: String!, $password: String!, $name: String!, $numberTelephone: String!) {
  createUserResolver(
    data: {email: $email, password: $password, name: $name, numberTelephone: $numberTelephone}
  ) {
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
 *      numberTelephone: // value for 'numberTelephone'
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
export const DeleteMonthlyProfitDocument = gql`
    mutation DeleteMonthlyProfit($id: Int!) {
  deleteMonthlyProfit(data: {id: $id}) {
    field
    message
  }
}
    `;
export type DeleteMonthlyProfitMutationFn = Apollo.MutationFunction<DeleteMonthlyProfitMutation, DeleteMonthlyProfitMutationVariables>;

/**
 * __useDeleteMonthlyProfitMutation__
 *
 * To run a mutation, you first call `useDeleteMonthlyProfitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMonthlyProfitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMonthlyProfitMutation, { data, loading, error }] = useDeleteMonthlyProfitMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMonthlyProfitMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMonthlyProfitMutation, DeleteMonthlyProfitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMonthlyProfitMutation, DeleteMonthlyProfitMutationVariables>(DeleteMonthlyProfitDocument, options);
      }
export type DeleteMonthlyProfitMutationHookResult = ReturnType<typeof useDeleteMonthlyProfitMutation>;
export type DeleteMonthlyProfitMutationResult = Apollo.MutationResult<DeleteMonthlyProfitMutation>;
export type DeleteMonthlyProfitMutationOptions = Apollo.BaseMutationOptions<DeleteMonthlyProfitMutation, DeleteMonthlyProfitMutationVariables>;
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
export const IdMonthlyProfitDocument = gql`
    mutation IdMonthlyProfit($id: Int!) {
  idMonthlyProfit(data: {id: $id}) {
    id
    profit
    finishDate
  }
}
    `;
export type IdMonthlyProfitMutationFn = Apollo.MutationFunction<IdMonthlyProfitMutation, IdMonthlyProfitMutationVariables>;

/**
 * __useIdMonthlyProfitMutation__
 *
 * To run a mutation, you first call `useIdMonthlyProfitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIdMonthlyProfitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [idMonthlyProfitMutation, { data, loading, error }] = useIdMonthlyProfitMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIdMonthlyProfitMutation(baseOptions?: Apollo.MutationHookOptions<IdMonthlyProfitMutation, IdMonthlyProfitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IdMonthlyProfitMutation, IdMonthlyProfitMutationVariables>(IdMonthlyProfitDocument, options);
      }
export type IdMonthlyProfitMutationHookResult = ReturnType<typeof useIdMonthlyProfitMutation>;
export type IdMonthlyProfitMutationResult = Apollo.MutationResult<IdMonthlyProfitMutation>;
export type IdMonthlyProfitMutationOptions = Apollo.BaseMutationOptions<IdMonthlyProfitMutation, IdMonthlyProfitMutationVariables>;
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
export const NewPasswordDocument = gql`
    mutation NewPassword($token: String!, $password: String!) {
  newPassword(data: {token: $token, password: $password}) {
    field
    message
  }
}
    `;
export type NewPasswordMutationFn = Apollo.MutationFunction<NewPasswordMutation, NewPasswordMutationVariables>;

/**
 * __useNewPasswordMutation__
 *
 * To run a mutation, you first call `useNewPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newPasswordMutation, { data, loading, error }] = useNewPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useNewPasswordMutation(baseOptions?: Apollo.MutationHookOptions<NewPasswordMutation, NewPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewPasswordMutation, NewPasswordMutationVariables>(NewPasswordDocument, options);
      }
export type NewPasswordMutationHookResult = ReturnType<typeof useNewPasswordMutation>;
export type NewPasswordMutationResult = Apollo.MutationResult<NewPasswordMutation>;
export type NewPasswordMutationOptions = Apollo.BaseMutationOptions<NewPasswordMutation, NewPasswordMutationVariables>;
export const ResolverForgetPasswordDocument = gql`
    mutation ResolverForgetPassword($email: String!) {
  resolverForgetPassword(data: {email: $email}) {
    field
    message
  }
}
    `;
export type ResolverForgetPasswordMutationFn = Apollo.MutationFunction<ResolverForgetPasswordMutation, ResolverForgetPasswordMutationVariables>;

/**
 * __useResolverForgetPasswordMutation__
 *
 * To run a mutation, you first call `useResolverForgetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResolverForgetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resolverForgetPasswordMutation, { data, loading, error }] = useResolverForgetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResolverForgetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResolverForgetPasswordMutation, ResolverForgetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResolverForgetPasswordMutation, ResolverForgetPasswordMutationVariables>(ResolverForgetPasswordDocument, options);
      }
export type ResolverForgetPasswordMutationHookResult = ReturnType<typeof useResolverForgetPasswordMutation>;
export type ResolverForgetPasswordMutationResult = Apollo.MutationResult<ResolverForgetPasswordMutation>;
export type ResolverForgetPasswordMutationOptions = Apollo.BaseMutationOptions<ResolverForgetPasswordMutation, ResolverForgetPasswordMutationVariables>;
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
export const UpdateMonthlyProfitDocument = gql`
    mutation UpdateMonthlyProfit($id: Int!, $profit: Int, $finishDate: DateTime) {
  updateMonthlyProfit(data: {id: $id, profit: $profit, finishDate: $finishDate}) {
    field
    message
  }
}
    `;
export type UpdateMonthlyProfitMutationFn = Apollo.MutationFunction<UpdateMonthlyProfitMutation, UpdateMonthlyProfitMutationVariables>;

/**
 * __useUpdateMonthlyProfitMutation__
 *
 * To run a mutation, you first call `useUpdateMonthlyProfitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMonthlyProfitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMonthlyProfitMutation, { data, loading, error }] = useUpdateMonthlyProfitMutation({
 *   variables: {
 *      id: // value for 'id'
 *      profit: // value for 'profit'
 *      finishDate: // value for 'finishDate'
 *   },
 * });
 */
export function useUpdateMonthlyProfitMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMonthlyProfitMutation, UpdateMonthlyProfitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMonthlyProfitMutation, UpdateMonthlyProfitMutationVariables>(UpdateMonthlyProfitDocument, options);
      }
export type UpdateMonthlyProfitMutationHookResult = ReturnType<typeof useUpdateMonthlyProfitMutation>;
export type UpdateMonthlyProfitMutationResult = Apollo.MutationResult<UpdateMonthlyProfitMutation>;
export type UpdateMonthlyProfitMutationOptions = Apollo.BaseMutationOptions<UpdateMonthlyProfitMutation, UpdateMonthlyProfitMutationVariables>;
export const UpdateNumberTelephoneDocument = gql`
    mutation UpdateNumberTelephone($numberTelephone: String!) {
  updateNumberTelephone(data: {numberTelephone: $numberTelephone}) {
    field
    message
  }
}
    `;
export type UpdateNumberTelephoneMutationFn = Apollo.MutationFunction<UpdateNumberTelephoneMutation, UpdateNumberTelephoneMutationVariables>;

/**
 * __useUpdateNumberTelephoneMutation__
 *
 * To run a mutation, you first call `useUpdateNumberTelephoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNumberTelephoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNumberTelephoneMutation, { data, loading, error }] = useUpdateNumberTelephoneMutation({
 *   variables: {
 *      numberTelephone: // value for 'numberTelephone'
 *   },
 * });
 */
export function useUpdateNumberTelephoneMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNumberTelephoneMutation, UpdateNumberTelephoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNumberTelephoneMutation, UpdateNumberTelephoneMutationVariables>(UpdateNumberTelephoneDocument, options);
      }
export type UpdateNumberTelephoneMutationHookResult = ReturnType<typeof useUpdateNumberTelephoneMutation>;
export type UpdateNumberTelephoneMutationResult = Apollo.MutationResult<UpdateNumberTelephoneMutation>;
export type UpdateNumberTelephoneMutationOptions = Apollo.BaseMutationOptions<UpdateNumberTelephoneMutation, UpdateNumberTelephoneMutationVariables>;
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
export const UserInfoIdStaffDocument = gql`
    mutation UserInfoIdStaff($id: Int!) {
  userInfoIdStaff(data: {id: $id}) {
    name
    email
    wallet
    document
    qDeposit
    allDeposit
    qWithdraw
    allWithdraw
    qInvest
    allInvest
    qCompleteInvest
    allCompleteInvest
    qCycleProcess
    allCycleProcess
    qCycleActive
    allCycleActive
    qCycleComplete
    allCycleComplete
    cash
  }
}
    `;
export type UserInfoIdStaffMutationFn = Apollo.MutationFunction<UserInfoIdStaffMutation, UserInfoIdStaffMutationVariables>;

/**
 * __useUserInfoIdStaffMutation__
 *
 * To run a mutation, you first call `useUserInfoIdStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserInfoIdStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userInfoIdStaffMutation, { data, loading, error }] = useUserInfoIdStaffMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserInfoIdStaffMutation(baseOptions?: Apollo.MutationHookOptions<UserInfoIdStaffMutation, UserInfoIdStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserInfoIdStaffMutation, UserInfoIdStaffMutationVariables>(UserInfoIdStaffDocument, options);
      }
export type UserInfoIdStaffMutationHookResult = ReturnType<typeof useUserInfoIdStaffMutation>;
export type UserInfoIdStaffMutationResult = Apollo.MutationResult<UserInfoIdStaffMutation>;
export type UserInfoIdStaffMutationOptions = Apollo.BaseMutationOptions<UserInfoIdStaffMutation, UserInfoIdStaffMutationVariables>;
export const ValidWithdrawDocument = gql`
    mutation ValidWithdraw($token: String!) {
  validWithdraw(data: {token: $token}) {
    field
    message
  }
}
    `;
export type ValidWithdrawMutationFn = Apollo.MutationFunction<ValidWithdrawMutation, ValidWithdrawMutationVariables>;

/**
 * __useValidWithdrawMutation__
 *
 * To run a mutation, you first call `useValidWithdrawMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidWithdrawMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validWithdrawMutation, { data, loading, error }] = useValidWithdrawMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useValidWithdrawMutation(baseOptions?: Apollo.MutationHookOptions<ValidWithdrawMutation, ValidWithdrawMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ValidWithdrawMutation, ValidWithdrawMutationVariables>(ValidWithdrawDocument, options);
      }
export type ValidWithdrawMutationHookResult = ReturnType<typeof useValidWithdrawMutation>;
export type ValidWithdrawMutationResult = Apollo.MutationResult<ValidWithdrawMutation>;
export type ValidWithdrawMutationOptions = Apollo.BaseMutationOptions<ValidWithdrawMutation, ValidWithdrawMutationVariables>;
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
export const AllEmailDocument = gql`
    query AllEmail {
  allEmail {
    id
    name
    email
    message
    createdAt
  }
}
    `;

/**
 * __useAllEmailQuery__
 *
 * To run a query within a React component, call `useAllEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllEmailQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllEmailQuery(baseOptions?: Apollo.QueryHookOptions<AllEmailQuery, AllEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllEmailQuery, AllEmailQueryVariables>(AllEmailDocument, options);
      }
export function useAllEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllEmailQuery, AllEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllEmailQuery, AllEmailQueryVariables>(AllEmailDocument, options);
        }
export type AllEmailQueryHookResult = ReturnType<typeof useAllEmailQuery>;
export type AllEmailLazyQueryHookResult = ReturnType<typeof useAllEmailLazyQuery>;
export type AllEmailQueryResult = Apollo.QueryResult<AllEmailQuery, AllEmailQueryVariables>;
export const AllMonthlyProfitDocument = gql`
    query AllMonthlyProfit {
  allMonthlyProfit {
    id
    finishDate
    createdAt
    updatedAt
    profit
  }
}
    `;

/**
 * __useAllMonthlyProfitQuery__
 *
 * To run a query within a React component, call `useAllMonthlyProfitQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMonthlyProfitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMonthlyProfitQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllMonthlyProfitQuery(baseOptions?: Apollo.QueryHookOptions<AllMonthlyProfitQuery, AllMonthlyProfitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllMonthlyProfitQuery, AllMonthlyProfitQueryVariables>(AllMonthlyProfitDocument, options);
      }
export function useAllMonthlyProfitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMonthlyProfitQuery, AllMonthlyProfitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllMonthlyProfitQuery, AllMonthlyProfitQueryVariables>(AllMonthlyProfitDocument, options);
        }
export type AllMonthlyProfitQueryHookResult = ReturnType<typeof useAllMonthlyProfitQuery>;
export type AllMonthlyProfitLazyQueryHookResult = ReturnType<typeof useAllMonthlyProfitLazyQuery>;
export type AllMonthlyProfitQueryResult = Apollo.QueryResult<AllMonthlyProfitQuery, AllMonthlyProfitQueryVariables>;
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
    numberTelephone
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