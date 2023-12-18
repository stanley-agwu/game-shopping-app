import { format } from './string-utils';

String.prototype.format = function (): string {
  // eslint-disable-next-line prefer-rest-params
  const args: IArguments = arguments;
  return format(args, this);
};
