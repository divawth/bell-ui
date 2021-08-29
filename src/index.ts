import Menu from './component/menu/Menu'
import MenuItem from './component/menu/MenuItem'
import MenuGroup from './component/menu/MenuGroup'
import SubMenu from './component/menu/SubMenu'

import Icon from './component/icon/Icon'
import Text from './component/text/Text'
import Drawer from './component/drawer/Drawer'

import Breadcrumb from './component/breadcrumb/Breadcrumb'
import BreadcrumbItem from './component/breadcrumb/BreadcrumbItem'

import Button from './component/button/Button'
import ButtonGroup from './component/button/ButtonGroup'
import Input from './component/input/Input'
import InputNumber from './component/input-number/InputNumber'
import Textarea from './component/textarea/Textarea'
import Radio from './component/radio/Radio'
import RadioGroup from './component/radio/RadioGroup'
import Checkbox from './component/checkbox/Checkbox'
import CheckboxGroup from './component/checkbox/CheckboxGroup'
import Switch from './component/switch/Switch'
import Slider from './component/slider/Slider'
import Select from './component/select/Select'
import Option from './component/select/Option'
import OptionGroup from './component/select/OptionGroup'

import Pagination from './component/pagination/Pagination'
import Upload from './component/upload/Upload'

import Alert from './component/alert/Alert'
import Article from './component/article/Article'
import Spin from './component/spin/Spin'
import BackTop from './component/backtop/BackTop'
import Avatar from './component/avatar/Avatar'
import Badge from './component/badge/Badge'
import DatePicker from './component/date-picker/DatePicker'
import TimePicker from './component/time-picker/TimePicker'
import ImagePicker from './component/image-picker/ImagePicker'

import Tooltip from './component/tooltip/Tooltip'

import Collapse from './component/collapse/Collapse'
import CollapseItem from './component/collapse/CollapseItem'

import Card from './component/card/Card'
import CardHeader from './component/card/CardHeader'
import CardMedia from './component/card/CardMedia'
import CardBody from './component/card/CardBody'
import CardFooter from './component/card/CardFooter'

import PageHeader from './component/page-header/PageHeader'

import Layout from './component/layout/Layout'
import LayoutHeader from './component/layout/LayoutHeader'
import LayoutContent from './component/layout/LayoutContent'
import LayoutFooter from './component/layout/LayoutFooter'
import LayoutSider from './component/layout/LayoutSider'

import Link from './component/link/Link'
import List from './component/list/List'
import ListItem from './component/list/ListItem'

import Empty from './component/empty/Empty'
import Result from './component/result/Result'
import Exception from './component/exception/Exception'
import Divider from './component/divider/Divider'

import Circle from './component/circle/Circle'
import Progress from './component/progress/Progress'
import Tag from './component/tag/Tag'
import Rate from './component/rate/Rate'
import Tabs from './component/tabs/Tabs'
import TabPanel from './component/tabs/TabPanel'
import Dropdown from './component/dropdown/Dropdown'
import DropdownItem from './component/dropdown/DropdownItem'
import DropdownMenu from './component/dropdown/DropdownMenu'

import Thumbnail from './component/thumbnail/Thumbnail'
import Timeline from './component/timeline/Timeline'
import TimelineItem from './component/timeline/TimelineItem'

import Form from './component/form/Form'
import FormItem from './component/form/FormItem'
import Dialog from './component/dialog/Dialog'
import Table from './component/table/Table'

import './component/loading-bar'
import './component/message'
import './component/modal'
import './component/notification'

import { BODY } from './component/constant'

const component = {
  Menu,
  MenuItem,
  MenuGroup,
  SubMenu,
  Icon,
  Text,
  Drawer,

  Breadcrumb,
  BreadcrumbItem,

  Button,
  ButtonGroup,
  Input,
  InputNumber,
  Textarea,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Switch,
  Slider,
  Select,
  Option,
  OptionGroup,
  Pagination,
  DatePicker,
  TimePicker,
  ImagePicker,
  Upload,

  Tooltip,

  Alert,
  Article,
  Spin,
  BackTop,
  Avatar,
  Badge,

  Card,
  CardHeader,
  CardMedia,
  CardBody,
  CardFooter,

  PageHeader,
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutSider,

  Collapse,
  CollapseItem,
  Link,
  List,
  ListItem,
  Empty,
  Result,
  Exception,
  Divider,
  Circle,
  Progress,
  Tag,
  Rate,
  Tabs,
  TabPanel,

  Dropdown,
  DropdownItem,
  DropdownMenu,

  Thumbnail,
  Timeline,
  TimelineItem,
  Form,
  FormItem,
  Dialog,
  Table,
}

/**
 * 版本
 */
export const version = process.env.NODE_VERSION

/**
 * 安装插件
 */
export function install(Yox: any) {
  let loadingbarElement = Yox.dom.createElement('div')
  Yox.dom.prop(loadingbarElement, 'id', '${prefix}loadingbar-wrapper')
  Yox.dom.append(BODY, loadingbarElement)

  let notificationElement = Yox.dom.createElement('div')
  Yox.dom.prop(notificationElement, 'id', '${prefix}notification-wrapper')
  Yox.dom.append(BODY, notificationElement)

  Yox.component(component)
}
