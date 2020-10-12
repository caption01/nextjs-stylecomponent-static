import styled from "styled-components";
import { Button } from "antd";

const TitleIndex = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const NextPage = () => {
  return (
    <Button type="primary">
      <a href="/about">about page</a>
    </Button>
  );
};

export default function Home() {
  return (
    <div>
      <TitleIndex>Index pages</TitleIndex>;
      <NextPage />
    </div>
  );
}
