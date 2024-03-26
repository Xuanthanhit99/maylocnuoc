import { Button, Image, Upload, UploadProps, message } from "antd";
import React, { FC, useState } from "react";
import { UploadOutlined } from '@ant-design/icons';
import { uuid } from "uuidv4";
import axios from "axios";

type Props = {
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const CustomUpload: FC<Props> = ({ label,onChange }) => {

  return  (
    <div className="flex flex-col my-2">
  <label htmlFor="avatar">{label}</label>
  <input
  type="file"
  id="avatar"
  name="avatar"
  accept="image/*"
  placeholder=""
  className="my-1"
  onChange={(e) => onChange(e)}
/></div>)
};

export default CustomUpload;
