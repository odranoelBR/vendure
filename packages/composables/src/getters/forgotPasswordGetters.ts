import { ForgotPasswordGetters } from '@vue-storefront/core';
import { ForgotPasswordResult } from '../types';

// TODO: Adjust when working with ForgotPassword. This was just copy/paste from Commercetools repo but it will work similarly.
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getResetPasswordToken = (result: ForgotPasswordResult) => result?.resetPasswordResult?.data?.customerCreatePasswordResetToken?.value;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isPasswordChanged = (result: ForgotPasswordResult) => Boolean(result?.setNewPasswordResult?.data?.customerResetPassword?.email);

const forgotPasswordGetters: ForgotPasswordGetters<ForgotPasswordResult> = {
  getResetPasswordToken,
  isPasswordChanged
};

export default forgotPasswordGetters;
