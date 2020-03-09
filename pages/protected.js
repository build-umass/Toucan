import Cookies from 'js-cookie'
import Signup from './signup'
import Router from 'next/router'
import Index from './index'

function PrivatePage({ loggedIn, ...props }) {
  // some hooks here that need to be before the condition
  React.useEffect(() => {
    Cookies.set("password", "11");
    console.log(loggedIn);
    if (loggedIn) return <Index />; // do nothing if the user is logged in
    Router.replace("/protected", "/signup", { shallow: true });
  }, [loggedIn]);

  if (!loggedIn) return <Signup />;
  // the JSX the private page will render
}

PrivatePage.getInitialProps = async context => {
  console.log(Cookies.get("password"));
  const { session } = Cookies.get("session")==="user"
  if (!session) return { loggedIn: false };
  // the code required for your private page
};

export default PrivatePage;