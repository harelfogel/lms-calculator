import { PermissionsMap, PermissionKey } from "./permissions";

export const decimalToPermissions = (decimal: bigint): string[] => {
  let permissions: string[] = [];
  for (let key in PermissionsMap) {
    if (decimal & PermissionsMap[key as PermissionKey].action) {
      permissions.push(PermissionsMap[key as PermissionKey].title);
    }
  }
  return permissions;
};

export const permissionsToDecimal = (actions: string[]): bigint => {
  let decimal = BigInt(0);
  actions.forEach((action) => {
    const upperAction = action.toUpperCase() as PermissionKey;
    if (PermissionsMap[upperAction]) {
      decimal |= PermissionsMap[upperAction].action;
    }
  });
  return decimal;
};
