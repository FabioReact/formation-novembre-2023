type Props = {
  content: string;
  color?: string;
  children?: React.ReactNode
};

const Paragraph = (props: Props) => {
  return (
    <div
      className="textCenter"
      style={{
        color: props.color,
      }}
    >
      {props.content} - {props.children}
    </div>
  );
};

export default Paragraph;
