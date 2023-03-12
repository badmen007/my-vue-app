import router from '@/router';
import noProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/auth';

noProgress.configure({ showSpinner: false });

const whiteList = ['/login'];

router.beforeEach((to) => {
  noProgress.start();
  const hasToken = getToken();
  if (hasToken) {
    // 如果有token代表已经登录
    if (to.path === '/login') {
      noProgress.done();
      return {
        path: '/',
        replace: true
      }
    }
    noProgress.done();
    return true;
  } else {
    if (whiteList.includes(to.path)) {
      noProgress.done();
      return true;  
    }
    noProgress.done();
    return {
      path: '/login',
      query: {
        redirect: to.path,
        ...to.query
      }
    }
  }
})

router.afterEach(() => {
  noProgress.done();
})
