import './index.styl'

import Menu from './components/menu/Menu'
import MenuItem from './components/menu/MenuItem'
import MenuGroup from './components/menu/MenuGroup'
import Submenu from './components/menu/Submenu'

import Icon from './components/icon/Icon'
import Text from './components/text/Text'
import Drawer from './components/drawer/Drawer'

import Breadcrumb from './components/breadcrumb/Breadcrumb'
import BreadcrumbItem from './components/breadcrumb/BreadcrumbItem'

import Button from './components/button/Button'
import ButtonGroup from './components/button/ButtonGroup'
import Input from './components/input/Input'
import InputNumber from './components/input-number/InputNumber'
import Textarea from './components/textarea/Textarea'
import Radio from './components/radio/Radio'
import RadioGroup from './components/radio/RadioGroup'
import Checkbox from './components/checkbox/Checkbox'
import CheckboxGroup from './components/checkbox/CheckboxGroup'
import Switch from './components/switch/Switch'
import Slider from './components/slider/Slider'
import Select from './components/select/Select'
import Option from './components/select/Option'
import OptionGroup from './components/select/OptionGroup'

import Pagination from './components/pagination/Pagination'
import Upload from './components/upload/Upload'

import Alert from './components/alert/Alert'
import Article from './components/article/Article'
import Spin from './components/spin/Spin'
import BackTop from './components/backtop/BackTop'
import Avatar from './components/avatar/Avatar'
import Badge from './components/badge/Badge'
import DatePicker from './components/datepicker/DatePicker'

import Tooltip from './components/tooltip/Tooltip'

import Collapse from './components/collapse/Collapse'
import CollapseItem from './components/collapse/CollapseItem'

import Card from './components/card/Card'
import CardHeader from './components/card/CardHeader'
import CardMedia from './components/card/CardMedia'
import CardBody from './components/card/CardBody'
import CardFooter from './components/card/CardFooter'

import PageHeader from './components/page-header/PageHeader'

import Layout from './components/layout/Layout'
import LayoutHeader from './components/layout/LayoutHeader'
import LayoutContent from './components/layout/LayoutContent'
import LayoutFooter from './components/layout/LayoutFooter'
import LayoutSider from './components/layout/LayoutSider'

import Link from './components/link/Link'
import List from './components/list/List'
import ListItem from './components/list/ListItem'

import Empty from './components/empty/Empty'
import Result from './components/result/Result'
import Exception from './components/exception/Exception'
import Divider from './components/divider/Divider'

import Circle from './components/circle/Circle'
import Progress from './components/progress/Progress'
import Tag from './components/tag/Tag'
import Rate from './components/rate/Rate'
import Tabs from './components/tabs/Tabs'
import TabPanel from './components/tabs/TabPanel'
import Dropdown from './components/dropdown/Dropdown'
import DropdownItem from './components/dropdown/DropdownItem'
import DropdownMenu from './components/dropdown/DropdownMenu'

import Thumbnail from './components/thumbnail/Thumbnail'
import Timeline from './components/timeline/Timeline'
import TimelineItem from './components/timeline/TimelineItem'

import Form from './components/form/Form'
import FormItem from './components/form/FormItem'
import Dialog from './components/dialog/Dialog'
import Table from './components/table/Table'

import Message from './components/message/base'
import Notification from './components/notification/base'
import Modal from './components/modal/base'
import LoadingBar from  './components/loading-bar/base'

import { BODY } from './components/constant'

const components = {
  Menu,
  MenuItem,
  MenuGroup,
  Submenu,
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

export const install = function (Yox: any) {
  let loadingbarElement = Yox.dom.createElement('div')
  Yox.dom.prop(loadingbarElement, 'id', '${prefix}loadingbar-wrapper')
  Yox.dom.append(BODY, loadingbarElement)

  let notificationElement = Yox.dom.createElement('div')
  Yox.dom.prop(notificationElement, 'id', '${prefix}notification-wrapper')
  Yox.dom.append(BODY, notificationElement)

  Yox.component(components)
  Yox.prototype.$message = Message
  Yox.prototype.$confirm = Modal.addConfirm
  Yox.prototype.$alert = Modal.addAlert
  Yox.prototype.$notification = Notification
  Yox.prototype.$loadingBar = LoadingBar
}

if (typeof window !== 'undefined' && window[ 'Yox' ]) {
  install(window[ 'Yox' ])
}