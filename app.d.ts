type LazyImageProps = {
  src: string;
};

type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNativeTypes;

type IFoxImage = { id: string; url: string };
