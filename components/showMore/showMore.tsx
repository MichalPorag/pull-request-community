import { useMemo, useRef, useState } from 'react';

interface ShowMoreInterface {
  text: string;
  defaultShowMoreMode: boolean;
  maxCharectars: number;
  className?: string;
  onCustomClick?: (arg: boolean, elem: object) => void;
}

const ShowMore = ({
  text,
  defaultShowMoreMode,
  maxCharectars,
  className,
  onCustomClick,
}: ShowMoreInterface) => {
  const element = useRef();
  const [showMore, setShowMore] = useState(defaultShowMoreMode);
  const isShowMoreSupport = useMemo(() => text.length > maxCharectars, [text]);
  const content = useMemo(() => {
    if (isShowMoreSupport) {
      return showMore ? `${text.substr(0, maxCharectars)} ...` : text;
    }

    return text;
  }, [text, showMore]);

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

export default ShowMore;
