import {PreviewCardProps} from "../../shared/types";

export type CardProps = PreviewCardProps & {
  className?: string;
  widthImg?: number;
  heightImg?: number;
  onListItemHover?: (title: string) => void;
}
