require('dotenv-defaults').config()

let instruction_list = [
  {
    type: 'category',
    label: 'General info',
    items: [
      'instruction/general/login',
      'instruction/general/registration',
      'instruction/general/interface'
    ]
  }
]

function client_send_sms() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Send SMS',
      items: [
        'instruction/sms/send_sms/single_sms',
        'instruction/sms/send_sms/bulk_sms',
        'instruction/sms/send_sms/voice_mailing',
        'instruction/sms/send_sms/viber',
        //'instruction/sms/send_sms/rcs_android',
        'instruction/sms/send_sms/sender_id',
        'instruction/sms/send_sms/templates',
        'instruction/sms/send_sms/planner'
      ]
    }
  )
}

function client_reports() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Reports',
      items: [
        'instruction/sms/reports/single_sms_reports',
        'instruction/sms/reports/bulk_sms_reports',
        'instruction/sms/reports/api_reports',
        'instruction/sms/reports/base_cleaning_reports'
      ]
    }
  )
}

function client_finances() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Finances',
      items: [
        'instruction/sms/finances/payment',
        'instruction/sms/finances/balance',
        'instruction/sms/finances/documents',
        'instruction/sms/finances/transfer',
        'instruction/sms/finances/autopay'
      ]
    }
  )
}

function client_statistics() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Statistics',
      items: [
        'instruction/sms/statistics/days',
        'instruction/sms/statistics/operators',
        'instruction/sms/statistics/sender_id_statistics',
        'instruction/sms/statistics/viber_sender_id',
        'instruction/sms/statistics/countries'
      ]
    }
  )
}

function client_incoming() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Incoming SMS',
      items: [
        'instruction/sms/incoming_sms/received_sms',
        'instruction/sms/incoming_sms/tariffs'
      ]
    }
  )
}

function client_address_book() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Address Book',
      items: [
        'instruction/sms/address_book/recipients',
        'instruction/sms/address_book/black_list'
      ]
    }
  )
}

function client_hlr() {
  instruction_list.push(
    {
      type: 'category',
      label: 'HLR',
      items: [
        'instruction/sms/hlr/clear_base',
        'instruction/sms/hlr/hlr'
      ]
    }
  )
}

function client_settings() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Settings',
      items: [
        'instruction/sms/settings/profile',
        'instruction/sms/settings/api_settings',
        'instruction/sms/settings/sender_id_settings',
        'instruction/sms/settings/templates_sms',
        'instruction/sms/settings/templates_viber',
      ]
    }
  )
}

function admin_clients() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Clients',
      items: [
        'instruction/clients/clients/clients'
      ]
    }
  )
}

function admin_reports() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Reports',
      items: [
        'instruction/clients/reports/single_sms_reports_clients',
        'instruction/clients/reports/bulk_sms_reports_clients',
        'instruction/clients/reports/api_reports_clients',
        'instruction/clients/reports/base_cleaning_reports_clients'
      ]
    }
  )
}

function admin_pages() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Pages',
      items: [
        'instruction/clients/pages/pages'
      ]
    }
  )
}

function admin_menu() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Menu',
      items: [
        'instruction/clients/menu/top_menu',
        'instruction/clients/menu/lower_menu'
      ]
    }
  )
}

function admin_finances() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Finances',
      items: [
        'instruction/clients/finances/account',
      ]
    }
  )
}

function admin_statistics() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Statistics',
      items: [
        'instruction/clients/statistics/sender_id_statistics_clients',
        'instruction/clients/statistics/operators_clients',
        'instruction/clients/statistics/customers'
      ]
    }
  )
}

function admin_site() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Site',
      items: [
        'instruction/clients/site/pages_clients',
        'instruction/clients/site/manual',
        'instruction/clients/site/settings'
      ]
    }
  )
}

function admin_mailing() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Mailing',
      items: [
        'instruction/clients/mailing/email_mailing'
      ]
    }
  )
}

function admin_support() {
  instruction_list.push(
    {
      type: 'category',
      label: 'Support',
      items: [
        'instruction/clients/support/support'
      ]
    }
  )
}

