import { api } from "@/lib/api";
import type {
  LoginResponse,
  RegisterResponse,
  VerifyOtpResponse,
  MessageResponse,
} from "@/types/auth.types";
import type {
  LoginInput,
  RegisterInput,
  VerifyOtpInput,
  ForgotPasswordInput,
  ResetPasswordInput,
} from "@/lib/validations/auth.schemas";

export const authApi = {
  login: (data: LoginInput) => api.post<LoginResponse>("/auth/login", data),

  register: (data: Omit<RegisterInput, "confirmPassword">) =>
    api.post<RegisterResponse>("/auth/register", data),

  verifyOtp: (data: VerifyOtpInput) =>
    api.post<VerifyOtpResponse>("/auth/verify-otp", data),

  resendOtp: (email: string) =>
    api.post<MessageResponse>("/auth/resend-otp", { email }),

  forgotPassword: (data: ForgotPasswordInput) =>
    api.post<MessageResponse>("/auth/forgot-password", data),

  resetPassword: (data: Omit<ResetPasswordInput, "confirmPassword">) =>
    api.post<MessageResponse>("/auth/reset-password", data),

  refresh: () =>
    api.post<{ success: true; accessToken: string }>("/auth/refresh", {}),

  logout: (refreshToken?: string) =>
    api.post<MessageResponse>("/auth/logout", { refreshToken }),
};
