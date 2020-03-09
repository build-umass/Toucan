import cookie from 'js-cookie'
import Login from './signup'
import Router from 'next/router'
function PrivatePage({ loggedIn, ...props }) {
  // some hooks here that need to be before the condition
  React.useEffect(() => {
    if (loggedIn) return; // do nothing if the user is logged in
    Router.replace("/protected", "/signup", { shallow: true });
  }, [loggedIn]);

  if (!loggedIn) return <Login />;
  // the JSX the private page will render
}

PrivatePage.getInitialProps = async context => {
  const { session } = cookie.get("session")==="user"
  if (!session) return { loggedIn: false };
  // the code required for your private page
};

export default PrivatePage;