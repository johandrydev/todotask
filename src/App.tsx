import AuthProvider from "./auth/AuthContext";
import { AppRouter } from "./routers/AppRouter";
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.8base.com/cktkw1b2j01st08k2fgo6h3d0",
  headers: {
    Authorization: 'Bearer a4b0156d-72f8-446f-bfb4-893f59a84974'
  }
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ApolloProvider>
  )
};
export default App;
