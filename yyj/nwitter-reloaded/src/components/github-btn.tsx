import { GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import { styled } from "styled-components";
import { auth } from "../firebase";
const Button = styled.span`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GithubButton() {
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Button onClick={onClick}>
      <Logo src="/github-logo.svg" />
      Continue with GitHub
    </Button>
  );
}