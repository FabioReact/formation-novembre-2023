import Spinner from "./Spinner";

type Props = {
  isLoading: boolean;
  children: React.ReactNode;
};

const Loading = ({ children, isLoading }: Props) => {
  if (isLoading) return <Spinner />;
  return children;
};

export default Loading;
