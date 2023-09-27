export const Name = () => {
  const wordPics = [
    "/images/home/word/word_s.png",
    "/images/home/word/word_t.png",
    "/images/home/word/word_a.png",
    "/images/home/word/word_r.png",
    "/images/home/word/word_l.png",
    "/images/home/word/word_i.png",
    "/images/home/word/word_k.png",
    "/images/home/word/word_e.png",
  ];
  const wordPicsActive = [
    "/images/home/word/active/word_s.png",
    "/images/home/word/active/word_t.png",
    "/images/home/word/active/word_a.png",
    "/images/home/word/active/word_r.png",
    "/images/home/word/active/word_l.png",
    "/images/home/word/active/word_i.png",
    "/images/home/word/active/word_k.png",
    "/images/home/word/active/word_e.png",
  ];
  return (
    <div className="absolute ml-[-19%] w-[38vw] h-6 text-center left-2/4 top-[33%] group">
      <div className="hy-name-content hy-name-active relative flex items-center">
        {wordPics.map((i) => {
          return (
            <img
              src={i}
              alt=""
              key={i}
              className="inline-block h-6 opacity-100 group-hover:opacity-0 mr-[10%] transition-opacity"
            />
          );
        })}
      </div>
      <div className="hy-name-content absolute top-0 left-0 right-0 flex items-center">
        {wordPicsActive.map((i) => {
          return (
            <img
              src={i}
              alt=""
              key={i}
              className="inline-block h-6 opacity-0 group-hover:opacity-100 mr-[10%] transition-opacity"
            />
          );
        })}
      </div>
    </div>
  );
};
