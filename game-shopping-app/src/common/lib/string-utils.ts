// eslint-disable-next-line @typescript-eslint/ban-types
export const format = <T extends string>(args: IArguments, match: String): T => {
  let result = match as T;

  for (let idx = 0; idx < args.length; idx += 1) {
    const pattern = new RegExp(`\\{${idx}\\}`, 'gm');
    if (args[idx]) {
      const value = (args[idx] as string).toString();
      result = result.replace(pattern, value) as T;
    }
  }
  return result;
};