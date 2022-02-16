// css PrimeVue
// import '../assets/sass/primeVue/saga-blue/theme.scss'
// import '../assets/sass/primeVue/bootstrap4-light-blue/theme.css'
// import '../assets/sass/primeVue/arya-blue/theme.css' // puede servir para el dark
// import '../assets/sass/primeVue/luna-blue/theme.css'
// import '../assets/sass/primeVue/md-light-indigo/theme.css'
// import '../assets/sass/primeVue/mdc-light-indigo/theme.scss'

import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
// components
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Dropdown from 'primevue/dropdown'
import ConfirmationService from 'primevue/confirmationservice'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
// import TabView from 'primevue/tabview'
// import TabPanel from 'primevue/tabpanel'
import AutoComplete from 'primevue/autocomplete'
// import Accordion from 'primevue/accordion'
// import AccordionTab from 'primevue/accordiontab'
// import Avatar from 'primevue/avatar'
// import AvatarGroup from 'primevue/avatargroup'
import Badge from 'primevue/badge'
// import BadgeDirective from "primevue/badgedirective"
// import BlockUI from 'primevue/blockui'
// import Breadcrumb from 'primevue/breadcrumb'
import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
// import CascadeSelect from 'primevue/cascadeselect'
// import Carousel from 'primevue/carousel'
import Checkbox from 'primevue/checkbox'
// import Chip from 'primevue/chip'
// import Chips from 'primevue/chips'
// import ColorPicker from 'primevue/colorpicker'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
// import ConfirmDialog from 'primevue/confirmdialog'
import ConfirmPopup from 'primevue/confirmpopup'
// import ConfirmationService from 'primevue/confirmationservice'
import ContextMenu from 'primevue/contextmenu'
import DataTable from 'primevue/datatable'
// import DataView from 'primevue/dataview'
// import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
// import DeferredContent from 'primevue/deferredcontent'
import Fieldset from 'primevue/fieldset'
import FileUpload from 'primevue/fileupload'
// import Galleria from 'primevue/galleria'
// import InlineMessage from 'primevue/inlinemessage'
// import Inplace from 'primevue/inplace'
import InputSwitch from 'primevue/inputswitch'
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputnumber'
// import Knob from 'primevue/knob'
// import Listbox from 'primevue/listbox'
// import MegaMenu from 'primevue/megamenu'
// import Menu from 'primevue/menu'
// import Menubar from 'primevue/menubar'
// import Message from 'primevue/message'
import MultiSelect from 'primevue/multiselect'
// import OrderList from 'primevue/orderlist'
// import OrganizationChart from 'primevue/organizationchart'
// import OverlayPanel from 'primevue/overlaypanel'
import Paginator from 'primevue/paginator'
import Panel from 'primevue/panel'
// import PanelMenu from 'primevue/panelmenu'
// import Password from 'primevue/password'
// import PickList from 'primevue/picklist'
// import ProgressBar from 'primevue/progressbar'
// import ProgressSpinner from 'primevue/progressspinner'
// import Rating from 'primevue/rating'
import RadioButton from 'primevue/radiobutton'
// import Ripple from 'primevue/ripple'
import Row from 'primevue/row'
// import SelectButton from 'primevue/selectbutton'
import ScrollPanel from 'primevue/scrollpanel'
// import ScrollTop from 'primevue/scrolltop'
// import Skeleton from 'primevue/skeleton'
// import Slider from 'primevue/slider'
import Sidebar from 'primevue/sidebar'
import SplitButton from 'primevue/splitbutton'
// import Splitter from 'primevue/splitter'
// import SplitterPanel from 'primevue/splitterpanel'
// import Steps from 'primevue/steps'
import TabMenu from 'primevue/tabmenu'
// import TieredMenu from 'primevue/tieredmenu'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Toolbar from 'primevue/toolbar'
// import Tag from 'primevue/tag'
// import Terminal from 'primevue/terminal'
import Timeline from 'primevue/timeline'
// import ToggleButton from 'primevue/togglebutton'
import Tooltip from 'primevue/tooltip'
// import Tree from 'primevue/tree'
// import TreeSelect from 'primevue/treeselect'
// import TreeTable from 'primevue/treetable'
// import TriStateCheckbox from 'primevue/tristatecheckbox'

