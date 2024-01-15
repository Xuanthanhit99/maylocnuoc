import { Image } from "antd";
import React, { FC } from "react";
type Props = {
  item: string;
};
const CustomUpload: FC<Props> = ({ item }) => {
  // const [fileList, setFileList] = useState<string>(item);
  return <Image src={item} />;
};

export default CustomUpload;
