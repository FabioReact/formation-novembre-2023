const StylingComponent = () => {
  const headingStyle = {
    color: "red",
  };

  return (
    <section>
      <h1 style={headingStyle}>StylingComponent with style property</h1>
      <pre>
        <code>{JSON.stringify(headingStyle, null, 2)}</code>
      </pre>
    </section>
  );
};

export default StylingComponent;