const install = app => {
  app.use(PrimeVue, {
    ripple: true,
    locale: {
      startsWith: 'Comienza con',
      contains: 'Contiene',
      notContains: 'No contiene',
      endsWith: 'Termina con',
      equals: 'Igual',
      notEquals: 'Diferente',
      noFilter: 'Sin filtro',
      lt: 'Menos que',
      lte: 'Menos que o igual a',
      gt: 'Mas grande que',
      gte: 'Mayor qué o igual a',
      dateIs: 'La fecha es',
      dateIsNot: 'La fecha no es',
      dateBefore: 'La fecha es anterior a',
      dateAfter: 'La fecha es posterior a',
      clear: 'Limpiar',
      apply: 'Solicitar',
      matchAll: 'Coincidir con todos',
      matchAny: 'Coincidir con cualquiera',
      addRule: 'Agregar regla',
      removeRule: 'Remover regla',
      accept: 'Si',
      reject: 'No',
      choose: 'Escoger',
      upload: 'Subir',
      cancel: 'Cancelar',
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      today: 'Hoy',
      weekHeader: 'Wk',
      firstDayOfWeek: 0,
      dateFormat: 'mm/dd/yy',
      weak: 'Weak',
      medium: 'Medium',
      strong: 'Strong',
      passwordPrompt: 'Enter a password',
      emptyFilterMessage: 'No se han encontrado resultados',
      emptyMessage: 'No hay opciones disponibles'
    }
  })
  app.component('InputText', InputText)
  app.component('Button', Button)
  app.component('Textarea', Textarea)
  app.component('Dropdown', Dropdown)
  // app.component('TabView', TabView)
  // app.component('TabPanel', TabPanel)
  app.component('Dialog', Dialog)
  app.component('Divider', Divider)
// app.component('Accordion', Accordion)
// app.component('AccordionTab', AccordionTab)
  app.component('AutoComplete', AutoComplete)
// app.component('Avatar', Avatar)
// app.component('AvatarGroup', AvatarGroup)
  app.component('Badge', Badge)
// app.component('BlockUI', BlockUI)
// app.component('Breadcrumb', Breadcrumb)
  app.component('Calendar', Calendar)
  app.component('Card', Card)
// app.component('Carousel', Carousel)
// app.component('CascadeSelect', CascadeSelect)
  app.component('Checkbox', Checkbox)
// app.component('Chip', Chip)
// app.component('Chips', Chips)
// app.component('ColorPicker', ColorPicker)
  app.component('Column', Column)
  app.component('ColumnGroup', ColumnGroup)
// app.component('ConfirmDialog', ConfirmDialog)
  app.component('ConfirmPopup', ConfirmPopup)
  app.component('ContextMenu', ContextMenu)
  app.component('DataTable', DataTable)
// app.component('DataView', DataView)
// app.component('DataViewLayoutOptions', DataViewLayoutOptions)
// app.component('DeferredContent', DeferredContent)
  app.component('Fieldset', Fieldset)
  app.component('FileUpload', FileUpload)
// app.component('InlineMessage', InlineMessage)
// app.component('Inplace', Inplace)
  app.component('InputMask', InputMask)
  app.component('InputNumber', InputNumber)
  app.component('InputSwitch', InputSwitch)
// app.component('Galleria', Galleria)
// app.component('Knob', Knob)
// app.component('Listbox', Listbox)
// app.component('MegaMenu', MegaMenu)
// app.component('Menu', Menu)
// app.component('Menubar', Menubar)
// app.component('Message', Message)
  app.component('MultiSelect', MultiSelect)
// app.component('OrderList', OrderList)
// app.component('OrganizationChart', OrganizationChart)
// app.component('OverlayPanel', OverlayPanel)
  app.component('Paginator', Paginator)
  app.component('Panel', Panel)
// app.component('PanelMenu', PanelMenu)
//  app.component('Password', Password)
// app.component('PickList', PickList)
// app.component('ProgressBar', ProgressBar)
// app.component('ProgressSpinner', ProgressSpinner)
  app.component('RadioButton', RadioButton)
// app.component('Rating', Rating)
  app.component('Row', Row)
// app.component('SelectButton', SelectButton)
  app.component('ScrollPanel', ScrollPanel)
// app.component('ScrollTop', ScrollTop)
// app.component('Slider', Slider)
  app.component('Sidebar', Sidebar)
// app.component('Skeleton', Skeleton)
  app.component('SplitButton', SplitButton)
// app.component('Splitter', Splitter)
// app.component('SplitterPanel', SplitterPanel)
// app.component('Steps', Steps)
  app.component('TabMenu', TabMenu)
// app.component('TabView', TabView)
// app.component('TabPanel', TabPanel)
// app.component('Tag', Tag)
// app.component('Terminal', Terminal)
// app.component('TieredMenu', TieredMenu)
  app.component('Timeline', Timeline)
  app.component('Toast', Toast)
  app.component('Toolbar', Toolbar)
// app.component('ToggleButton', ToggleButton)
// app.component('Tree', Tree)
// app.component('TreeSelect', TreeSelect)
// app.component('TreeTable', TreeTable)
// app.component('TriStateCheckbox', TriStateCheckbox)
  app.use(ConfirmationService)
  app.use(ToastService)
  app.directive('tooltip', Tooltip)
}
export { install as default }