function all_eng() {
  instruction_list.push(
    {
      type: 'category',
      label: 'SMS',
      items: [
        {
          type: 'category',
          label: 'Send SMS',
          items: [
            'instruction/sms/send_sms/single_sms',
            'instruction/sms/send_sms/bulk_sms',
            'instruction/sms/send_sms/voice_mailing',
            'instruction/sms/send_sms/viber',
            //'instruction/sms/send_sms/rcs_android',
            'instruction/sms/send_sms/sender_id',
            'instruction/sms/send_sms/templates',
            'instruction/sms/send_sms/planner'
          ]
        },
        {
          type: 'category',
          label: 'Reports',
          items: [
            'instruction/sms/reports/single_sms_reports',
            'instruction/sms/reports/bulk_sms_reports',
            'instruction/sms/reports/api_reports',
            'instruction/sms/reports/base_cleaning_reports'
          ]
        },
        {
          type: 'category',
          label: 'Finances',
          items: [
            'instruction/sms/finances/payment',
            'instruction/sms/finances/balance',
            'instruction/sms/finances/documents',
            'instruction/sms/finances/transfer',
            'instruction/sms/finances/autopay'
          ]
        },
        {
          type: 'category',
          label: 'Statistics',
          items: [
            'instruction/sms/statistics/days',
            'instruction/sms/statistics/operators',
            'instruction/sms/statistics/sender_id_statistics',
            'instruction/sms/statistics/viber_sender_id',
            'instruction/sms/statistics/countries'
          ]
        },
        {
          type: 'category',
          label: 'Address Book',
          items: [
            'instruction/sms/address_book/recipients',
            'instruction/sms/address_book/black_list'
          ]
        },
        {
          type: 'category',
          label: 'HLR',
          items: [
            'instruction/sms/hlr/clear_base',
            'instruction/sms/hlr/hlr'
          ]
        },
        {
          type: 'category',
          label: 'Settings',
          items: [
            'instruction/sms/settings/profile',
            'instruction/sms/settings/api_settings',
            'instruction/sms/settings/sender_id_settings',
            'instruction/sms/settings/templates_sms',
            'instruction/sms/settings/templates_viber'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Clients',
      items: [
        {
          type: 'category',
          label: 'Clients',
          items: [
            'instruction/clients/clients/clients'
          ]
        },
        {
          type: 'category',
          label: 'Reports',
          items: [
            'instruction/clients/reports/single_sms_reports_clients',
            'instruction/clients/reports/bulk_sms_reports_clients',
            'instruction/clients/reports/api_reports_clients',
            'instruction/clients/reports/base_cleaning_reports_clients'
          ]
        },
        {
          type: 'category',
          label: 'Pages',
          items: [
            'instruction/clients/pages/pages'
          ]
        },
        {
          type: 'category',
          label: 'Menu',
          items: [
            'instruction/clients/menu/top_menu',
            'instruction/clients/menu/lower_menu'
          ]
        },
        {
          type: 'category',
          label: 'Finances',
          items: [
            'instruction/clients/finances/account',
          ]
        },
        {
          type: 'category',
          label: 'Statistics',
          items: [
            'instruction/clients/statistics/sender_id_statistics_clients',
            'instruction/clients/statistics/operators_clients',
            'instruction/clients/statistics/customers'
          ]
        },
        {
          type: 'category',
          label: 'Site',
          items: [
            'instruction/clients/site/pages_clients',
            'instruction/clients/site/manual',
            'instruction/clients/site/settings'
          ]
        },
        {
          type: 'category',
          label: 'Mailing',
          items: [
            'instruction/clients/mailing/email_mailing'
          ]
        },
        {
          type: 'category',
          label: 'Support',
          items: [
            'instruction/clients/support/support'
          ]
        }
      ]
    }
  )
}

function all_ukr() {
  instruction_list.push(
    {
      type: 'category',
      label: 'SMS',
      items: [
        {
          type: 'category',
          label: 'Send SMS',
          items: [
            'instruction/sms/send_sms/single_sms',
            'instruction/sms/send_sms/bulk_sms',
            'instruction/sms/send_sms/voice_mailing',
            'instruction/sms/send_sms/viber',
            //'instruction/sms/send_sms/rcs_android',
            'instruction/sms/send_sms/sender_id',
            'instruction/sms/send_sms/templates',
            'instruction/sms/send_sms/planner'
          ]
        },
        {
          type: 'category',
          label: 'Reports',
          items: [
            'instruction/sms/reports/single_sms_reports',
            'instruction/sms/reports/bulk_sms_reports',
            'instruction/sms/reports/api_reports',
            'instruction/sms/reports/base_cleaning_reports'
          ]
        },
        {
          type: 'category',
          label: 'Finances',
          items: [
            'instruction/sms/finances/payment',
            'instruction/sms/finances/balance',
            'instruction/sms/finances/documents',
            'instruction/sms/finances/transfer',
            'instruction/sms/finances/autopay'
          ]
        },
        {
          type: 'category',
          label: 'Statistics',
          items: [
            'instruction/sms/statistics/days',
            'instruction/sms/statistics/operators',
            'instruction/sms/statistics/sender_id_statistics',
            'instruction/sms/statistics/viber_sender_id',
            'instruction/sms/statistics/countries'
          ]
        },
        {
          type: 'category',
          label: 'Incoming SMS',
          items: [
            'instruction/sms/incoming_sms/received_sms',
            'instruction/sms/incoming_sms/tariffs'
          ]
        },
        {
          type: 'category',
          label: 'Address Book',
          items: [
            'instruction/sms/address_book/recipients',
            'instruction/sms/address_book/black_list'
          ]
        },
        {
          type: 'category',
          label: 'HLR',
          items: [
            'instruction/sms/hlr/clear_base',
            'instruction/sms/hlr/hlr'
          ]
        },
        {
          type: 'category',
          label: 'Settings',
          items: [
            'instruction/sms/settings/profile',
            'instruction/sms/settings/api_settings',
            'instruction/sms/settings/sender_id_settings',
            'instruction/sms/settings/templates_sms',
            'instruction/sms/settings/templates_viber'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Clients',
      items: [
        {
          type: 'category',
          label: 'Clients',
          items: [
            'instruction/clients/clients/clients'
          ]
        },
        {
          type: 'category',
          label: 'Reports',
          items: [
            'instruction/clients/reports/single_sms_reports_clients',
            'instruction/clients/reports/bulk_sms_reports_clients',
            'instruction/clients/reports/api_reports_clients',
            'instruction/clients/reports/base_cleaning_reports_clients'
          ]
        },
        {
          type: 'category',
          label: 'Pages',
          items: [
            'instruction/clients/pages/pages'
          ]
        },
        {
          type: 'category',
          label: 'Menu',
          items: [
            'instruction/clients/menu/top_menu',
            'instruction/clients/menu/lower_menu'
          ]
        },
        {
          type: 'category',
          label: 'Finances',
          items: [
            'instruction/clients/finances/account',
          ]
        },
        {
          type: 'category',
          label: 'Statistics',
          items: [
            'instruction/clients/statistics/sender_id_statistics_clients',
            'instruction/clients/statistics/operators_clients',
            'instruction/clients/statistics/customers'
          ]
        },
        {
          type: 'category',
          label: 'Site',
          items: [
            'instruction/clients/site/pages_clients',
            'instruction/clients/site/manual',
            'instruction/clients/site/settings'
          ]
        },
        {
          type: 'category',
          label: 'Mailing',
          items: [
            'instruction/clients/mailing/email_mailing'
          ]
        },
        {
          type: 'category',
          label: 'Support',
          items: [
            'instruction/clients/support/support'
          ]
        }
      ]
    }
  )
}

if (process.env.PSP_DOCS_DOMAIN == 'sms-doc.pages.dev')
{
 all_eng();
}

if (process.env.PSP_DOCS_DOMAIN == 'docs.alphasms.net')
{
  client_send_sms();
  client_reports();
  client_finances();
  client_statistics();
  client_address_book();
  client_hlr();
  client_settings();
}

if (process.env.PSP_DOCS_DOMAIN == 'docs.alphasms.ua')
{
  client_send_sms();
  client_reports();
  client_finances();
  client_statistics();
  client_incoming();
  client_address_book();
  client_hlr();
  client_settings();
}

if (process.env.PSP_DOCS_DOMAIN == 'docs.interconnect.solutions')
{
  client_send_sms();
  client_reports();
  client_finances();
  client_statistics();
  client_address_book();
  client_hlr();
  client_settings();
}

if (process.env.PSP_DOCS_DOMAIN == 'partner.alphasms.ua')
{
  all_ukr();
}

if (process.env.PSP_DOCS_DOMAIN == 'partner.interconnect.solutions')
{
  all_eng();
}


module.exports = {
  instruction_list
};
