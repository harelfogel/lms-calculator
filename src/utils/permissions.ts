export const PermissionsMap = {
  ADD_USER: { action: BigInt(1), title: "ADD_USER" },
  ADD_SUPERVISOR: { action: BigInt(2), title: "ADD_SUPERVISOR" },
  ADD_LEARNER: { action: BigInt(4), title: "ADD_LEARNER" },
  EDIT_USER: { action: BigInt(8), title: "EDIT_USER" },
  EDIT_SUPERVISOR: { action: BigInt(16), title: "EDIT_SUPERVISOR" },
  EDIT_LEARNER: { action: BigInt(32), title: "EDIT_LEARNER" },
  DELETE_USER: { action: BigInt(64), title: "DELETE_USER" },
  DELETE_SUPERVISOR: { action: BigInt(128), title: "DELETE_SUPERVISOR" },
  DELETE_LEARNER: { action: BigInt(256), title: "DELETE_LEARNER" },
  VIEW_USERS: { action: BigInt(512), title: "VIEW_USERS" },
  VIEW_USERS_SUPERVISOR: {
    action: BigInt(1024),
    title: "VIEW_USERS_SUPERVISOR",
  },
  VIEW_USERS_LEARNER: { action: BigInt(2048), title: "VIEW_USERS_LEARNER" },
  PREVIEW_USERS: { action: BigInt(4096), title: "PREVIEW_USERS" },
  PREVIEW_USERS_SUPERVISOR: {
    action: BigInt(8192),
    title: "PREVIEW_USERS_SUPERVISOR",
  },
  PREVIEW_USERS_LEARNER: {
    action: BigInt(16384),
    title: "PREVIEW_USERS_LEARNER",
  },
  PREVIEW_PROFILE: { action: BigInt(32768), title: "PREVIEW_PROFILE" },
  EDIT_USER_PERSONAL_EXCLUDING_EMAIL_PASSWORD: {
    action: BigInt(65536),
    title: "EDIT_USER_PERSONAL_EXCLUDING_EMAIL_PASSWORD",
  },
  EDIT_USER_PERSONAL_EMAIL: {
    action: BigInt(131072),
    title: "EDIT_USER_PERSONAL_EMAIL",
  },
  EDIT_USER_PERSONAL_PASSWORD: {
    action: BigInt(262144),
    title: "EDIT_USER_PERSONAL_PASSWORD",
  },
  EDIT_USER_PROFESSIONAL: {
    action: BigInt(524288),
    title: "EDIT_USER_PROFESSIONAL",
  },
  EDIT_OWN_PERSONAL_EXCLUDING_EMAIL_PASSWORD: {
    action: BigInt(1048576),
    title: "EDIT_OWN_PERSONAL_EXCLUDING_EMAIL_PASSWORD",
  },
  ADD_LESSON: { action: BigInt(2097152), title: "ADD_LESSON" },
  DELETE_OWN_LESSON: { action: BigInt(4194304), title: "DELETE_OWN_LESSON" },
  DELETE_ANY_LESSON: { action: BigInt(8388608), title: "DELETE_ANY_LESSON" },
  EDIT_OWN_LESSON: { action: BigInt(16777216), title: "EDIT_OWN_LESSON" },
  EDIT_ANY_LESSON: { action: BigInt(33554432), title: "EDIT_ANY_LESSON" },
  VIEW_ALL_LESSONS: { action: BigInt(67108864), title: "VIEW_ALL_LESSONS" },
  VIEW_LESSON: { action: BigInt(134217728), title: "VIEW_LESSON" },
  ADD_MODULE: { action: BigInt(268435456), title: "ADD_MODULE" },
  EDIT_MODULE: { action: BigInt(536870912), title: "EDIT_MODULE" },
  VIEW_MODULE: { action: BigInt(1073741824), title: "VIEW_MODULE" },
  VIEW_ALL_MODULES: { action: BigInt(2147483648), title: "VIEW_ALL_MODULES" },
  VIEW_OWN_MODULE: { action: BigInt(4294967296), title: "VIEW_OWN_MODULE" },
} as const;

export type PermissionKey = keyof typeof PermissionsMap;
