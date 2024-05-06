import * as S from "./ButtonStyled";

const Button = ({ children, event, background, ...props }) => {
  return (
    <S.Button
      style={{
        background: `linear-gradient(200deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(180, 180, 180, 0.05) 100%), ${background}`,
        ...props,
      }}
      onClick={event}
    >
      {children}
    </S.Button>
  );
};

export default Button;
