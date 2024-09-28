let docs = [
  {
    type: 'category',
    label: 'General info',
    items: [
      'general/getting_started',
      'general/registration',
      'general/login',
      'general/interface',
      'general/create_sender_id'
    ]
  }
]

let api = [
  'api/api_methods',
  {
    type: 'category',
    label: 'JSON API',
    items: [
      'api/json/balance',
      'api/json/send_sms'
    ]
  }
]

let admin = []
let client = []

function Admin_Docs() {
  docs.push({
    type: 'category',
    label: 'Admin module',
    items: admin
  })
}

function Client_Docs() {
  docs.push({
    type: 'category',
    label: 'For clients',
    items: client
  })
}

// Client > Send SMS
function ClientSendSMS(section){
  section.push({
    type: 'category',
      label: 'Send SMS',
      items: [
        'client/send_sms/single_sms',
        'client/send_sms/bulk_sms',
        'client/send_sms/voice_mailing',
        'client/send_sms/viber',
        'client/send_sms/rcs_android',
        'client/send_sms/sender_id',
        'client/send_sms/templates',
        'client/send_sms/planner'
      ]
  })
}

// Client > Reports
function ClientReports(section){
  section.push({
    type: 'category',
    label: 'Reports',
    items: [
      'client/reports/single_sms_reports',
      'client/reports/bulk_sms_reports',
      'client/reports/api_reports'
    ]
  })
}

// Client > Finances
function ClientFinances(section){
  section.push({
    type: 'category',
    label: 'Finances',
    items: [
      'client/finances/payments',
      'client/finances/balance',
      'client/finances/documents',
      'client/finances/transfer',
      'client/finances/autopay'
    ]
  })
}

// Client > Statistics
function ClientStatistics(section){
  section.push({
    type: 'category',
    label: 'Statistics',
    items: [
      'client/statistics/days',
      'client/statistics/operators',
      'client/statistics/sender_id_statistics',
      'client/statistics/viber_sender_id',
      'client/statistics/countries'
    ]
  })
}

// Client > Incoming SMS
function ClientIncomingSMS(section){
  section.push({
    type: 'category',
    label: 'Incoming SMS',
    items: [
      'client/incoming_sms/received_sms',
      'client/incoming_sms/tariffs'
    ]
  })
}

// Client > Address Book
function ClientAddressBook(section){
  section.push({
    type: 'category',
    label: 'Address Book',
    items: [
      'client/address_book/recipients',
      'client/address_book/black_list'
    ]
  })
}

// Client > HLR
function ClientHLR(section){
  section.push({
    type: 'category',
    label: 'HLR',
    items: [
      'client/hlr/clear_base',
      'client/hlr/hlr'
    ]
  })
}

// Client > Settings
function ClientSettings(section){
  section.push({
    type: 'category',
    label: 'Settings',
    items: [
      'client/settings/profile',
      'client/settings/api_settings',
      'client/settings/sender_id_settings',
      'client/settings/templates_sms',
      'client/settings/templates_viber'
    ]
  })
}

// Admin > Clients
function AdminClients(section){
  section.push({
    type: 'category',
    label: 'Clients',
    items: [
      'admin/clients/clients',
      'admin/clients/visits'
    ]
  })
}

// Admin > Reports
function AdminReports(section){
  section.push({
    type: 'category',
    label: 'Reports',
    items: [
      'admin/reports/single_sms_reports',
      'admin/reports/bulk_sms_reports',
      'admin/reports/api_reports'
    ]
  })
}

// Admin > Pages
function AdminPages(section){
  section.push({
    type: 'category',
    label: 'Pages',
    items: [
      'admin/pages/pages'
    ]
  })
}

// Admin > Menu
function AdminMenu(section){
  section.push({
    type: 'category',
    label: 'Menu',
    items: [
      'admin/menu/top_menu',
      'admin/menu/lower_menu'
    ]
  })
}

// Admin > Finances
function AdminFinances(section){
  section.push({
    type: 'category',
    label: 'Finances',
    items: [
      'admin/finances/account',
    ]
  })
}

// Admin > Statistics
function AdminStatistics(section){
  section.push({
    type: 'category',
    label: 'Statistics',
    items: [
      'admin/statistics/sender_id_statistics',
      'admin/statistics/operators',
      'admin/statistics/customers'
    ]
  })
}

// Admin > Site
function AdminSite(section){
  section.push({
    type: 'category',
    label: 'Site',
    items: [
      'admin/site/pages',
      'admin/site/manual',
      'admin/site/settings'
    ]
  })
}

// Admin > Mailing
function AdminMailing(section){
  section.push({
    type: 'category',
    label: 'Mailing',
    items: [
      'admin/mailing/email_mailing'
    ]
  })
}

// Admin > Support
function AdminSupport(section){
  section.push({
    type: 'category',
    label: 'Support',
    items: [
      'admin/support/support'
    ]
  })
}

if (process.env.PSP_DOCS_DOMAIN == 'sms-doc.pages.dev' || process.env.PSP_DOCS_DOMAIN == 'partner.alphasms.ua' || process.env.PSP_DOCS_DOMAIN == 'partner.interconnect.solutions')
{
  ClientSendSMS(client);
  ClientReports(client);
  ClientFinances(client);
  ClientStatistics(client);
  ClientIncomingSMS(client);
  ClientAddressBook(client);
  ClientHLR(client);
  ClientSettings(client);

  AdminClients(admin);
  AdminReports(admin);
  AdminPages(admin);
  AdminMenu(admin);
  AdminFinances(admin);
  AdminStatistics(admin);
  AdminSite(admin);
  AdminMailing(admin);
  AdminSupport(admin);

  Client_Docs();
  Admin_Docs();
}

if (process.env.PSP_DOCS_DOMAIN == 'docs.alphasms.net' || process.env.PSP_DOCS_DOMAIN == 'docs.interconnect.solutions' || process.env.PSP_DOCS_DOMAIN == 'docs.blackbox.business')
{
  ClientSendSMS(client);
  ClientReports(client);
  ClientFinances(client);
  ClientStatistics(client);
  ClientAddressBook(client);
  ClientHLR(client);
  ClientSettings(client);

  Client_Docs();
}
  
if (process.env.PSP_DOCS_DOMAIN == 'docs.alphasms.ua')
{
  ClientSendSMS(client);
  ClientReports(client);
  ClientFinances(client);
  ClientStatistics(client);
  ClientIncomingSMS(client);
  ClientAddressBook(client);
  ClientHLR(client);
  ClientSettings(client);

  Client_Docs();
}

module.exports = {
  docs,
  api
}
