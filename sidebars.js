require('dotenv-defaults').config()

let instruction_list = [
  {
    type: 'category',
    label: 'General info',
    items: [
      'instruction/general/getting_started',
      'instruction/general/registration',
      'instruction/general/login',
      'instruction/general/interface'
    ]
  }
]

function client_uk(){
  instruction_list.push(
    {
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
    },
    {
      type: 'category',
      label: 'Reports',
      items: [
        'instruction/client/reports/single_sms_reports',
        'instruction/client/reports/bulk_sms_reports',
        'instruction/client/reports/api_reports'
      ]
    },
    {
      type: 'category',
      label: 'Finances',
      items: [
        'instruction/client/finances/payments',
        'instruction/client/finances/balance',
        'instruction/client/finances/documents',
        'instruction/client/finances/transfer',
        'instruction/client/finances/autopay'
      ]
    },
    {
      type: 'category',
      label: 'Statistics',
      items: [
        'instruction/client/statistics/days',
        'instruction/client/statistics/operators',
        'instruction/client/statistics/sender_id_statistics',
        'instruction/client/statistics/viber_sender_id',
        'instruction/client/statistics/countries'
      ]
    },
    {
      type: 'category',
      label: 'Incoming SMS',
      items: [
        'instruction/client/incoming_sms/received_sms',
        'instruction/client/incoming_sms/tariffs'
      ]
    },
    {
      type: 'category',
      label: 'Address Book',
      items: [
        'instruction/client/address_book/recipients',
        'instruction/client/address_book/black_list'
      ]
    },
    {
      type: 'category',
      label: 'HLR',
      items: [
        'instruction/client/hlr/clear_base',
        'instruction/client/hlr/hlr'
      ]
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        'instruction/client/settings/profile',
        'instruction/client/settings/api_settings',
        'instruction/client/settings/sender_id_settings',
        'instruction/client/settings/templates_sms',
        'instruction/client/settings/templates_viber'
      ]
    }
  )
}

function client_en(){
  instruction_list.push(
    {
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
    },
    {
      type: 'category',
      label: 'Reports',
      items: [
        'instruction/client/reports/single_sms_reports',
        'instruction/client/reports/bulk_sms_reports',
        'instruction/client/reports/api_reports'
      ]
    },
    {
      type: 'category',
      label: 'Finances',
      items: [
        'instruction/client/finances/payments',
        'instruction/client/finances/balance',
        'instruction/client/finances/documents',
        'instruction/client/finances/transfer',
        'instruction/client/finances/autopay'
      ]
    },
    {
      type: 'category',
      label: 'Statistics',
      items: [
        'instruction/client/statistics/days',
        'instruction/client/statistics/operators',
        'instruction/client/statistics/sender_id_statistics',
        'instruction/client/statistics/viber_sender_id',
        'instruction/client/statistics/countries'
      ]
    },
    {
      type: 'category',
      label: 'Address Book',
      items: [
        'instruction/client/address_book/recipients',
        'instruction/client/address_book/black_list'
      ]
    },
    {
      type: 'category',
      label: 'HLR',
      items: [
        'instruction/client/hlr/clear_base',
        'instruction/client/hlr/hlr'
      ]
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        'instruction/client/settings/profile',
        'instruction/client/settings/api_settings',
        'instruction/client/settings/sender_id_settings',
        'instruction/client/settings/templates_sms',
        'instruction/client/settings/templates_viber'
      ]
    }
  )
}

function admin(){
  instruction_list.push(
    {
      type: 'category',
      label: 'Clients',
      items: [
        'instruction/admin/clients/clients',
        'instruction/admin/clients/visits'
      ]
    },
    {
      type: 'category',
      label: 'Reports',
      items: [
        'instruction/admin/reports/single_sms_reports',
        'instruction/admin/reports/bulk_sms_reports',
        'instruction/admin/reports/api_reports'
      ]
    },
    {
      type: 'category',
      label: 'Pages',
      items: [
        'instruction/admin/pages/pages'
      ]
    },
    {
      type: 'category',
      label: 'Menu',
      items: [
        'instruction/admin/menu/top_menu',
        'instruction/admin/menu/lower_menu'
      ]
    },
    {
      type: 'category',
      label: 'Finances',
      items: [
        'instruction/admin/finances/account',
      ]
    },
    {
      type: 'category',
      label: 'Statistics',
      items: [
        'instruction/admin/statistics/sender_id_statistics',
        'instruction/admin/statistics/operators',
        'instruction/admin/statistics/customers'
      ]
    },
    {
      type: 'category',
      label: 'Site',
      items: [
        'instruction/admin/site/pages',
        'instruction/admin/site/manual',
        'instruction/admin/site/settings'
      ]
    },
    {
      type: 'category',
      label: 'Mailing',
      items: [
        'instruction/admin/mailing/email_mailing'
      ]
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        'instruction/admin/support/support'
      ]
    }
  )
}

