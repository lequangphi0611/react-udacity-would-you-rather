import { useRouter } from 'next/router';

const useMatchRoute = ({ url }: { url: string }) => {
  const { asPath, pathname } = useRouter();

  let matched = false;

  if(url.includes('?')) {
    matched = asPath === url;
  } else {
    matched = pathname === url;
  }

  return {
    isActivated: matched,
  };
};

export default useMatchRoute;
