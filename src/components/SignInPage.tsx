import React, { useState } from "react";
import { Button, Radio, RadioChangeEvent, Tabs } from "antd";
import styled from "@emotion/styled";
import {
  GithubOutlined,
  GitlabOutlined,
  LockOutlined,
} from "@ant-design/icons";

import CodeantLogo from "../assets/codeant-logo.svg";
import AnalyticsImg from "../assets/analytics.svg";
import SmokePng from "../assets/smoke.svg";

const Card = styled.div`
  max-width: 512px;
  min-width: 380px;
  height: 100%;
  max-height: 400px;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;

const Header = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  height: 2rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: semibold;
  margin: 0;
  white-space: nowrap;
`;

const SignInButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const StyledButton = styled(Button)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 40px;
`;

const PolicyText = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: gray;

  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

type Tab = "saas" | "self-hosted";

const SignInPage: React.FC = () => {
  const [tab, setTab] = useState<Tab>("saas");

  const changeTab = (e: RadioChangeEvent) => {
    setTab(e.target.value);
  };

  const tabItems = [
    {
      label: ``,
      key: "saas",
      children: (
        <SignInButtons>
          <StyledButton icon={<GithubOutlined />} block size="large">
            Sign in with GitHub
          </StyledButton>
          <StyledButton
            icon={<Icon src="/bitbucket-icon.svg" />}
            block
            size="large"
          >
            Sign in with Bitbucket
          </StyledButton>
          <StyledButton
            icon={<Icon src="/azure-devops-icon.svg" />}
            block
            size="large"
          >
            Sign in with Azure Devops
          </StyledButton>
          <StyledButton icon={<GitlabOutlined />} block size="large">
            Sign in with GitLab
          </StyledButton>
        </SignInButtons>
      ),
    },
    {
      label: ``,
      key: "self-hosted",
      children: (
        <SignInButtons>
          <StyledButton
            icon={<Icon src="/bitbucket-icon.svg" />}
            block
            size="large"
          >
            Self Hosted GitLab
          </StyledButton>
          <StyledButton icon={<LockOutlined />} block size="large">
            Sign in with SSO
          </StyledButton>
        </SignInButtons>
      ),
    },
  ];

  return (
    <Container>
      <LeftSide>
        <img src={AnalyticsImg} alt="" style={{ zIndex: 50 }} />
        <img
          src={SmokePng}
          alt=""
          style={{ position: "fixed", bottom: 6, left: 6 }}
        />
      </LeftSide>
      <RightSide>
        <Card>
          <Header>
            <Logo src={CodeantLogo} alt="CodeAnt AI" />
            <Title style={{ marginBlock: "1rem", marginTop: "0.7rem" }}>
              Welcome to CodeAnt AI
            </Title>
          </Header>

          <Radio.Group
            value={tab}
            onChange={changeTab}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Radio.Button
              style={{
                color: tab === "saas" ? "white" : "black",
                background: tab === "saas" ? "#1570EF" : "",
              }}
              value="saas"
            >
              SaaS
            </Radio.Button>
            <Radio.Button
              style={{
                color: tab === "self-hosted" ? "white" : "black",
                background: tab === "self-hosted" ? "#1570EF" : "",
              }}
              value="self-hosted"
            >
              Self Hosted
            </Radio.Button>
          </Radio.Group>

          <Tabs activeKey={tab} items={tabItems} />
        </Card>

        <PolicyText>
          By signing up you agree to the <a href="#">Privacy Policy</a>
        </PolicyText>
      </RightSide>
    </Container>
  );
};

export default SignInPage;

const Container = styled.div`
  // border: 1px solid blue;

  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const RightSide = styled.div`
  // border: 1px solid red;

  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  flex: 1;
`;

const LeftSide = styled.div`
  // border: 1px solid red;

  @media (max-width: 1280px) {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: white;
  flex: 1;
`;
