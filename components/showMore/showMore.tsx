import { useMemo, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface ShowMoreInterface {
  text: string;
  defaultShowMoreMode: boolean;
  maxCharacter: number;
  mobileMaxCharacter?: number;
  className?: string;
  onCustomClick?: (arg: boolean, elem: object) => void;
}

const ShowMore = ({
  text,
  defaultShowMoreMode,
  maxCharacter,
  mobileMaxCharacter,
  className,
  onCustomClick,
}: ShowMoreInterface) => {
  const element = useRef();
  const [showMore, setShowMore] = useState(defaultShowMoreMode);
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const currentMaxCharacter = useMemo(() => {
    if (mobileMaxCharacter) {
      return isMobile ? mobileMaxCharacter : maxCharacter;
    }

    return maxCharacter;
  }, [isMobile]);
  const isShowMoreSupport = useMemo(() => text.length > currentMaxCharacter, [
    currentMaxCharacter,
    text,
  ]);
  const content = useMemo(() => {
    if (isShowMoreSupport) {
      return showMore ? `${text.substr(0, currentMaxCharacter)} ...` : text;
    }

    return text;
  }, [currentMaxCharacter, text, showMore]);

  const onToggleContent = () => {
    setShowMore(!showMore);

    onCustomClick && onCustomClick(showMore, element.current);
  };

  return (
    <p ref={element} className={`show-more ${className}`}>
      {content}{' '}
      {isShowMoreSupport && (
        <button onClick={onToggleContent} className="show-more__btn">
          {showMore ? 'קרא עוד' : 'קבץ'}
        </button>
      )}
      <style jsx>{`
        .show-more__btn {
          cursor: pointer;
          border: none;
          background: none;
          text-decoration: underline;
          transition: opacity 0.2s;
        }

        .show-more__btn:hover {
          opacity: 0.7;
        }
      `}</style>
    </p>
  );
};

ShowMore.defaultProps = {
  mobileMaxCharacter: null,
};

export default ShowMore;
