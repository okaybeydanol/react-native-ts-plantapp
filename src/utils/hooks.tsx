// Type
import {GeneralError} from '@src/hooks/types';

// Get error message from various error types, including customized translation handling.
export const getErrorMessage = (error: GeneralError): string => {
  if ('status' in error && typeof error.status === 'number') {
    const errorData = error.data as {message: string; status: number};
    return errorData?.message || 'UNKNOWN_ERROR';
  } else if ('status' in error && typeof error.status === 'string') {
    return error.status;
  }
  return error.message || 'UNKNOWN_ERROR';
};
