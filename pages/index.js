import styled from "styled-components";

const TitleIndex = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const NextPage = () => {
  return <a href="/about">about page</a>;
};

export default function Home() {
  return (
    <div>
      <TitleIndex>Index pages</TitleIndex>;
      <NextPage />
    </div>
  );
}
