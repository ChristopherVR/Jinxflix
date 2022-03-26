import tw, { styled } from 'twin.macro';
import { NavContainerProps } from './Nav';

const NavContainer = styled.div`
  ${tw`
    flex
    justify-between
    p-4
    fixed
    top-0
    w-full
    transition-all
    z-10
  `}

  ${(props: NavContainerProps) =>
    props.dark ? tw`bg-black` : tw`bg-transparent`}

  img {
    ${tw`
      h-8
      mr-8
    `}
  }
`;

export default NavContainer;
