import React from 'react';
import { Checkbox } from 'antd';
// import { CheckboxValueType } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import Item, { IWidghtProps } from './Item';

const WidgetCheckbox = (props: IWidghtProps) => {
  const { value, idPath, onChange, className, placeholder, customerEvent, componentConfig } = props;
  // 类型还没弄好
  // const { data, setting } = componentConfig;
  // if (Object.prototype.toString.call(data) !== '[object Object]') {
  //   throw new Error(`${idPath} data config error`);
  // }
  // const data1: { [key: string]: any } = antdConfig.data;
  const handleChange = (value: CheckboxValueType[]) => {
    // console.log(value);
    onChange(value);
  };
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  return (
    <Item {...props}>
      <Checkbox.Group options={plainOptions} onChange={handleChange} />
    </Item>
  );
};
export default React.memo(WidgetCheckbox, (nextProps, prevProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
