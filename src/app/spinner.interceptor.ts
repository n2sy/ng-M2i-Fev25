import { HttpInterceptorFn } from '@angular/common/http';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Je suis dans le spinner interceptor');

  return next(req);
};
