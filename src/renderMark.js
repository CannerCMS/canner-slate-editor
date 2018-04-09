// @flow
import commonMark from "@canner/slate-editor-renderer/lib/commonMark";

export default (opts: any) => {
  return (props: any) => {
    const { mark } = props;
    switch (mark.type) {
      case opts.BOLD:
        return commonMark("strong")(props);
      case opts.CODE:
        return commonMark("code")(props);
      case opts.ITALIC:
        return commonMark("i")(props);
    }
  };
};
