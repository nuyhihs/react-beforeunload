import { useEffect } from 'react';
import Router from 'next/router';

const message = '系統將不會儲存您所做的變更，確定要離開嗎？';

const useBeforeunload = (unsavedChanges) => {
  useEffect(() => {
    const routeChangeStart = url => {
      if (Router.asPath !== url && unsavedChanges && !confirm(message)) {
        Router.events.emit('routeChangeError');
        Router.replace(Router, Router.asPath);
        throw 'Abort route change. Please ignore this error.';
      }
    };

    const beforeunload = e => {
      if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = message;
        return message;
      }

      return undefined;
    };

    window.addEventListener('beforeunload', beforeunload);
    Router.events.on('routeChangeStart', routeChangeStart);

    return () => {
      window.removeEventListener('beforeunload', beforeunload);
      Router.events.off('routeChangeStart', routeChangeStart);
    };
  }, [unsavedChanges]);
};

export default useBeforeunload;
