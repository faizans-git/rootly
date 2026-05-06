export interface AuthTokens {
  accessToken: string;
}

export interface LoginResponse {
  success: true;
  accessToken: string;
}

export interface RegisterResponse {
  success: true;
  message: string;
}

export interface VerifyOtpResponse {
  success: true;
  accessToken: string;
}

export interface MessageResponse {
  success: true;
  message: string;
}

export interface AuthUser {
  userId: string;
  email: string;
  role: string;
  name?: string;
}

export interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface PendingVerification {
  email: string;
}
