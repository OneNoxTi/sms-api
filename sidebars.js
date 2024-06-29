let docs = [
  {
    type: 'category',
    label: 'General info',
    items: [
      'instruction/general/getting_started',
      'instruction/general/registration',
      'instruction/general/login',
      'instruction/general/interface',
      'instruction/general/create_sender_id'
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
        'instruction/client/send_sms/single_sms',
        'instruction/client/send_sms/bulk_sms',
        'instruction/client/send_sms/voice_mailing',
        'instruction/client/send_sms/viber',
        'instruction/client/send_sms/rcs_android',
        'instruction/client/send_sms/sender_id',
        'instruction/client/send_sms/templates',
        'instruction/client/send_sms/planner'
      ]
  })
}

// Client > Reports
function ClientReports(section){
  section.push({
    type: 'category',
    label: 'Reports',
    items: [
      'instruction/client/reports/single_sms_reports',
      'instruction/client/reports/bulk_sms_reports',
      'instruction/client/reports/api_reports'
    ]
  })
}

// Client > Finances
function ClientFinances(section){
  section.push({
    type: 'category',
    label: 'Finances',
    items: [
      'instruction/client/finances/payments',
      'instruction/client/finances/balance',
      'instruction/client/finances/documents',
      'instruction/client/finances/transfer',
      'instruction/client/finances/autopay'
    ]
  })
}

// Client > Statistics
function ClientStatistics(section){
  section.push({
    type: 'category',
    label: 'Statistics',
    items: [
      'instruction/client/statistics/days',
      'instruction/client/statistics/operators',
      'instruction/client/statistics/sender_id_statistics',
      'instruction/client/statistics/viber_sender_id',
      'instruction/client/statistics/countries'
    ]
  })
}

// Client > Incoming SMS
function ClientIncomingSMS(section){
  section.push({
    type: 'category',
    label: 'Incoming SMS',
    items: [
      'instruction/client/incoming_sms/received_sms',
      'instruction/client/incoming_sms/tariffs'
    ]
  })
}

// Client > Address Book
function ClientAddressBook(section){
  section.push({
    type: 'category',
    label: 'Address Book',
    items: [
      'instruction/client/address_book/recipients',
      'instruction/client/address_book/black_list'
    ]
  })
}

// Client > HLR
function ClientHLR(section){
  section.push({
    type: 'category',
    label: 'HLR',
    items: [
      'instruction/client/hlr/clear_base',
      'instruction/client/hlr/hlr'
    ]
  })
}

// Client > Settings
function ClientSettings(section){
  section.push({
    type: 'category',
    label: 'Settings',
    items: [
      'instruction/client/settings/profile',
      'instruction/client/settings/api_settings',
      'instruction/client/settings/sender_id_settings',
      'instruction/client/settings/templates_sms',
      'instruction/client/settings/templates_viber'
    ]
  })
}

// Admin > Clients
function AdminClients(section){
  section.push({
    type: 'category',
    label: 'Clients',
    items: [
      'instruction/admin/clients/clients',
      'instruction/admin/clients/visits'
    ]
  })
}

// Admin > Reports
function AdminReports(section){
  section.push({
    type: 'category',
    label: 'Reports',
    items: [
      'instruction/admin/reports/single_sms_reports',
      'instruction/admin/reports/bulk_sms_reports',
      'instruction/admin/reports/api_reports'
    ]
  })
}

// Admin > Pages
function AdminPages(section){
  section.push({
    type: 'category',
    label: 'Pages',
    items: [
      'instruction/admin/pages/pages'
    ]
  })
}

// Admin > Menu
function AdminMenu(section){
  section.push({
    type: 'category',
    label: 'Menu',
    items: [
      'instruction/admin/menu/top_menu',
      'instruction/admin/menu/lower_menu'
    ]
  })
}

// Admin > Finances
function AdminFinances(section){
  section.push({
    type: 'category',
    label: 'Finances',
    items: [
      'instruction/admin/finances/account',
    ]
  })
}

// Admin > Statistics
function AdminStatistics(section){
  section.push({
    type: 'category',
    label: 'Statistics',
    items: [
      'instruction/admin/statistics/sender_id_statistics',
      'instruction/admin/statistics/operators',
      'instruction/admin/statistics/customers'
    ]
  })
}

// Admin > Site
function AdminSite(section){
  section.push({
    type: 'category',
    label: 'Site',
    items: [
      'instruction/admin/site/pages',
      'instruction/admin/site/manual',
      'instruction/admin/site/settings'
    ]
  })
}

// Admin > Mailing
function AdminMailing(section){
  section.push({
    type: 'category',
    label: 'Mailing',
    items: [
      'instruction/admin/mailing/email_mailing'
    ]
  })
}

// Admin > Support
function AdminSupport(section){
  section.push({
    type: 'category',
    label: 'Support',
    items: [
      'instruction/admin/support/support'
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

if (process.env.PSP_DOCS_DOMAIN == 'docs.alphasms.net' || process.env.PSP_DOCS_DOMAIN == 'docs.interconnect.solutions')
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
}
