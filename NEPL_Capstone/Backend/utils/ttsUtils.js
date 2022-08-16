export const canPlayAudioFormat = (mimeType, audioElement) => {
  if (!audioElement) {
    audioElement = document.createElement("audio");
    console.log("first if");
  }

  if (audioElement) {
    console.log("second if");
    return (
      typeof audioElement.canPlayType === "function" &&
      audioElement.canPlayType(mimeType) !== ""
    );
  }
  return false;
};

export const getSearchParams = () => {
  if (typeof URLSearchParams === "function") {
    return new URLSearchParams();
  }

  const SearchParams = function SearchParams() {};

  SearchParams.prototype.set = function set(key, value) {
    this[key] = value;
  };

  SearchParams.prototype.toString = function toString() {
    return Object.keys(this)
      .map((v) => `${encodeURI(v)}=${encodeURI(this[v])}`)
      .join("&");
  };

  return new SearchParams();
};
