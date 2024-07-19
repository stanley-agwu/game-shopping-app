import ArrowTop from './arrow-top.svg';

interface ScrollTopProps {
  handleScroll: () => void;
  shouldDisplay: boolean;
}

const ScrollTop = ({ handleScroll, shouldDisplay = false }: ScrollTopProps) => (
  <button onClick={handleScroll} aria-label="Scroll top">
    <img
      src={ArrowTop}
      alt="Scroll top"
      style={{ display: shouldDisplay ? 'block' : 'none' }}
      className="w-14 h-14 p-3 m-3 bg-[#1E293B] animate-bounce rounded-full z-10 cursor-pointer fixed right-0 bottom-10"
    />
  </button>
);

export default ScrollTop;
