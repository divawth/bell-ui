import './css/index.styl'

import Layout from './components/layout/Layout'
import Header from './components/layout/Header'
import Sider from './components/layout/Sider'
import Content from './components/layout/Content'
import Footer from './components/layout/Footer'

import Menu from './components/menu/Menu'
import MenuItem from './components/menu/MenuItem'
import MenuGroup from './components/menu/MenuGroup'
import Submenu from './components/menu/Submenu'

import Row from './components/grid/Row'
import Col from './components/grid/Col'
import Icon from './components/icon/Icon'
import Drawer from './components/drawer/Drawer'

import Breadcrumb from './components/breadcrumb/Breadcrumb'
import BreadcrumbItem from './components/breadcrumb/BreadcrumbItem'

import Button from './components/button/Button'
import ButtonGroup from './components/button/ButtonGroup'
import Input from './components/input/Input'
import InputNumber from './components/input/InputNumber'
import Radio from './components/radio/Radio'
import RadioGroup from './components/radio/RadioGroup'
import Checkbox from './components/checkbox/Checkbox'
import CheckboxGroup from './components/checkbox/CheckboxGroup'
import Switch from './components/switch/Switch'
import Select from './components/select/Select'
import Option from './components/select/Option'
import OptionGroup from './components/select/OptionGroup'

import Page from './components/page/Page'
import Upload from './components/upload/Upload'

import Alert from './components/alert/Alert'
import Spinner from './components/spinner/Spinner'
import BackTop from './components/backtop/BackTop'
import Avatar from './components/avatar/Avatar'
import Badge from './components/badge/Badge'
import DatePicker from './components/datepicker/DatePicker'

import Tooltip from './components/tooltip/Tooltip'
import TooltipItem from './components/tooltip/TooltipItem'

import Collapse from './components/collapse/Collapse'
import Panel from './components/collapse/Panel'

import Card from './components/card/Card'
import CardHeader from './components/card/CardHeader'
import CardMedia from './components/card/CardMedia'
import CardBody from './components/card/CardBody'
import CardActions from './components/card/CardActions'

import List from './components/list/List'
import Item from './components/list/Item'
import Divider from './components/divider/Divider'

import Circle from './components/circle/Circle'
import Progress from './components/progress/Progress'
import Slider from './components/slider/Slider'
import Tag from './components/tag/Tag'
import Rate from './components/rate/Rate'
import Tabs from './components/tabs/Tabs'
import TabPanel from './components/tabs/TabPanel'
import Dropdown from './components/dropdown/Dropdown'
import DropdownItem from './components/dropdown/DropdownItem'
import DropdownMenu from './components/dropdown/DropdownMenu'

import TimePicker from './components/timePicker/TimePicker'
import TimeLine from './components/timeline/TimeLine'
import TimeLineItem from './components/timeline/TimeLineItem'

import Form from './components/form/Form'
import FormItem from './components/form/FormItem'
import Dialog from './components/dialog/Dialog'
import SmallTable from './components/table/SmallTable'
import Table from './components/table/Table'

import Message from './components/message/Message'
import Notice from './components/notice/Notice'
import Msgbox from './components/msgbox/Msgbox'
import LoadingBar from  './components/loadingBar/LoadingBar'
import Anchor from  './components/anchor/Anchor'
import AnchorLink from  './components/anchor/AnchorLink'

const components = {
  Layout,
  Header,
  Sider,
  Content,
  Footer,
  Menu,
  MenuItem,
  MenuGroup,
  Submenu,
  Row,
  Col,
  Icon,
  Drawer,

  Breadcrumb,
  BreadcrumbItem,

  Button,
  ButtonGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Page,
  DatePicker,
  Upload,

  Tooltip,
  TooltipItem,

  Alert,
  Spinner,
  BackTop,
  Avatar,
  Badge,

  Card,
  CardHeader,
  CardMedia,
  CardBody,
  CardActions,

  Collapse,
  Panel,
  List,
  Item,
  Divider,
  Circle,
  Progress,
  Slider,
  Tag,
  Rate,
  Tabs,
  TabPanel,

  Dropdown,
  DropdownItem,
  DropdownMenu,

  TimePicker,
  TimeLine,
  TimeLineItem,
  Form,
  FormItem,
  Dialog,
  SmallTable,
  Table,
  Anchor,
  AnchorLink
}

export const install = function (Yox: any) {
  let loadingbarElement = Yox.dom.createElement('div')
  Yox.dom.prop(loadingbarElement, 'id', '${prefix}loadingbar-wrapper')
  Yox.dom.append(document.body, loadingbarElement)

  let msgboxElement = Yox.dom.createElement('div')
  Yox.dom.prop(msgboxElement, 'id', '${prefix}msgbox-wrapper')
  Yox.dom.append(document.body, msgboxElement)


  let noticeElement = Yox.dom.createElement('div')
  Yox.dom.prop(noticeElement, 'id', '${prefix}notice-wrapper')
  Yox.dom.append(document.body, noticeElement)

  Yox.component(components)
  Yox.prototype.$message = Message
  Yox.prototype.$confirm = Msgbox.Confirm
  Yox.prototype.$alert = Msgbox.Alert
  Yox.prototype.$notice = Notice
  Yox.prototype.$loadingBar = LoadingBar
}

if (typeof window !== 'undefined' && window[ 'Yox' ]) {
  install(window[ 'Yox' ])
}