import { Layout } from "antd";
import UserProfile from "./components/UserProfile";
import Skills from "./components/Skills";
const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content style={{ padding: "0 50px", minHeight: "100vh" }}>
        <UserProfile />
        <Skills />
      </Content>
    </Layout>
  );
}

export default App;