function client_admin(){
  instruction_list.push(
    {
      type: 'category',
      label: 'For clients',
      items: [
        {
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
        },
        {
          type: 'category',
          label: 'Reports',
          items: [
            'instruction/client/reports/single_sms_reports',
            'instruction/client/reports/bulk_sms_reports',
            'instruction/client/reports/api_reports'
          ]
        },
        {
          type: 'category',
          label: 'Finances',
          items: [
            'instruction/client/finances/payments',
            'instruction/client/finances/balance',
            'instruction/client/finances/documents',
            'instruction/client/finances/transfer',
            'instruction/client/finances/autopay'
          ]
        },
        {
          type: 'category',
          label: 'Statistics',
          items: [
            'instruction/client/statistics/days',
            'instruction/client/statistics/operators',
            'instruction/client/statistics/sender_id_statistics',
            'instruction/client/statistics/viber_sender_id',
            'instruction/client/statistics/countries'
          ]
        },
        {
          type: 'category',
          label: 'Incoming SMS',
          items: [
            'instruction/client/incoming_sms/received_sms',
            'instruction/client/incoming_sms/tariffs'
          ]
        },
        {
          type: 'category',
          label: 'Address Book',
          items: [
            'instruction/client/address_book/recipients',
            'instruction/client/address_book/black_list'
          ]
        },
        {
          type: 'category',
          label: 'HLR',
          items: [
            'instruction/client/hlr/clear_base',
            'instruction/client/hlr/hlr'
          ]
        },
        {
          type: 'category',
          label: 'Settings',
          items: [
            'instruction/client/settings/profile',
            'instruction/client/settings/api_settings',
            'instruction/client/settings/sender_id_settings',
            'instruction/client/settings/templates_sms',
            'instruction/client/settings/templates_viber'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Admin module',
      items: [
        {
          type: 'category',
          label: 'Clients',
          items: [
            'instruction/admin/clients/clients',
            'instruction/admin/clients/visits'
          ]
        },
        {
          type: 'category',
          label: 'Reports',
          items: [
            'instruction/admin/reports/single_sms_reports',
            'instruction/admin/reports/bulk_sms_reports',
            'instruction/admin/reports/api_reports'
          ]
        },
        {
          type: 'category',
          label: 'Pages',
          items: [
            'instruction/admin/pages/pages'
          ]
        },
        {
          type: 'category',
          label: 'Menu',
          items: [
            'instruction/admin/menu/top_menu',
            'instruction/admin/menu/lower_menu'
          ]
        },
        {
          type: 'category',
          label: 'Finances',
          items: [
            'instruction/admin/finances/account',
          ]
        },
        {
          type: 'category',
          label: 'Statistics',
          items: [
            'instruction/admin/statistics/sender_id_statistics',
            'instruction/admin/statistics/operators',
            'instruction/admin/statistics/customers'
          ]
        },
        {
          type: 'category',
          label: 'Site',
          items: [
            'instruction/admin/site/pages',
            'instruction/admin/site/manual',
            'instruction/admin/site/settings'
          ]
        },
        {
          type: 'category',
          label: 'Mailing',
          items: [
            'instruction/admin/mailing/email_mailing'
          ]
        },
        {
          type: 'category',
          label: 'Support',
          items: [
            'instruction/admin/support/support'
          ]
        }
      ]
    }
  )
}


if (process.env.PSP_DOCS_DOMAIN == 'sms-doc.pages.dev' || process.env.PSP_DOCS_DOMAIN == 'partner.alphasms.ua' || process.env.PSP_DOCS_DOMAIN == 'partner.interconnect.solutions')
{
  client_admin();
}

if (process.env.PSP_DOCS_DOMAIN == 'docs.alphasms.net' || process.env.PSP_DOCS_DOMAIN == 'docs.interconnect.solutions')
{
  client_en();
}

if (process.env.PSP_DOCS_DOMAIN == 'docs.alphasms.ua')
{
  client_uk();
}

module.exports = {
  instruction_list
};
