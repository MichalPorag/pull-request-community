import colors from '../../styles/colors';

const BasicButton = ({ children, className }: BasicButtonProps) => {
  return (
    <>
      <button className={`${className} BasicButton`}>{children}</button>
      <style jsx>{`
        .BasicButton {
          cursor: pointer;
          color: white;
          font-size: 2.4rem;
          border: none;
          border-radius: 30px;
          background-color: ${colors.secondary_color};
          align-items: center;
          padding: 10px 15px;
          transition: all 0.3s;
        }

        .BasicButton:hover {
          filter: brightness(1.2);
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
};

interface BasicButtonProps {
  children: object | string;
  className: string;
}

BasicButton.defaultProps = {
  className: '',
};

export default BasicButton;
