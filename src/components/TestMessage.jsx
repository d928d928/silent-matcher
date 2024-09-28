export const TestMessage = (props) => {
    const { color, children } = props;
    const contentStyleA = {
        color: color,
        fontSize: "18px"
      };

      return <p style={contentStyleA}>{children}</p>;
};