import React from 'react';
import ReactDOM from 'react-dom';
import RcPagination from 'rc-pagination';
import zhCN from 'rc-pagination/lib/locale/zh_CN';
import classNames from 'classnames';
import injectLocale from '../locale-provider/injectLocale';
import Select from '../select';
import MiniSelect from './MiniSelect';

export interface PaginationProps {
  total: number;
  defaultCurrent?: number;
  current?: number;
  defaultPageSize?: number;
  pageSize?: number;
  onChange?: (page: number, pageSize: number) => void;
  showSizeChanger?: boolean;
  pageSizeOptions?: string[];
  onShowSizeChange?: (current: number, size: number) => void;
  showQuickJumper?: boolean;
  quickJumper?: string;
  showTotal?: (total: number) => React.ReactNode;
  size?: string;
  simple?: boolean;
  style?: React.CSSProperties;
  locale?: Object;
  className?: string;
  prefixCls?: string;
  selectPrefixCls?: string;
}

abstract class Pagination extends React.Component<PaginationProps, any> {
  static defaultProps = {
    prefixCls: 'ant-pagination',
    selectPrefixCls: 'ant-select',
    quickJumper: '确定',
  };

  private pagination;

  abstract getLocale();

  _handleQuickJumper = () => {
    let value;
    try {
      value = parseInt(ReactDOM.findDOMNode(this.pagination).getElementsByTagName('input')[0].value, 10);
    } catch (error) {
      value = undefined;
    }

    if (value !== undefined) {
      this.pagination._handleChange(value);
    }
  }

  render() {
    const { className, size, prefixCls, showQuickJumper, quickJumper, ...restProps } = this.props;
    const locale = this.getLocale();
    const isSmall = size === 'small';
    const quickJumperButton = (
      <button
        className={classNames(`${prefixCls}-quick-jumper-button`, { mini: isSmall })}
        onClick={this._handleQuickJumper}
      >
      {quickJumper}
      </button>
    );

    return (
      <div className={classNames(className, `${prefixCls}-wrapper`)}>
        <RcPagination
          {...restProps}
          ref={ref => { this.pagination = ref; }}
          className={classNames({ mini: isSmall })}
          selectComponentClass={isSmall ? MiniSelect : Select}
          locale={locale}
          prefixCls={prefixCls}
          showQuickJumper={showQuickJumper}
        />
        {showQuickJumper ? quickJumperButton : null}
      </div>
    );
  }
}

const injectPaginationLocale = injectLocale('Pagination', zhCN);
export default injectPaginationLocale<PaginationProps>(Pagination as any);
