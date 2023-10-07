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
    <div className="absolute flex justify-center items-center group top-[33%] left-0 right-0">
      <div className="hy-name-content hy-name-active relative flex items-center space-x-12">
        {wordPics.map((i) => {
          return (
            <img
              src={i}
              alt=""
              key={i}
              className="inline-block h-8 opacity-100 group-hover:opacity-0 transition-opacity"
            />
          );
        })}
      </div>
      <div className="hy-name-content absolute top-0 left-0 right-0 flex items-center justify-center space-x-12 ">
        {wordPicsActive.map((i) => {
          return (
            <img
              src={i}
              alt=""
              key={i}
              className="inline-block h-8 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          );
        })}
      </div>
    </div>
  );
};
