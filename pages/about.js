import styled from "styled-components";
import { useRouter } from "next/router";

import CardIndex from "../component/card";

const TitleAbout = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const BeforePage = () => {
  const router = useRouter();
  const href = "/";

  return (
    <a href={href} onClick={() => router.push(href)}>
      about page
    </a>
  );
};

export default function About() {
  return (
    <div>
      <div>
        <TitleAbout>About Pages</TitleAbout>;
        <BeforePage />
      </div>
      <div>
        <CardIndex />
      </div>
    </div>
  );
}
