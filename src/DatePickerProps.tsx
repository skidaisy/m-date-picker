interface DatePickerProps {
  date?: any;
  defaultDate?: any;
  minDate?: any;
  maxDate?: any;
  mode?: string;
  disabled?: boolean;
  locale?: any;
  minuteStep?: number;
  formatMonth?: (month: number, date?: any) => any;
  formatDay?: (day: number, date?: any) => any;
  onDateChange?: (date: any) => void;
  /** web only */
  prefixCls?: string;
  rootNativeProps?: {};
  /** web only */
  pickerPrefixCls?: string;
  /** web only */
  className?: string;
}

export default DatePickerProps;
