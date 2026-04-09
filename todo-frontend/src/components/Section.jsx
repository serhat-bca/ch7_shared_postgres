const Section = ({ componentTitle, children }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "0 10px",
        borderRadius: "20px",
        marginTop: "5px",
      }}
    >
      <h3>{componentTitle}</h3>
      {children}
    </div>
  );
};

export default Section;
